import { Spot } from "@/types";

export const SPOTS: Spot[] = [
  {
    id: "tokyo", n: "東京", en: "Tokyo", r: "kanto", rl: "KANTŌ", cat: "city",
    szn: ["spring", "summer", "autumn", "winter"], rt: 4.9, bdg: "Capital",
    desc: "Japan's electric capital — neon towers beside ancient shrines. Shibuya, Asakusa, Shinjuku and endless layers of culture.",
    best: "Year-round", tags: ["Nightlife", "Shopping", "Culture", "Food"],
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=700&q=75", css: "bg-knt",
    longDesc: "Tokyo is the world's most populous metropolitan area and a city of endless contradiction and discovery. Ultramodern skyscrapers tower over wooden shrines; Michelin-starred restaurants sit alongside ¥500 ramen stalls; the serene gardens of the Imperial Palace exist minutes from the sensory overload of Akihabara. Each neighbourhood is its own world — Shibuya for youth culture and fashion, Asakusa for Edo-era tradition, Shinjuku for nightlife and entertainment, Ginza for luxury, Yanaka for old-town charm. Tokyo's transit system moves 8 million people daily with clockwork precision, making it effortless to explore. The city has more Michelin stars than any other city on earth.",
    access: "Narita Airport (NRT, 60–90min by Narita Express) or Haneda Airport (HND, 20–30min by monorail). Tokyo Station is the hub for all shinkansen lines.",
    tips: ["Get a Suica/Pasmo IC card for seamless transit", "Visit Tsukiji Outer Market early morning for the freshest sushi", "Book teamLab exhibitions in advance", "Explore Shimokitazawa for vintage shopping and indie cafes"]
  },
  {
    id: "kyoto", n: "京都", en: "Kyoto", r: "kansai", rl: "KANSAI", cat: "shrine",
    szn: ["spring", "autumn"], rt: 4.9, bdg: "UNESCO ×17",
    desc: "Japan's ancient capital. Geisha, golden pavilions, bamboo groves, zen gardens — 17 UNESCO World Heritage sites.",
    best: "Spring / Autumn", tags: ["UNESCO", "Temples", "Geisha", "Gardens"],
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=700&q=75", css: "bg-kns",
    longDesc: "For over a thousand years (794–1868), Kyoto served as Japan's imperial capital, accumulating a cultural legacy unmatched anywhere in the world. With 17 UNESCO World Heritage sites, 2,000 temples and shrines, and living traditions from geisha arts to tea ceremony, Kyoto is the beating heart of Japanese culture. Walk through the vermillion tunnel of Fushimi Inari's 10,000 torii gates at dawn, contemplate eternity in a Zen rock garden at Ryoan-ji, or catch a glimpse of a maiko in the twilight streets of Gion. The bamboo groves of Arashiyama, the golden Kinkaku-ji, and the timeless beauty of Kiyomizu-dera perched above the eastern hills — every corner of Kyoto tells a story spanning centuries.",
    access: "Tokaido Shinkansen from Tokyo to Kyoto Station (2h15m). From Kansai Airport, JR Haruka Express (75min). City buses and subway cover most attractions.",
    tips: ["Visit Fushimi Inari at sunrise to avoid crowds", "Book a maiko dinner in Gion through your hotel", "Rent a bicycle — Kyoto is flat and cycling-friendly", "Autumn foliage peaks in late November"]
  },
  {
    id: "fuji", n: "富士山", en: "Mount Fuji", r: "chubu", rl: "CHŪBU", cat: "nature",
    szn: ["spring", "summer", "autumn", "winter"], rt: 4.9, bdg: "UNESCO · 3,776m",
    desc: "Japan's iconic sacred peak. Climb in summer, photograph the perfect lake reflection in any season.",
    best: "July – August", tags: ["UNESCO", "Hiking", "Iconic", "Photography"],
    img: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=700&q=75", css: "bg-chb",
    longDesc: "At 3,776 metres, Mount Fuji is Japan's highest peak and its most recognizable symbol — a near-perfect volcanic cone that has inspired artists, poets and pilgrims for millennia. Registered as a UNESCO World Heritage Site in 2013 as a 'sacred place and source of artistic inspiration,' Fuji-san holds deep spiritual significance. The official climbing season runs July to mid-September, when four trails lead to the summit for sunrise (goraiko). Outside climbing season, the Fuji Five Lakes region offers year-round photography opportunities, hot springs, and outdoor activities with Japan's most iconic backdrop.",
    access: "From Tokyo: bus to Kawaguchiko (2h) or Gotemba (1h30m). During climbing season, direct buses to 5th Station trailheads. JR to Mishima or Shin-Fuji station for southern views.",
    tips: ["Book mountain huts months in advance for summit sunrise", "Kawaguchiko offers the classic reflection photo", "Chureito Pagoda is the iconic pagoda-with-Fuji viewpoint", "Winter/spring offer the clearest views"]
  },
  {
    id: "osaka", n: "大阪", en: "Osaka", r: "kansai", rl: "KANSAI", cat: "food",
    szn: ["spring", "summer", "autumn", "winter"], rt: 4.8, bdg: "Food Capital",
    desc: "Japan's kitchen. Dotonbori's neon reflections, takoyaki, ramen, and the most vibrant street food scene in the country.",
    best: "Spring / Autumn", tags: ["Street Food", "Nightlife", "Castle", "Comedy"],
    img: "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?w=700&q=75", css: "bg-kns",
    longDesc: "Osaka is Japan's culinary capital — the city whose motto is 'kuidaore' (eat until you drop). Dotonbori's blazing neon signs reflect in the canal as you navigate between takoyaki (octopus balls), okonomiyaki (savoury pancakes), kushikatsu (deep-fried skewers), and some of the best ramen in Japan. But Osaka is far more than food: it's a city of irrepressible energy, warm-hearted people, and a distinct dialect and humour that sets it apart from Tokyo. Osaka Castle dominates the skyline, the Shinsekai district buzzes with retro charm, and the nightlife in Namba and Amerikamura rivals anywhere in Asia.",
    access: "Kansai International Airport (KIX) — JR Haruka Express to Tennoji (35min) or Nankai Rapi:t to Namba (40min). Shinkansen to Shin-Osaka (2h30m from Tokyo).",
    tips: ["Dotonbori is best at night for the full neon experience", "Try kitsune udon at Dotonbori's 200-year-old shops", "Day-trip to Nara (45min) or Kyoto (15min by shinkansen)", "Osaka Amazing Pass gives free entry to 50+ attractions"]
  },
  {
    id: "hiroshima", n: "広島・宮島", en: "Hiroshima & Miyajima", r: "chugoku", rl: "CHŪGOKU", cat: "culture",
    szn: ["spring", "summer", "autumn"], rt: 4.8, bdg: "UNESCO",
    desc: "A city reborn. Peace Memorial Park alongside Miyajima's floating torii — Japan's most profound and beautiful sites.",
    best: "Spring", tags: ["UNESCO", "History", "Miyajima", "Peace"],
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=75", css: "bg-cgk",
    longDesc: "Hiroshima is a city defined by resilience and hope. The Peace Memorial Park and A-Bomb Dome (UNESCO World Heritage) stand as a powerful reminder and a message of peace that draws visitors from around the world. Yet modern Hiroshima is vibrant and forward-looking — famous for its okonomiyaki (Hiroshima-style layered pancakes), bustling shopping arcades, and the warmth of its people. Just a short ferry ride away, Miyajima Island offers one of Japan's most photographed scenes: the great vermillion torii gate of Itsukushima Shrine appearing to float on the water at high tide, backed by forested mountains and friendly deer.",
    access: "Sanyo Shinkansen to Hiroshima Station (4h from Tokyo, 1h20m from Osaka). JR + ferry to Miyajima (45min from Hiroshima Station).",
    tips: ["Visit the Peace Memorial Museum — allow 2 hours minimum", "Time Miyajima visit with high tide for the 'floating' torii", "Try Hiroshima-style okonomiyaki at Okonomimura food building", "Climb Mount Misen on Miyajima for panoramic views"]
  },
  {
    id: "sapporo", n: "北海道・札幌", en: "Hokkaido & Sapporo", r: "hokkaido", rl: "HOKKAIDO", cat: "city",
    szn: ["winter", "summer"], rt: 4.7, bdg: "Snow Festival",
    desc: "Gateway to Japan's wildest nature. Epic skiing, fresh seafood, lavender fields, and the world-famous Snow Festival.",
    best: "Winter / Summer", tags: ["Snow", "Skiing", "Seafood", "Nature"],
    img: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=700&q=75", css: "bg-hkd",
    longDesc: "Sapporo is Hokkaido's vibrant capital and Japan's fifth-largest city, planned on a grid system during the Meiji era that gives it a uniquely open, Western feel. The Sapporo Snow Festival (February) transforms Odori Park into a wonderland of massive ice sculptures lit up at night, attracting 2 million visitors. Year-round, Sapporo is a food paradise: the freshest seafood in Japan (uni, crab, salmon), miso ramen born here, Genghis Khan lamb barbecue, and the craft beer scene centred on Sapporo Beer Museum. In summer, Hokkaido's lavender fields, flower roads, and hiking trails beckon from nearby Furano and the Daisetsuzan National Park.",
    access: "Direct flights to New Chitose Airport from Tokyo (1h30m), Osaka, and Asian cities. Airport Express to Sapporo Station (37min). Hokkaido Shinkansen to Shin-Hakodate-Hokuto (4h from Tokyo).",
    tips: ["Book Snow Festival hotels months in advance", "Visit Nijo Market for the freshest seafood breakfast", "Day-trip to Otaru (30min) for canal views and sushi", "Rent a car to explore Hokkaido's countryside freely"]
  },
  {
    id: "nara", n: "奈良", en: "Nara", r: "kansai", rl: "KANSAI", cat: "shrine",
    szn: ["spring", "autumn"], rt: 4.6, bdg: "UNESCO",
    desc: "Over 1,300 sacred deer roam freely around Japan's first permanent capital. Tōdai-ji's great bronze Buddha is unmissable.",
    best: "Spring / Autumn", tags: ["UNESCO", "Deer", "Buddha", "History"],
    img: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=700&q=75", css: "bg-kns",
    longDesc: "Nara was Japan's first permanent capital (710–784), and its legacy endures in some of the country's most magnificent temples and shrines. The star attraction is Tōdai-ji, housing the world's largest bronze Buddha (15 metres tall) inside the world's largest wooden building. Over 1,300 sacred deer roam freely through Nara Park, bowing politely for rice crackers — a scene unlike anywhere else on earth. The UNESCO-listed temples of Hōryū-ji (the world's oldest wooden buildings), Kasuga Taisha with its thousands of stone lanterns, and the elegant Nara National Museum make this an essential day trip from Kyoto or Osaka.",
    access: "JR or Kintetsu railway from Kyoto (45min) or Osaka-Namba (35min). Most attractions are walkable from Kintetsu Nara Station.",
    tips: ["Buy deer crackers (shika senbei) — deer bow when you hold them up", "Visit Todai-ji early to avoid tour groups", "Walk to Kasuga Taisha through the atmospheric lantern-lined paths", "Combine with Kyoto — only 45 minutes apart"]
  },
  {
    id: "hakone", n: "箱根", en: "Hakone", r: "kanto", rl: "KANTŌ", cat: "onsen",
    szn: ["spring", "summer", "winter"], rt: 4.6, bdg: "Onsen Resort",
    desc: "The ultimate onsen escape with Fuji views. Open-air baths, world-class art museum, and scenic ropeway rides.",
    best: "Autumn / Winter", tags: ["Onsen", "Mt.Fuji", "Art", "Ryokan"],
    img: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=700&q=75", css: "bg-chb",
    longDesc: "Hakone is Tokyo's favourite hot spring escape — a volcanic valley just 90 minutes from the capital, where steaming sulphuric vents, serene crater lakes, and lush forests create a dramatic backdrop for some of Japan's finest ryokan and onsen. On clear days, Mount Fuji looms majestically over Lake Ashi. The Hakone Loop — combining train, cable car, ropeway, and pirate ship — is one of Japan's most enjoyable sightseeing circuits. The Hakone Open-Air Museum and Pola Museum of Art add cultural depth, while Owakudani's volcanic valley lets you taste eggs boiled in sulphuric hot springs, said to add seven years to your life.",
    access: "Odakyu Romancecar from Shinjuku to Hakone-Yumoto (85min). JR to Odawara (35min by shinkansen), then Hakone Tozan Railway (15min).",
    tips: ["Buy the Hakone Free Pass for unlimited transport on the loop", "Book a ryokan with private onsen (rotenburo) for the ultimate experience", "Clear winter days offer the best Fuji views from Lake Ashi", "Try the black eggs at Owakudani"]
  },
  {
    id: "okinawa", n: "沖縄", en: "Okinawa", r: "okinawa", rl: "OKINAWA", cat: "nature",
    szn: ["spring", "summer"], rt: 4.8, bdg: "Tropical Japan",
    desc: "Japan's tropical paradise — turquoise waters, coral reefs, Ryukyuan culture, world-class diving and endless beaches.",
    best: "Spring / Summer", tags: ["Beach", "Diving", "Culture", "Relaxation"],
    img: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=700&q=75", css: "bg-okn",
    longDesc: "Okinawa is Japan's tropical archipelago — 160 islands stretching 1,000km between Kyushu and Taiwan, with crystal-clear waters, vibrant coral reefs, and a unique Ryukyuan culture completely distinct from mainland Japan. The main island offers the reconstructed Shuri Castle (UNESCO), the world-class Churaumi Aquarium, and the bustling Kokusai Street in Naha. But the outer islands are where Okinawa truly shines: the Kerama Islands offer some of the world's best diving and snorkelling, Ishigaki and Miyako have beaches that rival the Maldives, and the pace of island life embodies the Okinawan philosophy of 'nankurunaisa' (everything will work out).",
    access: "Flights from Tokyo to Naha (2h30m), Osaka to Naha (2h). Inter-island flights and ferries to Kerama, Miyako, Ishigaki and more.",
    tips: ["Visit Kerama Islands for the clearest water in Japan", "Try Okinawan soba, goya champuru, and blue-seal ice cream", "Rent a car on the main island — public transport is limited", "Rainy season is June; March–May and October are ideal"]
  },
];
