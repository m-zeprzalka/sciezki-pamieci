export type PointCategory = "pomnik" | "rzeźba" | "budynek" | "miejsce_pamieci"

export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
}

export interface HistoricalPoint {
  id: string
  name: string
  lat: number
  lng: number
  category: PointCategory
  image: string
  description: string
  year?: string
  historicalPeriod?: string
  quiz: QuizQuestion[]
}

export interface UserProgress {
  points: number
  discoveredPlaces: string[]
  completedQuizzes: Record<string, { score: number; date: string }>
}

export type PointStatus = "available" | "discovered"
