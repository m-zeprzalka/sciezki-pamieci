import { HistoricalPoint } from "@/lib/types/historical-point"

export const BYDGOSZCZ_CENTER = {
  lat: 53.1235,
  lng: 18.0084,
}

export const PROXIMITY_RADIUS = 50 // meters

export const historicalPoints: HistoricalPoint[] = [
  {
    id: "1",
    name: "Pomnik Walki i Męczeństwa",
    lat: 53.1235,
    lng: 18.0084,
    category: "pomnik",
    image: "/images/pomnik-walki.jpg",
    description:
      "Pomnik Walki i Męczeństwa na Starym Rynku upamiętnia ofiary II wojny światowej. Wzniesiony w 1960 roku, symbolizuje heroizm mieszkańców Bydgoszczy w walce z okupantem niemieckim. Monument ten jest jednym z najważniejszych miejsc pamięci w mieście, miejscem licznych uroczystości patriotycznych. Jego surowa forma architektoniczna oddaje powagę tematyki.",
    year: "1960",
    historicalPeriod: "II wojna światowa",
    quiz: [
      {
        question: "W którym roku wzniesiono Pomnik Walki i Męczeństwa?",
        options: ["1945", "1960", "1970", "1980"],
        correctIndex: 1,
      },
      {
        question: "Co upamiętnia ten pomnik?",
        options: [
          "Ofiary I wojny światowej",
          "Powstanie Warszawskie",
          "Ofiary II wojny światowej",
          "Powstanie Wielkopolskie",
        ],
        correctIndex: 2,
      },
      {
        question: "Gdzie znajduje się pomnik?",
        options: [
          "Na Wyspie Młyńskiej",
          "Na Starym Rynku",
          "Przy Operze Nova",
          "Nad Brdą",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "2",
    name: "Przechodzący przez Rzekę",
    lat: 53.1211,
    lng: 18.0033,
    category: "rzeźba",
    image: "/images/przechodzacy.jpg",
    description:
      "Słynna rzeźba na Wyspie Młyńskiej przedstawia postać mężczyzny przechodzącego przez Brdę. Stworzona przez Jerzego Kędziorę w 2004 roku, balansuje na linie napiętej nad rzeką. To jeden z najbardziej rozpoznawalnych symboli Bydgoszczy. Rzeźba zmienia pozycję pod wpływem wiatru, tworząc unikalne widowisko. Jest to miejsce często odwiedzane przez turystów z całego świata.",
    year: "2004",
    historicalPeriod: "Współczesność",
    quiz: [
      {
        question: "Kto stworzył rzeźbę Przechodzący przez Rzekę?",
        options: [
          "Igor Mitoraj",
          "Jerzy Kędziora",
          "Magdalena Abakanowicz",
          "Xawery Dunikowski",
        ],
        correctIndex: 1,
      },
      {
        question: "Co jest wyjątkowego w tej rzeźbie?",
        options: [
          "Jest wykonana z brązu",
          "Balansuje na linie nad rzeką",
          "Jest najwyższą rzeźbą w Polsce",
          "Świeci w nocy",
        ],
        correctIndex: 1,
      },
      {
        question: "Gdzie znajduje się rzeźba?",
        options: [
          "Na Starym Rynku",
          "Przy Operze Nova",
          "Na Wyspie Młyńskiej",
          "W parku miejskim",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "3",
    name: "Opera Nova",
    lat: 53.1197,
    lng: 18.0014,
    category: "budynek",
    image: "/images/opera-nova.jpg",
    description:
      "Opera Nova to futurystyczny gmach otwarty w 2006 roku nad brzegiem Brdy. Zaprojektowana przez José Marię García-Paredes, wyróżnia się nowoczesną architekturą przypominającą szklane skrzynie. Opera mieści największą scenę operową w Polsce. Jej fasada nocą świeci kolorami, tworząc spektakularny widok. To nie tylko miejsce kultury, ale też symbol nowoczesnej Bydgoszczy.",
    year: "2006",
    historicalPeriod: "XXI wiek",
    quiz: [
      {
        question: "W którym roku otwarto Operę Nova?",
        options: ["2000", "2004", "2006", "2010"],
        correctIndex: 2,
      },
      {
        question: "Kto zaprojektował Operę Nova?",
        options: [
          "Norman Foster",
          "José María García-Paredes",
          "Zaha Hadid",
          "Daniel Libeskind",
        ],
        correctIndex: 1,
      },
      {
        question: "Nad brzegiem jakiej rzeki stoi Opera?",
        options: ["Wisły", "Odry", "Brdy", "Warty"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "4",
    name: "Most Uniwersytecki",
    lat: 53.1221,
    lng: 18.0052,
    category: "budynek",
    image: "/images/most-uniwersytecki.jpg",
    description:
      "Most Uniwersytecki to zabytkowy most zwodzony nad Brdą, łączący Wyspę Młyńską ze Starym Miastem. Zbudowany w 1914 roku, zachował mechanizm zwodzenia mostu dla przepływu statków. To jeden z nielicznych zachowanych mostów zwodzonych w Polsce. Most jest świadkiem ponad stulecia historii miasta. Obecnie służy również jako punkt widokowy na panoramę Brdy.",
    year: "1914",
    historicalPeriod: "Przełom XIX/XX wieku",
    quiz: [
      {
        question: "Kiedy zbudowano Most Uniwersytecki?",
        options: ["1890", "1914", "1925", "1945"],
        correctIndex: 1,
      },
      {
        question: "Co jest charakterystyczne dla tego mostu?",
        options: [
          "Ma wieże obronne",
          "Jest najdłuższy w Polsce",
          "Zachował mechanizm zwodzenia",
          "Jest wykonany z drewna",
        ],
        correctIndex: 2,
      },
      {
        question: "Co łączy Most Uniwersytecki?",
        options: [
          "Wyspę Młyńską ze Starym Miastem",
          "Dwa brzegi Wisły",
          "Park z miastem",
          "Operę z centrum",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    id: "5",
    name: "Europejskie Centrum Pieniądza",
    lat: 53.1228,
    lng: 18.0097,
    category: "budynek",
    image: "/images/centrum-pieniadza.jpg",
    description:
      "Europejskie Centrum Pieniądza im. Sławomira S. Skrzypka mieści się w dawnym banku na Starym Rynku. To jedyne takie miejsce w Polsce - muzeum poświęcone historii pieniądza od starożytności po współczesność. Posiada bogatą kolekcję monet, banknotów i dokumentów finansowych. Interaktywne wystawy pozwalają poznać fascynujący świat finansów. To obowiązkowy punkt dla pasjonatów numizmatyki i historii gospodarczej.",
    year: "2011",
    historicalPeriod: "XXI wiek",
    quiz: [
      {
        question: "Czemu poświęcone jest Europejskie Centrum Pieniądza?",
        options: [
          "Historii bankowości",
          "Historii pieniądza",
          "Ekonomii współczesnej",
          "Giełdzie papierów wartościowych",
        ],
        correctIndex: 1,
      },
      {
        question: "Czyim imieniem nazwano centrum?",
        options: [
          "Leszka Balcerowicza",
          "Sławomira S. Skrzypka",
          "Eugeniusza Kwiatkowskiego",
          "Władysława Grabskiego",
        ],
        correctIndex: 1,
      },
      {
        question: "Gdzie mieści się centrum?",
        options: [
          "W nowoczesnym biurowcu",
          "W dawnym banku na Starym Rynku",
          "Przy Operze Nova",
          "Na Wyspie Młyńskiej",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "6",
    name: "Młyny Rothera",
    lat: 53.1203,
    lng: 18.0025,
    category: "budynek",
    image: "/images/mlyny-rothera.jpg",
    description:
      "Młyny Rothera to zespół zabytkowych budynków przemysłowych nad Brdą z przełomu XIX i XX wieku. Należały do rodziny Rotherów, prominentnych przemysłowców niemieckich. Młyny były jednym z największych zakładów przemysłowych w przedwojennej Bydgoszczy. Obecnie kompleks jest rewitalizowany i służy celom kulturalnym i gastronomicznym. To przykład udanej adaptacji dziedzictwa industrialnego.",
    year: "1896",
    historicalPeriod: "Industrializacja",
    quiz: [
      {
        question: "Do kogo należały Młyny?",
        options: [
          "Rodziny Rothera",
          "Rodziny Schichauów",
          "Rodziny Poznańskich",
          "Rodziny Scheiblerów",
        ],
        correctIndex: 0,
      },
      {
        question: "Z jakiego okresu pochodzą Młyny?",
        options: [
          "XVIII wieku",
          "Przełomu XIX i XX wieku",
          "Okresu międzywojennego",
          "Po II wojnie światowej",
        ],
        correctIndex: 1,
      },
      {
        question: "Jakiemu celowi obecnie służą Młyny?",
        options: [
          "Nadal produkują mąkę",
          "Są magazynami",
          "Celom kulturalnym i gastronomicznym",
          "Są opuszczone",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "7",
    name: "Kanał Bydgoski",
    lat: 53.1192,
    lng: 17.9987,
    category: "miejsce_pamieci",
    image: "/images/kanal-bydgoski.jpg",
    description:
      "Kanał Bydgoski to historyczna droga wodna łącząca Wisłę z Brdą i Notecią, zbudowana w latach 1773-1775. To jedno z największych osiągnięć inżynierii XVIII wieku w Polsce. Kanał miał ogromne znaczenie dla rozwoju handlu i gospodarki regionu. Jego budowa wymagała przełamywania naturalnych barier terenowych. Dziś służy celom rekreacyjnym i turystycznym, będąc popularnym szlakiem kajakowym.",
    year: "1773-1775",
    historicalPeriod: "XVIII wiek",
    quiz: [
      {
        question: "Kiedy zbudowano Kanał Bydgoski?",
        options: ["1650-1655", "1773-1775", "1820-1825", "1890-1895"],
        correctIndex: 1,
      },
      {
        question: "Co łączy Kanał Bydgoski?",
        options: [
          "Wisłę z Odrą",
          "Wisłę z Wartą",
          "Wisłę z Brdą i Notecią",
          "Brdę z Odrą",
        ],
        correctIndex: 2,
      },
      {
        question: "Jakiemu celowi obecnie służy kanał?",
        options: [
          "Transportowi towarów",
          "Tylko celom rekreacyjnym i turystycznym",
          "Zaopatrzeniu w wodę",
          "Produkcji energii",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "8",
    name: "Katedra pw. św. Marcina i Mikołaja",
    lat: 53.1244,
    lng: 18.0078,
    category: "budynek",
    image: "/images/katedra.jpg",
    description:
      "Katedra bydgoska to monumentalny gotycki kościół z XV wieku, jeden z największych w regionie. Jej budowa trwała ponad 200 lat, zakończona w 1502 roku. Świątynia przetrwała liczne zniszczenia wojenne i pożary. We wnętrzu zachowały się cenne zabytki sztuki sakralnej, w tym średniowieczne freski. Wieże katedry dominują nad panoramą Starego Miasta, będąc jednym z głównych punktów orientacyjnych Bydgoszczy.",
    year: "1466-1502",
    historicalPeriod: "Średniowiecze",
    quiz: [
      {
        question: "W jakim stylu zbudowano katedrę?",
        options: ["Romańskim", "Gotyckim", "Barokowym", "Renesansowym"],
        correctIndex: 1,
      },
      {
        question: "Ile lat trwała budowa katedry?",
        options: ["50 lat", "100 lat", "Ponad 200 lat", "500 lat"],
        correctIndex: 2,
      },
      {
        question: "Komu poświęcona jest katedra?",
        options: [
          "Św. Piotrowi i Pawłowi",
          "Św. Marcinowi i Mikołajowi",
          "Św. Janowi i Jakubowi",
          "Św. Stanisławowi",
        ],
        correctIndex: 1,
      },
    ],
  },
]
