"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { historicalPoints } from "@/data/historical-points"
import { HistoricalPoint, PointStatus } from "@/lib/types/historical-point"
import { isWithinRange } from "@/lib/utils/geolocation"
import { PROXIMITY_RADIUS } from "@/data/historical-points"
import { getUserProgress } from "@/lib/utils/progress"
import { Loader2 } from "lucide-react"

// Dynamic import to avoid SSR issues with Leaflet
const MapView = dynamic(() => import("./map-view"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center bg-muted">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
    </div>
  ),
}) as any

export function ExplorationMap() {
  const [userLocation, setUserLocation] = useState<{
    lat: number
    lng: number
  } | null>(null)
  const [locationError, setLocationError] = useState<string | null>(null)
  const [pointStatuses, setPointStatuses] = useState<
    Record<string, PointStatus>
  >({})

  // Get user's geolocation
  useEffect(() => {
    if (!navigator.geolocation) {
      const BYDGOSZCZ_CENTER = { lat: 53.1228, lng: 18.0005 }
      setLocationError(
        "Geolokalizacja nie jest wspierana przez Twoją przeglądarkę"
      )
      // Fallback to Bydgoszcz center
      setUserLocation(BYDGOSZCZ_CENTER)
      return
    }

    let watchId: number | null = null

    // Bydgoszcz center coordinates (Stary Rynek)
    const BYDGOSZCZ_CENTER = { lat: 53.1228, lng: 18.0005 }
    const MAX_DISTANCE_KM = 10 // 10km radius from Bydgoszcz

    // Helper function to calculate distance between two points (Haversine formula)
    const calculateDistance = (
      lat1: number,
      lng1: number,
      lat2: number,
      lng2: number
    ): number => {
      const R = 6371 // Earth's radius in km
      const dLat = ((lat2 - lat1) * Math.PI) / 180
      const dLng = ((lng2 - lng1) * Math.PI) / 180
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
          Math.cos((lat2 * Math.PI) / 180) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2)
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      return R * c
    }

    // First try to get current position (this triggers the permission prompt)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude
        const userLng = position.coords.longitude
        const distanceFromBydgoszcz = calculateDistance(
          userLat,
          userLng,
          BYDGOSZCZ_CENTER.lat,
          BYDGOSZCZ_CENTER.lng
        )

        // Check if user is within 50km of Bydgoszcz
        if (distanceFromBydgoszcz <= MAX_DISTANCE_KM) {
          // User is in Bydgoszcz area - use real location
          setUserLocation({ lat: userLat, lng: userLng })
          setLocationError(null)
        } else {
          // User is too far from Bydgoszcz - force Bydgoszcz center
          console.log(
            `User is ${distanceFromBydgoszcz.toFixed(
              1
            )}km from Bydgoszcz - using center`
          )
          setUserLocation(BYDGOSZCZ_CENTER)
          setLocationError(
            `Jesteś za daleko od Bydgoszczy (${distanceFromBydgoszcz.toFixed(
              0
            )}km). Pokazujemy centrum miasta.`
          )
        }

        // Now start watching for position changes
        watchId = navigator.geolocation.watchPosition(
          (position) => {
            const lat = position.coords.latitude
            const lng = position.coords.longitude
            const distance = calculateDistance(
              lat,
              lng,
              BYDGOSZCZ_CENTER.lat,
              BYDGOSZCZ_CENTER.lng
            )

            if (distance <= MAX_DISTANCE_KM) {
              setUserLocation({ lat, lng })
              setLocationError(null)
            } else {
              setUserLocation(BYDGOSZCZ_CENTER)
              setLocationError(
                `Jesteś za daleko od Bydgoszczy (${distance.toFixed(
                  0
                )}km). Pokazujemy centrum miasta.`
              )
            }
          },
          (error) => {
            console.error("Watch position error:", error)
          },
          {
            enableHighAccuracy: true,
            maximumAge: 10000,
            timeout: 10000,
          }
        )
      },
      (error) => {
        // User denied or error occurred - fallback to Bydgoszcz center
        console.log("Geolocation denied/error - using Bydgoszcz center")
        setUserLocation(BYDGOSZCZ_CENTER)

        if (error.code === 1) {
          // PERMISSION_DENIED
          setLocationError(
            "Lokalizacja odrzucona. Pokazujemy centrum Bydgoszczy."
          )
        } else if (error.code === 2) {
          // POSITION_UNAVAILABLE
          setLocationError(
            "Lokalizacja niedostępna. Pokazujemy centrum Bydgoszczy."
          )
        } else if (error.code === 3) {
          // TIMEOUT
          setLocationError(
            "Przekroczono czas oczekiwania. Pokazujemy centrum Bydgoszczy."
          )
        } else {
          setLocationError(
            "Nie można uzyskać lokalizacji. Pokazujemy centrum Bydgoszczy."
          )
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 30000, // 30 seconds for user to accept
        maximumAge: 0,
      }
    )

    // Cleanup function
    return () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId)
      }
    }
  }, [])

  // Update point statuses - all places are always available for testing
  // TO ENABLE GPS PROXIMITY: Uncomment code below and remove current simple logic
  useEffect(() => {
    const progress = getUserProgress()
    const statuses: Record<string, PointStatus> = {}

    historicalPoints.forEach((point) => {
      // TESTING MODE: All places always available (no GPS restriction)
      statuses[point.id] = progress.discoveredPlaces.includes(point.id)
        ? "discovered"
        : "available"

      /* GPS PROXIMITY MODE (uncomment to enable 50m radius check):
      if (progress.discoveredPlaces.includes(point.id)) {
        statuses[point.id] = "discovered"
      } else if (userLocation && isWithinRange(
        userLocation.lat,
        userLocation.lng,
        point.lat,
        point.lng,
        PROXIMITY_RADIUS
      )) {
        statuses[point.id] = "available"
      } else {
        // Add "locked" back to PointStatus type in types file
        statuses[point.id] = "locked"
      }
      */
    })

    setPointStatuses(statuses)

    // Re-check when localStorage changes
    const handleStorage = () => {
      const updatedProgress = getUserProgress()
      const updatedStatuses: Record<string, PointStatus> = {}
      historicalPoints.forEach((point) => {
        updatedStatuses[point.id] = updatedProgress.discoveredPlaces.includes(
          point.id
        )
          ? "discovered"
          : "available"
      })
      setPointStatuses(updatedStatuses)
    }

    window.addEventListener("storage", handleStorage)
    const interval = setInterval(handleStorage, 2000)

    return () => {
      window.removeEventListener("storage", handleStorage)
      clearInterval(interval)
    }
  }, [])

  if (!userLocation) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-muted">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
          <p className="text-lg font-medium">Szukam Twojej lokalizacji...</p>
          <p className="text-sm text-muted-foreground">
            Przyznaj uprawnienia w przeglądarce
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Show error message as banner if location was denied */}
      {locationError && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white text-yellow-950 px-4 py-3 text-center text-sm font-medium">
          {locationError}
        </div>
      )}
      <MapView
        userLocation={userLocation}
        points={historicalPoints}
        pointStatuses={pointStatuses}
      />
    </>
  )
}
