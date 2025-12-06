import { HistoricalPoint, PointStatus } from "@/lib/types/historical-point"

export interface MapViewProps {
  userLocation: { lat: number; lng: number }
  points: HistoricalPoint[]
  pointStatuses: Record<string, PointStatus>
}

declare const MapView: React.FC<MapViewProps>
export default MapView
