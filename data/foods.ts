import { Food } from "@/types";

export const FOODS: Food[] = [
  {
    id: "sushi", n: "寿司", en: "Sushi", cat: "THE ICON",
    desc: "From Edo-mae nigiri to neighbourhood gems — fresh fish transformed by masters. Michelin-starred to beloved local counters.",
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=75", css: "bg-su",
    longDesc: "Sushi is Japan's most famous culinary export, yet experiencing it in Japan reveals an entirely different art form from what most travellers know. Edomae (Tokyo-style) sushi was born as fast food in the 1820s — vinegared rice topped with fresh fish from Tokyo Bay, served at street stalls. Today, the spectrum ranges from ¥100-per-plate conveyor belt chains (kaitenzushi) to intimate 8-seat counters where a master chef (itamae) prepares an omakase course of 20+ pieces over two hours. The rice itself is the soul — each chef guards their vinegar blend and cooking technique jealously. Key varieties include maguro (tuna), sake (salmon), uni (sea urchin), ikura (salmon roe), and the prized otoro (fatty tuna belly).",
    history: "Sushi originated as a preservation method — fish fermented in rice (narezushi) dates back to the 8th century. Modern nigiri-zushi was invented by Hanaya Yohei in Edo (Tokyo) around 1824, transforming sushi from preserved food into fresh fast food. The post-WWII era brought sushi to counters and eventually to the global stage.",
    bestRegions: ["Tokyo (Tsukiji/Toyosu area)", "Kanazawa (Sea of Japan fresh catch)", "Hokkaido (uni, crab, salmon)", "Osaka (for oshizushi pressed sushi)"]
  },
  {
    id: "ramen", n: "ラーメン", en: "Ramen", cat: "REGIONAL SOUL",
    desc: "47 prefectures, 47 styles. Sapporo miso, Hakata tonkotsu, Tokyo shoyu — each bowl tells a story of local identity.",
    img: "https://images.unsplash.com/photo-1509680859026-7d8cfc6894f4?w=600&q=75", css: "bg-rm",
    longDesc: "Ramen is Japan's ultimate comfort food and arguably the dish that best captures the country's regional diversity. Every city, every neighbourhood, has its own ramen identity — from the rich, pork-bone tonkotsu broth of Hakata (Fukuoka) to Sapporo's hearty miso ramen topped with butter and corn, from Tokyo's refined shoyu (soy sauce) style to Kitakata's light, curly-noodle classic. A great bowl of ramen is a symphony of elements: the broth (simmered for hours or even days), the noodles (thickness, texture, alkalinity all carefully calibrated), the tare (seasoning base), the toppings (chashu pork, ajitama egg, nori, menma bamboo shoots). The ramen obsession drives everything from tiny 6-seat counters with hour-long queues to ramen museums and annual ranking competitions.",
    history: "Ramen arrived from China in the late 19th century and was known as 'shina soba' (Chinese noodles). After WWII, cheap wheat flour from American aid and returning soldiers from China fuelled a ramen boom. Each region developed its own style based on local ingredients and tastes, creating the incredible regional diversity that exists today.",
    bestRegions: ["Fukuoka/Hakata (tonkotsu)", "Sapporo (miso)", "Tokyo (shoyu & tsukemen)", "Kitakata (light soy, Fukushima)"]
  },
  {
    id: "tempura", n: "天ぷら", en: "Tempura", cat: "EDO TRADITION",
    desc: "Seasonal ingredients in a perfectly light batter — the crisp perfection of a Tokyo tradition born centuries ago.",
    img: "https://images.unsplash.com/photo-1535924571710-4c6e27716b6d?w=600&q=75", css: "bg-tp",
    longDesc: "Tempura is the art of turning the simplest ingredients into something extraordinary through the alchemy of batter and oil. A great tempura master judges each ingredient — a shiso leaf, a prawn, a piece of lotus root, a shimeji mushroom — and adjusts the batter thickness, oil temperature, and frying time for each piece individually. The result should be impossibly light and crisp, the coating barely there, the ingredient inside perfectly cooked and steaming. High-end tempura restaurants in Tokyo serve a 10-15 course omakase of seasonal ingredients fried one piece at a time, placed directly on your paper in front of you, to be eaten within seconds while at peak crispness.",
    history: "Tempura was introduced to Japan by Portuguese missionaries in the 16th century (from 'tempora,' the Lenten period when fried food replaced meat). By the Edo period, it had evolved into a distinctly Japanese street food, sold from yatai (food carts) along with sushi and soba. Today it ranges from humble tendon (tempura rice bowls) to Michelin-starred counter dining.",
    bestRegions: ["Tokyo (Edo-mae style, counter dining)", "Nagoya (tenmusu — tempura rice balls)", "Osaka (mixed tempura sets)", "Kyoto (seasonal vegetables focus)"]
  },
  {
    id: "kaiseki", n: "懐石料理", en: "Kaiseki", cat: "HAUTE CUISINE",
    desc: "Japan's ultimate seasonal tasting menu. Each course a poem of the season, rooted in the ceremony of tea.",
    img: "https://images.unsplash.com/photo-1681270496598-13c5365730c8?w=600&q=75", css: "bg-ks",
    longDesc: "Kaiseki is the pinnacle of Japanese cuisine — a multi-course meal that elevates cooking to an art form where taste, texture, appearance, and the vessel it's served on all work in harmony to express the essence of the season. A kaiseki meal typically includes 8-14 courses: a starter (sakizuke), sashimi, a simmered dish, a grilled course, a steamed dish, rice and miso soup, and seasonal dessert. Each course is a small masterpiece — a single autumn leaf might garnish a dish to signal the season, a hand-thrown ceramic bowl chosen specifically for that one preparation. The finest kaiseki experiences are found in Kyoto's historic ryotei restaurants, though excellent kaiseki exists throughout Japan.",
    history: "Kaiseki originated from the simple meals served before tea ceremony (cha-kaiseki) in the 16th century — modest dishes meant to prepare the palate for tea. Over centuries, it evolved into Japan's most refined culinary tradition, incorporating techniques from Buddhist vegetarian cuisine (shojin ryori) and the aristocratic cuisine of the imperial court.",
    bestRegions: ["Kyoto (birthplace, most traditional)", "Tokyo (modern interpretations)", "Kanazawa (Kaga cuisine influence)", "Osaka (kappo-style interactive kaiseki)"]
  },
  {
    id: "izakaya", n: "居酒屋", en: "Izakaya", cat: "STREET CULTURE",
    desc: "The beating heart of Japan's food culture. Yakitori smoke, cold beer, and the warm noise of a Tokyo evening.",
    img: "https://images.unsplash.com/photo-1764888802295-648490e594dd?w=600&q=75", css: "bg-yk",
    longDesc: "An izakaya is Japan's answer to the pub, tapas bar, and neighbourhood restaurant rolled into one — a place where friends gather after work to eat, drink, and unwind. The word literally means 'stay-drink-shop,' and the format is simple: order drinks (beer, sake, shochu, highball) and share a variety of small plates. The menu might include yakitori (grilled chicken skewers), edamame, karaage (fried chicken), sashimi, agedashi tofu, potato salad, grilled fish, and dozens more options that vary by season and region. The atmosphere is warm and noisy — a stark contrast to the precision of fine dining — and izakayas are where you'll see Japanese people at their most relaxed and convivial.",
    history: "Izakayas evolved from Edo-period sake shops that began allowing customers to drink on the premises and eventually started offering food. The post-war era saw a boom in izakaya chains, but the classic form remains the small, family-run neighbourhood joint with a master (taisho) behind the counter, hand-written menu on the wall, and regulars on first-name terms.",
    bestRegions: ["Tokyo (Yurakucho, Shinjuku Omoide Yokocho)", "Osaka (Shinsekai, Tenma)", "Fukuoka (yatai street stalls)", "Sapporo (Tanukikoji, Susukino)"]
  },
];
