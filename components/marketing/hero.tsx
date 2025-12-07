"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"
import Link from "next/link"
import { fadeInUp, staggerContainer } from "@/lib/animations"

interface HeroProps {
  title: string
  subtitle: string
  description?: string
  ctaPrimary?: string
  ctaSecondary?: string
}

export function Hero({
  title,
  subtitle,
  description,
  ctaPrimary = "Uruchom Demo",
  ctaSecondary = "Dokumentacja",
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-border">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Animated gradient orbs - Premium Awwwards style */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      />

      {/* Content - Centered */}
      <div className="container-consistent relative z-10 w-full py-16 sm:py-20 md:py-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge with glow */}
          <motion.div variants={fadeInUp} className="mb-8 flex justify-center">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium border rounded-full backdrop-blur-sm shadow-sm"
              style={{
                borderColor: "hsl(0, 100%, 45%, 0.3)",
                backgroundColor: "hsl(0, 100%, 45%, 0.08)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: "hsl(0, 100%, 45%)" }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: "hsl(0, 100%, 45%)" }}
                />
              </span>
              <span
                className="font-semibold"
                style={{ color: "hsl(0, 100%, 45%)" }}
              >
                HackNation 2025
              </span>
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.05] tracking-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 leading-relaxed max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>

          {/* Optional Description */}
          {description && (
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Button
              asChild
              size="lg"
              className="group w-full sm:w-auto min-w-[200px]"
            >
              <Link href="/explore">
                {ctaPrimary}
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-w-[200px]"
            >
              <Link href="#problems">{ctaSecondary}</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          variants={fadeInUp}
          className="bottom-12 flex justify-center w-full mt-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full flex items-start justify-center p-2 backdrop-blur-sm"
            style={{
              border: "1px solid hsl(0, 100%, 45%, 0.3)",
              backgroundColor: "hsl(0, 100%, 45%, 0.05)",
            }}
          >
            <motion.div
              className="w-1.5 h-2 rounded-full"
              style={{ backgroundColor: "hsl(0, 100%, 45%)" }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
