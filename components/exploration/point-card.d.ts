import { HistoricalPoint, PointStatus } from "@/lib/types/historical-point"

export interface PointCardProps {
  point: HistoricalPoint
  status: PointStatus
  onClose: () => void
}

export function PointCard(props: PointCardProps): JSX.Element
