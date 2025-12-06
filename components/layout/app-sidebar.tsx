"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Settings,
  FileText,
  BarChart3,
  Home,
} from "lucide-react"
import { CONTENT } from "@/lib/content"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"

const menuItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/reports", label: "Reports", icon: FileText },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 border-r bg-card">
      <div className="flex flex-col h-full w-full">
        {/* Logo */}
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all"
              style={{ backgroundColor: "hsl(0, 100%, 45%)" }}
            >
              <span className="font-bold text-lg" style={{ color: "white" }}>
                {CONTENT.project.name.charAt(1) || "H"}
              </span>
            </div>
            <span className="font-bold text-lg">{CONTENT.project.name}</span>
          </Link>
        </div>

        <Separator />

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                      isActive
                        ? "bg-muted/50 border border-border shadow-sm"
                        : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <Separator />

        {/* Bottom Section */}
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-medium text-muted-foreground">
              Theme
            </span>
            <ThemeToggle />
          </div>

          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </aside>
  )
}
