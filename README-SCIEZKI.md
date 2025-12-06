# 🗺️ Bydgoszcz - Ścieżki Pamięci 2.0

**Gamifikowana aplikacja turystyki historycznej**

Odkrywaj historie ukryte w pomnikach, rzeźbach i miejscach pamięci Bydgoszczy. Graj w stylu "Pokémon GO", ucz się historii i zdobywaj punkty!

---

## 🎯 Koncepcja

**Wyzwanie:** Turystyka historyczna (GovTech Challenge 2025)

**Rozwiązanie:** Aplikacja mobilna łącząca:

- 📍 **Geolokalizację GPS** - odblokuj miejsca podchodząc do nich
- 🎓 **Edukację** - czytaj fascynujące historie
- 🎮 **Gamifikację** - rozwiązuj quizy i zbieraj punkty
- 🏆 **Achievement System** - zostań mistrzem historii Bydgoszczy

---

## ✨ Główne Funkcje

### 1️⃣ Interaktywna Mapa

- Mapa OpenStreetMap z oznaczonymi punktami historycznymi
- Geolokalizacja real-time (pulsujące niebieskie kółko użytkownika)
- Status punktów:
  - 📍 **Dostępny** (czerwony marker - klikalne zawsze dla testów)
  - ✅ **Odkryty** (zielony z checkmarkiem - ukończony quiz)

### 2️⃣ Karty Odkryć

Wszystkie miejsca są zawsze dostępne (bez ograniczeń GPS dla łatwego testowania):

- Piękny modal z animacją odkrycia
- Zdjęcie miejsca (placeholder emoji)
- Opis historii 150-300 słów
- Kategoria (pomnik/rzeźba/budynek/miejsce pamięci)
- Rok powstania i okres historyczny

### 3️⃣ System Quizów

- 3 pytania single-choice o każdym miejscu
- Punktacja:
  - 100 pkt za 3/3 poprawne odpowiedzi
  - 50 pkt za 2/3
  - 25 pkt za 1/3
- Ekran wyników z feedback

### 4️⃣ Progress Tracking

- **Header z punktami** 🏆 (żywy licznik)
- **Progress bar** - odkryte miejsca / total
- **localStorage** - trwały zapis postępów

---

## 🏛️ Lokalizacje (MVP)

Aplikacja zawiera **8 punktów historycznych**:

1. **Pomnik Walki i Męczeństwa** (Stary Rynek, 1960)
2. **Przechodzący przez Rzekę** (Wyspa Młyńska, 2004)
3. **Opera Nova** (nad Brdą, 2006)
4. **Most Uniwersytecki** (most zwodzony, 1914)
5. **Europejskie Centrum Pieniądza** (muzeum, 2011)
6. **Młyny Rothera** (industrialne dziedzictwo, 1896)
7. **Kanał Bydgoski** (inżynieria XVIII w., 1773-1775)
8. **Katedra pw. św. Marcina i Mikołaja** (gotyk, 1466-1502)

---

## 🛠️ Tech Stack

### Frontend

- **Next.js 16** (App Router, Turbopack)
- **React 19** (Client Components)
- **TypeScript 5**
- **Tailwind CSS 4** (inline theme config)
- **Framer Motion** (animacje modali i odkryć)

### Mapy i Geolokalizacja

- **React-Leaflet** (wrappers dla Leaflet)
- **Leaflet.js** (OpenStreetMap)
- **Geolocation API** (wbudowane w przeglądarki)
- **Haversine Formula** (kalkulacja odległości GPS)

### UI Components

- **Shadcn/UI** (Button, Dialog komponenty)
- **Lucide React** (ikony)

### Storage

- **localStorage** (progress, punkty, odkryte miejsca)

---

## 🚀 Instalacja i Uruchomienie

### 1. Sklonuj repozytorium

