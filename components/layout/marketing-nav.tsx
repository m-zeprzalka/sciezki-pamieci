"use client"

import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"
import { CONTENT } from "@/lib/content"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowRight } from "lucide-react"
export function MarketingNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl shadow-sm">
      <div className="container-consistent h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt={CONTENT.project.name}
            className="h-14 object-contain"
          />
        </Link>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button asChild className="group sm:w-auto">
            <Link href="/explore">
              Rozpocznij
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <ThemeToggle />

          <Button asChild variant="outline" size="sm">
            <a
              href="https://github.com/m-zeprzalka/sciezki-pamieci"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
