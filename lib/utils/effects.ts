// Sound and haptic feedback utilities

/**
 * Play a success sound when discovering a place
 */
export function playSuccessSound() {
  if (typeof window === "undefined") return

  // Use Web Audio API for a pleasant discovery sound
  const audioContext = new (window.AudioContext ||
    (window as any).webkitAudioContext)()

  // Create a pleasant chime sound (C-E-G chord)
  const notes = [523.25, 659.25, 783.99] // C5, E5, G5
  const now = audioContext.currentTime

  notes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.value = frequency
    oscillator.type = "sine"

    // Envelope: quick attack, sustain, release
    gainNode.gain.setValueAtTime(0, now + index * 0.1)
    gainNode.gain.linearRampToValueAtTime(0.3, now + index * 0.1 + 0.05)
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + index * 0.1 + 0.5)

    oscillator.start(now + index * 0.1)
    oscillator.stop(now + index * 0.1 + 0.5)
  })
}

/**
 * Play completion sound (all 15 places discovered)
 */
export function playCompletionSound() {
  if (typeof window === "undefined") return

  const audioContext = new (window.AudioContext ||
    (window as any).webkitAudioContext)()

  // Victory fanfare: C-E-G-C (octave up)
  const notes = [523.25, 659.25, 783.99, 1046.5]
  const now = audioContext.currentTime

  notes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.value = frequency
    oscillator.type = "sine"

    gainNode.gain.setValueAtTime(0, now + index * 0.15)
    gainNode.gain.linearRampToValueAtTime(0.4, now + index * 0.15 + 0.05)
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + index * 0.15 + 0.6)

    oscillator.start(now + index * 0.15)
    oscillator.stop(now + index * 0.15 + 0.6)
  })
}

/**
 * Trigger haptic feedback (vibration)
 */
export function triggerHapticFeedback(
  pattern: "success" | "complete" = "success"
) {
  if (typeof window === "undefined" || !navigator.vibrate) return

  if (pattern === "success") {
    // Short single vibration for discovery
    navigator.vibrate(50)
  } else if (pattern === "complete") {
    // Pattern for completion: short-pause-short-pause-long
    navigator.vibrate([50, 100, 50, 100, 200])
  }
}

/**
 * Confetti animation using canvas
 */
export function triggerConfetti() {
  if (typeof window === "undefined") return

  // Create canvas element
  const canvas = document.createElement("canvas")
  canvas.style.position = "fixed"
  canvas.style.top = "0"
  canvas.style.left = "0"
  canvas.style.width = "100%"
  canvas.style.height = "100%"
  canvas.style.pointerEvents = "none"
  canvas.style.zIndex = "9999"
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  document.body.appendChild(canvas)

  const ctx = canvas.getContext("2d")
  if (!ctx) return

  // Confetti particles
  const particles: Array<{
    x: number
    y: number
    vx: number
    vy: number
    color: string
    size: number
    rotation: number
    rotationSpeed: number
  }> = []

  const colors = ["#E10002", "#FFD700", "#FF69B4", "#00CED1", "#FF6347"]

  // Create confetti particles
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: -20,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.2,
    })
  }

  let animationFrame: number

  function animate() {
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    let hasActiveParticles = false

    particles.forEach((particle) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.vy += 0.1 // Gravity
      particle.rotation += particle.rotationSpeed

      if (particle.y < canvas.height + 20) {
        hasActiveParticles = true
      }

      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate(particle.rotation)
      ctx.fillStyle = particle.color
      ctx.fillRect(
        -particle.size / 2,
        -particle.size / 2,
        particle.size,
        particle.size
      )
      ctx.restore()
    })

    if (hasActiveParticles) {
      animationFrame = requestAnimationFrame(animate)
    } else {
      // Clean up
      cancelAnimationFrame(animationFrame)
      document.body.removeChild(canvas)
    }
  }

  animate()
}

/**
 * Share results to social media
 */
export function shareResults(
  points: number,
  discovered: number,
  total: number
) {
  const text = `🏆 Ukończyłem ${discovered}/${total} miejsc w Ścieżkach Pamięci Bydgoszczy i zdobyłem ${points} punktów! 🗺️\n\nOdkryj historię miasta w gamifikowanej formie!`
  const url = window.location.origin

  // Check if Web Share API is available (mobile)
  if (navigator.share) {
    navigator
      .share({
        title: "Bydgoszcz - Ścieżki Pamięci",
        text: text,
        url: url,
      })
      .catch((err) => console.log("Share cancelled", err))
  } else {
    // Fallback: copy to clipboard
    const fullText = `${text}\n${url}`
    navigator.clipboard.writeText(fullText).then(() => {
      alert("✅ Skopiowano do schowka! Wklej do swoich social media.")
    })
  }
}