\`\`\`bash
cd C:\app\BOILERPLATES\sciezki-pamieci
\`\`\`

### 2. Zainstaluj zależności

\`\`\`bash
npm install
\`\`\`

### 3. Uruchom dev server

\`\`\`bash
npm run dev
\`\`\`

Aplikacja dostępna na: **http://localhost:3000**

### 4. Build produkcyjny

\`\`\`bash
npm run build
npm start
\`\`\`

---

## 📱 User Flow

1. **Landing Page** (`/`)

   - Hero z call-to-action
   - "Jak to działa" (3 kroki)
   - CTA "Rozpocznij eksplorację"

2. **Exploration Page** (`/explore`)

   - Request geolocation permission
   - Mapa pełnoekranowa z headerem
   - Real-time tracking lokalizacji

3. **Odkrycie Punktu**

   - Kliknięcie markera → Modal z kartą (zawsze dostępne)
   - Przeczytanie historii

4. **Quiz**

   - 3 pytania z 4 opcjami
   - Progress dots
   - Ekran wyników z punktami

5. **Powrót do Mapy**
   - Zaktualizowane punkty w headerze
   - Zielony marker (odkryte)
   - Progress bar wzrasta

---

## 📂 Struktura Projektu

\`\`\`
sciezki-pamieci/
├── app/
│ ├── (marketing)/
│ │ └── page.tsx # Landing page
│ ├── explore/
│ │ └── page.tsx # Exploration page (mapa)
│ └── globals.css # Styles + Leaflet CSS
├── components/
│ ├── exploration/
│ │ ├── exploration-map.tsx # Główny wrapper (geolocation)
│ │ ├── map-view.tsx # Leaflet MapContainer
│ │ ├── point-card.tsx # Modal odkrycia + quiz
│ │ └── exploration-header.tsx # Header z punktami
│ └── ui/ # Shadcn components
├── data/
│ └── historical-points.ts # 8 lokalizacji + quizy
├── lib/
│ ├── types/
│ │ └── historical-point.ts # TypeScript interfaces
│ └── utils/
│ ├── geolocation.ts # Haversine, distance calc
│ └── progress.ts # localStorage logic
└── package.json
\`\`\`

---

## 🎨 Design System

**Kolory (Bydgoski Theme):**

- Primary: `#8B0000` (bordo/czerwień historyczna)
- Secondary: `#2D5016` (ciemna zieleń)
- Background Light: `#F8F5F0` (pergaminowy beż)
- Akcenty: `#FFD700` (złoto dla achievements)

**Animacje:**

- Fade in modal (Framer Motion)
- Pulsujące markery (CSS animation)
- Spring transitions (discovery cards)

---

## 📊 Metryki Sukcesu

✅ **Techniczne:**

- Geolokalizacja działa płynnie (< 10m dokładność)
- Responsywne na mobile (touch-friendly)
- Offline-ready (localStorage)

✅ **UX:**

- Intuicyjny flow (bez instrukcji)
- Engagement (chęć odkrycia wszystkich 8 miejsc)
- Edukacyjne (zapamiętywanie faktów)

✅ **Performance:**

- Build bez błędów
- Fast initial load (< 3s)
- Smooth animations (60fps)

---

## 🔮 Przyszłe Rozszerzenia

### Faza 2:

- 🖼️ **Prawdziwe zdjęcia** miejsc (obecnie placeholdery)
- 🌐 **PWA** (instalacja jako app)
- 🔔 **Push notifications** (bliskość punktu)
- 👥 **Multi-user leaderboard**

### Faza 3:

- 🎧 **Audio guides** (narracja historii)
- 🗺️ **Więcej miast** (Gdańsk, Kraków, Warszawa)
- 🏅 **Rozszerzone achievements** (odznaki)
- 📸 **User-generated content** (zdjęcia użytkowników)

---

## 👥 Dla Deweloperów

### Dodanie Nowego Punktu

Edytuj `data/historical-points.ts`:

\`\`\`typescript
{
id: "9",
name: "Nowe Miejsce",
lat: 53.1234,
lng: 18.0067,
category: "pomnik",
image: "/images/nowe.jpg",
description: "Twój opis...",
year: "2024",
quiz: [
{
question: "Pytanie?",
options: ["A", "B", "C", "D"],
correctIndex: 0
}
// ... 2 więcej pytań
]
}
\`\`\`

### Włączenie GPS Proximity (Opcjonalnie)

**Obecnie:** Wszystkie miejsca są zawsze dostępne (bez ograniczeń GPS)

**Aby włączyć sprawdzanie odległości GPS (50m radius):**
Odkomentuj logikę w `exploration-map.tsx` (zakomentowane dla testów)

### Resetowanie Postępów

Console przeglądarki:
\`\`\`javascript
localStorage.removeItem('bydgoszcz-sciezki-progress')
\`\`\`

---

## 📄 Licencja

MIT License - GovTech Challenge 2025

---

## 🙏 Credits

- **Mapy:** OpenStreetMap contributors
- **Icons:** Lucide React
- **Framework:** Next.js Team
- **Inspiracja:** Pokémon GO, Geocaching

---

## 📞 Kontakt

**Team:** Bydgoszcz Explorers  
**Hackathon:** GovTech Challenge 2025  
**Kategoria:** Turystyka Historyczna

---

**Odkryj Bydgoszcz na nowo! 🗺️✨**
