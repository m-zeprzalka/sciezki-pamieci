import { Separator } from "@/components/ui/separator"
import { CONTENT } from "@/lib/content"

export function MarketingFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 border-t border-border bg-gradient-to-b from-background to-muted/30">
      <div className="container-consistent">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            Built for{" "}
            <span className="font-semibold text-foreground">
              {CONTENT.project.hackathon}
            </span>{" "}
            by Team{" "}
            <span className="font-semibold text-foreground">
              {CONTENT.project.team}
            </span>
          </p>

          <p>
            © {currentYear} {CONTENT.project.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
