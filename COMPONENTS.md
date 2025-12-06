# 📦 KOMPONENTY - Dokumentacja

## 🎨 Marketing Components (Landing Page)

### Hero

**Ścieżka:** `components/marketing/hero.tsx`

**Props:**

```typescript
interface HeroProps {
  title: string // Główny tytuł (używa gradient)
  subtitle: string // Podtytuł (większy tekst)
  description?: string // Opcjonalny dodatkowy opis
  ctaPrimary?: string // Tekst na głównym przycisku (default: "Uruchom Demo")
  ctaSecondary?: string // Tekst na drugim przycisku (default: "Dokumentacja")
}
```

**Użycie:**

```tsx
<Hero
  title="Moja Aplikacja"
  subtitle="Rewolucja w analizie danych"
  ctaPrimary="Zobacz Demo"
/>
```

**Animacje:** fade-in with stagger, scroll indicator

---

### ProblemCards

**Ścieżka:** `components/marketing/problem-cards.tsx`

**Props:**

```typescript
interface Problem {
  title: string
  description: string
  icon?: LucideIcon // Opcjonalna ikona (default: AlertTriangle, XCircle, Ban)
}

interface ProblemCardsProps {
  problems: Problem[] // Tablica 3 problemów
}
```

**Użycie:**

```tsx
<ProblemCards
  problems={[
    { title: "Problem 1", description: "Opis..." },
    { title: "Problem 2", description: "Opis..." },
    { title: "Problem 3", description: "Opis..." },
  ]}
/>
```

**Style:** Czerwone akcenty (destructive), hover effects

---

### SolutionBento

**Ścieżka:** `components/marketing/solution-bento.tsx`

**Props:**

```typescript
interface Feature {
  title: string
  description: string
  icon?: LucideIcon
  span?: string // "col-span-1" lub "col-span-2" (domyślnie 1)
}

interface SolutionBentoProps {
  features: Feature[] // Tablica 4 funkcji
}
```

**Użycie:**

```tsx
<SolutionBento
  features={[
    { title: "AI Analysis", description: "...", span: "col-span-2" },
    { title: "Real-time", description: "..." },
    { title: "Secure", description: "..." },
    { title: "Scalable", description: "...", span: "col-span-2" },
  ]}
/>
```

**Layout:** Grid 3 kolumny, asymetryczny (niektóre zajmują 2 kolumny)

---

### ImpactMetrics

**Ścieżka:** `components/marketing/impact-metrics.tsx`

**Props:**

```typescript
interface Metric {
  value: string // "95%" lub "2.5M" lub "24/7"
  label: string // Opis metryki
  trend?: string // "+12%" (opcjonalnie)
}

interface ImpactMetricsProps {
  metrics: Metric[]
}
```

**Użycie:**

```tsx
<ImpactMetrics
  metrics={[
    { value: "95%", label: "Redukcja czasu", trend: "+12%" },
    { value: "2.5M PLN", label: "Zaoszczędzone rocznie" },
    { value: "24/7", label: "Dostępność" },
  ]}
/>
```

**Style:** Duże liczby z gradientem, center aligned

---

### TechStackBadges

**Ścieżka:** `components/marketing/tech-stack-badges.tsx`

**Props:**

```typescript
interface TechStackBadgesProps {
  stack: string[] // Tablica nazw technologii
}
```

**Użycie:**

```tsx
<TechStackBadges
  stack={["Next.js 15", "TypeScript", "Claude 3.5", "React-Leaflet"]}
/>
```

**Style:** Badge pills, wrap layout, hover effects

---

## 🖥️ Dashboard Components

### StatCard

**Ścieżka:** `components/dashboard/stat-card.tsx`

**Props:**

```typescript
interface StatCardProps {
  title: string // Nazwa metryki
  value: string // Wartość (np. "142")
  unit?: string // Jednostka (np. "zgłoszeń")
  trend?: string // Trend (np. "+12%")
  trendUp?: boolean // Czy trend jest pozytywny (default: true)
  icon?: LucideIcon // Ikona w prawym górnym rogu
}
```

**Użycie:**

```tsx
<StatCard
  title="Aktywne zgłoszenia"
  value="142"
  unit="zgłoszeń"
  trend="+12%"
  trendUp={true}
  icon={Activity}
/>
```

