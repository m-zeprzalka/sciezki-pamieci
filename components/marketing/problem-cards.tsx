"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, XCircle, Ban, LucideIcon } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

interface Problem {
  title: string
  description: string
  icon?: LucideIcon
}

interface ProblemCardsProps {
  problems: Problem[]
}

const defaultIcons = [AlertTriangle, XCircle, Ban]

export function ProblemCards({ problems }: ProblemCardsProps) {
  return (
    <section id="problems" className="section-spacing border-t border-border">
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
              Problemy do rozwiązania
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mt-4">
            Kluczowe wyzwania projektu aplikacji
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {problems.map((problem, index) => {
            const Icon =
              problem.icon || defaultIcons[index % defaultIcons.length]

            return (
              <motion.div key={index} variants={fadeInUp}>
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
                        className="w-5 h-5"
                        style={{ color: "hsl(0, 100%, 45%)" }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3">
                      {problem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
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
