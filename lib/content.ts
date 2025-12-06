/**
 * HACKATHON CONTENT CONFIGURATION
 *
 * Edytuj te wartości w dniu hackathonu, aby dostosować aplikację do wybranego zadania.
 * Wszystkie placeholdery zaczynają się od "[" i kończą na "]" - łatwo je znaleźć przez Ctrl+F
 */

export const CONTENT = {
  // ========================================
  // PROJEKT - Podstawowe informacje
  // ========================================
  project: {
    name: "Ścieżki Pamięci",
    tagline: "Odkrywaj historie Bydgoszczy przez grę",
    description:
      "Gamifikowana aplikacja turystyki historycznej łącząca geolokalizację, quizy edukacyjne i system punktów. Odkrywaj pomniki, rzeźby i miejsca pamięci Bydgoszczy w stylu Pokémon GO.",
    hackathon: "GovTech Challenge 2025",
    team: "Bydgoszcz Explorers",
  },

  // ========================================
  // HERO SECTION - Główny nagłówek
  // ========================================
  hero: {
    title: "[NAZWA PROJEKTU]",
    subtitle: "[JEDNO ZDANIE OPISUJĄCE ROZWIĄZANIE]",
    description: "[DODATKOWY KONTEKST - OPCJONALNIE]",
    ctaPrimary: "Uruchom Demo",
    ctaSecondary: "Dokumentacja",
  },

  // ========================================
  // PROBLEMS - 3 główne problemy
  // ========================================
  problems: [
    {
      title: "[PROBLEM 1 - TYTUŁ]",
      description: "[OPIS PROBLEMU 1 - CO JEST NIE TAK?]",
    },
    {
      title: "[PROBLEM 2 - TYTUŁ]",
      description: "[OPIS PROBLEMU 2 - CO JEST NIE TAK?]",
    },
    {
      title: "[PROBLEM 3 - TYTUŁ]",
      description: "[OPIS PROBLEMU 3 - CO JEST NIE TAK?]",
    },
  ],

  // ========================================
  // SOLUTION - Bento Grid (4 główne funkcje)
  // ========================================
  features: [
    {
      title: "[FEATURE 1 - TYTUŁ]",
      description: "[CO ROBI TA FUNKCJA?]",
    },
    {
      title: "[FEATURE 2 - TYTUŁ]",
      description: "[CO ROBI TA FUNKCJA?]",
    },
    {
      title: "[FEATURE 3 - TYTUŁ]",
      description: "[CO ROBI TA FUNKCJA?]",
    },
  ],

  // ========================================
  // IMPACT METRICS - Liczby pokazujące wartość
  // ========================================
  metrics: [
    {
      value: "[XX%]",
      label: "[CO OZNACZA TA LICZBA - NP. REDUKCJA CZASU]",
      trend: "+12%", // Opcjonalnie: trend w górę/dół
    },
    {
      value: "[X mln PLN]",
      label: "[ZAOSZCZĘDZONE PIENIĄDZE / WARTOŚĆ]",
      trend: "+25%",
    },
    {
      value: "[XXX]",
      label: "[LICZBA UŻYTKOWNIKÓW / ZGŁOSZEŃ]",
      trend: "+8%",
    },
  ],

  // ========================================
  // TECH STACK - Użyte technologie
  // ========================================
  tech: [
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn/UI",
    "[AI MODEL - NP. CLAUDE 3.5 / GPT-4]",
    "[DODATKOWA BIBLIOTEKA 1]",
    "[DODATKOWA BIBLIOTEKA 2]",
  ],

  // ========================================
  // DASHBOARD - Mock data dla KPI cards
  // ========================================
  dashboard: {
    stats: [
      {
        title: "[NAZWA METRYKI 1]",
        value: "[WARTOŚĆ - NP. 142]",
        unit: "[JEDNOSTKA - NP. zgłoszeń]",
        trend: "+12%",
        trendUp: true,
      },
      {
        title: "[NAZWA METRYKI 2]",
        value: "[WARTOŚĆ - NP. 8.5]",
        unit: "[JEDNOSTKA - NP. min]",
        trend: "-8%",
        trendUp: true, // Nawet jeśli minus, może być dobrze (np. mniej czasu)
      },
      {
        title: "[NAZWA METRYKI 3]",
        value: "[WARTOŚĆ - NP. 98.5]",
        unit: "%",
        trend: "+2%",
        trendUp: true,
      },
      {
        title: "[NAZWA METRYKI 4]",
        value: "[WARTOŚĆ - NP. 24/7]",
        unit: "[JEDNOSTKA]",
        trend: "100%",
        trendUp: true,
      },
    ],
  },
}

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Sprawdza, czy wszystkie placeholdery zostały wypełnione
 */
export function checkPlaceholders(): string[] {
  const json = JSON.stringify(CONTENT)
  const matches = json.match(/\[.*?\]/g)
  return matches || []
}

/**
 * Zwraca liczbę niewypełnionych placeholderów
 */
export function getPlaceholderCount(): number {
  return checkPlaceholders().length
}
