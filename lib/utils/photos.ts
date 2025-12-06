// Photo management utilities for user-taken photos

const STORAGE_PREFIX = "sciezki-photo-"

/**
 * Compress and resize image to optimize storage
 */
export function compressImage(
  file: File,
  maxWidth: number = 800,
  maxHeight: number = 600,
  quality: number = 0.7
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = (e) => {
      const img = new Image()

      img.onload = () => {
        // Calculate new dimensions maintaining aspect ratio
        let width = img.width
        let height = img.height

        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width
            width = maxWidth
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height
            height = maxHeight
          }
        }

        // Create canvas and compress
        const canvas = document.createElement("canvas")
        canvas.width = width
        canvas.height = height

        const ctx = canvas.getContext("2d")
        if (!ctx) {
          reject(new Error("Could not get canvas context"))
          return
        }

        ctx.drawImage(img, 0, 0, width, height)

        // Convert to base64 with compression
        const base64 = canvas.toDataURL("image/jpeg", quality)
        resolve(base64)
      }

      img.onerror = () => reject(new Error("Failed to load image"))
      img.src = e.target?.result as string
    }

    reader.onerror = () => reject(new Error("Failed to read file"))
    reader.readAsDataURL(file)
  })
}

/**
 * Save photo for a specific place
 */
export function savePhoto(placeId: string, base64Image: string): void {
  if (typeof window === "undefined") return

  try {
    const photoData = {
      image: base64Image,
      timestamp: Date.now(),
      placeId: placeId,
    }

    localStorage.setItem(
      `${STORAGE_PREFIX}${placeId}`,
      JSON.stringify(photoData)
    )
  } catch (error) {
    console.error("Failed to save photo:", error)
    throw new Error("Nie udało się zapisać zdjęcia. Brak miejsca w pamięci?")
  }
}

/**
 * Get photo for a specific place
 */
export function getPhoto(placeId: string): string | null {
  if (typeof window === "undefined") return null

  try {
    const data = localStorage.getItem(`${STORAGE_PREFIX}${placeId}`)
    if (!data) return null

    const photoData = JSON.parse(data)
    return photoData.image
  } catch (error) {
    console.error("Failed to get photo:", error)
    return null
  }
}

/**
 * Get all photos with metadata
 */
export function getAllPhotos(): Array<{
  placeId: string
  image: string
  timestamp: number
}> {
  if (typeof window === "undefined") return []

  const photos: Array<{
    placeId: string
    image: string
    timestamp: number
  }> = []

  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith(STORAGE_PREFIX)) {
        const data = localStorage.getItem(key)
        if (data) {
          const photoData = JSON.parse(data)
          photos.push(photoData)
        }
      }
    }

    // Sort by timestamp (newest first)
    return photos.sort((a, b) => b.timestamp - a.timestamp)
  } catch (error) {
    console.error("Failed to get all photos:", error)
    return []
  }
}

/**
 * Delete photo for a specific place
 */
export function deletePhoto(placeId: string): void {
  if (typeof window === "undefined") return

  try {
    localStorage.removeItem(`${STORAGE_PREFIX}${placeId}`)
  } catch (error) {
    console.error("Failed to delete photo:", error)
  }
}

/**
 * Check if place has a photo
 */
export function hasPhoto(placeId: string): boolean {
  return getPhoto(placeId) !== null
}
