"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Trophy, Medal, Crown, Share2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { shareResults } from "@/lib/utils/effects"

interface LeaderboardEntry {
  rank: number
  name: string
  points: number
  discovered: number
  avatar: string
}

// Mock data - TOP 10
const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Anna K.", points: 800, discovered: 8, avatar: "👑" },
  { rank: 2, name: "Marek W.", points: 750, discovered: 8, avatar: "🥈" },
  { rank: 3, name: "Zofia P.", points: 700, discovered: 7, avatar: "🥉" },
  { rank: 4, name: "Piotr D.", points: 650, discovered: 7, avatar: "🎯" },
  { rank: 5, name: "Kasia M.", points: 600, discovered: 6, avatar: "🎨" },
  { rank: 6, name: "Jakub S.", points: 550, discovered: 6, avatar: "🚀" },
  { rank: 7, name: "Ola T.", points: 500, discovered: 5, avatar: "✨" },
  { rank: 8, name: "Michał R.", points: 450, discovered: 5, avatar: "🌟" },
  { rank: 9, name: "Ewa L.", points: 400, discovered: 4, avatar: "💎" },
  { rank: 10, name: "Adam B.", points: 350, discovered: 4, avatar: "🔥" },
]

interface LeaderboardModalProps {
  isOpen: boolean
  onClose: () => void
  userPoints: number
  userDiscovered: number
}

export function LeaderboardModal({
  isOpen,
  onClose,
  userPoints,
  userDiscovered,
}: LeaderboardModalProps) {
  if (!isOpen) return null

  // Calculate user's estimated rank
  const userRank = mockLeaderboard.findIndex(
    (entry) => userPoints > entry.points
  )
  const estimatedRank =
    userRank === -1 ? mockLeaderboard.length + 1 : userRank + 1

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
          style={{
            backgroundColor: "hsl(var(--background))",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="p-6 border-b"
            style={{ backgroundColor: "hsl(var(--muted))" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Ranking</h2>
                  <p className="text-sm text-muted-foreground">
                    TOP 10 Eksplorerów
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Your Stats */}
            <div className="bg-background rounded-lg p-4 border-2 border-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">👤</div>
                  <div>
                    <p className="font-bold">Ty</p>
                    <p className="text-xs text-muted-foreground">
                      {userDiscovered} miejsc odkrytych
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">
                    {userPoints}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    #{estimatedRank} miejsce
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard List */}
          <div className="max-h-[50vh] overflow-y-auto p-4">
            <div className="space-y-2">
              {mockLeaderboard.map((entry) => (
                <div
                  key={entry.rank}
                  className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                    entry.rank <= 3
                      ? "bg-primary/5 border-primary/20"
                      : "bg-muted/30 border-border hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Rank Badge */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        entry.rank === 1
                          ? "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                          : entry.rank === 2
                          ? "bg-gray-400/20 text-gray-600 dark:text-gray-400"
                          : entry.rank === 3
                          ? "bg-orange-500/20 text-orange-600 dark:text-orange-400"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {entry.rank === 1 ? (
                        <Crown className="w-4 h-4" />
                      ) : entry.rank === 2 || entry.rank === 3 ? (
                        <Medal className="w-4 h-4" />
                      ) : (
                        entry.rank
                      )}
                    </div>

                    {/* Avatar & Name */}
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{entry.avatar}</span>
                      <div>
                        <p className="font-semibold">{entry.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {entry.discovered}/8 miejsc
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">
                      {entry.points}
                    </p>
                    <p className="text-xs text-muted-foreground">pkt</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t space-y-3">
            <Button
              onClick={() => shareResults(userPoints, userDiscovered, 8)}
              variant="outline"
              className="w-full"
              size="lg"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Udostępnij swój wynik
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              💡 Odkryj wszystkie miejsca i wejdź do TOP 3!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
