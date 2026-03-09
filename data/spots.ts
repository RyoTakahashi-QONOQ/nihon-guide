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
    img: "https://images.unsplash.com/photo-1584505489290-96eb4e406d08?w=700&q=75", css: "bg-kns",
    longDesc: "Osaka is Japan's culinary capital — the city whose motto is 'kuidaore' (eat until you drop). Dotonbori's blazing neon signs reflect in the canal as you navigate between takoyaki (octopus balls), okonomiyaki (savoury pancakes), kushikatsu (deep-fried skewers), and some of the best ramen in Japan. But Osaka is far more than food: it's a city of irrepressible energy, warm-hearted people, and a distinct dialect and humour that sets it apart from Tokyo. Osaka Castle dominates the skyline, the Shinsekai district buzzes with retro charm, and the nightlife in Namba and Amerikamura rivals anywhere in Asia.",
    access: "Kansai International Airport (KIX) — JR Haruka Express to Tennoji (35min) or Nankai Rapi:t to Namba (40min). Shinkansen to Shin-Osaka (2h30m from Tokyo).",
    tips: ["Dotonbori is best at night for the full neon experience", "Try kitsune udon at Dotonbori's 200-year-old shops", "Day-trip to Nara (45min) or Kyoto (15min by shinkansen)", "Osaka Amazing Pass gives free entry to 50+ attractions"]
  },
  {
    id: "hiroshima", n: "広島・宮島", en: "Hiroshima & Miyajima", r: "chugoku", rl: "CHŪGOKU", cat: "culture",
    szn: ["spring", "summer", "autumn"], rt: 4.8, bdg: "UNESCO",
    desc: "A city reborn. Peace Memorial Park alongside Miyajima's floating torii — Japan's most profound and beautiful sites.",
    best: "Spring", tags: ["UNESCO", "History", "Miyajima", "Peace"],
    img: "https://images.unsplash.com/photo-1536488445904-5021d39d2841?w=700&q=75", css: "bg-cgk",
    longDesc: "Hiroshima is a city defined by resilience and hope. The Peace Memorial Park and A-Bomb Dome (UNESCO World Heritage) stand as a powerful reminder and a message of peace that draws visitors from around the world. Yet modern Hiroshima is vibrant and forward-looking — famous for its okonomiyaki (Hiroshima-style layered pancakes), bustling shopping arcades, and the warmth of its people. Just a short ferry ride away, Miyajima Island offers one of Japan's most photographed scenes: the great vermillion torii gate of Itsukushima Shrine appearing to float on the water at high tide, backed by forested mountains and friendly deer.",
    access: "Sanyo Shinkansen to Hiroshima Station (4h from Tokyo, 1h20m from Osaka). JR + ferry to Miyajima (45min from Hiroshima Station).",
    tips: ["Visit the Peace Memorial Museum — allow 2 hours minimum", "Time Miyajima visit with high tide for the 'floating' torii", "Try Hiroshima-style okonomiyaki at Okonomimura food building", "Climb Mount Misen on Miyajima for panoramic views"]
  },
  {
    id: "sapporo", n: "北海道・札幌", en: "Hokkaido & Sapporo", r: "hokkaido", rl: "HOKKAIDO", cat: "city",
    szn: ["winter", "summer"], rt: 4.7, bdg: "Snow Festival",
    desc: "Gateway to Japan's wildest nature. Epic skiing, fresh seafood, lavender fields, and the world-famous Snow Festival.",
    best: "Winter / Summer", tags: ["Snow", "Skiing", "Seafood", "Nature"],
    img: "https://images.unsplash.com/photo-1576829021150-ebc8b46b9fb9?w=700&q=75", css: "bg-hkd",
    longDesc: "Sapporo is Hokkaido's vibrant capital and Japan's fifth-largest city, planned on a grid system during the Meiji era that gives it a uniquely open, Western feel. The Sapporo Snow Festival (February) transforms Odori Park into a wonderland of massive ice sculptures lit up at night, attracting 2 million visitors. Year-round, Sapporo is a food paradise: the freshest seafood in Japan (uni, crab, salmon), miso ramen born here, Genghis Khan lamb barbecue, and the craft beer scene centred on Sapporo Beer Museum. In summer, Hokkaido's lavender fields, flower roads, and hiking trails beckon from nearby Furano and the Daisetsuzan National Park.",
    access: "Direct flights to New Chitose Airport from Tokyo (1h30m), Osaka, and Asian cities. Airport Express to Sapporo Station (37min). Hokkaido Shinkansen to Shin-Hakodate-Hokuto (4h from Tokyo).",
    tips: ["Book Snow Festival hotels months in advance", "Visit Nijo Market for the freshest seafood breakfast", "Day-trip to Otaru (30min) for canal views and sushi", "Rent a car to explore Hokkaido's countryside freely"]
  },
  {
    id: "nara", n: "奈良", en: "Nara", r: "kansai", rl: "KANSAI", cat: "shrine",
    szn: ["spring", "autumn"], rt: 4.6, bdg: "UNESCO",
    desc: "Over 1,300 sacred deer roam freely around Japan's first permanent capital. Tōdai-ji's great bronze Buddha is unmissable.",
    best: "Spring / Autumn", tags: ["UNESCO", "Deer", "Buddha", "History"],
    img: "https://images.unsplash.com/photo-1550303435-1703d8811aaa?w=700&q=75", css: "bg-kns",
    longDesc: "Nara was Japan's first permanent capital (710–784), and its legacy endures in some of the country's most magnificent temples and shrines. The star attraction is Tōdai-ji, housing the world's largest bronze Buddha (15 metres tall) inside the world's largest wooden building. Over 1,300 sacred deer roam freely through Nara Park, bowing politely for rice crackers — a scene unlike anywhere else on earth. The UNESCO-listed temples of Hōryū-ji (the world's oldest wooden buildings), Kasuga Taisha with its thousands of stone lanterns, and the elegant Nara National Museum make this an essential day trip from Kyoto or Osaka.",
    access: "JR or Kintetsu railway from Kyoto (45min) or Osaka-Namba (35min). Most attractions are walkable from Kintetsu Nara Station.",
    tips: ["Buy deer crackers (shika senbei) — deer bow when you hold them up", "Visit Todai-ji early to avoid tour groups", "Walk to Kasuga Taisha through the atmospheric lantern-lined paths", "Combine with Kyoto — only 45 minutes apart"]
  },
  {
    id: "hakone", n: "箱根", en: "Hakone", r: "kanto", rl: "KANTŌ", cat: "onsen",
    szn: ["spring", "summer", "winter"], rt: 4.6, bdg: "Onsen Resort",
    desc: "The ultimate onsen escape with Fuji views. Open-air baths, world-class art museum, and scenic ropeway rides.",
    best: "Autumn / Winter", tags: ["Onsen", "Mt.Fuji", "Art", "Ryokan"],
    img: "https://images.unsplash.com/photo-1703571524623-9d2819679dc7?w=700&q=75", css: "bg-chb",
    longDesc: "Hakone is Tokyo's favourite hot spring escape — a volcanic valley just 90 minutes from the capital, where steaming sulphuric vents, serene crater lakes, and lush forests create a dramatic backdrop for some of Japan's finest ryokan and onsen. On clear days, Mount Fuji looms majestically over Lake Ashi. The Hakone Loop — combining train, cable car, ropeway, and pirate ship — is one of Japan's most enjoyable sightseeing circuits. The Hakone Open-Air Museum and Pola Museum of Art add cultural depth, while Owakudani's volcanic valley lets you taste eggs boiled in sulphuric hot springs, said to add seven years to your life.",
    access: "Odakyu Romancecar from Shinjuku to Hakone-Yumoto (85min). JR to Odawara (35min by shinkansen), then Hakone Tozan Railway (15min).",
    tips: ["Buy the Hakone Free Pass for unlimited transport on the loop", "Book a ryokan with private onsen (rotenburo) for the ultimate experience", "Clear winter days offer the best Fuji views from Lake Ashi", "Try the black eggs at Owakudani"]
  },
  {
    id: "niseko", n: "ニセコ", en: "Niseko", r: "hokkaido", rl: "HOKKAIDO", cat: "nature",
    szn: ["winter", "summer"], rt: 4.8, bdg: "Powder Snow",
    desc: "World-famous powder snow resort — consistently ranked among the planet's top ski destinations with legendary deep, dry snowfall.",
    best: "December – March", tags: ["Skiing", "Powder", "Onsen", "Adventure"],
    img: "https://images.unsplash.com/photo-1582013216055-477035bf7186?w=700&q=75", css: "bg-hkd",
    longDesc: "Niseko is Japan's — and arguably the world's — premier powder snow destination. Located in southwest Hokkaido, the Niseko United resort complex spans four interconnected ski areas: Grand Hirafu, Hanazono, Niseko Village, and Annupuri. What makes Niseko legendary is its snow: an average of 15 metres of incredibly light, dry powder falls each season, carried by Siberian weather systems across the Sea of Japan. The result is a skiing experience that draws enthusiasts from Australia, Asia, Europe and beyond. Beyond the slopes, Niseko offers world-class dining (from ramen to fine French cuisine), natural hot springs where you can soak under falling snow, and summer adventures including rafting, mountain biking, and golf with views of the perfectly conical Mount Yōtei. The town has evolved into a cosmopolitan village with an international atmosphere unique in rural Japan.",
    access: "New Chitose Airport → Niseko by bus (2h30m) or car (2h). From Sapporo: bus (3h) or JR to Kutchan Station (2h) + local bus. Direct resort liner buses operate during ski season.",
    tips: ["Night skiing at Grand Hirafu is magical in falling powder", "Book ski lessons early — NISS and Go Snow are top schools", "Soak in Yukichichibu onsen after skiing for the ultimate après", "Summer green season (June–Sep) offers rafting, cycling and half the crowds"]
  },
  {
    id: "otaru", n: "小樽", en: "Otaru", r: "hokkaido", rl: "HOKKAIDO", cat: "culture",
    szn: ["winter", "spring", "summer", "autumn"], rt: 4.6, bdg: "Canal Town",
    desc: "A romantic port city of gas-lit canals, historic warehouses, legendary sushi, and artisan glass — Hokkaido's most charming day trip.",
    best: "Winter / Year-round", tags: ["Canal", "Sushi", "Glass", "Romance"],
    img: "https://images.unsplash.com/photo-1534678275982-a3989afe85e6?w=700&q=75", css: "bg-hkd",
    longDesc: "Otaru is a city frozen in time — a beautifully preserved port town that was once the financial capital of Hokkaido. Its iconic canal, lined with Victorian-era stone warehouses now converted into restaurants, shops and museums, is one of Japan's most photographed scenes, especially when blanketed in snow and illuminated by gas lamps during the February Snow Light Path Festival (Yuki Akari no Michi). Otaru is famous for three things: sushi (the Otaru Sushi-ya Dōri street has some of Hokkaido's finest), artisan glass (the town's glassworks tradition dates to the herring fishing era), and music boxes (the Music Box Museum houses over 25,000 pieces). The Nikka Whisky Yoichi Distillery, just 25 minutes away, adds another dimension — it's where Masataka Taketsuru, the father of Japanese whisky, chose to build his dream distillery because the climate reminded him of Scotland.",
    access: "JR Rapid train from Sapporo Station to Otaru (32 minutes, ¥750). All main attractions are walkable from Otaru Station. Car from Sapporo via expressway (45min).",
    tips: ["Walk the canal at dusk when the gas lamps are lit", "Eat sushi at Masazushi or Otaru Masazushi on Sushi Street — arrive before noon", "Visit LeTAO for the famous double fromage cheesecake", "Combine with Nikka Yoichi Distillery (25min by JR)"]
  },
  {
    id: "furano", n: "富良野・美瑛", en: "Furano & Biei", r: "hokkaido", rl: "HOKKAIDO", cat: "nature",
    szn: ["summer", "autumn", "winter"], rt: 4.7, bdg: "Flower Fields",
    desc: "Rolling lavender fields, patchwork hills, and the iconic Blue Pond — Hokkaido's most breathtaking countryside landscapes.",
    best: "July (lavender peak)", tags: ["Lavender", "Photography", "Countryside", "Skiing"],
    img: "https://images.unsplash.com/photo-1719264493104-62c8f920e6b8?w=700&q=75", css: "bg-hkd",
    longDesc: "Furano and Biei together form one of Japan's most stunning natural landscapes — a patchwork of rolling hills, flower fields, and farmland set against the dramatic backdrop of the Tokachi mountain range. In summer (late June to early August), the lavender fields of Farm Tomita explode in purple, attracting visitors from across Asia. Biei's 'Patchwork Road' and 'Panoramic Road' wind through a photographer's paradise of colourful crop fields — potatoes, wheat, sunflowers, and wildflowers creating a tapestry of colour across gentle hills. The famous Blue Pond (Shirogane Blue Pond) near Biei glows an otherworldly cobalt blue, created by natural aluminium particles in volcanic spring water. In winter, Furano transforms into an excellent ski resort, while the Blue Pond and surrounding birch forests become a frozen wonderland illuminated at night. The region is also known for Furano cheese, wine, and lavender ice cream.",
    access: "JR Furano Line from Sapporo (2h direct, or transfer at Takikawa/Asahikawa). Lavender Express trains run June–September. By car from Sapporo (2h) or Asahikawa (1h). Norokko sightseeing train between Furano and Biei (summer only).",
    tips: ["Farm Tomita lavender peaks in mid-July — go early morning for fewer crowds", "Biei Blue Pond is most vivid on clear days; winter illumination runs Nov–Jan", "Rent a car or e-bike to explore Biei's patchwork hills at your own pace", "Try lavender soft-serve ice cream at Farm Tomita and Furano cheese at the Cheese Factory"]
  },
  {
    id: "shiretoko", n: "知床半島", en: "Shiretoko Peninsula", r: "hokkaido", rl: "HOKKAIDO", cat: "nature",
    szn: ["summer", "winter"], rt: 4.8, bdg: "UNESCO Wilderness",
    desc: "Japan's last true wilderness — a UNESCO World Heritage peninsula of brown bears, drift ice, volcanic lakes, and primeval forests.",
    best: "July – Sep / Feb (drift ice)", tags: ["UNESCO", "Wildlife", "Bears", "Drift Ice"],
    img: "https://images.unsplash.com/photo-1721270859603-857f33363c79?w=700&q=75", css: "bg-hkd",
    longDesc: "Shiretoko is Japan's wildest place — a remote, mountainous peninsula jutting into the Sea of Okhotsk at the northeastern tip of Hokkaido. Designated a UNESCO World Heritage Site in 2005 for its exceptional ecosystem linking marine and terrestrial environments, Shiretoko is home to one of the densest populations of brown bears in the world, along with Steller's sea eagles, spotted seals, orca whales, and the endangered Blakiston's fish owl. In summer, boat cruises along the peninsula's dramatic coastline reveal cascading waterfalls, sea caves, and bears fishing for salmon along the shore. The Shiretoko Five Lakes offer serene hiking through primeval forest with mountain reflections. Kamuiwakka Hot Falls — a natural hot waterfall you can climb — is one of Japan's most unique experiences. In winter (February–March), the Sea of Okhotsk fills with drift ice (ryūhyō), and visitors can walk on the frozen sea or take icebreaker cruises. The town of Utoro serves as the gateway, while Rausu on the southern side offers exceptional whale and wildlife watching.",
    access: "From Sapporo: domestic flight to Memanbetsu Airport (45min), then bus to Utoro (2h). By car from Sapporo (6h). JR to Shiretoko-Shari Station, then bus to Utoro (50min). In winter, limited access — check road conditions.",
    tips: ["Book bear-watching boat cruises in advance (June–October)", "Drift ice walking tours run mid-February to mid-March — book through Shinra or Goko", "Kamuiwakka Hot Falls requires shuttle bus access (Aug–Oct only)", "Bring bear spray and bells for hiking — this is real bear country"]
  },
  {
    id: "hakodate", n: "函館", en: "Hakodate", r: "hokkaido", rl: "HOKKAIDO", cat: "city",
    szn: ["spring", "summer", "autumn", "winter"], rt: 4.7, bdg: "Million Dollar View",
    desc: "Home to Japan's most famous night view, a historic port with Western architecture, and Hokkaido's best morning market seafood.",
    best: "Year-round", tags: ["Night View", "Seafood", "History", "Western Architecture"],
    img: "https://images.unsplash.com/photo-1622607941516-347b4523d615?w=700&q=75", css: "bg-hkd",
    longDesc: "Hakodate sits at the southern tip of Hokkaido, where the island meets the Tsugaru Strait. Its night view from Mount Hakodate — a sweeping panorama of city lights hugging the narrow isthmus between two bays — has been called one of the world's three greatest night views alongside Hong Kong and Naples. The city's history as one of the first Japanese ports opened to international trade in 1859 left a unique legacy of Western architecture: the Motomachi district is lined with churches, consulates, and Victorian buildings perched on hillside streets that evoke San Francisco more than Japan. The Hakodate Morning Market (Asaichi), operating since 1945, is a seafood lover's paradise — 250 stalls selling the freshest crab, uni (sea urchin), squid, and the famous ikura (salmon roe) don rice bowls. The star-shaped Goryōkaku Fort, Japan's first Western-style citadel, is magnificent when lit up with 1,600 cherry trees in spring. Hakodate is also home to some of Hokkaido's best ramen — a clear, salt-based (shio) broth unique to the city.",
    access: "Hokkaido Shinkansen from Tokyo to Shin-Hakodate-Hokuto (4h), then local train to Hakodate (20min). Flights from Tokyo Haneda (1h20m). Ferry from Aomori (3h40m). By car from Sapporo (4h via expressway).",
    tips: ["Take the ropeway to Mount Hakodate just before sunset for the transition from day to night view", "Eat ikura-don (salmon roe bowl) at Asaichi morning market — arrive by 7am", "Walk Motomachi's slope streets (Hachimanzaka, Motoi-zaka) for the best Western architecture", "Try Hakodate shio ramen at Ajisai or Aji no Ichimonji"]
  },
  {
    id: "noboribetsu", n: "登別温泉", en: "Noboribetsu Onsen", r: "hokkaido", rl: "HOKKAIDO", cat: "onsen",
    szn: ["autumn", "winter", "spring"], rt: 4.5, bdg: "Hell Valley",
    desc: "Hokkaido's most famous hot spring resort — volcanic Jigokudani (Hell Valley) feeds 11 different types of healing thermal water.",
    best: "Autumn / Winter", tags: ["Onsen", "Volcanic", "Nature", "Healing"],
    img: "https://images.unsplash.com/photo-1680189109319-acacd21bfa10?w=700&q=75", css: "bg-hkd",
    longDesc: "Noboribetsu is Hokkaido's premier onsen resort, built around the extraordinary Jigokudani (Hell Valley) — a volcanic crater valley where steam vents, bubbling pools, and sulphurous fumaroles create an otherworldly landscape straight from Dante's Inferno. What makes Noboribetsu unique among Japan's thousands of hot spring towns is the sheer variety of its waters: 11 different types of mineral-rich thermal water flow from the valley, each with different healing properties. The resort's grand hotels and traditional ryokan offer baths ranging from milky white sulphur springs to iron-rich reddish waters to clear sodium chloride pools. The main attraction beyond bathing is the Jigokudani boardwalk trail, which winds through steaming vents and boiling mud pools to Ōyunuma, a hot lake whose surface temperature reaches 50°C. A natural foot bath carved into the river below the lake lets visitors soak their feet in warm mineral water while surrounded by forest. Nearby, the Date Jidai Mura (Edo-period theme village) offers samurai shows and ninja experiences.",
    access: "JR from Sapporo to Noboribetsu Station (1h15m by Limited Express), then bus to onsen town (15min). Highway bus from Sapporo (1h40m). New Chitose Airport bus direct to Noboribetsu (1h). By car from Sapporo (1h30m).",
    tips: ["Book a ryokan with multiple bath types to experience different mineral waters", "Walk the Jigokudani trail at dusk when steam is most dramatic", "Soak feet in the natural Ōyunuma River foot bath (free) — bring a towel", "Combine with Bear Park (Kuma Bokujo) via ropeway for Ainu culture and bear observation"]
  },
  {
    id: "biei", n: "美瑛・青い池", en: "Biei Blue Pond", r: "hokkaido", rl: "HOKKAIDO", cat: "nature",
    szn: ["summer", "autumn", "winter"], rt: 4.6, bdg: "Apple Wallpaper",
    desc: "The otherworldly Blue Pond that became an Apple wallpaper — surrounded by Biei's iconic patchwork hills and birch forests.",
    best: "June – Nov / Winter illumination", tags: ["Photography", "Blue Pond", "Hills", "Nature"],
    img: "https://images.unsplash.com/photo-1573718893672-86144926f4fb?w=700&q=75", css: "bg-hkd",
    longDesc: "Biei's Blue Pond (Shirogane Aoi Ike) shot to international fame in 2012 when Apple chose it as a default wallpaper for macOS. The pond's surreal cobalt-blue colour comes from natural colloidal aluminium particles washed down from the nearby Shirogane Hot Springs, which scatter light in a way that creates an intense, milky blue hue. Dead birch and larch trees stand like sculptures in the water, their skeletal forms reflected in the luminous surface. The colour shifts with the light — electric blue under direct sun, emerald green on overcast days, and pure white when frozen and illuminated in winter. Beyond the pond, Biei is one of Japan's most photogenic landscapes. The 'Patchwork Road' winds through rolling hills where different crops — wheat, potatoes, beans, sunflowers — create a quilt of colours across gentle slopes. Famous trees dot the landscape: the 'Christmas Tree,' 'Ken & Mary Tree,' and 'Mild Seven Hill' are pilgrimage sites for photographers. The 'Panoramic Road' on the east side offers sweeping views of the Tokachi mountain range. This is slow travel at its finest — a place to cycle, photograph, and simply breathe.",
    access: "JR Furano Line from Asahikawa to Biei (30min). Blue Pond: bus from Biei Station (20min) or by car (15min). From Sapporo: JR to Asahikawa (1h25m) then JR to Biei. By car from Sapporo (2h30m), from Asahikawa (40min).",
    tips: ["Blue Pond is most vivid on sunny mornings — arrive by 8am in summer", "Winter illumination (Nov–Jan, 5pm–9pm) transforms the frozen pond into a light show", "Rent an e-bike at Biei Station to explore Patchwork Road (3–4 hour circuit)", "Combine with Shirahige Waterfall (10min drive from Blue Pond) — blue water cascading into a turquoise river"]
  },
  {
    id: "tomamu", n: "星野リゾート トマム", en: "Hoshino Resorts Tomamu", r: "hokkaido", rl: "HOKKAIDO", cat: "nature",
    szn: ["summer", "winter"], rt: 4.5, bdg: "Cloud Sea Terrace",
    desc: "A luxury mountain resort famous for the ethereal Unkai (Cloud Sea) Terrace — gondola above the clouds at sunrise.",
    best: "June – Oct (Cloud Sea) / Winter (Skiing)", tags: ["Cloud Sea", "Luxury", "Skiing", "Resort"],
    img: "https://images.unsplash.com/photo-1762030085994-79285eee5bc9?w=700&q=75", css: "bg-hkd",
    longDesc: "Hoshino Resorts Tomamu is a destination that offers two completely different but equally spectacular experiences depending on the season. In summer, the Unkai Terrace (Cloud Sea Terrace) is the star — a gondola whisks visitors to a mountaintop platform at 1,088 metres, where on lucky mornings (roughly 40% of days from June to October) a vast ocean of clouds fills the valley below, with mountain peaks rising like islands from a cottony sea. The Cloud Pool (a net suspended over the clouds), Cloud Walk (a path through the mist), and Cloud Bar (serving coffee above the clouds) make this one of Japan's most Instagram-worthy experiences. In winter, Tomamu transforms into a premium ski resort with consistently excellent powder snow and a famous Ice Village — an entire town carved from ice, complete with an ice bar, ice chapel for weddings, and ice skating rink. The resort complex includes the iconic twin towers, multiple restaurants, an indoor wave pool (Mina Mina Beach), and a farm area where guests can experience Hokkaido agriculture.",
    access: "JR Tomamu Station is directly connected — JR Tokachi Limited Express from Sapporo (1h40m) or from New Chitose Airport (1h10m). Resort shuttle from station (5min). By car from Sapporo (2h) or New Chitose (1h30m).",
    tips: ["Cloud Sea appears most often in early morning (5am–7am) June–August — set an alarm", "Check the Unkai Terrace cloud forecast the night before (available on resort app)", "Ice Village operates mid-December to mid-March — the ice chapel is magical at night", "Book the Risonare tower for premium rooms with sauna and mountain views"]
  },
  {
    id: "okinawa", n: "沖縄", en: "Okinawa", r: "okinawa", rl: "OKINAWA", cat: "nature",
    szn: ["spring", "summer"], rt: 4.8, bdg: "Tropical Japan",
    desc: "Japan's tropical paradise — turquoise waters, coral reefs, Ryukyuan culture, world-class diving and endless beaches.",
    best: "Spring / Summer", tags: ["Beach", "Diving", "Culture", "Relaxation"],
    img: "https://images.unsplash.com/photo-1614733174066-1efe5bf4fa93?w=700&q=75", css: "bg-okn",
    longDesc: "Okinawa is Japan's tropical archipelago — 160 islands stretching 1,000km between Kyushu and Taiwan, with crystal-clear waters, vibrant coral reefs, and a unique Ryukyuan culture completely distinct from mainland Japan. The main island offers the reconstructed Shuri Castle (UNESCO), the world-class Churaumi Aquarium, and the bustling Kokusai Street in Naha. But the outer islands are where Okinawa truly shines: the Kerama Islands offer some of the world's best diving and snorkelling, Ishigaki and Miyako have beaches that rival the Maldives, and the pace of island life embodies the Okinawan philosophy of 'nankurunaisa' (everything will work out).",
    access: "Flights from Tokyo to Naha (2h30m), Osaka to Naha (2h). Inter-island flights and ferries to Kerama, Miyako, Ishigaki and more.",
    tips: ["Visit Kerama Islands for the clearest water in Japan", "Try Okinawan soba, goya champuru, and blue-seal ice cream", "Rent a car on the main island — public transport is limited", "Rainy season is June; March–May and October are ideal"]
  },
];
