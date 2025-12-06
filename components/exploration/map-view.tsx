"use client"

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  useMap,
} from "react-leaflet"
import { Icon } from "leaflet"
import "leaflet/dist/leaflet.css"
import { HistoricalPoint, PointStatus } from "@/lib/types/historical-point"
import { useState } from "react"
import { PointCard } from "./point-card"
import type { MapViewProps } from "./types"
import { Button } from "@/components/ui/button"
import { Navigation, Plus, Minus } from "lucide-react"
import { BYDGOSZCZ_CENTER } from "@/data/historical-points"

// Custom marker icons
const createIcon = (status: PointStatus) => {
  const colors = {
    available: "#ef4444", // red - clickable
    discovered: "#22c55e", // green - completed
  }

  const svg = `
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="${
        colors[status]
      }" stroke="white" stroke-width="2"/>
      ${
        status === "discovered"
          ? '<path d="M10 16 L14 20 L22 12" stroke="white" stroke-width="2" fill="none"/>'
          : '<circle cx="16" cy="16" r="4" fill="white"/>'
      }
    </svg>
  `

  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(svg)}`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  })
}

const userIcon = new Icon({
  iconUrl: `data:image/svg+xml;base64,${btoa(`
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#3b82f6" stroke="white" stroke-width="2"/>
      <circle cx="12" cy="12" r="4" fill="white"/>
    </svg>
  `)}`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
})

// Map controls component
function MapControls() {
  const map = useMap()

  const handleRecenter = () => {
    map.setView([BYDGOSZCZ_CENTER.lat, BYDGOSZCZ_CENTER.lng], 13)
  }

  const handleZoomIn = () => {
    map.zoomIn()
  }

  const handleZoomOut = () => {
    map.zoomOut()
  }

  return (
    <div className="absolute bottom-24 right-4 z-[1000] flex flex-col gap-2">
      <Button
        onClick={handleZoomIn}
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg"
        style={{ backgroundColor: "white", color: "#ef4444" }}
        title="Przybliż"
      >
        <Plus className="h-6 w-6" />
      </Button>
      <Button
        onClick={handleZoomOut}
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg"
        style={{ backgroundColor: "white", color: "#ef4444" }}
        title="Oddal"
      >
        <Minus className="h-6 w-6" />
      </Button>
      <Button
        onClick={handleRecenter}
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg"
        style={{ backgroundColor: "#ef4444", color: "white" }}
        title="Wycentruj mapę na Bydgoszcz"
      >
        <Navigation className="h-6 w-6" />
      </Button>
    </div>
  )
}

function MapView({ userLocation, points, pointStatuses }: MapViewProps) {
  const [selectedPoint, setSelectedPoint] = useState<HistoricalPoint | null>(
    null
  )

  return (
    <>
      <MapContainer
        center={[userLocation.lat, userLocation.lng]}
        zoom={13}
        className="w-full h-screen z-0"
        zoomControl={false}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Map controls: zoom and recenter */}
        <MapControls />

        {/* User location with pulsing circle */}
        <Circle
          center={[userLocation.lat, userLocation.lng]}
          radius={20}
          pathOptions={{
            fillColor: "#3b82f6",
            fillOpacity: 0.3,
            color: "#3b82f6",
            weight: 2,
          }}
          className="animate-pulse"
        />
        <Marker
          position={[userLocation.lat, userLocation.lng]}
          icon={userIcon}
        />

        {/* Historical points */}
        {points.map((point) => {
          const status = pointStatuses[point.id] || "locked"
          return (
            <Marker
              key={point.id}
              position={[point.lat, point.lng]}
              icon={createIcon(status)}
              eventHandlers={{
                click: () => {
                  setSelectedPoint(point)
                },
              }}
            >
              <Popup>
                <div className="text-sm">
                  <p className="font-bold">{point.name}</p>
                  {status === "available" && (
                    <p className="text-primary text-xs">
                      ✨ Kliknij aby odkryć!
                    </p>
                  )}
                  {status === "discovered" && (
                    <p className="text-green-600 text-xs">✅ Odkryte</p>
                  )}
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>

      {/* Point Card Modal */}
      {selectedPoint && (
        <PointCard
          point={selectedPoint}
          status={pointStatuses[selectedPoint.id]}
          onClose={() => setSelectedPoint(null)}
        />
      )}
    </>
  )
}

export default MapView
