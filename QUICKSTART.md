# 🚀 QUICK START GUIDE

## Szybki start w dniu hackathonu

### 1️⃣ Sklonuj/Skopiuj projekt (2 minuty)

```bash
# Z poziomu C:\app\BOILERPLATES
cp -r basic [nazwa-twojego-projektu]
cd [nazwa-twojego-projektu]
```

### 2️⃣ Zainstaluj dependencies (3 minuty)

```bash
npm install
```

### 3️⃣ Edytuj contentyty (10 minut)

Otwórz plik `lib/content.ts` i wypełnij wszystkie placeholdery `[...]`:

**Szybka metoda: Znajdź wszystkie**

- Naciśnij `Ctrl+F` w edytorze
- Szukaj: `[`
- Zamień każdy placeholder na właściwy tekst

**Co edytować:**

- `[NAZWA PROJEKTU]` → Twoja nazwa
- `[KRÓTKI OPIS]` → Elevator pitch (1 zdanie)
- `[PROBLEM 1-3]` → 3 główne problemy
- `[FEATURE 1-4]` → 4 główne funkcje rozwiązania
- `[XX%]` → Metryki wpływu (możesz szacunkować)
- `[AI MODEL]` → Np. "Claude 3.5 Sonnet" lub "GPT-4o"

### 4️⃣ Uruchom dev server (1 minuta)

```bash
npm run dev
```

Otwórz: http://localhost:3000

### 5️⃣ Sprawdź Landing Page

Powinieneś zobaczyć:

- ✅ Hero z gradientowym tytułem
- ✅ 3 karty z problemami (czerwone)
- ✅ 4 kafelki z rozwiązaniem (Bento grid)
- ✅ 3 metryki wpływu (duże liczby)
- ✅ Badge'e z technologiami

### 6️⃣ Sprawdź Dashboard

Przejdź do: http://localhost:3000/dashboard

Powinieneś zobaczyć:

- ✅ Sidebar z menu
- ✅ 4 KPI cards z wartościami z `lib/content.ts`
- ✅ 2 empty states (placeholder na wykresy)

---

## 🎯 Co dalej? (Reszta hackathonu)

### Opcja A: Dodaj prawdziwe dane

1. Stwórz plik JSON w `data/mocks/`
2. Importuj w dashboard: `import data from '@/data/mocks/my-data.json'`
3. Użyj w komponentach

### Opcja B: Dodaj wykres (Recharts)

```bash
npm install recharts
```

```tsx
// W app/(app)/dashboard/page.tsx
import { BarChart, Bar, XAxis, YAxis } from "recharts"

;<BarChart width={600} height={300} data={data}>
  <Bar dataKey="value" fill="#3b82f6" />
  <XAxis dataKey="name" />
  <YAxis />
</BarChart>
```

### Opcja C: Dodaj mapę (React Leaflet)

```bash
npm install leaflet react-leaflet
npm install -D @types/leaflet
```

Stwórz komponent w `components/maps/MapView.tsx` (patrz dokumentacja w README.md)

### Opcja D: Dodaj AI endpoint

Stwórz `app/api/chat/route.ts`:

```typescript
import { OpenAI } from "openai"

export async function POST(req: Request) {
  const { message } = await req.json()

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
  })

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: message }],
  })

  return Response.json({
    reply: response.choices[0].message.content,
  })
}
```

---

## ⏱️ Timeline (Przykładowy)

```
09:00 - Wybór zadania
09:10 - Skopiowanie boilerplate
09:15 - Edycja lib/content.ts
09:30 - Sprawdzenie Landing Page ✅
09:30 - 18:00 - Budowanie logiki w Dashboard
18:00 - 22:00 - Integracja + testy
22:00 - 24:00 - Prezentacja (Landing już gotowy!)
```

---

## 🆘 Troubleshooting

### Build error: "Functions cannot be passed to Client Components"

→ Dodaj `"use client"` na górze pliku

### Framer Motion nie działa

→ Sprawdź czy komponent ma `"use client"`

### Strona nie ładuje się

→ Sprawdź konsolę przeglądarki (F12)
→ Sprawdź terminal (czy są błędy)

### Landing Page jest pusty

→ Sprawdź czy edytowałeś `lib/content.ts`
→ Sprawdź czy nie ma błędów składni w JSON

---

**Powodzenia! 🚀**
