"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

interface Metric {
  value: string
  label: string
  trend?: string
}

interface ImpactMetricsProps {
  metrics: Metric[]
}

export function ImpactMetrics({ metrics }: ImpactMetricsProps) {
  return (
    <section className="section-spacing border-y border-border bg-muted/20">
      <div className="container-consistent">
        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
              Kluczowe dane aplikacji
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mt-4">
            Zobacz statystki Bydgoszcz - Ścieżki Pamięci 2.0
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="relative p-8 sm:p-10 md:p-12 text-center rounded-lg border border-border bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-md hover-lift hover:border-primary/20 transition-all group">
                {/* Subtle top accent with shimmer */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full group-hover:w-24 blur-sm group-hover:blur-md transition-all opacity-60 group-hover:opacity-100" />

                {/* Value - Large and clean */}
                <div className="mb-3">
                  <span className="text-5xl sm:text-6xl md:text-7xl font-bold block text-foreground">
                    {metric.value}
                  </span>
                  {metric.trend && (
                    <span
                      className="text-sm font-semibold mt-2 inline-block"
                      style={{ color: "hsla(147, 89%, 21%, 1.00)" }}
                    >
                      {metric.trend}
                    </span>
                  )}
                </div>

                {/* Label */}
                <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
