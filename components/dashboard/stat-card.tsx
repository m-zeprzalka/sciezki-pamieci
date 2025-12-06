"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, ArrowDown, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string
  unit?: string
  trend?: string
  trendUp?: boolean
  icon?: LucideIcon
}

export function StatCard({
  title,
  value,
  unit,
  trend,
  trendUp = true,
  icon: Icon,
}: StatCardProps) {
  return (
    <Card className="hover-lift hover-glow-primary group relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-1 blur-sm group-hover:blur-md transition-all opacity-60 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(to right, transparent, hsl(0, 100%, 45%), transparent)",
        }}
      />
      <CardContent className="p-6">
        <div className="space-y-3">
          {/* Icon */}
          {Icon && (
            <div
              className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
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
          )}

          {/* Title */}
          <p className="text-xs uppercase tracking-wide text-muted-foreground font-medium">
            {title}
          </p>

          {/* Value */}
          <div className="flex items-baseline gap-2">
            <h3 className="text-4xl font-bold tracking-tight">{value}</h3>
            {unit && (
              <span className="text-lg text-muted-foreground font-medium">
                {unit}
              </span>
            )}
          </div>

          {/* Trend */}
          {trend && (
            <div className="flex items-center gap-1.5 pt-1">
              {trendUp ? (
                <ArrowUp className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <ArrowDown className="w-3.5 h-3.5 text-red-500" />
              )}
              <span
                className={cn(
                  "text-xs font-medium",
                  trendUp
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-red-600 dark:text-red-400"
                )}
              >
                {trend}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
