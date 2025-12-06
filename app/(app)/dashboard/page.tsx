"use client"

import { AppHeader } from "@/components/layout/app-header"
import { StatCard } from "@/components/dashboard/stat-card"
import { EmptyState } from "@/components/dashboard/empty-state"
import { BarChart3, Map, Activity, Users } from "lucide-react"
import { CONTENT } from "@/lib/content"

export default function DashboardPage() {
  const stats = CONTENT.dashboard.stats
  const icons = [Activity, Users, BarChart3, Map]

  return (
    <div>
      <AppHeader title="Dashboard" />

      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* HACK: Edytuj wartości KPI w lib/content.ts */}

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, index) => {
            const IconComponent = icons[index]
            return (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                unit={stat.unit}
                trend={stat.trend}
                trendUp={stat.trendUp}
                icon={IconComponent}
              />
            )
          })}
        </div>

        {/* Empty States - Placeholder for real content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <EmptyState
            icon={BarChart3}
            title="Wykres pojawi się tutaj"
            description="Placeholder dla wizualizacji danych. Zintegruj z biblioteką Recharts lub podobną."
          />
          <EmptyState
            icon={Map}
            title="Mapa zostanie załadowana"
            description="Placeholder dla komponentu mapy. Użyj React-Leaflet lub Mapbox GL."
          />
        </div>

        {/* Additional Empty State */}
        <EmptyState
          icon={Activity}
          title="Tabela z danymi"
          description="Placeholder dla TanStack Table lub podobnego komponentu tabelarycznego z danymi do analizy."
        />
      </div>
    </div>
  )
}
