"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Map,
  Trophy,
  Sparkles,
  MapPin,
  Users,
  Brain,
  Smartphone,
  Star,
  TrendingUp,
  Target,
  Zap,
  Shield,
  Camera,
} from "lucide-react"
import { Hero } from "@/components/marketing/hero"
import { SolutionBento } from "@/components/marketing/solution-bento"
import { ImpactMetrics } from "@/components/marketing/impact-metrics"
import { ProblemCards } from "@/components/marketing/problem-cards"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Bydgoszcz – Ścieżki Pamięci 2.0"
        subtitle="Odktyj Bydgoszcz - Gamifikowana turystyka w Twojej kieszeni"
        description="Odkrywaj historie ukryte w pomnikach, rzeźbach i miejscach pamięci. Graj, ucz się i zbieraj punkty eksplorując Bydgoszcz jak nigdy dotąd."
        ctaPrimary="Rozpocznij eksplorację"
        ctaSecondary="Zobacz jak to działa"
      />

      {/* Problem Statement */}
      <ProblemCards
        problems={[
          {
            title: "Niewidoczna Historia",
            description:
              "Codziennie mijamy pomniki i miejsca pamięci, ale nie znamy ich historii. Bydgoszcz jest pełna ukrytych sekretów.",
            icon: Target,
          },
          {
            title: "Nudna Turystyka",
            description:
              "Tradycyjne zwiedzanie to przewodnik i tablice informacyjne. Młode pokolenie potrzebuje czegoś więcej - interakcji, zaangażowania, gamifikacji.",
            icon: Brain,
          },
          {
            title: "Brak Motywacji",
            description:
              "Ludzie nie mają powodu by aktywnie poznawać miasto. Brakuje elementu rywalizacji, nagród i społecznościowego aspektu odkrywania.",
            icon: TrendingUp,
          },
        ]}
      />

      {/* Solution - Feature Bento */}
      <SolutionBento
        features={[
          {
            title: "GPS & Lokalizacja",
            description:
              "Geolokalizacja w czasie rzeczywistym. Odkrywaj miejsca gdy się do nich zbliżysz. OpenStreetMap dla dokładnych map.",
            icon: MapPin,
            span: "md:col-span-1",
          },
          {
            title: "Interaktywne Karty",
            description:
              "Każde miejsce to bogata karta z opisem historycznym, zdjęciami, datami i kategoriami. Poznaj historie najciekawszych miejsc.",
            icon: Sparkles,
            span: "md:col-span-1",
          },
          {
            title: "System Quizów",
            description:
              "3 pytania do każdego miejsca. 100 pkt za 3/3, 50 pkt za 2/3, 25 pkt za 1/3. Ucz się przez zabawę!",
            icon: Brain,
            span: "md:col-span-1",
          },
          {
            title: "Ranking & Rywalizacja",
            description:
              "TOP 10 eksplorerów. Zobacz swoją pozycję i rywalizuj z innymi o miejsce na podium. Udostępniaj swój wynik innym (Social Games)!",
            icon: Trophy,
            span: "md:col-span-2",
          },
          {
            title: "PWA Ready",
            description:
              "Pełna responsywność, dark mode, offline capability. Zainstaluj jak natywną aplikację!",
            icon: Smartphone,
            span: "md:col-span-1",
          },
        ]}
      />

      {/* How It Works - Process */}
      <section className="section-spacing border-t border-border">
        <div className="container-section">
          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                Jak to działa?
              </h2>
              <div className="h-1 w-16 bg-primary rounded-full" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mt-4">
              Cztery proste kroki do odkrywania historii Bydgoszczy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="relative bg-background rounded-2xl p-8 shadow-sm border space-y-4 hover:shadow-md transition-shadow">
              <div
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg"
                style={{
                  backgroundColor: "hsl(0, 100%, 50%)",
                  color: "hsl(0, 0%, 100%)",
                }}
              >
                1
              </div>
              <div
                className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg"
                style={{
                  backgroundColor: "hsl(0, 100%, 45%, 0.08)",
                  border: "1px solid hsl(0, 100%, 45%, 0.15)",
                }}
              >
                <MapPin
                  className="w-5 h-5"
                  style={{ color: "hsl(0, 100%, 45%)" }}
                />
              </div>
              <h3 className="text-xl font-bold">Otwórz Mapę</h3>
              <p className="text-muted-foreground">
                Uruchom aplikację i zobacz interaktywną mapę Bydgoszczy z 8
                punktami historycznymi. Czerwone markery czekają na odkrycie!
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-background rounded-2xl p-8 shadow-sm border space-y-4 hover:shadow-md transition-shadow">
              <div
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg"
                style={{
                  backgroundColor: "hsl(0, 100%, 50%)",
                  color: "hsl(0, 0%, 100%)",
                }}
              >
                2
              </div>
              <div
                className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg"
                style={{
                  backgroundColor: "hsl(0, 100%, 45%, 0.08)",
                  border: "1px solid hsl(0, 100%, 45%, 0.15)",
                }}
              >
                <Sparkles
                  className="w-5 h-5"
                  style={{ color: "hsl(0, 100%, 45%)" }}
                />
              </div>
              <h3 className="text-xl font-bold">Odkryj i Przeczytaj</h3>
              <p className="text-muted-foreground">
                Kliknij marker i przeczytaj fascynującą kartę miejsca. Pełny
                opis historyczny, daty, kategorie i kontekst. Historia ożywa!
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-background rounded-2xl p-8 shadow-sm border space-y-4 hover:shadow-md transition-shadow">
              <div
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg"
                style={{
                  backgroundColor: "hsl(0, 100%, 50%)",
                  color: "hsl(0, 0%, 100%)",
                }}
              >
                3
              </div>
              <div
                className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg"
                style={{
                  backgroundColor: "hsl(0, 100%, 45%, 0.08)",
                  border: "1px solid hsl(0, 100%, 45%, 0.15)",
                }}
              >
                <Trophy
                  className="w-5 h-5"
                  style={{ color: "hsl(0, 100%, 45%)" }}
                />
              </div>
              <h3 className="text-xl font-bold">Quiz & Punkty</h3>
              <p className="text-muted-foreground">
                Rozwiąż 3 pytania o danym miejscu. Zdobądź do 100 punktów w
                każdym z miejsc i wspinaj się w rankingu. Zbierz wszystkie karty
                i zostań mistrzem!
              </p>
            </div>
            {/* Step 4 */}
            <div className="relative bg-background rounded-2xl p-8 shadow-sm border space-y-4 hover:shadow-md transition-shadow">
              <div
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg"
                style={{
                  backgroundColor: "hsl(0, 100%, 50%)",
                  color: "hsl(0, 0%, 100%)",
                }}
              >
                4
              </div>
              <div
                className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg"
                style={{
                  backgroundColor: "hsl(0, 100%, 45%, 0.08)",
                  border: "1px solid hsl(0, 100%, 45%, 0.15)",
                }}
              >
                <Camera
                  className="w-5 h-5"
                  style={{ color: "hsl(0, 100%, 45%)" }}
                />
              </div>
              <h3 className="text-xl font-bold">Stwórz własną galerię</h3>
              <p className="text-muted-foreground">
                Za pomocą wbudowanej funkcji, rób zdjęcia i nagrywaj filmy swoim
                aparatem. Na koniec stwórz własną mozaikę ze zdjęć, którą mozesz
                wyeksportować do pliku graficznego
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <ImpactMetrics
        metrics={[
          {
            value: "8+",
            label: "Miejsc historycznych do odkrycia",
            trend: "↗ +24 pytań",
          },
          {
            value: "100%",
            label: "Mobilna aplikacja PWA",
            trend: "↗ GPS w czasie rzeczywistym",
          },
          {
            value: "∞",
            label: "prosty system dodania nowych miejsc",
            trend: "↗ Rozszerzalne o nowe miejsca",
          },
        ]}
      />

      {/* Tech Stack */}
      <section className="section-spacing border-t border-border">
        <div className="container-section">
          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                Nowoczesny stos technologiczny
              </h2>
              <div className="h-1 w-16 bg-primary rounded-full" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mt-4">
              Tanie w utrzymaniu niezawodne rozwiązanie
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Next.js 16", icon: "⚡" },
              { name: "React 19", icon: "⚛️" },
              { name: "TypeScript", icon: "📘" },
              { name: "Tailwind CSS", icon: "🎨" },
              { name: "React-Leaflet", icon: "🗺️" },
              { name: "Framer Motion", icon: "✨" },
              { name: "Geolocation API", icon: "📍" },
              { name: "localStorage", icon: "💾" },
            ].map((tech, i) => (
              <div
                key={i}
                className="bg-background rounded-xl p-6 shadow-sm border hover:shadow-md hover:border-primary/30 transition-all text-center"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <p className="font-semibold text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Features Highlight */}
      <section className="py-24 bg-muted/30 border-t">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Nowy wymiar zwiedzania
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Turystyka historyczna spotyka gaming
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ścieżki Pamięci to nie tylko aplikacja - to nowy sposób
                doświadczania miasta. Łączymy edukację, rozrywkę i technologię w
                jednym miejscu. Idealne dla szkół, turystów i mieszkańców.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Weryfikowane dane</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Social Ranking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Real-time GPS</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🗺️</div>
                  <div className="space-y-2">
                    <p className="text-5xl font-bold text-primary">8</p>
                    <p className="text-sm text-muted-foreground px-8">
                      Miejsc historycznych z pełnym opisem i quizami
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Zacznij swoją przygodę
                <span className="block text-primary mt-2">
                  z historią Bydgoszczy
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                8 miejsc, 24 pytania, nieskończone możliwości. Każde miejsce ma
                swoją historię - odkryj je wszystkie!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/explore">
                <Button size="lg" className="text-lg px-10 h-16 shadow-xl">
                  <Map className="w-6 h-6 mr-3" />
                  Otwórz mapę teraz
                </Button>
              </Link>
            </div>

            {/* Mini Stats */}
            <div className="pt-12 flex items-center justify-center gap-8 flex-wrap text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Działa na iOS & Android</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>100% darmowa</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Bez rejestracji</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
