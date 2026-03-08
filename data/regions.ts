import { Region } from "@/types";

export const REGIONS: Region[] = [
  {
    id: "hokkaido", n: "北海道", en: "Hokkaido", num: "01", cnt: "800+",
    img: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800&q=75", css: "bg-hkd",
    desc: "Japan's northern frontier — a vast wilderness of powder snow, lavender fields, volcanic lakes and the freshest seafood in the country. Hokkaido offers a completely different Japan: wide open spaces, world-class skiing in Niseko and Furano, the vibrant city of Sapporo, and indigenous Ainu culture that predates recorded history. At 83,450 km², Hokkaido is Japan's second-largest island and its least densely populated major region, giving it a frontier atmosphere that contrasts sharply with the compact urbanity of Honshu. Four distinct seasons paint the landscape in dramatically different colours — blinding white snow in winter, vivid purple lavender in summer, fiery red and gold foliage in autumn, and delicate cherry blossoms arriving last in the nation each spring (May). The island's volcanic geology creates an extraordinary concentration of hot springs, from the steaming Hell Valley of Noboribetsu to hidden outdoor baths in the wilderness. Hokkaido's food is legendary: the cold seas provide the finest uni, crab, salmon, and scallops in Japan, while the rich farmland produces exceptional dairy, potatoes, and corn. Sapporo's miso ramen, Genghis Khan lamb barbecue, and the freshest sashimi you'll ever eat await.",
    highlights: ["Sapporo Snow Festival (February) — 2 million visitors, massive ice sculptures", "Furano lavender fields (July) — Farm Tomita and rolling purple hills", "Niseko — world-class powder skiing (15m annual snowfall)", "Otaru — romantic canal town, legendary sushi, glasswork", "Shiretoko Peninsula — UNESCO wilderness, brown bears, drift ice", "Hakodate — million-dollar night view, morning market seafood", "Noboribetsu Onsen — Hell Valley, 11 types of thermal water", "Biei Blue Pond — Apple wallpaper fame, patchwork hills", "Tomamu Cloud Sea Terrace — sunrise above the clouds", "Asahiyama Zoo — world-famous penguin parades"],
    access: "2-hour flight from Tokyo Haneda to New Chitose Airport (Sapporo). Shinkansen from Tokyo to Shin-Hakodate-Hokuto in 4 hours. Domestic flights from Osaka, Nagoya, Fukuoka. International flights from Seoul, Taipei, Bangkok, Hong Kong to New Chitose. JR Hokkaido rail network connects major cities. Rental cars are the best way to explore the countryside.",
    bestSeason: "Winter (Dec–Mar) for skiing, snow festivals & onsen. Summer (Jul–Aug) for lavender, hiking & festivals. Autumn (Sep–Oct) for foliage. Spring (May) for late cherry blossoms."
  },
  {
    id: "tohoku", n: "東北", en: "Tōhoku", num: "02", cnt: "600+",
    img: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=800&q=75", css: "bg-thk",
    desc: "The soul of old Japan — six prefectures of misty mountains, ancient hot springs, and some of the country's most spectacular festivals. Tōhoku is where tradition lives most vividly: from the snow-lantern villages of Ginzan Onsen to Matsushima Bay's pine-covered islands, one of Japan's three most scenic views.",
    highlights: ["Matsushima Bay (one of Japan's Three Views)", "Ginzan Onsen — fairy-tale hot spring village", "Nebuta Festival (August, Aomori)", "Zao Snow Monsters (winter)", "Hiraizumi UNESCO temples", "Yamadera mountain temple"],
    access: "Tohoku Shinkansen from Tokyo to Sendai in 90 minutes. Flights to Sendai, Aomori, and Akita airports.",
    bestSeason: "Summer for festivals, Winter for onsen & snow landscapes, Autumn for foliage"
  },
  {
    id: "kanto", n: "関東", en: "Kantō", num: "03", cnt: "1,200+",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=75", css: "bg-knt",
    desc: "The beating heart of modern Japan — home to Tokyo, the world's largest metropolitan area, and its surrounding prefectures rich in history, nature and culture. From Shibuya's neon crossings to Nikko's ornate shrines, Kamakura's Great Buddha to Hakone's steaming valleys, Kantō offers infinite variety within easy reach.",
    highlights: ["Tokyo — Shibuya, Asakusa, Shinjuku, Akihabara", "Nikko Toshogu shrine (UNESCO)", "Kamakura Great Buddha", "Hakone hot springs with Fuji views", "Yokohama Chinatown", "Chichibu & Saitama nature trails"],
    access: "International gateway via Narita (NRT) and Haneda (HND) airports. All major shinkansen lines originate from Tokyo Station.",
    bestSeason: "Spring for cherry blossoms, Autumn for foliage, Year-round for Tokyo"
  },
  {
    id: "chubu", n: "中部", en: "Chūbu", num: "04", cnt: "900+",
    img: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=75", css: "bg-chb",
    desc: "Where the Japanese Alps pierce the sky — Chūbu stretches across the centre of Honshu, from the Pacific coast to the Sea of Japan. This is the land of Mount Fuji, the historic Nakasendo trail, traditional Takayama, and Kanazawa's beautifully preserved geisha districts and gardens.",
    highlights: ["Mount Fuji — Japan's sacred icon", "Kanazawa — Kenrokuen garden & geisha districts", "Takayama — Edo-era old town", "Shirakawa-go UNESCO thatched villages", "Matsumoto Castle (National Treasure)", "Nagano temples & 1998 Olympic legacy"],
    access: "Tokaido Shinkansen to Nagoya (1h40m from Tokyo). Hokuriku Shinkansen to Kanazawa (2h30m). Chubu Centrair Airport (Nagoya).",
    bestSeason: "Summer for Fuji climbing, Winter for skiing & snow villages, Spring & Autumn for Alpine scenery"
  },
  {
    id: "kansai", n: "関西", en: "Kansai", num: "05", cnt: "1,500+",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=75", css: "bg-kns",
    desc: "The cultural soul of Japan — Kansai is where Japanese civilisation began and where it still pulses most vibrantly. Kyoto's thousand temples, Osaka's legendary street food, Nara's sacred deer park, and Kobe's cosmopolitan harbour — all within 30 minutes of each other by train.",
    highlights: ["Kyoto — 17 UNESCO sites, geisha, bamboo groves", "Osaka — Dotonbori, street food capital", "Nara — 1,300 sacred deer, Great Buddha", "Kobe — harbour, Arima Onsen, wagyu beef", "Himeji Castle (UNESCO, National Treasure)", "Mount Koya — Shingon Buddhist monastery town"],
    access: "Kansai International Airport (KIX) for international flights. Tokaido Shinkansen to Kyoto (2h15m) and Shin-Osaka (2h30m) from Tokyo.",
    bestSeason: "Spring for cherry blossoms in Kyoto, Autumn for temple foliage, Year-round for Osaka"
  },
  {
    id: "chugoku", n: "中国", en: "Chūgoku", num: "06", cnt: "500+",
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=75", css: "bg-cgk",
    desc: "History, peace, and extraordinary beauty — Chūgoku's two coasts offer contrasting experiences. The Sanyo (southern) coast brings Hiroshima's powerful Peace Memorial and Miyajima's floating torii, while the San'in (northern) coast hides Izumo Taisha, one of Japan's most sacred Shinto shrines, and the silver-mining town of Iwami Ginzan.",
    highlights: ["Hiroshima Peace Memorial (UNESCO)", "Miyajima — floating torii gate", "Izumo Taisha grand shrine", "Kurashiki — canal-side merchant quarter", "Onomichi — temple-walk hillside town", "Tottori Sand Dunes"],
    access: "Sanyo Shinkansen to Hiroshima (4h from Tokyo, 1h20m from Osaka). Hiroshima Airport for flights.",
    bestSeason: "Spring for Miyajima cherry blossoms, Autumn for Momiji (maple), Year-round for history"
  },
  {
    id: "shikoku", n: "四国", en: "Shikoku", num: "07", cnt: "400+",
    img: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=800&q=75", css: "bg-shk",
    desc: "Japan's island of pilgrimage and hidden beauty — Shikoku is encircled by the famous 88-temple pilgrimage route, a 1,200km spiritual journey established by the monk Kūkai over 1,200 years ago. Beyond the pilgrimage, Shikoku offers dramatic river gorges, Japan's oldest hot spring (Dōgo Onsen), and the spectacular Iya Valley vine bridges.",
    highlights: ["88-temple Shikoku Pilgrimage", "Dōgo Onsen — Japan's oldest hot spring", "Iya Valley vine bridges", "Ritsurin Garden (Takamatsu)", "Shimanto River — Japan's last clear stream", "Naruto whirlpools"],
    access: "Seto Ohashi Bridge from Okayama, or ferries from Kobe/Osaka. Flights to Matsuyama, Takamatsu, and Kochi airports.",
    bestSeason: "Spring & Autumn for pilgrimage walking, Summer for river activities"
  },
  {
    id: "kyushu", n: "九州", en: "Kyūshū", num: "08", cnt: "1,000+",
    img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=75", css: "bg-kys",
    desc: "Fire and water — Kyushu is Japan's volcanic island, home to more hot springs than anywhere else on Earth. From Beppu's steaming hells to Aso's vast caldera, from Nagasaki's poignant history to Fukuoka's legendary ramen stalls, Kyushu blends raw natural power with vibrant culture and Japan's warmest hospitality.",
    highlights: ["Beppu — 2,000+ hot springs, 'hells' tour", "Aso — world's largest caldera", "Fukuoka — Hakata ramen & yatai stalls", "Nagasaki — history, Chinatown, island churches", "Yakushima — ancient cedar forests (UNESCO)", "Kagoshima — Sakurajima active volcano"],
    access: "Sanyo-Kyushu Shinkansen to Hakata/Fukuoka (5h from Tokyo, 2h15m from Osaka). Fukuoka Airport has extensive domestic & Asian routes.",
    bestSeason: "Year-round (mild climate), Spring for cherry blossoms, Autumn for foliage"
  },
  {
    id: "okinawa", n: "沖縄", en: "Okinawa", num: "09", cnt: "700+",
    img: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=75", css: "bg-okn",
    desc: "Japan's tropical paradise — a chain of 160 islands stretching toward Taiwan, with turquoise waters, coral reefs, and a unique Ryukyuan culture distinct from mainland Japan. Okinawa was an independent kingdom until the 19th century, and its castles, cuisine, music and traditions still reflect that proud heritage.",
    highlights: ["Shuri Castle — Ryukyu Kingdom heritage", "Kerama Islands — world-class diving", "Churaumi Aquarium", "Kokusai Street (Naha)", "Traditional Ryukyuan cuisine & awamori", "US military history sites"],
    access: "Flights from Tokyo to Naha (2h30m), Osaka to Naha (2h). No shinkansen connection. Inter-island ferries and flights.",
    bestSeason: "Spring (March–May) for comfortable warmth, Summer for beaches & diving"
  },
];
