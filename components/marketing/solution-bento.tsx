"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Zap, Shield, BarChart, LucideIcon } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface Feature {
  title: string
  description: string
  icon?: LucideIcon
  span?: string
}

interface SolutionBentoProps {
  features: Feature[]
}

const defaultIcons = [Sparkles, Zap, Shield, BarChart]

export function SolutionBento({ features }: SolutionBentoProps) {
  return (
    <section id="features" className="section-spacing border-t border-border">
      <div className="container-section">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
              Rozwiązania problemów
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mt-4">
            Interaktywna mapa miejsc z zaawansowanymi funkcjami
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon =
              feature.icon || defaultIcons[index % defaultIcons.length]
            const spanClass = feature.span || "col-span-1"

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="col-span-1"
              >
                <Card className="h-full hover-lift hover-glow-primary group cursor-default bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-6 sm:p-8">
                    {/* Icon with background */}
                    <div
                      className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg"
                      style={{
                        backgroundColor: "hsl(0, 100%, 45%, 0.08)",
                        border: "1px solid hsl(0, 100%, 45%, 0.15)",
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: "hsl(0, 100%, 45%)" }}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Subtle indicator on hover */}
                    <div
                      className="mt-6 h-0.5 w-12 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                      style={{ backgroundColor: "hsl(0, 100%, 45%, 0.7)" }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
