import { UserProgress } from "@/lib/types/historical-point"

const STORAGE_KEY = "bydgoszcz-sciezki-progress"

export function getUserProgress(): UserProgress {
  if (typeof window === "undefined") {
    return { points: 0, discoveredPlaces: [], completedQuizzes: {} }
  }

  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) {
    return { points: 0, discoveredPlaces: [], completedQuizzes: {} }
  }

  try {
    return JSON.parse(stored)
  } catch {
    return { points: 0, discoveredPlaces: [], completedQuizzes: {} }
  }
}

export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function addDiscoveredPlace(placeId: string): UserProgress {
  const progress = getUserProgress()
  if (!progress.discoveredPlaces.includes(placeId)) {
    progress.discoveredPlaces.push(placeId)
    saveUserProgress(progress)
  }
  return progress
}

export function saveQuizResult(placeId: string, score: number): UserProgress {
  const progress = getUserProgress()

  // Calculate points: 100 for 3/3, 50 for 2/3, 25 for 1/3
  let pointsEarned = 0
  if (score === 3) pointsEarned = 100
  else if (score === 2) pointsEarned = 50
  else if (score === 1) pointsEarned = 25

  progress.points += pointsEarned
  progress.completedQuizzes[placeId] = {
    score,
    date: new Date().toISOString(),
  }

  saveUserProgress(progress)
  return progress
}

export function isPlaceDiscovered(placeId: string): boolean {
  const progress = getUserProgress()
  return progress.discoveredPlaces.includes(placeId)
}

export function isQuizCompleted(placeId: string): boolean {
  const progress = getUserProgress()
  return !!progress.completedQuizzes[placeId]
}
