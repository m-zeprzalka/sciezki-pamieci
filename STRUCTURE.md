# 📁 STRUKTURA PROJEKTU

## 🗂️ Przegląd głównych folderów

```
basic/
├── app/                    # Next.js App Router
├── components/             # React komponenty
├── lib/                    # Utility functions i helpers
├── data/                   # Mock data (JSON)
├── public/                 # Statyczne pliki (obrazy, ikony)
├── .env.example            # Przykładowy plik środowiskowy
├── README.md               # Główna dokumentacja
├── QUICKSTART.md           # Szybki start
├── CHECKLIST.md            # Lista kontrolna hackathonu
├── COMPONENTS.md           # Dokumentacja komponentów
└── package.json            # Dependencies
```

---

## 📂 Szczegółowa struktura

### `app/` - Routing i strony

```
app/
├── (marketing)/                    # Route Group: Landing Page
│   ├── layout.tsx                 # Layout z NavBar + Footer
│   └── page.tsx                   # Landing Page (5 sekcji)
│
├── (app)/                         # Route Group: Aplikacja
│   ├── layout.tsx                 # Layout z Sidebar + Header
│   └── dashboard/
│       └── page.tsx               # Dashboard z KPI cards
│
├── api/                           # API Routes (puste na start)
│   └── .gitkeep
│
├── layout.tsx                     # Root layout (fonts, metadata)
└── globals.css                    # Global styles + Tailwind
```

**Route Groups wyjaśnienie:**

- `(marketing)` - Landing Page bez sidebara
- `(app)` - Dashboard z sidebarem
- Nawiasy `()` nie pojawiają się w URL

**Dostępne ścieżki:**

- `/` → Landing Page
- `/dashboard` → Dashboard
- `/dashboard/analytics` → 404 (placeholder - do implementacji)
- `/dashboard/reports` → 404 (placeholder - do implementacji)
- `/dashboard/settings` → 404 (placeholder - do implementacji)

---

### `components/` - Komponenty React

```
components/
├── ui/                            # Shadcn/UI (NIE EDYTUJ!)
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   ├── separator.tsx
│   ├── sheet.tsx
│   ├── avatar.tsx
│   ├── input.tsx
│   ├── tabs.tsx
│   ├── scroll-area.tsx
│   └── skeleton.tsx
│
├── marketing/                     # Komponenty Landing Page
│   ├── hero.tsx                  # Główna sekcja (Hero)
│   ├── problem-cards.tsx         # 3 karty z problemami
│   ├── solution-bento.tsx        # Bento grid (4 kafelki)
│   ├── impact-metrics.tsx        # Liczby (metryki)
│   └── tech-stack-badges.tsx     # Badge'e z technologiami
│
├── dashboard/                     # Komponenty Dashboard
│   ├── stat-card.tsx             # KPI card z trendem
│   └── empty-state.tsx           # Placeholder (wykresy/mapy)
│
└── layout/                        # Komponenty layoutu
    ├── marketing-nav.tsx         # Navbar (Landing)
    ├── marketing-footer.tsx      # Footer (Landing)
    ├── app-sidebar.tsx           # Sidebar (Dashboard)
    └── app-header.tsx            # Header (Dashboard)
```

**Konwencja nazewnicza:**

- Pliki: `kebab-case.tsx`
- Komponenty: `PascalCase`
- Przykład: `hero.tsx` → `export function Hero()`

---

### `lib/` - Utilities i konfiguracja

```
lib/
├── content.ts                     # ⭐ PLACEHOLDERY - GŁÓWNY PLIK DO EDYCJI
├── animations.ts                  # Framer Motion variants
└── utils.ts                       # cn() helper (Shadcn)
```

**`content.ts` - Co zawiera:**

- Nazwy projektu i zespołu
- Teksty na Landing Page (hero, problemy, rozwiązania)
- Metryki (impact)
- Lista technologii
- Wartości dla Dashboard (KPI cards)

**`animations.ts` - Dostępne animacje:**

- `fadeIn`, `fadeInUp`, `fadeInDown`
- `slideInLeft`, `slideInRight`
- `scaleIn`, `staggerContainer`
- `pulse`, `glow`, `shake`

---

### `data/` - Mock data

```
data/
└── mocks/
    └── .gitkeep                   # Tutaj dodawaj JSONy
```

**Przykład użycia:**

1. Stwórz plik: `data/mocks/users.json`
2. Importuj: `import users from '@/data/mocks/users.json'`
3. Użyj w komponencie

---

### `public/` - Statyczne pliki