**Style:** Card z trendem (zielone strzałki w górę, czerwone w dół)

---

### EmptyState

**Ścieżka:** `components/dashboard/empty-state.tsx`

**Props:**

```typescript
interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
}
```

**Użycie:**

```tsx
<EmptyState
  icon={BarChart3}
  title="Wykres pojawi się tutaj"
  description="Placeholder dla wizualizacji"
/>
```

**Zastosowanie:** Placeholder na wykresy/mapy podczas budowy

---

## 🏗️ Layout Components

### MarketingNav

**Ścieżka:** `components/layout/marketing-nav.tsx`

**Props:** Brak (używa `CONTENT.project.name` z `lib/content.ts`)

**Użycie:**

```tsx
<MarketingNav />
```

**Style:** Fixed top, glassmorphism (backdrop-blur), transparent

---

### MarketingFooter

**Ścieżka:** `components/layout/marketing-footer.tsx`

**Props:** Brak (używa `CONTENT` z `lib/content.ts`)

**Użycie:**

```tsx
<MarketingFooter />
```

---

### AppSidebar

**Ścieżka:** `components/layout/app-sidebar.tsx`

**Props:** Brak

**Menu Items:**

```typescript
const menuItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/reports", label: "Reports", icon: FileText },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
]
```

**Edycja:** Zmień `menuItems` aby dodać własne linki

---

### AppHeader

**Ścieżka:** `components/layout/app-header.tsx`

**Props:**

```typescript
interface AppHeaderProps {
  title: string // Tytuł aktualnej strony
}
```

**Użycie:**

```tsx
<AppHeader title="Dashboard" />
```

---

## 🎭 Animacje (Framer Motion)

**Ścieżka:** `lib/animations.ts`

### Podstawowe warianty

```typescript
// Fade in + slide up
import { fadeInUp } from "@/lib/animations"

;<motion.div
  variants={fadeInUp}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Container stagger (dla list)

```typescript
import { staggerContainer, fadeInUp } from "@/lib/animations"

;<motion.div variants={staggerContainer} initial="initial" animate="animate">
  {items.map((item) => (
    <motion.div key={item.id} variants={fadeInUp}>
      {item.name}
    </motion.div>
  ))}
</motion.div>
```

### Dostępne varianty

- `fadeIn` - Pojawienie się
- `fadeInUp` - Pojawienie + przesunięcie w górę
- `fadeInDown` - Pojawienie + przesunięcie w dół
- `slideInLeft` - Wjazd z lewej
- `slideInRight` - Wjazd z prawej
- `scaleIn` - Zoom in
- `staggerContainer` - Animacje dzieci z opóźnieniem
- `pulse` - Pulsowanie (loop)
- `glow` - Migotanie (loop)
- `shake` - Potrząsanie

### Hover effects

```typescript
import { hoverScale, hoverLift } from "@/lib/animations"

;<motion.div whileHover={hoverScale}>Content</motion.div>
```

---

## 🎨 Utility Classes (globals.css)

### Gradient Text

```tsx
<h1 className="gradient-text">Gradient Title</h1>
```

### Glass Effect

```tsx
<div className="glass">Glassmorphism container</div>
```

### Tailwind Presets

- Sections: `py-24` (desktop), `py-16` (mobile)
- Containers: `max-w-7xl mx-auto px-4`
- Cards: Border primary: `border-primary/20 hover:border-primary/40`

---

## 📝 Tworzenie własnych komponentów

### Szablon komponentu

```tsx
"use client" // Jeśli używasz Framer Motion lub hooks

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { fadeInUp } from "@/lib/animations"

interface MyComponentProps {
  // Twoje props
}

export function MyComponent({}: MyComponentProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Card>
        <CardContent className="p-6">{/* Twoja zawartość */}</CardContent>
      </Card>
    </motion.div>
  )
}
```

### Lokalizacja

- Marketing components → `components/marketing/`
- Dashboard components → `components/dashboard/`
- Shared utilities → `components/shared/`

---

**Potrzebujesz więcej komponentów Shadcn?**

```bash
npx shadcn@latest add [component-name]
```

Lista dostępnych: https://ui.shadcn.com/docs/components
