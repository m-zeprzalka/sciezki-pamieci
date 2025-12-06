// Force TypeScript to recheck imports
import type { FC } from "react"
import type { HistoricalPoint, PointStatus } from "@/lib/types/historical-point"

export interface MapViewProps {
  userLocation: { lat: number; lng: number }
  points: HistoricalPoint[]
  pointStatuses: Record<string, PointStatus>
}

export interface PointCardProps {
  point: HistoricalPoint
  status: PointStatus
  onClose: () => void
}