```
public/
├── file.svg                       # Domyślne ikony Next.js
├── globe.svg
├── next.svg
├── vercel.svg
└── window.svg
```

**Dodaj własne:**

- Logo: `public/logo.png`
- Obrazy: `public/images/`
- Ikony: `public/icons/`

**Dostęp z kodu:**

```tsx
<img src="/logo.png" alt="Logo" />
```

---

## 🔧 Pliki konfiguracyjne

### `package.json`

Dependencies projektu. Zainstalowane:

- `next`, `react`, `react-dom`
- `framer-motion` (animacje)
- `lucide-react` (ikony)
- `class-variance-authority`, `clsx`, `tailwind-merge` (utils)

### `tsconfig.json`

Konfiguracja TypeScript. Alias `@/*` = root projektu.

### `tailwind.config.ts`

Konfiguracja Tailwind CSS (Shadcn/UI już skonfigurowany).

### `components.json`

Konfiguracja Shadcn/UI (NIE EDYTUJ ręcznie).

### `.env.example`

Szablon zmiennych środowiskowych. Skopiuj jako `.env.local` i wypełnij.

### `.gitignore`

Co nie trafia do Git (node_modules, .next, .env\*, etc.).

---

## 🎯 Gdzie dodawać własny kod?

### 1. **Edycja tekstów** (Start hackathonu)

```
📝 lib/content.ts
```

### 2. **Nowe komponenty marketingowe**

```
📂 components/marketing/moj-komponent.tsx
```

### 3. **Nowe komponenty dashboardu**

```
📂 components/dashboard/moj-komponent.tsx
```

### 4. **Nowe strony**

```
📂 app/(app)/moja-strona/page.tsx
```

Pamiętaj o dodaniu do `menuItems` w `app-sidebar.tsx`!

### 5. **API Endpoints**

```
📂 app/api/moj-endpoint/route.ts
```

### 6. **Mock data**

```
📂 data/mocks/moje-dane.json
```

### 7. **Obrazy i pliki**

```
📂 public/images/moj-obrazek.png
```

---

## 🚫 Czego NIE EDYTOWAĆ

### ❌ `components/ui/*`

To komponenty Shadcn/UI. Są generowane automatycznie.
Jeśli chcesz zmienić styl, użyj `className` przy użyciu.

### ❌ `node_modules/`

Dependencies. Instalowane przez npm.

### ❌ `.next/`

Build folder. Generowany automatycznie.

### ❌ `lib/utils.ts`

To helper `cn()` od Shadcn. Działa out-of-the-box.

---

## 📦 Jak dodać nową stronę?

### Przykład: Strona "Analytics"

1. **Stwórz plik:**

```
app/(app)/dashboard/analytics/page.tsx
```

2. **Dodaj kod:**

```tsx
"use client"

import { AppHeader } from "@/components/layout/app-header"

export default function AnalyticsPage() {
  return (
    <div>
      <AppHeader title="Analytics" />
      <div className="p-6">
        <h2>Twoja zawartość Analytics</h2>
      </div>
    </div>
  )
}
```

3. **Już działa!** Routing automatyczny: `/dashboard/analytics`

Sidebar już ma ten link (sprawdź `app-sidebar.tsx`).

---

## 🎨 Jak dodać nowy komponent Shadcn?

```bash
npx shadcn@latest add [component-name]
```

Przykłady:

- `npx shadcn@latest add dropdown-menu`
- `npx shadcn@latest add dialog`
- `npx shadcn@latest add form`

Lista wszystkich: https://ui.shadcn.com/docs/components

---

## 📚 Przydatne ścieżki do szybkiego dostępu

| Co chcesz zmienić         | Plik                                      |
| ------------------------- | ----------------------------------------- |
| Teksty na Landing         | `lib/content.ts`                          |
| Hero Section              | `components/marketing/hero.tsx`           |
| Problemy (czerwone karty) | `components/marketing/problem-cards.tsx`  |
| Rozwiązanie (Bento)       | `components/marketing/solution-bento.tsx` |
| Metryki (liczby)          | `components/marketing/impact-metrics.tsx` |
| Dashboard layout          | `app/(app)/layout.tsx`                    |
| Dashboard content         | `app/(app)/dashboard/page.tsx`            |
| Sidebar menu items        | `components/layout/app-sidebar.tsx`       |
| Kolory / CSS tokens       | `app/globals.css`                         |
| Animacje                  | `lib/animations.ts`                       |

---

**Masz pytania o strukturę? Sprawdź COMPONENTS.md dla szczegółów komponentów!**
