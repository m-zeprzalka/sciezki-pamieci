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
      "Współczesna ikona miasta autorstwa Jerzego Kędziory. Rzeźba 'balansująca' przedstawia linoskoczka z tyczką, zawieszonego nad Brdą. Odsłonięta 1 maja 2004 r. upamiętnia wejście Polski do Unii Europejskiej. Fenomen rzeźby polega na przesunięciu środka ciężkości poniżej liny (w okolice stóp postaci), co zapewnia jej stabilność nawet przy silnym wietrze.",
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
      "Najważniejszy symbol handlowej historii Bydgoszczy, widniejący w logo miasta. Z pierwotnego kompleksu pięciu spichlerzy o konstrukcji szachulcowej (tzw. mur pruski), do dziś zachowały się trzy (dwa spłonęły w 1960 r.). Zbudowane w latach 1793–1800, służyły do magazynowania zboża spławianego do Gdańska. Obecnie siedziba Muzeum Okręgowego.",
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
    // Taras/Woda
    lat: 53.122945,
    lng: 17.994954,
    category: "budynek",
    image: "/images/mlyny-rothera.jpg",
    description:
      "Monumentalny zespół przemysłowy z połowy XIX wieku, należący pierwotnie do Państwa Pruskiego (tzw. Młyny Królewskie). W skład kompleksu wchodzą: młyn główny oraz spichlerze mączny i zbożowy. Po rewitalizacji nagrodzonej licznymi nagrodami architektonicznymi, obiekt stał się nowoczesnym Parkiem Kultury, miejscem wystaw i spotkań.",
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
      "Gmach w kształcie trzech kręgów, malowniczo położony w zakolu Brdy. Jego budowa trwała ponad 30 lat (od 1973 do 2006), przez co bydgoszczanie nazywali go 'Białym Wielorybem'. Jest to jeden z najlepiej wyposażonych teatrów muzycznych w Polsce i organizator Bydgoskiego Festiwalu Operowego.",
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
    name: "Pomnik Walki i Męczeństwa Ziemi Bydgoskiej",
    // Płyta Starego Rynku, przed pomnikiem
    lat: 53.122151511497606,
    lng: 17.99991417461088,
    category: "pomnik",
    image: "/images/pomnik-walki.jpg",
    description:
      "Monumentalna rzeźba prof. Franciszka Masiaka, ustawiona na Starym Rynku w 1969 roku. Upamiętnia ofiary nazistowskiego terroru, w tym publicznych egzekucji dokonanych w tym miejscu we wrześniu 1939 roku (tzw. Krwawa Niedziela). Pomnik przedstawia grupę osób w momencie egzekucji, symbolizując męczeństwo i opór.",
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
    name: "Katedra św. Marcina i Mikołaja (Fara)",
    // Wejście główne od ul. Farnej
    lat: 53.12289483180527,
    lng: 17.999125858213457,
    category: "sacrum",
    image: "/images/katedra.jpg",
    description:
      "Najstarszy i najcenniejszy zabytek Bydgoszczy, przykład gotyku nadwiślańskiego (XV wiek). Wnętrze zachwyca modernistycznymi polichromiami z lat 20. XX wieku. W ołtarzu głównym czczony jest gotycki obraz Matki Bożej Pięknej Miłości (Matki Bożej z Różą), uważany za najpiękniejszy wizerunek maryjny w Polsce.",
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
      "Dzieło berlińskiego rzeźbiarza Ferdinanda Lepcke z 1910 roku, uważane za jeden z symboli Bydgoszczy. Przedstawia nagą kobietę o klasycznych proporcjach, napinającą łuk. Początkowo budziła kontrowersje obyczajowe. Obecnie oryginał zdobi skwer przed Teatrem Polskim, a kopie znajdują się w kilku miastach Niemiec.",
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
      "Zrekonstruowane arcydzieło Ferdinanda Lepcke. Monumentalna fontanna przedstawia biblijny Potop – ludzi i zwierzęta walczące o przetrwanie. Oryginał z 1904 roku został przetopiony na cele wojenne w 1943 roku (tzw. akcja 'Givt spende'). Dzięki społecznej zbiórce mieszkańców, fontannę wiernie odtworzono i odsłonięto w 2014 roku.",
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
      "Zabytkowa barka towarowa typu 'Gross Finow' z 1937 roku. Jest żywym świadectwem szyperskiej tradycji Bydgoszczy – miasta nierozerwalnie związanego z wodą. Wnętrza ukazują trudne warunki życia i pracy rodzin szyperskich, które spławiały towary Brdą i Wisłą.",
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
    name: "Pan Twardowski (Kamienica)",
    // Stary Rynek 15 (okno na piętrze)
    lat: 53.12207872298885,
    lng: 18.001176871653946,
    category: "atrakcja",
    image: "/images/twardowski.jpg",
    description:
      "Instalacja artystyczna Jerzego Kędziory. Mechaniczna figura legendarnego mistrza czarnej magii ukazuje się w oknie kamienicy nr 15 o godz. 13:13 i 21:13. Spektaklowi towarzyszy muzyka, dym i diabelski śmiech. Nawiązuje to do wizyty Twardowskiego w Bydgoszczy w 1560 roku, kiedy to miał odmłodzić burmistrza.",
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
      "Malownicza, neogotycka budowla z 1900 roku, zlokalizowana w Parku Henryka Dąbrowskiego. Przez dziesięciolecia regulowała ciśnienie w miejskiej sieci wodociągowej. Obecnie mieści unikalne Muzeum Wodociągów, a z tarasu na jej szczycie rozpościera się jedna z najlepszych panoram Bydgoszczy.",
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
      "Unikatowa placówka na skalę europejską, uhonorowana tytułem Najlepszego Produktu Turystycznego 2017. Muzeum opowiada fascynującą historię higieny człowieka – od starożytnych łaźni po PRL-owską pralkę 'Frania'. Integralną częścią zwiedzania są warsztaty, podczas których goście własnoręcznie tworzą mydło.",
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
    name: "Exploseum (DAG Fabrik)",
    // Wejście do Hangaru (Kasa/Start trasy) - ul. Alfreda Nobla
    lat: 53.070943044397026,
    lng: 18.074024782019414,
    category: "muzeum",
    image: "/images/exploseum.jpg",
    description:
      "Ewenement na skalę światową – muzeum techniki wojennej urządzone w budynkach dawnej DAG Fabrik Bromberg. Była to jedna z największych, ściśle tajnych fabryk materiałów wybuchowych III Rzeszy. Betonowe budynki ukryte w lesie połączone są systemem tuneli. Ekspozycja porusza trudne tematy pracy przymusowej, historii koncernu DAG i Alfreda Nobla.",
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
    name: "Bazylika św. Wincentego a Paulo",
    // Dokładnie pod wielką kopułą
    lat: 53.127144675326846,
    lng: 18.017310862580423,
    category: "sacrum",
    image: "/images/bazylika.jpg",
    description:
      "Monumentalna świątynia zaprojektowana przez Adama Ballenstedta, wzorowana na rzymskim Panteonie. Zbudowana jako wotum dziękczynne za powrót Pomorza do Polski. Posiada jedną z największych kopuł żelbetowych w Polsce (średnica 40 metrów).",
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
    name: "Poczta Polska (Dawna Dyrekcja)",
    // Narożnik budynku od strony rzeki
    lat: 53.12383532310098,
    lng: 18.003972600425232,
    category: "budynek",
    image: "/images/poczta.jpg",
    description:
      "Okazały gmach w stylu neogotyckim, wzniesiony dla Cesarskiej Dyrekcji Poczty. Budynek zachował swoją pierwotną funkcję do dziś. Charakterystyczne są: czerwona cegła, masywna bryła i detale architektoniczne (w tym zegar nad wejściem) nawiązujące do tzw. stylu rundbogenstil (stylu łuków kolistych).",
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
