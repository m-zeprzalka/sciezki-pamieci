"use client"

import { useState, useEffect, useRef } from "react"
import { HistoricalPoint, PointStatus } from "@/lib/types/historical-point"
import { Button } from "@/components/ui/button"
import {
  X,
  Trophy,
  CheckCircle2,
  XCircle,
  Share2,
  Camera,
  Image as ImageIcon,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  addDiscoveredPlace,
  saveQuizResult,
  isQuizCompleted,
  getUserProgress,
} from "@/lib/utils/progress"
import {
  playSuccessSound,
  triggerHapticFeedback,
  shareResults,
} from "@/lib/utils/effects"
import {
  compressImage,
  savePhoto,
  getPhoto,
  hasPhoto,
} from "@/lib/utils/photos"
import type { PointCardProps } from "./types"

export function PointCard({ point, status, onClose }: PointCardProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [userPhoto, setUserPhoto] = useState<string | null>(null)
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false)
  const [showCamera, setShowCamera] = useState(false)
  const [stream, setStream] = useState<MediaStream | null>(null)

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"))
    }

    checkDarkMode()

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  // Load existing photo
  useEffect(() => {
    const existingPhoto = getPhoto(point.id)
    if (existingPhoto) {
      setUserPhoto(existingPhoto)
    }
  }, [point.id])

  const [showQuiz, setShowQuiz] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [quizComplete, setQuizComplete] = useState(false)
  const [score, setScore] = useState(0)
  const [pointsEarned, setPointsEarned] = useState(0)

  const alreadyCompleted = isQuizCompleted(point.id)

  const handleDiscover = () => {
    if (status === "available") {
      addDiscoveredPlace(point.id)
      // Sound and haptic feedback on discovery!
      playSuccessSound()
      triggerHapticFeedback("success")
    }
    setShowQuiz(true)
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < point.quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate score
      let correctAnswers = 0
      point.quiz.forEach((q, index) => {
        if (selectedAnswers[index] === q.correctIndex) {
          correctAnswers++
        }
      })

      setScore(correctAnswers)

      // Calculate points
      let points = 0
      if (correctAnswers === 3) points = 100
      else if (correctAnswers === 2) points = 50
      else if (correctAnswers === 1) points = 25

      setPointsEarned(points)

      if (!alreadyCompleted) {
        saveQuizResult(point.id, correctAnswers)
      }

      // Sound effect for completing quiz
      playSuccessSound()
      triggerHapticFeedback("success")

      setQuizComplete(true)
    }
  }

  const canProceed = selectedAnswers[currentQuestion] !== undefined

  // Handle photo upload
  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploadingPhoto(true)

    try {
      // Compress image
      const compressed = await compressImage(file)

      // Save to localStorage
      savePhoto(point.id, compressed)

      // Update state
      setUserPhoto(compressed)

      // Success feedback
      playSuccessSound()
      triggerHapticFeedback("success")
    } catch (error) {
      console.error("Photo upload error:", error)
      alert("Nie udało się zapisać zdjęcia. Spróbuj mniejszy plik.")
    } finally {
      setIsUploadingPhoto(false)
    }
  }

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      })
      setStream(mediaStream)
      setShowCamera(true)

      // Wait for video ref to be available
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream
        }
      }, 100)
    } catch (error) {
      console.error("Camera access error:", error)
      alert("Nie udało się uruchomić kamery. Sprawdź uprawnienia.")
    }
  }

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
      setStream(null)
    }
    setShowCamera(false)
  }

  const capturePhoto = async () => {
    if (!videoRef.current) return

    setIsUploadingPhoto(true)

    try {
      // Create canvas to capture frame
      const canvas = document.createElement("canvas")
      canvas.width = videoRef.current.videoWidth
      canvas.height = videoRef.current.videoHeight

      const ctx = canvas.getContext("2d")
      if (!ctx) throw new Error("Canvas context not available")

      ctx.drawImage(videoRef.current, 0, 0)

      // Convert to blob
      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(
          (b) => (b ? resolve(b) : reject(new Error("Blob creation failed"))),
          "image/jpeg",
          0.9
        )
      })

      // Convert blob to file for compression
      const file = new File([blob], "photo.jpg", { type: "image/jpeg" })

      // Compress image
      const compressed = await compressImage(file)

      // Save to localStorage
      savePhoto(point.id, compressed)

      // Update state
      setUserPhoto(compressed)

      // Success feedback
      playSuccessSound()
      triggerHapticFeedback("success")

      // Close camera
      stopCamera()
    } catch (error) {
      console.error("Photo capture error:", error)
      alert("Nie udało się zrobić zdjęcia. Spróbuj ponownie.")
    } finally {
      setIsUploadingPhoto(false)
    }
  }

  const triggerPhotoUpload = () => {
    startCamera()
  }

  // Cleanup camera stream on unmount
  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [stream])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/70 flex items-end sm:items-center justify-center p-0 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="w-full sm:max-w-2xl max-h-[90vh] rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl"
          style={{
            backgroundColor: "hsl(var(--background))",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="sticky top-0 backdrop-blur-sm border-b p-4 flex items-center justify-between z-10"
            style={{ backgroundColor: "hsl(var(--background) / 0.95)" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">
                {point.category === "pomnik"
                  ? "🗿"
                  : point.category === "rzeźba"
                  ? "🎨"
                  : point.category === "budynek"
                  ? "🏛️"
                  : "📍"}
              </span>
              <div>
                <h2 className="text-lg font-bold">{point.name}</h2>
                {point.year && (
                  <p className="text-xs text-muted-foreground">{point.year}</p>
                )}
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
            {!showQuiz ? (
              // Discovery phase
              <div className="p-6 space-y-6">
                {/* Image / Photo Section */}
                <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden relative group">
                  {userPhoto ? (
                    // User's photo
                    <img
                      src={userPhoto}
                      alt={point.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    // Placeholder with emoji
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                      {point.category === "pomnik"
                        ? "🗿"
                        : point.category === "rzeźba"
                        ? "🎨"
                        : point.category === "budynek"
                        ? "🏛️"
                        : "📍"}
                    </div>
                  )}

                  {/* Photo Upload Button - Always visible */}
                  <div className="absolute bottom-4 right-4">
                    <Button
                      onClick={triggerPhotoUpload}
                      disabled={isUploadingPhoto}
                      className="shadow-lg"
                      size="sm"
                    >
                      {isUploadingPhoto ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Zapisuję...
                        </>
                      ) : userPhoto ? (
                        <>
                          <ImageIcon className="w-4 h-4 mr-2" />
                          Zmień zdjęcie
                        </>
                      ) : (
                        <>
                          <Camera className="w-4 h-4 mr-2" />
                          Zrób zdjęcie
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Hidden file input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="px-2 py-1 bg-primary/10 rounded-full text-primary font-medium">
                      {point.category.replace("_", " ")}
                    </span>
                    {point.historicalPeriod && (
                      <span className="px-2 py-1 bg-muted rounded-full">
                        {point.historicalPeriod}
                      </span>
                    )}
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>

                {/* Action Button */}
                <Button
                  onClick={handleDiscover}
                  className="w-full"
                  size="lg"
                  disabled={alreadyCompleted}
                >
                  {alreadyCompleted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Quiz ukończony
                    </>
                  ) : (
                    <>
                      <Trophy className="w-5 h-5 mr-2" />
                      Rozpocznij Quiz
                    </>
                  )}
                </Button>
              </div>
            ) : quizComplete ? (
              // Results phase
              <div className="p-6 space-y-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10 }}
                >
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Trophy className="w-12 h-12 text-primary" />
                  </div>
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">Quiz ukończony!</h3>
                  <p className="text-4xl font-bold text-primary mb-1">
                    {score}/{point.quiz.length}
                  </p>
                  <p className="text-muted-foreground">poprawnych odpowiedzi</p>
                </div>

                {!alreadyCompleted && (
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <p className="text-lg font-semibold text-primary">
                      + {pointsEarned} punktów! 🏆
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  {point.quiz.map((q, index) => {
                    const isCorrect = selectedAnswers[index] === q.correctIndex
                    return (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border ${
                          isCorrect
                            ? "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800"
                            : "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          )}
                          <div className="text-left text-sm">
                            <p className="font-medium mb-1">{q.question}</p>
                            {!isCorrect && (
                              <p className="text-xs text-muted-foreground">
                                Poprawna odpowiedź: {q.options[q.correctIndex]}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Share Button */}
                <div className="flex gap-3">
                  <Button
                    onClick={() => {
                      const progress = getUserProgress()
                      shareResults(
                        progress.points,
                        progress.discoveredPlaces.length,
                        8
                      )
                    }}
                    variant="outline"
                    className="flex-1"
                    size="lg"
                  >
                    <Share2 className="w-5 h-5 mr-2" />
                    Udostępnij
                  </Button>
                  <Button onClick={onClose} className="flex-1" size="lg">
                    Powrót do mapy
                  </Button>
                </div>
              </div>
            ) : (
              // Quiz phase
              <div className="p-6 space-y-6">
                {/* Progress */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>
                    Pytanie {currentQuestion + 1} z {point.quiz.length}
                  </span>
                  <div className="flex gap-1">
                    {point.quiz.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentQuestion
                            ? "bg-primary"
                            : index < currentQuestion
                            ? "bg-green-500"
                            : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Question */}
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    {point.quiz[currentQuestion].question}
                  </h3>

                  <div className="space-y-2">
                    {point.quiz[currentQuestion].options.map(
                      (option, index) => {
                        const isSelected =
                          selectedAnswers[currentQuestion] === index
                        return (
                          <button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            className={`w-full p-4 text-left rounded-lg border-2 transition-all font-medium ${
                              isSelected
                                ? "border-primary shadow-md scale-[1.02]"
                                : "border-border hover:border-primary/50 hover:bg-muted/50 active:scale-[0.98]"
                            }`}
                            style={
                              isSelected
                                ? {
                                    backgroundColor: isDarkMode
                                      ? "hsl(0, 100%, 15%)"
                                      : "hsl(0, 100%, 96%)",
                                  }
                                : undefined
                            }
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0"
                                style={{
                                  borderColor: isSelected
                                    ? "hsl(0, 100%, 45%)"
                                    : "hsl(var(--muted-foreground) / 0.3)",
                                  backgroundColor: isSelected
                                    ? "hsl(0, 100%, 45%)"
                                    : "transparent",
                                }}
                              >
                                {isSelected && (
                                  <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: "white" }}
                                  />
                                )}
                              </div>
                              <span className="flex-1">{option}</span>
                            </div>
                          </button>
                        )
                      }
                    )}
                  </div>
                </div>

                {/* Next Button */}
                <Button
                  onClick={handleNextQuestion}
                  disabled={!canProceed}
                  className="w-full"
                  size="lg"
                >
                  {currentQuestion < point.quiz.length - 1
                    ? "Następne pytanie"
                    : "Zobacz wyniki"}
                </Button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Camera Modal */}
        {showCamera && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Camera Header */}
            <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-lg">Zrób zdjęcie</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={stopCamera}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* Video Preview */}
            <div className="flex-1 relative flex items-center justify-center bg-black">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
            </div>

            {/* Camera Controls */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={stopCamera}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-6 h-6" />
                </Button>
                {/* Capture Button */}
                <Button
                  onClick={capturePhoto}
                  disabled={isUploadingPhoto}
                  size="lg"
                  className="w-16 h-16 rounded-full bg-white hover:bg-gray-200 shadow-xl"
                >
                  {isUploadingPhoto ? (
                    <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  ) : (
                    <Camera className="w-8 h-8 text-black" />
                  )}
                </Button>
                <div className="w-10" /> {/* Spacer for symmetry */}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
