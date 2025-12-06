"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Trophy, Star, Share2 } from "lucide-react"
import { getUserProgress } from "@/lib/utils/progress"
import {
  playCompletionSound,
  triggerHapticFeedback,
  triggerConfetti,
  shareResults,
} from "@/lib/utils/effects"

export function CompletionEasterEgg() {
  const [showModal, setShowModal] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check completion status every second
    const interval = setInterval(() => {
      const progress = getUserProgress()

      // Easter egg: All 8 places discovered!
      if (progress.discoveredPlaces.length === 8 && !hasShown && !showModal) {
        setShowModal(true)
        setHasShown(true)

        // Epic celebration!
        playCompletionSound()
        triggerHapticFeedback("complete")

        // Confetti after a short delay
        setTimeout(() => {
          triggerConfetti()
        }, 300)
      }
    }, 1000)

    // Listen for storage changes (from other tabs)
    const handleStorageChange = () => {
      const progress = getUserProgress()
      if (progress.discoveredPlaces.length === 8 && !hasShown && !showModal) {
        setShowModal(true)
        setHasShown(true)
        playCompletionSound()
        triggerHapticFeedback("complete")
        setTimeout(() => triggerConfetti(), 300)
      }
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      clearInterval(interval)
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [hasShown, showModal])

  const progress = getUserProgress()

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: "hsl(var(--background))" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className="relative p-8 text-center bg-gradient-to-br from-primary/20 via-primary/10 to-background border-b">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", damping: 15 }}
                className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg"
              >
                <Trophy className="w-12 h-12 text-white" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-2">🎉 Gratulacje! 🎉</h2>
                <p className="text-lg text-muted-foreground">
                  Odkryłeś wszystkie miejsca!
                </p>
              </motion.div>

              {/* Floating stars */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [0, -50],
                  }}
                  transition={{
                    delay: 0.5 + i * 0.1,
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="absolute"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: "20%",
                  }}
                >
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </motion.div>
              ))}
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-3xl font-bold text-primary mb-1">
                    {progress.points}
                  </p>
                  <p className="text-sm text-muted-foreground">Punktów</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-3xl font-bold text-primary mb-1">8/8</p>
                  <p className="text-sm text-muted-foreground">Miejsc</p>
                </div>
              </div>

              {/* Easter Egg Bonus */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-4 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30"
              >
                <div className="flex items-center gap-3">
                  <div className="text-4xl">🏆</div>
                  <div>
                    <p className="font-bold text-lg">Easter Egg Bonus!</p>
                    <p className="text-sm text-muted-foreground">
                      Jesteś mistrzem historii Bydgoszczy!
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Message */}
              <div className="text-center space-y-2">
                <p className="text-foreground leading-relaxed">
                  Poznałeś wszystkie 8 miejsc historycznych Bydgoszczy! Jesteś
                  prawdziwym eksplorerem miasta. 🗺️
                </p>
                <p className="text-sm text-muted-foreground">
                  Podziel się swoim osiągnięciem ze znajomymi!
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={() => {
                    shareResults(
                      progress.points,
                      progress.discoveredPlaces.length,
                      8
                    )
                  }}
                  variant="outline"
                  className="flex-1"
                  size="lg"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Udostępnij
                </Button>
                <Button
                  onClick={() => setShowModal(false)}
                  className="flex-1"
                  size="lg"
                >
                  Zamknij
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
