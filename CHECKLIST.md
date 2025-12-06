# ✅ HACKATHON CHECKLIST

## 📋 Pre-Hackathon (Zrobione!)

- [x] Zainstalowano Next.js 15
- [x] Skonfigurowano Tailwind CSS
- [x] Zainstalowano Shadcn/UI komponenty
- [x] Dodano Framer Motion
- [x] Utworzono Landing Page (5 sekcji)
- [x] Utworzono Mock Dashboard
- [x] Przygotowano placeholdery w `lib/content.ts`

---

## 🏁 Start Hackathonu (Dzień H - pierwsze 30 minut)

### Etap 1: Setup projektu (5 min)

- [ ] Skopiowano folder `basic` → `[moj-projekt]`
- [ ] Uruchomiono `npm install`
- [ ] Uruchomiono `npm run dev`
- [ ] Otwarto http://localhost:3000 (działa!)

### Etap 2: Personalizacja (15 min)

- [ ] Otwarto `lib/content.ts`
- [ ] Zmieniono `[NAZWA PROJEKTU]`
- [ ] Zmieniono `[KRÓTKI OPIS]`
- [ ] Wypełniono 3 problemy
- [ ] Wypełniono 4 funkcje (features)
- [ ] Wypełniono 3 metryki
- [ ] Dodano technologie do listy
- [ ] Zapisano i odświeżono stronę
- [ ] Landing Page wygląda dobrze! ✨

### Etap 3: Konfiguracja (10 min)

- [ ] Skopiowano `.env.example` → `.env.local`
- [ ] Dodano klucze API (jeśli potrzebne):
  - [ ] OPENAI_API_KEY (dla AI)
  - [ ] ANTHROPIC_API_KEY (dla Claude)
  - [ ] NEXT_PUBLIC_MAPBOX_TOKEN (dla map)

---

## 🔨 Development (Główna część hackathonu)

### Dashboard - Podstawa

- [ ] Otwarto `app/(app)/dashboard/page.tsx`
- [ ] Zaktualizowano wartości w KPI cards (z `lib/content.ts`)
- [ ] Sprawdzono czy dashboard się wyświetla

### Funkcjonalność 1: [Twoja pierwsza funkcja]

- [ ] Zaplanowano komponent
- [ ] Stworzono mock data w `data/mocks/`
- [ ] Zaimplementowano komponent
- [ ] Przetestowano w dashboard
- [ ] Dodano do prezentacji (jeśli efektowne)

### Funkcjonalność 2: [Twoja druga funkcja]

- [ ] Zaplanowano komponent
- [ ] Stworzono mock data
- [ ] Zaimplementowano
- [ ] Przetestowano

### Funkcjonalność 3: [Opcjonalnie - jeśli masz czas]

- [ ] ...

### Integracje (jeśli używasz)

- [ ] Zainstalowano dodatkowe biblioteki:
  - [ ] Recharts (wykresy)
  - [ ] React-Leaflet (mapy)
  - [ ] Inna: ****\_\_\_****
- [ ] Zintegrowano z dashboard
- [ ] Przetestowano

### AI Integration (jeśli potrzebna)

- [ ] Stworzono endpoint `/api/chat` lub `/api/analyze`
- [ ] Dodano obsługę błędów
- [ ] Przetestowano z frontendem
- [ ] Dodano loading states

---

## 🎨 Polish & UX (2-4 godziny przed końcem)

### Wizualne poprawki

- [ ] Sprawdzono responsywność (mobile/desktop)
- [ ] Sprawdzono animacje (czy nie są za szybkie/wolne)
- [ ] Dodano loading states tam gdzie potrzebne
- [ ] Sprawdzono dark mode

### Content

- [ ] Sprawdzono wszystkie teksty (brak literówek)
- [ ] Sprawdzono czy liczby w metrikach mają sens
- [ ] Zaktualizowano nazwę zespołu w footerze

### Techniczne

- [ ] Uruchomiono `npm run build` (sprawdzenie błędów)
- [ ] Naprawiono błędy TypeScript (jeśli są)
- [ ] Usunięto console.log'i
- [ ] Przetestowano flow użytkownika:
  - [ ] Landing Page → CTA "Uruchom Demo" → Dashboard
  - [ ] Dashboard → Nawigacja w sidebar → Funkcje

---

## 🎤 Prezentacja (Ostatnie godziny)

### Przygotowanie Demo

- [ ] Sprawdzono czy aplikacja działa lokalnie
- [ ] (Opcjonalnie) Wdrożono na Vercel:
  - [ ] Utworzono konto/zalogowano się
  - [ ] Podłączono repo GitHub
  - [ ] Deploy działa!
  - [ ] Zapisano link: https://****\_\_\_****
- [ ] Przygotowano "happy path" (co kliknąć podczas demo)

### Landing Page jako Pitch Deck

- [ ] Landing wyświetla się poprawnie
- [ ] Wszystkie sekcje są wypełnione
- [ ] Animacje działają (scroll reveal)
- [ ] CTA prowadzi do dashboard

### Dashboard Demo

- [ ] KPI cards pokazują sensowne wartości
- [ ] Główna funkcjonalność działa
- [ ] Nie ma błędów w konsoli
- [ ] Loading states działają

### Backup Plan

- [ ] Nagranie video demo (na wypadek problemów z internetem)
- [ ] Screenshots kluczowych ekranów
- [ ] Notatki do prezentacji (elevator pitch)

---

## 📊 Final Check (30 min przed prezentacją)

- [ ] Aplikacja uruchomiona (localhost lub Vercel)
- [ ] Przeglądarki zamknięte (tylko jedna karta z demo)
- [ ] Sprawdzono routing: `/` i `/dashboard` działają
- [ ] Przećwiczono przejście: Landing → Dashboard
- [ ] Telefon wyciszony 😅
- [ ] Kawa zrobiona ☕

---

## 🎯 Przypomnienie: Co liczy się najbardziej?

1. **Problem statement** (Landing - sekcja "Problem")
2. **Rozwiązanie** (Landing - Bento grid)
3. **Demo działające** (Dashboard - chociaż jedna funkcja)
4. **Prezentacja** (Landing jako pitch deck = ogromny plus!)
5. **UX/UI** (Shadcn + Framer Motion = profesjonalny wygląd)

---

**Ty masz Landing gotowy od początku. To Twoja przewaga! 🚀**
