"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Trophy,
  Trash2,
  Download,
} from "lucide-react"
import Link from "next/link"
import { getAllPhotos, deletePhoto } from "@/lib/utils/photos"
import { historicalPoints } from "@/data/historical-points"
import { motion } from "framer-motion"

export default function GalleryPage() {
  const [photos, setPhotos] = useState<
    Array<{
      placeId: string
      image: string
      timestamp: number
    }>
  >([])

  useEffect(() => {
    setPhotos(getAllPhotos())
  }, [])

  const getPlaceInfo = (placeId: string) => {
    return historicalPoints.find((p) => p.id === placeId)
  }

  const handleDelete = (placeId: string) => {
    if (confirm("Czy na pewno chcesz usunąć to zdjęcie?")) {
      deletePhoto(placeId)
      setPhotos(getAllPhotos())
    }
  }

  const handleDownload = (image: string, placeName: string) => {
    const link = document.createElement("a")
    link.href = image
    link.download = `${placeName.replace(/\s+/g, "-")}.jpg`
    link.click()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/explore">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Galeria Wspomnień</h1>
                <p className="text-sm text-muted-foreground">
                  Twoje zdjęcia z eksploracji
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-primary">{photos.length}</p>
              <p className="text-xs text-muted-foreground">zdjęć</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {photos.length === 0 ? (
          // Empty state
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
              <span className="text-5xl">📸</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Brak zdjęć</h2>
              <p className="text-muted-foreground max-w-md">
                Odkryj miejsca w Bydgoszczy i rób zdjęcia aby stworzyć swoją
                galerię wspomnień!
              </p>
            </div>
            <Link href="/explore">
              <Button size="lg">
                <MapPin className="w-5 h-5 mr-2" />
                Rozpocznij eksplorację
              </Button>
            </Link>
          </div>
        ) : (
          // Photo grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => {
              const place = getPlaceInfo(photo.placeId)
              if (!place) return null

              return (
                <motion.div
                  key={photo.placeId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative rounded-xl overflow-hidden border bg-card shadow-sm hover:shadow-md transition-all"
                >
                  {/* Photo */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.image}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4 space-y-3">
                    {/* Title */}
                    <div>
                      <h3 className="font-bold text-lg line-clamp-1">
                        {place.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {place.category.replace("_", " ")}
                      </p>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(photo.timestamp).toLocaleDateString("pl-PL")}
                      </div>
                      {place.year && (
                        <div className="flex items-center gap-1">
                          <Trophy className="w-3 h-3" />
                          {place.year}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button
                        onClick={() => handleDownload(photo.image, place.name)}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Pobierz
                      </Button>
                      <Button
                        onClick={() => handleDelete(photo.placeId)}
                        variant="outline"
                        size="sm"
                        className="flex-1 text-destructive hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Usuń
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
