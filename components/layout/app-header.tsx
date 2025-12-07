"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bell, Menu, Home } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Settings, FileText, BarChart3 } from "lucide-react"
import { CONTENT } from "@/lib/content"
import { useTheme } from "next-themes"

const menuItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/reports", label: "Reports", icon: FileText },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
]

interface AppHeaderProps {
  title: string
}
export function AppHeader({ title }: AppHeaderProps) {
  const pathname = usePathname()
  const { theme } = useTheme()

  return (
    <header className="sticky top-0 z-10 h-14 sm:h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between h-full px-4 sm:px-6">
        {/* Left: Mobile Menu + Title */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-64 p-0 border-r border-border shadow-2xl"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div
                className="flex flex-col h-full"
                style={{
                  backgroundColor:
                    theme === "dark" ? "hsl(0, 0%, 5%)" : "hsl(0, 0%, 100%)",
                }}
              >
                {/* Logo */}
                <div className="p-6 border-b border-border bg-muted/20">
                  <Link href="/" className="flex items-center gap-2 group">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all"
                      style={{ backgroundColor: "hsl(0, 100%, 45%)" }}
                    >
                      <span
                        className="font-bold text-lg"
                        style={{ color: "white" }}
                      >
                        {CONTENT.project.name.charAt(1) || "H"}
                      </span>
                    </div>
                    <span className="font-bold text-lg">
                      {CONTENT.project.name}
                    </span>
                  </Link>
                </div>

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

                {/* Bottom Section */}
                <div className="p-4 space-y-2 border-t border-border bg-muted/30">
                  <div className="flex items-center justify-between px-3 py-2">
                    <span className="text-xs font-medium text-muted-foreground">
                      Theme
                    </span>
                    <ThemeToggle />
                  </div>

                  <Link
                    href="/"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
                  >
                    <Home className="w-4 h-4" />
                    Back to Home
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Title */}
          <h1 className="text-lg sm:text-2xl font-bold">{title}</h1>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1 sm:gap-4">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex relative group"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
          </Button>

          <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-primary/20 shadow-sm">
            <AvatarFallback
              className="text-xs sm:text-sm font-semibold"
              style={{ backgroundColor: "hsl(0, 100%, 45%)", color: "white" }}
            >
              JD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
