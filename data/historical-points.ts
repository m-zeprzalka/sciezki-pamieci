// PLIK: data/historical-points.ts

// --- 1. DEFINICJE TYPÓW (Wewnątrz pliku dla bezpieczeństwa) ---
export type PointCategory =
  | "budynek"
  | "pomnik"
  | "rzeźba"
  | "miejsce_pamieci"
  | "muzeum"
  | "sacrum"
  | "miejsce"
  | "atrakcja"
  | "dzielnica"
  | "park"
  | "technika"
  | string

export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
}

export interface HistoricalPoint {
  id: string
  name: string
  lat: number
  lng: number
  category: PointCategory
  image: string
  description: string
  year: string
  historicalPeriod: string
  quiz: QuizQuestion[]
}

// --- 2. KONFIGURACJA MAPY ---
// Środek mapy ustawiony na Stary Rynek/Mostową
export const BYDGOSZCZ_CENTER = {
  lat: 53.1228,
  lng: 18.0005,
}

// Promień zaliczenia punktu (40m jest bezpieczne dla GPS w telefonach)
export const PROXIMITY_RADIUS = 40

// --- 3. BAZA DANYCH: TOP 15 MIEJSC ---
export const historicalPoints: HistoricalPoint[] = [
  {
    id: "1",
    name: "Przechodzący przez Rzekę",
    // Punkt zawieszony nad wodą, blisko mostu
    lat: 53.12334,
    lng: 18.00161,
    category: "rzeźba",
    image: "/images/przechodzacy.jpg",
    description:
      "Ikona Bydgoszczy. Rzeźba linoskoczka balansującego na linie nad rzeką Brdą. Została odsłonięta 1 maja 2004 roku, w dniu wejścia Polski do Unii Europejskiej. Środek ciężkości figury jest położony poniżej liny, dzięki czemu rzeźba utrzymuje równowagę w każdych warunkach pogodowych.",
    year: "2004",
    historicalPeriod: "Współczesność",
    quiz: [
      {
        question: "Co symbolizuje ta rzeźba?",
        options: [
          "Wejście Polski do UE",
          "Historię cyrku",
          "Walkę z powodzią",
          "Zawody pływackie",
        ],
        correctIndex: 0,
      },
      {
        question: "Gdzie znajduje się środek ciężkości rzeźby?",
        options: [
          "W głowie",
          "Poniżej liny (w nogach)",
          "W rękach",
          "W tyczce",
        ],
        correctIndex: 1,
      },
      {
        question: "Nad jaką rzeką wisi rzeźba?",
        options: ["Wisłą", "Brdą", "Notecią", "Odrą"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "2",
    name: "Spichrze nad Brdą",
    // Główne wejście do Muzeum przy ul. Grodzkiej 7-11
    lat: 53.12293301377799,
    lng: 18.00158783973981,

    category: "budynek",
    image: "/images/spichrze.jpg",
    description:
      "Najbardziej rozpoznawalny symbol miasta, widoczny w logo Bydgoszczy. Z dawnego zespołu pięciu szachulcowych spichlerzy zbożowych, do dziś przetrwały trzy. Powstały na przełomie XVIII i XIX wieku. Obecnie są siedzibą Muzeum Okręgowego.",
    year: "1793-1800",
    historicalPeriod: "Prusy Południowe",
    quiz: [
      {
        question:
          "Ile spichlerzy z oryginalnego zespołu zachowało się do dziś?",
        options: ["Dwa", "Trzy", "Pięć", "Jeden"],
        correctIndex: 1,
      },
      {
        question: "Co znajduje się w logo Bydgoszczy?",
        options: ["Łuczniczka", "Spichrze", "Opera Nova", "Ratusz"],
        correctIndex: 1,
      },
      {
        question: "Co pierwotnie przechowywano w budynkach?",
        options: ["Broń", "Zboże", "Sól", "Tkaniny"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "3",
    name: "Młyny Rothera",
    // TWOJE WSPÓŁRZĘDNE (Taras/Woda)
    lat: 53.122945,
    lng: 17.994954,
    category: "budynek",
    image: "/images/mlyny-rothera.jpg",
    description:
      "Potężny kompleks przemysłowy na Wyspie Młyńskiej z połowy XIX wieku. Składa się z młyna i dwóch spichlerzy. Po spektakularnej rewitalizacji zakończonej w 2021 roku, stał się nowoczesnym centrum nauki i kultury z tarasami widokowymi.",
    year: "1849",
    historicalPeriod: "XIX wiek",
    quiz: [
      {
        question: "Na jakiej wyspie znajdują się Młyny?",
        options: [
          "Wyspie Sobieszewskiej",
          "Wyspie Młyńskiej",
          "Wyspie Wielkanocnej",
          "Wyspie Daliowej",
        ],
        correctIndex: 1,
      },
      {
        question: "Kiedy zakończono rewitalizację obiektu?",
        options: ["1990", "2004", "2021", "2023"],
        correctIndex: 2,
      },
      {
        question: "Jakiemu celowi służyły pierwotnie?",
        options: [
          "Produkcji mąki",
          "Produkcji prądu",
          "Produkcji broni",
          "Jako hotel",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    id: "4",
    name: "Opera Nova",
    // Wejście główne (Rotunda)
    lat: 53.12458,
    lng: 17.99723,
    category: "budynek",
    image: "/images/opera-nova.jpg",
    description:
      "Jeden z najnowocześniejszych teatrów muzycznych w Polsce, malowniczo położony w zakolu Brdy. Jego budowa trwała ponad 30 lat, zyskując przydomek 'białego wieloryba'. Dziś jest gospodarzem Bydgoskiego Festiwalu Operowego.",
    year: "2006",
    historicalPeriod: "XXI wiek",
    quiz: [
      {
        question: "Jak nazywano budynek podczas długiej budowy?",
        options: [
          "Szklana Pułapka",
          "Biały Wieloryb",
          "Zamek nad Wodą",
          "Titanic",
        ],
        correctIndex: 1,
      },
      {
        question: "W jakim kształcie rzeki położona jest Opera?",
        options: [
          "W prostym korycie",
          "W zakolu (łuku)",
          "Przy wodospadzie",
          "Na wyspie",
        ],
        correctIndex: 1,
      },
      {
        question: "Jaki kolor dominuje na elewacji?",
        options: ["Czerwony", "Biały", "Czarny", "Złoty"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "5",
    name: "Pomnik Walki i Męczeństwa",
    // Płyta Starego Rynku, przed pomnikiem
    lat: 53.122151511497606,
    lng: 17.99991417461088,

    category: "pomnik",
    image: "/images/pomnik-walki.jpg",
    description:
      "Monumentalny pomnik na Starym Rynku upamiętniający ofiary II wojny światowej. Stoi w miejscu publicznych egzekucji dokonanych przez nazistów na mieszkańcach Bydgoszczy we wrześniu 1939 roku (tzw. Krwawa Niedziela).",
    year: "1969",
    historicalPeriod: "PRL / Pamięć II WŚ",
    quiz: [
      {
        question: "Co wydarzyło się w tym miejscu w 1939 roku?",
        options: [
          "Jarmark świąteczny",
          "Publiczne egzekucje",
          "Budowa ratusza",
          "Defilada wojskowa",
        ],
        correctIndex: 1,
      },
      {
        question: "Gdzie stoi pomnik?",
        options: [
          "Na Starym Rynku",
          "Przy Dworcu",
          "W Myślęcinku",
          "Na moście",
        ],
        correctIndex: 0,
      },
      {
        question: "Z jakiego materiału jest wykonana główna bryła?",
        options: ["Z plastiku", "Z brązu", "Z drewna", "Z betonu"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "6",
    name: "Katedra Bydgoska",
    // Wejście główne od ul. Farnej
    lat: 53.12289483180527,
    lng: 17.999125858213457,

    category: "sacrum",
    image: "/images/katedra.jpg",
    description:
      "Najstarszy budynek w Bydgoszczy, gotycka fara z XV wieku. Wyróżnia się niezwykle kolorowym wnętrzem (polichromie). W ołtarzu głównym znajduje się słynący łaskami obraz Matki Bożej Pięknej Miłości trzymającej różę.",
    year: "1502",
    historicalPeriod: "Średniowiecze",
    quiz: [
      {
        question: "Co trzyma w dłoni Matka Boża na obrazie?",
        options: ["Miecz", "Różę", "Książkę", "Jabłko"],
        correctIndex: 1,
      },
      {
        question: "W jakim stylu zbudowano kościół?",
        options: ["Gotyckim", "Barokowym", "Nowoczesnym", "Romańskim"],
        correctIndex: 0,
      },
      {
        question: "Czy jest to najstarszy budynek w mieście?",
        options: ["Nie", "Tak", "Nie wiadomo", "Zbudowano go wczoraj"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "7",
    name: "Łuczniczka",
    // Skwer przed Teatrem Polskim (Park Kochanowskiego)
    lat: 53.13089064998661,
    lng: 18.012108802528328,

    category: "rzeźba",
    image: "/images/luczniczka.jpg",
    description:
      "Jeden z najstarszych symboli miasta (1910 r.). Klasyczna rzeźba nagiej kobiety napinającej łuk. Kiedyś budziła skandal obyczajowy, dziś stoi w sercu Dzielnicy Muzycznej. Oryginał znajduje się naprzeciwko Teatru Polskiego.",
    year: "1910",
    historicalPeriod: "Zabór pruski",
    quiz: [
      {
        question: "Co robi postać przedstawiona na rzeźbie?",
        options: ["Biegnie", "Napina łuk", "Gra na harfie", "Czyta książkę"],
        correctIndex: 1,
      },
      {
        question: "Gdzie stoi oryginał rzeźby?",
        options: [
          "Na Rynku",
          "W Parku Kochanowskiego",
          "W Warszawie",
          "W muzeum",
        ],
        correctIndex: 1,
      },
      {
        question: "Dlaczego rzeźba budziła kiedyś kontrowersje?",
        options: [
          "Przez nagość postaci",
          "Przez koszt budowy",
          "Przez zły materiał",
          "Przez autora",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    id: "8",
    name: "Fontanna Potop",
    // Środek niecki fontanny w Parku Kazimierza Wielkiego
    lat: 53.126267996594294,
    lng: 18.0059981171024,

    category: "pomnik",
    image: "/images/potop.jpg",
    description:
      "Imponująca, wielofigurowa fontanna przedstawiająca biblijny Potop. Oryginał przetopiono na cele wojenne w 1943 roku. Dzięki ofiarności mieszkańców Bydgoszczy, została wiernie zrekonstruowana i odsłonięta ponownie w 2014 roku.",
    year: "1904 / 2014",
    historicalPeriod: "Rekonstrukcja",
    quiz: [
      {
        question: "Jaka scena biblijna jest przedstawiona?",
        options: [
          "Wygnanie z raju",
          "Potop",
          "Wieża Babel",
          "Ostatnia Wieczerza",
        ],
        correctIndex: 1,
      },
      {
        question: "Co stało się z oryginałem podczas wojny?",
        options: [
          "Został ukradziony",
          "Przetopiono go na broń",
          "Zatonął",
          "Ukryto go",
        ],
        correctIndex: 1,
      },
      {
        question: "Dzięki komu odbudowano fontannę?",
        options: [
          "Dzięki Rządowi",
          "Dzięki zbiórkom mieszkańców",
          "Dzięki UE",
          "Dzięki sponsorowi",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "9",
    name: "Barka Lemara",
    // Nabrzeże przy Spichrzach
    lat: 53.12311,
    lng: 18.00188,
    category: "muzeum",
    image: "/images/barka-lemara.jpg",
    description:
      "Żywe muzeum tradycji wodniackich. Zabytkowa barka towarowa z 1937 roku, zacumowana na Brdzie. W środku można zobaczyć, jak żyły rodziny szyprów, którzy spławiali towary rzeką do Gdańska i Berlina.",
    year: "1937",
    historicalPeriod: "II RP",
    quiz: [
      {
        question: "Czym jest Lemara?",
        options: [
          "Statkiem pasażerskim",
          "Barką towarową",
          "Okrętem wojennym",
          "Jachtem",
        ],
        correctIndex: 1,
      },
      {
        question: "Kto mieszkał na takich barkach?",
        options: ["Rybacy", "Rodziny szyprów", "Żołnierze", "Turyści"],
        correctIndex: 1,
      },
      {
        question: "Gdzie zacumowana jest barka?",
        options: [
          "Na Wiśle",
          "Na Brdzie (przy Spichrzach)",
          "W porcie morskim",
          "Na jeziorze",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "10",
    name: "Okno Twardowskiego",
    // Stary Rynek 15 (okno na piętrze)
    lat: 53.12207872298885,
    lng: 18.001176871653946,

    category: "atrakcja",
    image: "/images/twardowski.jpg",
    description:
      "Ruchoma figura legendarnego czarnoksiężnika, która ukazuje się w oknie kamienicy przy Starym Rynku codziennie o 13:13 i 21:13. Towarzyszy temu muzyka, dymy i diabelski śmiech. Legenda głosi, że Twardowski bawił w Bydgoszczy w 1560 roku.",
    year: "2006",
    historicalPeriod: "Legenda / Współczesność",
    quiz: [
      {
        question: "O której godzinie pojawia się Twardowski?",
        options: ["12:00", "13:13", "15:00", "17:00"],
        correctIndex: 1,
      },
      {
        question: "Gdzie pojawia się figura?",
        options: ["Na balkonie", "W oknie kamienicy", "Na dachu", "W drzwiach"],
        correctIndex: 1,
      },
      {
        question: "Kim był Pan Twardowski?",
        options: ["Królem", "Czarnoksiężnikiem", "Piekarzem", "Rycerzem"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "11",
    name: "Wieża Ciśnień",
    // Punkt na szczycie Wzgórza Dąbrowskiego (wejście)
    lat: 53.11966490729167,
    lng: 17.990675163541177,

    category: "budynek",
    image: "/images/wieza-cisnien.jpg",
    description:
      "Neogotycka wieża stojąca na szczycie wzgórza w parku Dąbrowskiego. Kiedyś regulowała ciśnienie wody w mieście, dziś mieści Muzeum Wodociągów i taras widokowy, z którego widać całą panoramę Bydgoszczy.",
    year: "1900",
    historicalPeriod: "Przełom XIX/XX wieku",
    quiz: [
      {
        question: "Co znajduje się na szczycie wieży?",
        options: ["Restauracja", "Taras widokowy", "Zegar", "Basen"],
        correctIndex: 1,
      },
      {
        question: "Jakie muzeum mieści się w środku?",
        options: [
          "Muzeum Zegarów",
          "Muzeum Wodociągów",
          "Muzeum Pożarnictwa",
          "Muzeum Lotnictwa",
        ],
        correctIndex: 1,
      },
      {
        question: "W jakim stylu zbudowano wieżę?",
        options: ["Barokowym", "Neogotyckim", "Nowoczesnym", "Renesansowym"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "12",
    name: "Muzeum Mydła i Historii Brudu",
    // Ul. Długa 13 (wejście)
    lat: 53.12148416779133,
    lng: 17.997551385671745,

    category: "muzeum",
    image: "/images/muzeum-mydla.jpg",
    description:
      "Najbrudniejsze muzeum w Polsce! Znajduje się przy ulicy Długiej. Podczas zwiedzania poznasz historię higieny (lub jej braku) przez wieki i własnoręcznie wykonasz pamiątkowe mydło.",
    year: "2012",
    historicalPeriod: "Współczesność",
    quiz: [
      {
        question: "Co wykonują zwiedzający podczas warsztatów?",
        options: ["Świeczkę", "Mydło", "Szczotkę", "Ręcznik"],
        correctIndex: 1,
      },
      {
        question: "O czym opowiada muzeum?",
        options: [
          "O historii prania",
          "O historii higieny i brudu",
          "O produkcji perfum",
          "O modzie",
        ],
        correctIndex: 1,
      },
      {
        question: "Przy jakiej ulicy się znajduje?",
        options: ["Krótkiej", "Długiej", "Szerokiej", "Wąskiej"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "13",
    name: "Exploseum - Muzeum Okręgowe im. Leona Wyczółkowskiego",
    // Wejście do Hangaru (Kasa/Start trasy) - ul. Alfreda Nobla
    lat: 53.070943044397026,
    lng: 18.074024782019414,

    category: "muzeum",
    image: "/images/exploseum.jpg",
    description:
      "Unikalne na skalę światową muzeum w dawnej, tajnej fabryce materiałów wybuchowych III Rzeszy (DAG Fabrik Bromberg). Kompleks ukryty w lesie, połączony tunelami, opowiada historię Alfreda Nobla, koncernu DAG i robotników przymusowych.",
    year: "1939-1945",
    historicalPeriod: "II wojna światowa",
    quiz: [
      {
        question: "Co produkowano tutaj w czasie wojny?",
        options: ["Czołgi", "Materiały wybuchowe", "Samoloty", "Mundury"],
        correctIndex: 1,
      },
      {
        question: "Gdzie ukryta jest fabryka?",
        options: [
          "W centrum miasta",
          "W lesie (Puszcza Bydgoska)",
          "W podziemiach rynku",
          "Na lotnisku",
        ],
        correctIndex: 1,
      },
      {
        question: "Czyjego imienia historię można tu poznać?",
        options: [
          "Alberta Einsteina",
          "Alfreda Nobla",
          "Marii Curie",
          "Thomasa Edisona",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "14",
    name: "Bazylika Rzymskokatolicka pw. św. Wincentego a Paulo",
    // Dokładnie pod wielką kopułą
    lat: 53.127144675326846,
    lng: 18.017310862580423,

    category: "sacrum",
    image: "/images/bazylika.jpg",
    description:
      "Monumentalny kościół z największą kopułą w Bydgoszczy. Wzorowany na rzymskim Panteonie. Jego budowa rozpoczęła się w 1924 roku jako wotum wdzięczności za odzyskanie niepodległości.",
    year: "1924",
    historicalPeriod: "Dwudziestolecie międzywojenne",
    quiz: [
      {
        question: "Na jakiej budowli wzorowana jest Bazylika?",
        options: [
          "Na Koloseum",
          "Na rzymskim Panteonie",
          "Na piramidzie",
          "Na wieży Eiffla",
        ],
        correctIndex: 1,
      },
      {
        question: "Co jest najbardziej charakterystycznym elementem?",
        options: [
          "Wysoka wieża",
          "Ogromna kopuła",
          "Szklany dach",
          "Drewniane drzwi",
        ],
        correctIndex: 1,
      },
      {
        question: "W jakim okresie zaczęto budowę?",
        options: [
          "W średniowieczu",
          "W dwudziestoleciu międzywojennym",
          "W XXI wieku",
          "W baroku",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "15",
    name: "Budynek Poczty Polskiej",
    // Narożnik budynku od strony rzeki
    lat: 53.12383532310098,
    lng: 18.003972600425232,

    category: "budynek",
    image: "/images/poczta.jpg",
    description:
      "Okazały, neogotycki gmach z czerwonej cegły stojący nad samą Brdą. Zbudowany w stylu pruskim pod koniec XIX wieku. Do dziś pełni funkcję Poczty Głównej. Nad wejściem widnieje charakterystyczny zegar.",
    year: "1899",
    historicalPeriod: "Zabór pruski",
    quiz: [
      {
        question: "Z jakiego materiału zbudowano budynek?",
        options: ["Z piaskowca", "Z czerwonej cegły", "Z betonu", "Ze szkła"],
        correctIndex: 1,
      },
      {
        question: "Jaką funkcję pełni budynek?",
        options: ["Muzeum", "Poczty", "Szkoły", "Szpitala"],
        correctIndex: 1,
      },
      {
        question: "W jakim stylu jest wybudowany?",
        options: [
          "Barokowym",
          "Neogotyckim (pruskim)",
          "Renesansowym",
          "Futurystycznym",
        ],
        correctIndex: 1,
      },
    ],
  },
]
