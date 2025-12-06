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
  Share2,
  Grid3x3,
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

  const handleShare = async (
    image: string,
    placeName: string,
    description: string
  ) => {
    try {
      // Convert base64 to blob
      const response = await fetch(image)
      const blob = await response.blob()
      const file = new File([blob], `${placeName.replace(/\s+/g, "-")}.jpg`, {
        type: "image/jpeg",
      })

      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: `📸 ${placeName}`,
          text: `Odkryłem ${placeName}! ${description}\n\n🗺️ Ścieżki Pamięci - Bydgoszcz`,
          files: [file],
        })
      } else {
        // Fallback: copy text to clipboard
        const shareText = `📸 ${placeName}\n${description}\n\n🗺️ Ścieżki Pamięci - Bydgoszcz\n${window.location.origin}`
        await navigator.clipboard.writeText(shareText)
        alert("Link skopiowany do schowka!")
      }
    } catch (error) {
      console.error("Share failed:", error)
    }
  }

  const generateMosaic = async () => {
    if (photos.length === 0) {
      alert("Brak zdjęć do utworzenia mozaiki!")
      return
    }

    // Create canvas
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Mosaic configuration: Dynamic grid based on photo count
    const totalPhotos = photos.length
    const cols = Math.min(5, Math.ceil(Math.sqrt(totalPhotos * 1.5)))
    const rows = Math.ceil(totalPhotos / cols)
    const photoWidth = 400
    const photoHeight = 300
    const padding = 0 // No gaps between photos
    const headerHeight = 100

    canvas.width = cols * photoWidth
    canvas.height = rows * photoHeight + headerHeight

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, headerHeight)
    gradient.addColorStop(0, "#1a1a1a")
    gradient.addColorStop(1, "#0a0a0a")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, headerHeight)

    // Title
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 42px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Ścieżki Pamięci 2.0", canvas.width / 2, 45)
    ctx.font = "24px Arial"
    ctx.fillStyle = "#999999"
    ctx.fillText("Bydgoszcz", canvas.width / 2, 75)

    // Load and draw all photos
    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = src
      })
    }

    try {
      for (let i = 0; i < photos.length; i++) {
        const img = await loadImage(photos[i].image)
        const col = i % cols
        const row = Math.floor(i / cols)
        const x = col * photoWidth
        const y = headerHeight + row * photoHeight

        // Draw photo (fill entire cell)
        ctx.drawImage(img, x, y, photoWidth, photoHeight)
      }

      // Convert to blob and download
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob)
            const link = document.createElement("a")
            link.href = url
            link.download = "sciezki-pamieci-mozaika.jpg"
            link.click()
            URL.revokeObjectURL(url)
          }
        },
        "image/jpeg",
        0.95
      )
    } catch (error) {
      console.error("Mosaic generation failed:", error)
      alert("Błąd podczas tworzenia mozaiki")
    }
  }

  const shareMosaic = async () => {
    if (photos.length === 0) {
      alert("Brak zdjęć do udostępnienia mozaiki!")
      return
    }

    // Create canvas (same as generateMosaic)
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const totalPhotos = photos.length
    const cols = Math.min(5, Math.ceil(Math.sqrt(totalPhotos * 1.5)))
    const rows = Math.ceil(totalPhotos / cols)
    const photoWidth = 400
    const photoHeight = 300
    const padding = 0
    const headerHeight = 100

    canvas.width = cols * photoWidth
    canvas.height = rows * photoHeight + headerHeight

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, headerHeight)
    gradient.addColorStop(0, "#1a1a1a")
    gradient.addColorStop(1, "#0a0a0a")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, headerHeight)

    // Title
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 42px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Ścieżki Pamięci 2.0", canvas.width / 2, 45)
    ctx.font = "24px Arial"
    ctx.fillStyle = "#999999"
    ctx.fillText("Bydgoszcz", canvas.width / 2, 75)

    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = src
      })
    }

    try {
      for (let i = 0; i < photos.length; i++) {
        const img = await loadImage(photos[i].image)
        const col = i % cols
        const row = Math.floor(i / cols)
        const x = col * photoWidth
        const y = headerHeight + row * photoHeight

        // Draw photo (fill entire cell)
        ctx.drawImage(img, x, y, photoWidth, photoHeight)
      }

      canvas.toBlob(
        async (blob) => {
          if (blob) {
            const file = new File([blob], "sciezki-pamieci-mozaika.jpg", {
              type: "image/jpeg",
            })

            if (navigator.share && navigator.canShare({ files: [file] })) {
              await navigator.share({
                title: "🗺️ Moja Mozaika - Ścieżki Pamięci",
                text: "Odkryłem wszystkie 15 miejsc historycznych w Bydgoszczy! 🏆\n\n🗺️ Ścieżki Pamięci - Bydgoszcz",
                files: [file],
              })
            } else {
              // Fallback: download
              const url = URL.createObjectURL(blob)
              const link = document.createElement("a")
              link.href = url
              link.download = "sciezki-pamieci-mozaika.jpg"
              link.click()
              URL.revokeObjectURL(url)
              alert("Mozaika pobrana! Możesz ją teraz udostępnić.")
            }
          }
        },
        "image/jpeg",
        0.95
      )
    } catch (error) {
      console.error("Mosaic share failed:", error)
      alert("Błąd podczas udostępniania mozaiki")
    }
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
                <h1 className="text-lg font-bold">Galeria Miejsc</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {photos.length > 0 && (
                <>
                  <Button
                    onClick={shareMosaic}
                    variant="default"
                    size="sm"
                    className="gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Udostępnij Mozaikę</span>
                  </Button>
                  <Button
                    onClick={generateMosaic}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <Grid3x3 className="w-4 h-4" />
                    <span className="hidden sm:inline">Pobierz Mozaikę</span>
                  </Button>
                </>
              )}
              <div className="text-right">
                <p className="text-lg font-bold text-primary">
                  {photos.length}/15
                </p>
                <p className="text-xs text-muted-foreground">zdjęć</p>
              </div>
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
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <Button
                        onClick={() =>
                          handleShare(
                            photo.image,
                            place.name,
                            place.description
                          )
                        }
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => handleDownload(photo.image, place.name)}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => handleDelete(photo.placeId)}
                        variant="outline"
                        size="sm"
                        className="flex-1 text-destructive hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <Trash2 className="w-4 h-4" />
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
