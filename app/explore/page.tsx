"use client"

import { useState, useEffect } from "react"
import { ExplorationMap } from "@/components/exploration/exploration-map"
import { ExplorationHeader } from "@/components/exploration/exploration-header"
import { LeaderboardModal } from "@/components/exploration/leaderboard-modal"
import { CompletionEasterEgg } from "@/components/exploration/completion-easter-egg"
import { getUserProgress } from "@/lib/utils/progress"

export default function ExplorePage() {
  const [showLeaderboard, setShowLeaderboard] = useState(false)
  const [userPoints, setUserPoints] = useState(0)
  const [userDiscovered, setUserDiscovered] = useState(0)

  useEffect(() => {
    const updateStats = () => {
      const progress = getUserProgress()
      setUserPoints(progress.points)
      setUserDiscovered(progress.discoveredPlaces.length)
    }

    updateStats()
    const interval = setInterval(updateStats, 1000)

    const handleStorageChange = () => updateStats()
    window.addEventListener("storage", handleStorageChange)

    return () => {
      clearInterval(interval)
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  return (
    <div className="relative">
      <ExplorationHeader onShowLeaderboard={() => setShowLeaderboard(true)} />
      <div>
        <ExplorationMap />
      </div>
      <LeaderboardModal
        isOpen={showLeaderboard}
        onClose={() => setShowLeaderboard(false)}
        userPoints={userPoints}
        userDiscovered={userDiscovered}
      />
      {/* Easter Egg: Celebration when all 8 places discovered! */}
      <CompletionEasterEgg />
    </div>
  )
}
