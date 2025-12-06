import { MarketingNav } from "@/components/layout/marketing-nav"
import { MarketingFooter } from "@/components/layout/marketing-footer"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MarketingNav />
      <main className="min-h-screen pt-16">{children}</main>
      <MarketingFooter />
    </>
  )
}
