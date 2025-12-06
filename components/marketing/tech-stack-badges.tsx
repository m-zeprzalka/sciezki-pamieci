"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { fadeInUp, staggerContainer } from "@/lib/animations"

interface TechStackBadgesProps {
  stack: string[]
}

export function TechStackBadges({ stack }: TechStackBadgesProps) {
  return (
    <section id="tech-stack" className="section-spacing border-t border-border">
      <div className="container-section">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
              Stack technologiczny
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Nowoczesne technologie zapewniające niezawodność
          </p>
        </motion.div>

        {/* Tech Badges */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap gap-3 max-w-4xl mx-auto justify-center"
        >
          {stack.map((tech, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Badge
                variant="outline"
                className="text-sm px-5 py-2.5 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 transition-all cursor-default"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
