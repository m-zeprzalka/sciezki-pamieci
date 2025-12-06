"use client"

import { useEffect, useState } from "react"
import { Trophy, Map, Users, Image as ImageIcon } from "lucide-react"
import { getUserProgress } from "@/lib/utils/progress"
import { historicalPoints } from "@/data/historical-points"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getAllPhotos } from "@/lib/utils/photos"

interface ExplorationHeaderProps {
  onShowLeaderboard?: () => void
}

export function ExplorationHeader({
  onShowLeaderboard,
}: ExplorationHeaderProps) {
  const [progress, setProgress] = useState({
    points: 0,
    discovered: 0,
    total: historicalPoints.length,
  })

  useEffect(() => {
    const updateProgress = () => {
      const userProgress = getUserProgress()
      setProgress({
        points: userProgress.points,
        discovered: userProgress.discoveredPlaces.length,
        total: historicalPoints.length,
      })
    }

    updateProgress()

    // Listen for storage changes
    const handleStorage = () => updateProgress()
    window.addEventListener("storage", handleStorage)

    // Poll for updates (in case of same-tab changes)
    const interval = setInterval(updateProgress, 1000)

    return () => {
      window.removeEventListener("storage", handleStorage)
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-40 border-b shadow-sm"
      style={{ backgroundColor: "hsl(var(--background))" }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo & Title - Clickable to home */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="Bydgoszcz Logo"
              className="h-14 object-contain"
            />
          </Link>

          {/* Stats */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Points */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary">
                {progress.points}
              </span>
            </div>

            {/* Progress - Always visible */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-full text-sm">
              <span className="font-bold">{progress.discovered}</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">{progress.total}</span>
            </div>

            {/* Gallery Button */}
            <Link href="/gallery">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <ImageIcon className="w-4 h-4 mr-2" />
                Galeria
              </Button>
            </Link>
            <Link href="/gallery" className="sm:hidden">
              <Button variant="outline" size="icon">
                <ImageIcon className="w-4 h-4" />
              </Button>
            </Link>

            {/* Leaderboard Button */}
            {onShowLeaderboard && (
              <Button
                variant="outline"
                size="sm"
                onClick={onShowLeaderboard}
                className="hidden sm:flex"
              >
                <Users className="w-4 h-4 mr-2" />
                Ranking
              </Button>
            )}
            {onShowLeaderboard && (
              <Button
                variant="outline"
                size="icon"
                onClick={onShowLeaderboard}
                className="sm:hidden"
              >
                <Users className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
