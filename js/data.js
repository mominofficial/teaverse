/**
 * TeaVerse Global Tea Encyclopedia & Brewing Guide
 * Comprehensive Structured Dataset of Authentic Teas & Botanical Infusions
 */

const TeaVerseData = {
  categories: [
    {
      id: "all",
      name: "All Varieties",
      description: "Explore the complete global catalog of true teas and botanical infusions.",
      count: 25,
      type: "all"
    },
    {
      id: "green",
      name: "Green Tea",
      description: "Unoxidized leaves preserved with gentle steaming or pan-firing to retain fresh, grassy, and vegetal notes.",
      count: 6,
      type: "true_tea"
    },
    {
      id: "black",
      name: "Black Tea",
      description: "Fully oxidized leaves producing deep amber liquor, rich maltiness, and robust brisk character.",
      count: 5,
      type: "true_tea"
    },
    {
      id: "white",
      name: "White Tea",
      description: "Minimally processed tender young buds with velvety down, imparting delicate floral sweetness.",
      count: 2,
      type: "true_tea"
    },
    {
      id: "oolong",
      name: "Oolong Tea",
      description: "Artisanal semi-oxidized teas ranging from floral green oolongs to dark roasted rock teas.",
      count: 5,
      type: "true_tea"
    },
    {
      id: "puerh",
      name: "Pu-erh & Dark Tea",
      description: "Post-fermented microbial aged teas from Yunnan known for earthy, complex, forest-floor depth.",
      count: 1,
      type: "true_tea"
    },
    {
      id: "yellow",
      name: "Yellow Tea",
      description: "Rare traditional tea with a gentle 'sealing yellow' (Men Huang) smothering process for mellow sweetness.",
      count: 1,
      type: "true_tea"
    },
    {
      id: "matcha",
      name: "Matcha",
      description: "Ceremonial stone-ground shade-grown Japanese tencha whisked into a rich, frothy, emerald bowl of umami.",
      count: 1,
      type: "true_tea"
    },
    {
      id: "chai",
      name: "Chai & Spiced Teas",
      description: "Warm, aromatic brews combining robust whole-leaf black tea with crushed spices, milk, and herbs.",
      count: 2,
      type: "true_tea"
    },
    {
      id: "traditional",
      name: "Traditional & Regional",
      description: "Distinct cultural tea rituals from Morocco, Turkey, Persia, Kashmir, and beyond.",
      count: 3,
      type: "true_tea"
    },
    {
      id: "herbal",
      name: "Herbal Infusions",
      description: "Naturally caffeine-free tisanes made from healing roots, barks, flowers, and botanical leaves.",
      count: 6,
      type: "botanical"
    }
  ],

  moods: [
    { id: "calm", label: "Calm & Relaxing", icon: "feather", desc: "Gentle brews to soothe the senses and unwind." },
    { id: "refreshing", label: "Crisp & Refreshing", icon: "wind", desc: "Bright, invigorating cups ideal for clarity and cooling." },
    { id: "energizing", label: "Bold & Energizing", icon: "zap", desc: "Robust vitality with rich caffeine and brisk body." },
    { id: "floral", label: "Delicate & Floral", icon: "flower", desc: "Perfumed aromas reminiscent of orchards and spring blossoms." },
    { id: "earthy", label: "Deep & Earthy", icon: "mountain", desc: "Grounded woody, mineral, and forest-floor profiles." },
    { id: "sweet", label: "Warm & Sweet", icon: "sun", desc: "Naturally comforting notes of honey, caramel, and spices." },
    { id: "traditional", label: "Ceremonial & Cultural", icon: "globe", desc: "Ancient heritage preparations rooted in centuries of ritual." }
  ],

  origins: [
    {
      id: "china",
      country: "China",
      nativeName: "中国",
      regions: ["Fujian", "Zhejiang", "Yunnan", "Anhui", "Jiangsu"],
      keyTeas: ["longjing", "da-hong-pao", "tieguanyin", "silver-needle", "puerh-shou", "keemun", "bi-luo-chun"],
      description: "The birthplace of tea with over 4,000 years of cultivation history spanning high misty peaks and ancient river valleys.",
      climate: "Subtropical monsoon, rich red mountain soil, heavy morning mists."
    },
    {
      id: "japan",
      country: "Japan",
      nativeName: "日本",
      regions: ["Uji (Kyoto)", "Shizuoka", "Kagoshima", "Fukuoka"],
      keyTeas: ["matcha", "sencha", "gyokuro", "hojicha", "genmaicha"],
      description: "World renowned for meticulous steaming craftsmanship, shade cultivation, and ceremonial teaware rituals.",
      climate: "Temperate maritime, mineral-rich volcanic terroir, pristine river basin humidity."
    },
    {
      id: "india",
      country: "India",
      nativeName: "भारत",
      regions: ["Assam", "Darjeeling", "Nilgiri", "Kashmir Valley"],
      keyTeas: ["assam-orthodox", "darjeeling-first-flush", "masala-chai", "kashmiri-kahwa"],
      description: "Vast biodiversity producing malty riverine lowland teas in Assam and delicate high-altitude 'Champagne of Teas' in Darjeeling.",
      climate: "Tropical monsoon lowlands to cold alpine Himalayan valleys."
    },
    {
      id: "sri-lanka",
      country: "Sri Lanka",
      nativeName: "ශ්‍රී ලංකා",
      regions: ["Nuwara Eliya", "Uva", "Dimbula", "Kandy"],
      keyTeas: ["ceylon-nuwara-eliya", "ceylon-cinnamon-tea"],
      description: "Famed Ceylon teas nurtured by dual monsoon winds, yielding bright golden liquors with citrus and spice character.",
      climate: "Tropical highland elevation from 1,200m to 2,000m above sea level."
    },
    {
      id: "taiwan",
      country: "Taiwan",
      nativeName: "台灣",
      regions: ["Nantou", "Alishan", "Hsinchu", "Pinglin"],
      keyTeas: ["dong-ding", "oriental-beauty", "alishan-oolong"],
      description: "The pinnacle of artisanal oolong crafting, where high-mountain clouds and microclimates create buttery floral bouquets.",
      climate: "Subtropical high-mountain cloud forests above 1,500m."
    },
    {
      id: "korea",
      country: "South Korea",
      nativeName: "대한민국",
      regions: ["Boseong", "Hadong (Mount Jirisan)", "Jeju Island"],
      keyTeas: ["korean-woojeon", "korean-hwangcha"],
      description: "Centuries-old wild mountain tea traditions nurtured along clean stony rivers and volcanic slopes.",
      climate: "Temperate continental with maritime maritime breezes."
    },
    {
      id: "morocco",
      country: "Morocco",
      nativeName: "المغرب",
      regions: ["Maghreb Region", "Marrakech"],
      keyTeas: ["moroccan-mint"],
      description: "Famous for the welcoming hospitality ritual of Maghrebi mint tea poured from high spouts into decorative glasses.",
      climate: "Mediterranean coast to arid interior oasis."
    },
    {
      id: "turkey",
      country: "Turkey",
      nativeName: "Türkiye",
      regions: ["Rize", "Black Sea Coast"],
      keyTeas: ["turkish-rize-tea"],
      description: "Highest per-capita tea consumption in the world, prepared in stacked double kettles (çaydanlık).",
      climate: "Humid subtropical Black Sea mountain hillsides."
    },
    {
      id: "south-africa",
      country: "South Africa",
      nativeName: "South Africa",
      regions: ["Cederberg Mountains", "Western Cape"],
      keyTeas: ["rooibos-red-bush", "honeybush-infusion"],
      description: "Home to unique endemic fynbos shrubs that produce deep ruby, naturally sweet, caffeine-free herbal tisanes.",
      climate: "Mediterranean winter-rainfall climate with hot dry summers."
    },
    {
      id: "egypt",
      country: "Egypt",
      nativeName: "مصر",
      regions: ["Nile River Basin", "Fayoum"],
      keyTeas: ["egyptian-chamomile", "hibiscus-karkadeh"],
      description: "Ancient heritage of floral and botanical decoctions cherished since the Pharaonic era along the fertile Nile.",
      climate: "Warm arid desert with river-fed irrigation."
    }
  ],

  teas: [
    // 1. MATCHA
    {
      id: "matcha",
      name: "Ceremonial Matcha",
      nativeName: "抹茶",
      slug: "matcha",
      category: "matcha",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "Japan",
        region: "Uji, Kyoto Prefecture",
        elevation: "250m – 450m",
        harvestSeason: "First Flush (Spring / Ichibancha)"
      },
      heroImage: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Stone-ground Japanese green tea made from shaded tencha leaves, prized for its vivid emerald color, velvety microfoam, and deep savory umami.",
      story: "Introduced to Japan by Zen Buddhist monk Eisai in the 12th century, matcha evolved into the heart of the Japanese tea ceremony (Chanoyu or Chado). Before harvest, tea fields are covered under dark reed screens for 3 to 4 weeks, concentrating chlorophyll and the relaxing amino acid L-theanine while reducing bitterness.",
      ingredients: {
        core: ["Ceremonial grade Matcha powder (stone-ground tencha)", "Filtered soft spring water (75°C–80°C)"],
        optional: ["Organic plant milk (for Matcha Latte)", "Pure maple syrup or raw honey (optional modern serve)"]
      },
      equipment: [
        "Chawan (Ceramic Matcha tea bowl)",
        "Chasen (Hand-carved 80–100 prong bamboo whisk)",
        "Chashaku (Bamboo measuring scoop)",
        "Fine stainless steel mesh tea sifter"
      ],
      brewingDetails: {
        temperature: "75°C – 80°C (167°F – 176°F)",
        teaAmount: "2.0 g (2 bamboo scoops)",
        waterAmount: "70 ml – 80 ml",
        steepingTime: "Whisk briskly for 20–30 seconds",
        infusionCount: "Single whisked bowl",
        vessel: "Ceremonial ceramic Chawan",
        servingStyle: "Usucha (Thin tea) or Koicha (Thick ceremonial paste)"
      },
      preparationTime: "3 min",
      brewingTime: "30 sec",
      difficulty: "Medium",
      servings: "1 bowl",
      caffeine: "High",
      strength: "Strong",
      moods: ["calm", "energizing", "traditional"],
      flavorProfile: {
        primary: ["Rich Umami", "Vegetal Sweetness", "Creamy Grass", "Subtle Bitterness"],
        radar: { umami: 95, sweetness: 75, floral: 40, vegetal: 90, astringency: 45, earthiness: 60 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Warm and Condition the Bowl",
          instruction: "Pour warm water into the Chawan to heat the ceramic, then dip the tips of the bamboo Chasen to soften its tines. Discard the water and wipe the bowl completely dry with a clean cloth.",
          tip: "A warm, dry bowl ensures the matcha does not cool down too quickly during whisking."
        },
        {
          step: 2,
          title: "Sift the Matcha Powder",
          instruction: "Place 2 scoops (approx. 2g) of matcha into the fine mesh sifter and press it gently with the bamboo scoop into the bottom of the bowl to eliminate electrostatic clumps.",
          tip: "Sifting is essential for achieving a lump-free, silky froth."
        },
        {
          step: 3,
          title: "Add Temperature-Controlled Water",
          instruction: "Pour 70ml of filtered water heated to 75°C–80°C (never boiling) gently down the side of the bowl.",
          tip: "Boiling water will scorch the delicate catechins and make the liquor overly bitter."
        },
        {
          step: 4,
          title: "Whisk in a 'W' Motion",
          instruction: "Hold the Chasen lightly with your wrist and whisk briskly from the bottom in a rapid 'W' or 'M' pattern without pressing the whisk against the bowl floor, continuing for 20 seconds until a fine, creamy microfoam forms on the surface.",
          tip: "Slow your whisking at the end and gently draw a circle across the top to break large bubbles."
        }
      ],
      culturalNotes: "In Japanese tea philosophy, each encounter with a bowl of matcha embodies 'Ichi-go Ichi-e' — a once-in-a-lifetime moment that can never be replicated.",
      relatedTeas: ["sencha", "gyokuro", "hojicha", "genmaicha"]
    },

    // 2. LONGJING
    {
      id: "longjing",
      name: "Longjing (Dragon Well)",
      nativeName: "西湖龙井",
      slug: "longjing",
      category: "green",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "China",
        region: "West Lake (Xihu), Hangzhou, Zhejiang",
        elevation: "100m – 300m",
        harvestSeason: "Pre-Qingming (Early Spring / Mingqian)"
      },
      heroImage: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
      ],
      description: "China's most celebrated pan-fired green tea, renowned for flat sword-shaped leaves, roasted chestnut aroma, sweet dew liquor, and mellow refreshing character.",
      story: "Dating back to the Song Dynasty, Longjing was conferred the status of Imperial Tea by Emperor Qianlong of the Qing Dynasty, who designated 18 royal tea bushes at the foot of Lion Peak Mountain (Shi Feng). The signature flat leaf shape is created through master artisans executing ten distinct hand-pressing movements in hot iron woks.",
      ingredients: {
        core: ["Authentic Longjing loose whole leaves (One bud with one or two tender leaves)", "Pure spring or low-mineral water"],
        optional: []
      },
      equipment: [
        "Tall clear glass tumbler (traditional glass method) or porcelain Gaiwan",
        "Fine porcelain serving pitcher (Cha Hai)",
        "Water thermometer or temperature-variable kettle"
      ],
      brewingDetails: {
        temperature: "80°C – 85°C (176°F – 185°F)",
        teaAmount: "3.0 g – 4.0 g",
        waterAmount: "180 ml – 200 ml",
        steepingTime: "2 to 3 minutes (Western) / 30–45s (Gongfu)",
        infusionCount: "3 to 4 steepings",
        vessel: "Clear tall glass tumbler or white porcelain Gaiwan",
        servingStyle: "Direct sipping from glass or poured into small cups"
      },
      preparationTime: "2 min",
      brewingTime: "2.5 min",
      difficulty: "Easy",
      servings: "1–2 cups",
      caffeine: "Medium",
      strength: "Medium",
      moods: ["calm", "refreshing", "traditional"],
      flavorProfile: {
        primary: ["Toasted Chestnut", "Fresh Sweet Corn", "Orchid Floral", "Mineral Dew"],
        radar: { umami: 80, sweetness: 85, floral: 70, vegetal: 75, astringency: 25, earthiness: 35 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Warm the Tall Glass",
          instruction: "Pour hot water into your glass tumbler to pre-warm the vessel, swirl gently, and discard the water.",
          tip: "Glass allows you to witness the leaves 'dancing' as they stand vertically."
        },
        {
          step: 2,
          title: "The Middle Drop Method (Zhong Tou Fa)",
          instruction: "Pour about one-third of your 80°C water into the glass first. Add 3g of Longjing leaves, let them settle on the water surface, and gently swirl to awaken the aroma for 15 seconds.",
          tip: "This prevents the tender spring buds from being bruised by heavy water streams."
        },
        {
          step: 3,
          title: "Complete the Pour",
          instruction: "Pour the remaining two-thirds of the water from a moderate height to circulate the leaves throughout the glass. Watch the buds stand erect and float gracefully.",
          tip: "Let steep for 2 minutes before your first sip."
        },
        {
          step: 4,
          title: "Refill When One-Third Remains",
          instruction: "Do not drink the glass completely dry. When about one-third of the tea remains, top it up with fresh 85°C water for subsequent infusions.",
          tip: "This continuous method maintains consistent sweetness and prevents over-concentration."
        }
      ],
      culturalNotes: "The highest grade of Longjing is harvested before the Qingming solar term ('Mingqian Longjing') when spring shoots are tenderest and sweetest.",
      relatedTeas: ["bi-luo-chun", "sencha", "gyokuro", "silver-needle"]
    },

    // 3. DA HONG PAO
    {
      id: "da-hong-pao",
      name: "Da Hong Pao (Big Red Robe)",
      nativeName: "大红袍",
      slug: "da-hong-pao",
      category: "oolong",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "China",
        region: "Wuyi Mountains (Wuyishan), Fujian",
        elevation: "600m – 1,100m",
        harvestSeason: "Late Spring (May)"
      },
      heroImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
      ],
      description: "The king of Wuyi Cliff Teas (Yancha), famous for its charcoal-roasted mineral backbone, lingering rock rhyme (Yan Yun), dried fruit sweetness, and orchid finish.",
      story: "Legend tells of a Ming Dynasty scholar who fell ill on his way to imperial exams. Monks from Tianxin Temple treated him with tea from the Wuyi cliffs. After passing with highest honors, he returned and wrapped the sacred tea bushes in royal red robes to thank them. The original mother bushes still grow on cliff faces in Wuyishan.",
      ingredients: {
        core: ["Strip-twisted Da Hong Pao roasted oolong leaves", "High-temperature fresh spring water"],
        optional: []
      },
      equipment: [
        "Purple Clay Yixing Teapot or Porcelain Gaiwan (100ml–150ml)",
        "Gong Dao Bei (Fairness pitcher)",
        "Small aroma and tasting cups",
        "Tea tray with drainage"
      ],
      brewingDetails: {
        temperature: "95°C – 100°C (203°F – 212°F)",
        teaAmount: "6.0 g – 8.0 g (for 120ml Gaiwan)",
        waterAmount: "120 ml",
        steepingTime: "Quick flash steeps: 10s, 15s, 20s, 30s (+10s each round)",
        infusionCount: "8 to 12 infusions",
        vessel: "Unglazed Zisha clay pot or porcelain Gaiwan",
        servingStyle: "Gongfu Cha ceremonial multi-steep service"
      },
      preparationTime: "3 min",
      brewingTime: "15 sec per round",
      difficulty: "Advanced",
      servings: "2–4 people",
      caffeine: "Medium",
      strength: "Strong",
      moods: ["earthy", "bold", "traditional"],
      flavorProfile: {
        primary: ["Charcoal Roast", "Mineral Stone", "Dried Plum", "Wild Orchid", "Caramelized Brown Sugar"],
        radar: { umami: 65, sweetness: 80, floral: 75, vegetal: 20, astringency: 50, earthiness: 95 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Scald the Teaware",
          instruction: "Pour boiling water into the Gaiwan, fairness cup, and small tasting cups to thoroughly warm the teaware.",
          tip: "Hot ceramic is vital for extracting the deep 'Yan Yun' rock minerals."
        },
        {
          step: 2,
          title: "Warm Leaf Aroma Check",
          instruction: "Place 7g of leaves into the empty, hot Gaiwan. Cover and shake gently for 3 seconds. Lift the lid to inhale the rich aroma of roasted cocoa and sweet orchid.",
          tip: "This ritual is known as 'Wen Xiang' (listening to the fragrance)."
        },
        {
          step: 3,
          title: "Flash Awakening Rinse",
          instruction: "Pour 100°C water over the leaves and immediately pour it out into the fairness cup without steeping (under 5 seconds). Use this rinse to bathe your teacups.",
          tip: "Awakens the tightly twisted charcoal leaves without losing flavor."
        },
        {
          step: 4,
          title: "Gongfu Steeping Progression",
          instruction: "Infuse with boiling water for 10 seconds on the 1st steep, 15 seconds on the 2nd, and gradually increase time. Decant completely into the fairness cup before serving.",
          tip: "Never leave residual water in the Gaiwan between infusions."
        }
      ],
      culturalNotes: "The mineral-rich volcanic red sandstone cliffs of Wuyishan impart the rare 'Yan Gu Hua Xiang' (rock bone and floral fragrance) unique to authentic Yancha.",
      relatedTeas: ["tieguanyin", "dong-ding", "puerh-shou", "alishan-oolong"]
    },

    // 4. DARJEELING FIRST FLUSH
    {
      id: "darjeeling-first-flush",
      name: "Darjeeling First Flush",
      nativeName: "दार्जिलिंग चाय",
      slug: "darjeeling-first-flush",
      category: "black",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "India",
        region: "Darjeeling District, West Bengal (Himalayas)",
        elevation: "1,000m – 2,200m",
        harvestSeason: "Spring (Late February – April)"
      },
      heroImage: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Often heralded as the 'Champagne of Teas', Darjeeling First Flush is a lightly oxidized spring black tea with luminous pale amber liquor, muscatel grape notes, and brisk alpine freshness.",
      story: "Grown along misty Himalayan slopes facing Mount Kanchenjunga, Darjeeling tea was first planted in the 1840s using Chinese Sinensis tea varieties. The first spring plucking represents the tenderest shoots after months of winter dormancy, producing a remarkably light, floral tea that behaves more like an oolong than a traditional dark black tea.",
      ingredients: {
        core: ["Loose leaf Darjeeling First Flush whole leaves", "Fresh low-mineral boiling water cooled to 85°C–90°C"],
        optional: []
      },
      equipment: [
        "Fine porcelain or glass teapot with infuser basket",
        "White ceramic teacups (to appreciate the light amber hue)",
        "Fine mesh tea strainer"
      ],
      brewingDetails: {
        temperature: "85°C – 90°C (185°F – 194°F)",
        teaAmount: "2.5 g – 3.0 g per cup",
        waterAmount: "220 ml – 250 ml",
        steepingTime: "3.0 minutes",
        infusionCount: "2 to 3 steepings",
        vessel: "Preheated porcelain teapot",
        servingStyle: "Pure without milk or sugar (to preserve delicate muscatel nuances)"
      },
      preparationTime: "2 min",
      brewingTime: "3 min",
      difficulty: "Easy",
      servings: "1–2 cups",
      caffeine: "Medium",
      strength: "Medium",
      moods: ["refreshing", "floral", "calm"],
      flavorProfile: {
        primary: ["Muscatel Grape", "Spring Blossom", "Crisp Green Apple", "Fresh Pine", "Mild Astringency"],
        radar: { umami: 40, sweetness: 75, floral: 95, vegetal: 65, astringency: 60, earthiness: 30 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Warm the Teapot",
          instruction: "Warm the teapot thoroughly with boiling water for 30 seconds, then pour it out completely.",
          tip: "Temperature consistency allows the delicate volatile aromatics to release without scorch."
        },
        {
          step: 2,
          title: "Measure the Whole Leaves",
          instruction: "Add 2.5g of loose leaves into the warm pot. Take a moment to smell the dry leaf aroma of crisp spring alpine air.",
          tip: "First flush leaves feature distinctive green and silver specks."
        },
        {
          step: 3,
          title: "Gentle Infusion",
          instruction: "Pour water cooled to 88°C over the leaves. Cover and steep undisturbed for precisely 3 minutes.",
          tip: "Do not over-steep beyond 3.5 minutes as the delicate muscatel flavor will turn astringent."
        },
        {
          step: 4,
          title: "Decant and Serve Pure",
          instruction: "Strain the liquor completely into white teacups to view the glowing pale champagne liquor. Drink without milk or lemon.",
          tip: "Allow the cup to cool slightly before sipping to taste complex floral layers."
        }
      ],
      culturalNotes: "Darjeeling holds Protected Geographical Indication (GI) status in India, certified strictly by the Tea Board of India for authentic estate single-origin harvests.",
      relatedTeas: ["assam-orthodox", "ceylon-nuwara-eliya", "silver-needle", "oriental-beauty"]
    },

    // 5. MASALA CHAI
    {
      id: "masala-chai",
      name: "Traditional Masala Chai",
      nativeName: "मसाला चाय",
      slug: "masala-chai",
      category: "chai",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "India",
        region: "Pan-Indian Heritage (Assam Black Tea Base)",
        elevation: "Lowland River Valleys",
        harvestSeason: "Summer Second Flush CTC / Orthodox"
      },
      heroImage: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
      ],
      description: "India's beloved spiced tea, crafted by decocting robust granular CTC black tea on the stovetop with crushed fresh ginger, green cardamom, cinnamon, cloves, and whole milk.",
      story: "While tea consumption was popularized in India by the British Tea Association in the early 20th century, Indian street vendors (Chaiwalas) added generous local spices and milk from Ayurvedic traditions ('Kadha') to create a rich, energizing drink that became an indispensable part of daily social life.",
      ingredients: {
        core: [
          "Strong Assam CTC or Mamri Black Tea (2 tbsp / 10g)",
          "Water (1 cup / 240ml)",
          "Whole cow milk or buffalo milk (1 cup / 240ml)",
          "Fresh crushed ginger (1 inch piece)",
          "Green cardamom pods (4–5 pods, lightly bruised)",
          "Cinnamon stick (1 small piece)",
          "Whole cloves (3–4 pods)",
          "Raw unrefined sugar, jaggery, or brown sugar (1–2 tsp)"
        ],
        optional: ["Black peppercorns (for extra heat)", "Fennel seeds (for subtle sweet herbal finish)", "Star anise"]
      },
      equipment: [
        "Heavy-bottomed saucepan (Patila)",
        "Mortar and pestle for crushing whole spices",
        "Fine stainless steel wire strainer",
        "Traditional terracotta Kulhar or glass chai cups"
      ],
      brewingDetails: {
        temperature: "Stovetop Active Simmer (100°C / 212°F)",
        teaAmount: "10.0 g (2 rounded tablespoons)",
        waterAmount: "240 ml water + 240 ml milk",
        steepingTime: "5 to 7 minutes total simmering",
        infusionCount: "Single rich decoction",
        vessel: "Stainless steel saucepan to clay Kulhar",
        servingStyle: "Served steaming hot, sweetened, poured from high for aeration"
      },
      preparationTime: "5 min",
      brewingTime: "7 min",
      difficulty: "Easy",
      servings: "2 generous cups",
      caffeine: "High",
      strength: "Strong",
      moods: ["sweet", "energizing", "traditional"],
      flavorProfile: {
        primary: ["Warm Cardamom", "Fiery Ginger", "Sweet Cinnamon", "Malty Black Tea", "Rich Creaminess"],
        radar: { umami: 30, sweetness: 90, floral: 35, vegetal: 10, astringency: 40, earthiness: 85 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Crush the Whole Spices",
          instruction: "In a mortar and pestle, coarsely crush the green cardamom pods, cinnamon stick, cloves, and freshly sliced ginger to release their essential oils.",
          tip: "Do not grind into fine powder; coarse crushing allows clean straining and prevents muddy texture."
        },
        {
          step: 2,
          title: "Simmer Water with Spices",
          instruction: "Bring 240ml of water to a rolling boil in a saucepan. Add the crushed spices and simmer on medium heat for 2–3 minutes until the water turns golden and deeply fragrant.",
          tip: "Extracting spices in water first maximizes flavor before milk fat is added."
        },
        {
          step: 3,
          title: "Add Black Tea and Simmer",
          instruction: "Add 2 tablespoons of strong Assam CTC tea and your sweetener. Simmer for another 2 minutes until the liquid turns dark reddish-brown.",
          tip: "Assam CTC is chosen specifically for its ability to cut through whole milk fat."
        },
        {
          step: 4,
          title: "Add Milk and Double-Boil",
          instruction: "Pour in 240ml of whole milk. Bring the mixture to a slow boil, allowing it to rise to the rim, then lower heat. Repeat this rising cycle 2 to 3 times for a velvety texture.",
          tip: "This rhythmic boiling technique is how Chaiwalas achieve their signature creamy body."
        },
        {
          step: 5,
          title: "Strain and Aerate",
          instruction: "Strain through a fine mesh strainer into cups, holding the pot high to aerate the chai and create a light frothy top.",
          tip: "Serve immediately with biscuits or savory snacks."
        }
      ],
      culturalNotes: "From railway platforms to bustling street corners, 'Garam Chai' is the universal symbol of warm hospitality and social connection across India.",
      relatedTeas: ["kashmiri-kahwa", "assam-orthodox", "moroccan-mint", "ceylon-cinnamon-tea"]
    },

    // 6. MOROCCAN MINT
    {
      id: "moroccan-mint",
      name: "Moroccan Mint Tea (Maghrebi)",
      nativeName: "أتاي مغربي",
      slug: "moroccan-mint",
      category: "traditional",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "Morocco",
        region: "Maghreb / Across Morocco",
        elevation: "Coastal & Desert Terroir",
        harvestSeason: "Year-round (Gunpowder Tea base with fresh Spearmint)"
      },
      heroImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Morocco's iconic social drink, blending tightly rolled Chinese gunpowder green tea with abundant fresh spearmint leaves and pure sugar, served with a crown of foam ('Rezza').",
      story: "Also known as 'Maghrebi Mint Tea' or 'Atay', this beverage originated in the 18th and 19th centuries through British and European maritime trade when Chinese gunpowder green tea arrived in Moroccan ports. Moroccans transformed it by infusing large quantities of fresh garden spearmint (Naana) into a sacred hospitality ritual.",
      ingredients: {
        core: [
          "Chinese Gunpowder Green Tea (Zhu Cha / 1.5 tbsp)",
          "Fresh Spearmint sprigs (Mentha spicata / 1 large bunch)",
          "Filtered boiling water (500ml)",
          "Sugar cones or raw sugar (3–4 tablespoons, traditionally generous)"
        ],
        optional: ["Fresh lemon verbena (Louiza)", "Orange blossom water (few drops in winter)"]
      },
      equipment: [
        "Traditional engraved Moroccan curved silver/stainless steel teapot (Berrad)",
        "Traditional patterned colorful tea glasses (Kessan)",
        "Round metal serving tray"
      ],
      brewingDetails: {
        temperature: "100°C (Rolling boil on low stovetop)",
        teaAmount: "8.0 g – 10.0 g Gunpowder tea",
        waterAmount: "500 ml",
        steepingTime: "3 to 5 minutes simmering with mint",
        infusionCount: "Traditional 3 rounds of service",
        vessel: "Curved metal Berrad teapot to decorative glass",
        servingStyle: "Poured from high above to aerate and build thick foam crown"
      },
      preparationTime: "5 min",
      brewingTime: "5 min",
      difficulty: "Medium",
      servings: "4–6 small glasses",
      caffeine: "Medium",
      strength: "Strong",
      moods: ["refreshing", "sweet", "traditional"],
      flavorProfile: {
        primary: ["Crisp Spearmint", "Smoky Gunpowder Green", "Caramelized Sweetness", "Cooling Finish"],
        radar: { umami: 40, sweetness: 85, floral: 60, vegetal: 80, astringency: 40, earthiness: 50 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "The Soul of the Tea (The First Rinse)",
          instruction: "Place 1.5 tablespoons of gunpowder green tea into the Berrad teapot. Add half a glass of boiling water, swirl for 15 seconds, and pour the liquid into a glass. Save this first glass — it holds the delicate 'spirit' of the tea.",
          tip: "Do not discard this first extract; it will be returned to the pot later."
        },
        {
          step: 2,
          title: "The Wash (Washing the Bitterness)",
          instruction: "Add another half glass of boiling water into the pot, swirl vigorously for 20 seconds, and this time discard the murky liquid to remove dust and harsh surface tannins.",
          tip: "This two-rinse method is the signature secret of authentic Moroccan tea masters."
        },
        {
          step: 3,
          title: "Add the Herbs, Sugar, and Spirit",
          instruction: "Return the first saved glass of tea liquid back into the pot. Stuff the pot generously with washed fresh spearmint and add 3 to 4 tablespoons of sugar. Fill the pot with boiling water.",
          tip: "Ensure mint leaves are completely submerged so they don't oxidize or turn bitter."
        },
        {
          step: 4,
          title: "Stovetop Simmer",
          instruction: "Place the metal teapot directly over low stovetop flame for 2 to 3 minutes until bubbles rise gently to the top.",
          tip: "Simmering carmelizes the sugar with the spearmint oils."
        },
        {
          step: 5,
          title: "The High Pour Aeration",
          instruction: "Pour the tea into a glass from a height of at least 12–18 inches, then pour the glass back into the teapot. Repeat this 2–3 times to mix the sugar and create the frothy crown ('Rezza').",
          tip: "A thick head of foam proves the tea was poured with proper skill and care."
        }
      ],
      culturalNotes: "A famous Moroccan proverb states: 'The first glass is as gentle as life. The second is as strong as love. The third is as bitter as death.' Refusing a cup of Atay is considered an offense to hospitality.",
      relatedTeas: ["sencha", "longjing", "turkish-rize-tea", "egyptian-chamomile"]
    },

    // 7. SILVER NEEDLE
    {
      id: "silver-needle",
      name: "Silver Needle (Baihao Yinzhen)",
      nativeName: "白毫银针",
      slug: "silver-needle",
      category: "white",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "China",
        region: "Fuding / Zhenghe, Fujian Province",
        elevation: "500m – 900m",
        harvestSeason: "Early Spring (March – Early April)"
      },
      heroImage: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
      ],
      description: "The most revered white tea in the world, harvested exclusively from single spring buds covered in velvety silver down, yielding crystalline pale liquor with notes of wild melon, fresh hay, and honeysuckle.",
      story: "First created in Fuding during the late Qing Dynasty (1796), Silver Needle represents minimal human interference with the tea leaf. Hand-plucked over a narrow 10-day window in early spring when the morning dew has dried, the buds undergo only gentle outdoor sun withering and low-heat baking.",
      ingredients: {
        core: ["Pure Baihao Yinzhen unopened silvery spring buds", "Pristine soft spring water"],
        optional: []
      },
      equipment: [
        "Clear tall glass tumbler or white porcelain Gaiwan",
        "Fine mesh tea strainer",
        "Water thermometer"
      ],
      brewingDetails: {
        temperature: "80°C – 85°C (176°F – 185°F)",
        teaAmount: "4.0 g – 5.0 g",
        waterAmount: "150 ml – 180 ml",
        steepingTime: "4 to 5 minutes (Patience required for dense buds)",
        infusionCount: "4 to 6 steepings",
        vessel: "Tall clear glass cylinder or porcelain Gaiwan",
        servingStyle: "Delicate sipping directly from vessel"
      },
      preparationTime: "2 min",
      brewingTime: "4.5 min",
      difficulty: "Easy",
      servings: "1–2 cups",
      caffeine: "Low to Medium",
      strength: "Light",
      moods: ["calm", "floral", "refreshing"],
      flavorProfile: {
        primary: ["Honeysuckle Nectar", "Fresh Cucumber Melon", "Sweet Hay", "Silky Texture"],
        radar: { umami: 50, sweetness: 95, floral: 90, vegetal: 60, astringency: 15, earthiness: 25 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Warm the Vessel",
          instruction: "Warm your glass or Gaiwan with hot water, discard, and add 4–5g of Silver Needle buds.",
          tip: "Notice the silvery trichomes (downy hairs) shimmering on the buds."
        },
        {
          step: 2,
          title: "Slow Down the Pour",
          instruction: "Pour 85°C water gently down the inner wall of the glass, letting the water rise without disturbing the dense buds harshly.",
          tip: "Because buds are intact and covered in protective down, they take longer to hydrate than broken leaves."
        },
        {
          step: 3,
          title: "Watch the Vertical Float",
          instruction: "Allow the buds to steep for 4 to 5 minutes. Watch the needles float vertically like tiny stalactites and stalagmites in water.",
          tip: "Patience is rewarded with rich floral sweetness and zero astringency."
        },
        {
          step: 4,
          title: "Multiple Extended Steeps",
          instruction: "For your second and third infusions, increase water temperature to 90°C and steep for 5–6 minutes. The liquor will gain body and honey nectar sweetness.",
          tip: "High-grade Silver Needle can easily be infused up to 6 times."
        }
      ],
      culturalNotes: "White tea leaves can also be aged gracefully over years; a Chinese saying notes: 'One year tea, three years medicine, seven years treasure.'",
      relatedTeas: ["white-peony", "darjeeling-first-flush", "longjing", "gyokuro"]
    },

    // 8. TIEGUANYIN
    {
      id: "tieguanyin",
      name: "Tieguanyin (Iron Goddess of Mercy)",
      nativeName: "铁观音",
      slug: "tieguanyin",
      category: "oolong",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "China",
        region: "Anxi County, Quanzhou, Fujian",
        elevation: "600m – 1,000m",
        harvestSeason: "Autumn Pluck (Finest Fragrance) & Spring"
      },
      heroImage: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
      ],
      description: "One of China's most iconic oolong teas, featuring tightly rolled jade pearls that unfurl to release an intoxicating orchid fragrance, buttery sweetness, and refreshing mineral finish.",
      story: "Named after Guanyin, the Bodhisattva of Compassion. According to legend, a poor farmer named Wei Yin tended a neglected shrine to Guanyin daily. One night, the goddess appeared in a dream telling him of a treasure hidden in a cave behind the temple. There he found a unique tea shoot, which he planted and shared with his village.",
      ingredients: {
        core: ["Tightly rolled Tieguanyin oolong leaves (Anxi)", "Freshly boiled water"],
        optional: []
      },
      equipment: [
        "Porcelain Gaiwan (100ml–120ml)",
        "Gong Dao Bei (Fairness pitcher)",
        "Ceramic tasting cups",
        "Bamboo tea tongs"
      ],
      brewingDetails: {
        temperature: "90°C – 95°C (194°F – 203°F)",
        teaAmount: "7.0 g for 110ml Gaiwan",
        waterAmount: "110 ml",
        steepingTime: "Flash steeps: 15s, 20s, 30s, 45s",
        infusionCount: "7 to 10 infusions",
        vessel: "Glazed white porcelain Gaiwan",
        servingStyle: "Gongfu Cha sequential tasting"
      },
      preparationTime: "2 min",
      brewingTime: "20 sec per steep",
      difficulty: "Medium",
      servings: "2–4 people",
      caffeine: "Medium",
      strength: "Medium",
      moods: ["floral", "refreshing", "calm"],
      flavorProfile: {
        primary: ["Fresh Orchid Blossom", "Creamy Butter", "Sweet Honey Dew", "Spring Mineral"],
        radar: { umami: 60, sweetness: 85, floral: 95, vegetal: 55, astringency: 30, earthiness: 40 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Warm the Gaiwan",
          instruction: "Rinse the Gaiwan and cups with boiling water. Add 7g of tightly rolled Tieguanyin pearls.",
          tip: "Listen to the heavy 'clang' of the dense leaves against the porcelain floor."
        },
        {
          step: 2,
          title: "Quick Awakening Rinse",
          instruction: "Pour 95°C water over the leaves and decant immediately (3–5 seconds) to wake up the rolled pearls.",
          tip: "Inhale the underside of the Gaiwan lid to experience the soaring orchid aroma ('Guan Yin Yun')."
        },
        {
          step: 3,
          title: "First Infusion",
          instruction: "Infuse for 15–20 seconds with hot water. Pour into the fairness pitcher and distribute evenly into small cups.",
          tip: "Notice the liquor's luminous bright jade-gold color."
        },
        {
          step: 4,
          title: "Subsequent Steeps",
          instruction: "Add 10–15 seconds to each successive steep. The leaves will slowly unfurl across 8+ rounds, shifting from high floral notes to deep lingering sweetness.",
          tip: "Good Tieguanyin leaves maintain their fragrance even after 7 steeps ('Qi Pao You Yu Xiang')."
        }
      ],
      culturalNotes: "Tieguanyin is produced in two main styles: the modern bright-green floral 'Qing Xiang' style and the traditional charcoal-roasted 'Nong Xiang' style.",
      relatedTeas: ["da-hong-pao", "dong-ding", "alishan-oolong", "oriental-beauty"]
    },

    // 9. ROOIBOS
    {
      id: "rooibos-red-bush",
      name: "South African Rooibos",
      nativeName: "Rooibos / Aspalathus linearis",
      slug: "rooibos-red-bush",
      category: "herbal",
      type: "Herbal & Botanical Infusion",
      origin: {
        country: "South Africa",
        region: "Cederberg Mountain Range, Western Cape",
        elevation: "450m – 900m",
        harvestSeason: "Summer to Autumn (January – April)"
      },
      heroImage: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80"
      ],
      description: "A naturally caffeine-free herbal tisane from South Africa's Cederberg shrublands, featuring deep mahogany liquor, naturally sweet honey-caramel notes, and zero bitterness.",
      story: "For centuries, the indigenous Khoisan people harvested the needle-like leaves of the wild Aspalathus linearis bush, bruising them with mallets and letting them ferment in heaps under the African sun. Unlike true Camellia sinensis tea, rooibos contains virtually no tannins, meaning it never turns bitter even with extended boiling.",
      ingredients: {
        core: ["Organic fermented red rooibos needle leaves", "Fresh boiling water (100°C)"],
        optional: ["Slice of fresh orange or lemon", "A drizzle of wildflower honey", "Warm oat milk or almond milk (Rooibos Latte)"]
      },
      equipment: [
        "Teapot with fine stainless steel mesh infuser",
        "Ceramic mug or heat-resistant glass"
      ],
      brewingDetails: {
        temperature: "100°C (212°F Boiling)",
        teaAmount: "3.0 g – 4.0 g (1 heaping teaspoon)",
        waterAmount: "250 ml",
        steepingTime: "5 to 8 minutes (can steep indefinitely)",
        infusionCount: "2 steepings",
        vessel: "Ceramic teapot or mug",
        servingStyle: "Hot pure, with honey & lemon, or iced as summer cooler"
      },
      preparationTime: "2 min",
      brewingTime: "6 min",
      difficulty: "Easy",
      servings: "1 cup",
      caffeine: "None",
      strength: "Medium",
      moods: ["calm", "sweet", "earthy"],
      flavorProfile: {
        primary: ["Honey Wood", "Sweet Vanilla Caramel", "Nutty Earth", "Dried Fig", "Zero Bitterness"],
        radar: { umami: 20, sweetness: 90, floral: 40, vegetal: 15, astringency: 5, earthiness: 85 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Boil Fresh Water",
          instruction: "Bring fresh filtered water to a full rolling boil (100°C).",
          tip: "Rooibos requires high heat to extract its rich polyphenol antioxidants and natural wood sugars."
        },
        {
          step: 2,
          title: "Use Fine Mesh Strainer",
          instruction: "Place 1 heaping teaspoon (3g) of rooibos needles into a fine mesh basket infuser.",
          tip: "Rooibos needles are fine; an ultra-fine mesh prevents sediment from escaping into your cup."
        },
        {
          step: 3,
          title: "Generous Steeping",
          instruction: "Pour 250ml of boiling water over the leaves. Cover and steep for at least 5 to 7 minutes.",
          tip: "Because rooibos contains almost no bitter tannins, you can leave the leaves in as long as you like."
        },
        {
          step: 4,
          title: "Serve and Enjoy",
          instruction: "Drink pure, or enhance with a slice of fresh orange and a drop of honey.",
          tip: "Makes an exceptional evening bed-time beverage due to total absence of caffeine."
        }
      ],
      culturalNotes: "Rooibos grows exclusively in the small mountainous Cederberg biome north of Cape Town and cannot be commercially cultivated anywhere else in the world.",
      relatedTeas: ["egyptian-chamomile", "ceylon-cinnamon-tea", "moringa-herbal", "fresh-ginger-infusion"]
    },

    // 10. EGYPTIAN CHAMOMILE
    {
      id: "egyptian-chamomile",
      name: "Egyptian Golden Chamomile",
      nativeName: "بابونج مصري",
      slug: "egyptian-chamomile",
      category: "herbal",
      type: "Herbal & Botanical Infusion",
      origin: {
        country: "Egypt",
        region: "Nile River Delta & Fayoum Oasis",
        elevation: "River Valley Lowlands",
        harvestSeason: "Winter to Spring (December – April)"
      },
      heroImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Whole golden flower heads harvested along the fertile Nile River, imparting a soothing nectar liquor with notes of crisp green apple, sweet honey, and meadow blossoms.",
      story: "Chamomile (Matricaria chamomilla) was revered by ancient Egyptians as an offering to the Sun God Ra due to its radiant golden petals and restorative qualities. The unique mineral silt of the Nile Valley produces flower heads with exceptionally high essential oil concentration and natural sweetness.",
      ingredients: {
        core: ["Whole dried Egyptian chamomile flower heads (2–3 tsp)", "Fresh boiling water (100°C)"],
        optional: ["Raw clover honey", "Fresh lemon wheel", "Sprig of fresh mint or lavender"]
      },
      equipment: [
        "Glass teapot or French press (to view floating golden blossoms)",
        "Fine mesh tea strainer",
        "Ceramic mug"
      ],
      brewingDetails: {
        temperature: "100°C (212°F Boiling)",
        teaAmount: "3.0 g (approx. 2 tablespoons of whole flowers)",
        waterAmount: "250 ml",
        steepingTime: "5 to 6 minutes covered",
        infusionCount: "1 to 2 steepings",
        vessel: "Covered glass teapot or mug",
        servingStyle: "Warm evening cup before sleep"
      },
      preparationTime: "2 min",
      brewingTime: "5 min",
      difficulty: "Easy",
      servings: "1 cup",
      caffeine: "None",
      strength: "Light to Medium",
      moods: ["calm", "floral", "sweet"],
      flavorProfile: {
        primary: ["Crisp Green Apple", "Wildflower Honey", "Chamomile Blossom", "Sweet Meadow"],
        radar: { umami: 10, sweetness: 90, floral: 95, vegetal: 30, astringency: 5, earthiness: 40 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Measure Whole Blossoms",
          instruction: "Place 2 heaping tablespoons of whole dried chamomile flower heads into your teapot.",
          tip: "Use whole intact flowers rather than dusty crushed tea bags for superior flavor."
        },
        {
          step: 2,
          title: "Pour Boiling Water",
          instruction: "Pour 250ml of freshly boiled 100°C water over the blossoms.",
          tip: "Watch the golden flowers rehydrate and float gracefully."
        },
        {
          step: 3,
          title: "Cover and Steep",
          instruction: "Always cover the vessel and steep for 5 to 6 minutes.",
          tip: "Covering prevents the aromatic essential oils (chamazulene and bisabolol) from evaporating with steam."
        },
        {
          step: 4,
          title: "Strain and Sweeten",
          instruction: "Strain into your mug and stir in a small spoonful of raw honey if desired.",
          tip: "Drink 30 minutes before sleep for gentle relaxation."
        }
      ],
      culturalNotes: "In traditional botanical herbalism, chamomile has been celebrated across Mediterranean civilizations for over 3,000 years as the ultimate soothing nightcap.",
      relatedTeas: ["rooibos-red-bush", "silver-needle", "moringa-herbal", "fresh-ginger-infusion"]
    },

    // 11. PU-ERH SHOU
    {
      id: "puerh-shou",
      name: "Vintage Shou Pu-erh",
      nativeName: "熟普洱茶",
      slug: "puerh-shou",
      category: "puerh",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "China",
        region: "Menghai / Lincang, Yunnan Province",
        elevation: "1,200m – 1,800m",
        harvestSeason: "Aged post-fermented Yunnan large-leaf varietal"
      },
      heroImage: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80"
      ],
      description: "A dark post-fermented tea from Yunnan's ancient tea trees, producing an ink-black liquor with notes of damp forest earth, sweet wood, cacao, and thick velvety smoothness.",
      story: "Pu-erh was traditionally transported along the rugged Ancient Tea Horse Road (Cha Ma Gu Dao) on pack horses to Tibet and Beijing. During months of travel through misty mountain passes, the compressed tea bricks underwent natural fermentation. In the 1970s, the Kunming Tea Factory developed the 'Wo Dui' (wet-piling) technique to create rich, mature Shou Pu-erh with smooth digestive comfort.",
      ingredients: {
        core: ["Compressed Shou Pu-erh cake or loose leaf (7g)", "100°C rolling boiling spring water"],
        optional: []
      },
      equipment: [
        "Pu-erh tea pick / knife (for prying cake pieces)",
        "Purple Clay Yixing Teapot or thick Gaiwan",
        "Fairness Pitcher (Cha Hai)",
        "Tea strainer"
      ],
      brewingDetails: {
        temperature: "100°C (212°F Full Rolling Boil)",
        teaAmount: "7.0 g – 8.0 g",
        waterAmount: "120 ml",
        steepingTime: "Flash steeps: 10s, 15s, 20s, 30s",
        infusionCount: "10 to 15 steepings",
        vessel: "Purple Zisha clay pot (well seasoned) or Gaiwan",
        servingStyle: "Gongfu Cha multi-round tasting"
      },
      preparationTime: "3 min",
      brewingTime: "15 sec",
      difficulty: "Medium",
      servings: "2–4 people",
      caffeine: "Medium to High",
      strength: "Strong",
      moods: ["earthy", "bold", "traditional"],
      flavorProfile: {
        primary: ["Forest Floor", "Petrichor & Wet Wood", "Dark Cocoa", "Sweet Date", "Velvet Texture"],
        radar: { umami: 70, sweetness: 80, floral: 10, vegetal: 5, astringency: 10, earthiness: 98 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Pry the Leaf Carefully",
          instruction: "Using a blunt Pu-erh tea pick, gently slide parallel along the layers of the tea cake to pry off 7–8g without shattering the whole leaf structure.",
          tip: "Never stab directly down into a compressed cake."
        },
        {
          step: 2,
          title: "Two Rapid Rinses",
          instruction: "Place leaves in the preheated pot. Pour 100°C boiling water and immediately discard after 5 seconds. Repeat with a second 5-second rinse.",
          tip: "Rinsing removes microbial surface dust and fully awakens the dense aged leaves."
        },
        {
          step: 3,
          title: "Infuse with Boiling Water",
          instruction: "Pour fresh boiling water and steep for 10–15 seconds for early rounds. Decant into the fairness pitcher.",
          tip: "The liquor should resemble dark polished mahogany or rich black coffee."
        },
        {
          step: 4,
          title: "Extended Endurance",
          instruction: "High quality aged Shou Pu-erh will effortlessly yield 10 to 15 aromatic infusions without bitterness.",
          tip: "Often enjoyed after heavy meals across Cantonese Dim Sum culture ('Bo Lei')."
        }
      ],
      culturalNotes: "Yunnan is home to ancient living wild tea trees that are over 1,000 to 2,700 years old.",
      relatedTeas: ["da-hong-pao", "keemun", "hojicha", "turkish-rize-tea"]
    },

    // 12. GYOKURO
    {
      id: "gyokuro",
      name: "Gyokuro (Precious Dew)",
      nativeName: "玉露",
      slug: "gyokuro",
      category: "green",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "Japan",
        region: "Uji (Kyoto) & Yame (Fukuoka)",
        elevation: "200m – 500m",
        harvestSeason: "Spring First Flush (Ichibancha)"
      },
      heroImage: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Japan's most luxurious shaded green tea, grown under 90% reed shade for 20+ days to yield an intensely savory broth of concentrated L-theanine, marine sweetness, and liquid umami.",
      story: "Invented in 1835 by Kahei Yamamoto VI of the Yamamotoyama tea company. By depriving the tea bushes of direct sunlight before plucking, the conversion of amino acids (L-theanine) into astringent catechins is halted, resulting in an emerald leaf that brews into an almost soup-like, savory liquor.",
      ingredients: {
        core: ["Authentic Japanese shaded Gyokuro loose leaves", "Cool low-mineral spring water (50°C–60°C)"],
        optional: []
      },
      equipment: [
        "Shiboridashi or Kyusu (Japanese flat clay teapot)",
        "Yuzamashi (Water cooling bowl)",
        "Small white porcelain tasting cups"
      ],
      brewingDetails: {
        temperature: "50°C – 60°C (122°F – 140°F very cool!)",
        teaAmount: "5.0 g – 6.0 g",
        waterAmount: "60 ml – 80 ml (high leaf-to-water ratio)",
        steepingTime: "2.0 minutes (120 seconds)",
        infusionCount: "3 to 4 steepings",
        vessel: "Flat unglazed Tokoname Shiboridashi",
        servingStyle: "Sipped in small, concentrated, broth-like drops"
      },
      preparationTime: "3 min",
      brewingTime: "2 min",
      difficulty: "Advanced",
      servings: "2 small cups",
      caffeine: "High",
      strength: "Medium",
      moods: ["calm", "traditional", "refreshing"],
      flavorProfile: {
        primary: ["Intense Umami", "Sweet Nori Seaweed", "Steamed Spinach", "Liquid Dew Drop"],
        radar: { umami: 100, sweetness: 90, floral: 30, vegetal: 95, astringency: 15, earthiness: 40 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Step Down the Water Temperature",
          instruction: "Boil water and pour it first into your cups, then into the Yuzamashi cooling bowl, waiting until it reaches 50°C–60°C.",
          tip: "Each vessel transfer drops water temperature by approximately 8°C–10°C."
        },
        {
          step: 2,
          title: "Generous Leaf in Shiboridashi",
          instruction: "Place 5–6g of dark needle-shaped Gyokuro leaves into the flat Shiboridashi teapot.",
          tip: "The high leaf-to-water ratio creates an espresso-like savory extraction."
        },
        {
          step: 3,
          title: "Low Temperature Infusion",
          instruction: "Gently pour the 55°C water over the leaves. Put the lid on and steep for 2 minutes without swirling.",
          tip: "Do not rush; low temperature prevents bitterness while extracting sweet amino acids."
        },
        {
          step: 4,
          title: "Pour to the Last Drop",
          instruction: "Pour drop by drop alternately into small cups. The final drops ('Golden Drops') contain the highest concentration of flavor.",
          tip: "After 3 infusions, the spent tender Gyokuro leaves can be eaten dressed with ponzu soy sauce."
        }
      ],
      culturalNotes: "Gyokuro translates directly as 'Jade Dew' or 'Precious Dew', referring to the glowing pale green color of the extraction.",
      relatedTeas: ["matcha", "sencha", "longjing", "silver-needle"]
    },

    // 13. CEYLON CINNAMON TEA
    {
      id: "ceylon-cinnamon-tea",
      name: "Ceylon True Cinnamon Tea",
      nativeName: "කුරුඳු තේ",
      slug: "ceylon-cinnamon-tea",
      category: "herbal",
      type: "Herbal & Botanical Infusion",
      origin: {
        country: "Sri Lanka",
        region: "Southern Coastal Belt & Central Hills",
        elevation: "Sea Level – 500m",
        harvestSeason: "Monsoon Peel (May – November)"
      },
      heroImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
      ],
      description: "A naturally fragrant infusion made from whole quills of authentic Ceylon 'True' Cinnamon (Cinnamomum verum), delivering sweet woody warmth, delicate spice, and natural sweetness without sugar.",
      story: "Sri Lanka is the native home of True Ceylon Cinnamon, celebrated across antiquity from Pharaonic Egypt to European spice routes. Unlike common Cassia bark, Ceylon cinnamon is hand-rolled into delicate papery layers with low coumarin content, creating an aromatic infusion that is naturally sweet, subtle, and warming.",
      ingredients: {
        core: [
          "Authentic Ceylon Cinnamon quills (1–2 sticks, lightly broken)",
          "Fresh filtered water (350ml)"
        ],
        optional: ["Raw honey or jaggery", "Slice of fresh lemon or dried apple slice", "Small piece of crushed ginger"]
      },
      equipment: [
        "Small saucepan or heat-resistant glass kettle",
        "Stainless steel strainer",
        "Ceramic mug"
      ],
      brewingDetails: {
        temperature: "100°C (Stovetop low simmer)",
        teaAmount: "1–2 whole Ceylon cinnamon quills (approx. 5g)",
        waterAmount: "350 ml",
        steepingTime: "8 to 10 minutes gentle simmer",
        infusionCount: "Quills can be re-simmered 2 times",
        vessel: "Saucepan or teapot",
        servingStyle: "Warm comfort cup or chilled with apple cider"
      },
      preparationTime: "2 min",
      brewingTime: "10 min",
      difficulty: "Easy",
      servings: "1–2 cups",
      caffeine: "None",
      strength: "Medium",
      moods: ["sweet", "calm", "earthy"],
      flavorProfile: {
        primary: ["Sweet Woody Spice", "Subtle Citrus Floral", "Warm Honey Finish", "Zero Bitterness"],
        radar: { umami: 10, sweetness: 95, floral: 50, vegetal: 10, astringency: 10, earthiness: 90 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Break the Quills",
          instruction: "Lightly break 1 to 2 Ceylon cinnamon sticks into smaller 1-inch segments with your fingers.",
          tip: "Breaking the inner layers exposes maximum surface area for the essential oils (cinnamaldehyde)."
        },
        {
          step: 2,
          title: "Simmer in Water",
          instruction: "Place the broken quills into a saucepan with 350ml of cold water. Bring to a gentle boil, then turn heat to low and simmer for 8–10 minutes.",
          tip: "Simmering extracts the natural water-soluble sweetness without bitterness."
        },
        {
          step: 3,
          title: "Rest for Deep Color",
          instruction: "Turn off heat, cover the pot, and let the infusion rest for 3 minutes as the liquid deepens into a rich golden-amber tone.",
          tip: "The longer it rests, the sweeter and more aromatic it becomes."
        },
        {
          step: 4,
          title: "Strain and Serve",
          instruction: "Pour through a strainer into your favorite mug. Drink as-is without sugar, or add a squeeze of fresh lemon.",
          tip: "Cinnamon quills can be rinsed and reused for a second brew on the same day."
        }
      ],
      culturalNotes: "True Ceylon cinnamon is graded into thin quills called 'Alba', which are painstakingly handcrafted by master peelers in southern Sri Lanka.",
      relatedTeas: ["fresh-ginger-infusion", "zanzibar-clove", "masala-chai", "rooibos-red-bush"]
    },

    // 14. FRESH GINGER INFUSION
    {
      id: "fresh-ginger-infusion",
      name: "Fresh Ginger Root Infusion",
      nativeName: "Zingiber officinale Infusion",
      slug: "fresh-ginger-infusion",
      category: "herbal",
      type: "Herbal & Botanical Infusion",
      origin: {
        country: "Global / Tropical Asia",
        region: "South & Southeast Asian Traditions",
        elevation: "Lowland River Valleys",
        harvestSeason: "Year-round root harvest"
      },
      heroImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
      ],
      description: "A warming, fiery herbal decoction prepared from freshly sliced or crushed ginger rhizomes, bringing invigorating heat, zesty spice, and soothing comfort.",
      story: "Ginger has been brewed across traditional Ayurvedic and East Asian domestic households for over 5,000 years. Whether called 'Sheng Jiang Tang' in China or 'Adrak Chai base' in India, fresh root decoction is a timeless staple for cold evenings and digestive comfort.",
      ingredients: {
        core: ["Fresh ginger rhizome (2-inch thumb, washed & sliced)", "Filtered water (350ml)"],
        optional: ["Fresh lemon juice (1 tbsp)", "Raw mountain honey (1–2 tsp)", "Fresh mint leaves or turmeric root"]
      },
      equipment: [
        "Small saucepan",
        "Knife and cutting board",
        "Strainer",
        "Mug"
      ],
      brewingDetails: {
        temperature: "100°C (Active rolling simmer)",
        teaAmount: "15g – 20g fresh sliced root",
        waterAmount: "350 ml",
        steepingTime: "7 to 10 minutes simmer",
        infusionCount: "Single rich extraction",
        vessel: "Saucepan to ceramic mug",
        servingStyle: "Warm with honey and fresh lemon"
      },
      preparationTime: "3 min",
      brewingTime: "8 min",
      difficulty: "Easy",
      servings: "1 cup",
      caffeine: "None",
      strength: "Strong",
      moods: ["energizing", "sweet", "calm"],
      flavorProfile: {
        primary: ["Zesty Heat", "Fresh Pungent Spice", "Lemon Pine Notes", "Warming Throat Feel"],
        radar: { umami: 10, sweetness: 60, floral: 30, vegetal: 20, astringency: 25, earthiness: 90 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Slice or Bruise the Ginger",
          instruction: "Wash a 2-inch piece of fresh ginger thoroughly. Slice thinly or crush with the flat of a knife blade. Peeling is optional if organic.",
          tip: "Crushing bursts the cellular walls, releasing pungent gingerols and shogaols."
        },
        {
          step: 2,
          title: "Simmer in Water",
          instruction: "Add sliced ginger into 350ml of water in a saucepan. Bring to a boil, then reduce heat and simmer on low for 8 to 10 minutes.",
          tip: "Simmer for 5 minutes for a mild cup, or 12+ minutes for intense fiery heat."
        },
        {
          step: 3,
          title: "Strain and Season",
          instruction: "Pour through a strainer into your mug. Add a generous squeeze of fresh lemon juice and stir in raw honey.",
          tip: "Add honey only after the liquid cools slightly below 60°C to preserve honey's raw enzymes."
        }
      ],
      culturalNotes: "In traditional winter wellness rituals across Asia, ginger tea is sipped to dispel damp cold and invigorate vital circulation.",
      relatedTeas: ["ceylon-cinnamon-tea", "zanzibar-clove", "masala-chai", "egyptian-chamomile"]
    },

    // 15. ZANZIBAR CLOVE
    {
      id: "zanzibar-clove",
      name: "Zanzibar Clove Infusion",
      nativeName: "Syzygium aromaticum Tea",
      slug: "zanzibar-clove",
      category: "herbal",
      type: "Herbal & Botanical Infusion",
      origin: {
        country: "Tanzania / Spice Islands",
        region: "Zanzibar & Pemba Islands",
        elevation: "Tropical Coastal Groves",
        harvestSeason: "Biannual bud harvest"
      },
      heroImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
      ],
      description: "An intensely aromatic spiced tisane made from whole dried flower buds of the clove tree, delivering deep eugenol warmth, woody sweet spice, and a soothing numbing finish.",
      story: "The archipelago of Zanzibar has been known for centuries as the 'Spice Island' of the Indian Ocean. Whole clove buds (the unopened pink flowers of Syzygium aromaticum) were dried on mats under the tropical sun and brewed as a traditional oral tonic and invigorating digestive draught.",
      ingredients: {
        core: ["Whole dried Zanzibar clove buds (6–8 whole cloves)", "Fresh water (300ml)"],
        optional: ["Slice of fresh orange peel", "Cinnamon stick", "Pure honey"]
      },
      equipment: [
        "Small saucepan or infuser pot",
        "Strainer",
        "Glass cup"
      ],
      brewingDetails: {
        temperature: "100°C (Boiling simmer)",
        teaAmount: "6–8 whole clove buds (approx. 2g)",
        waterAmount: "300 ml",
        steepingTime: "6 to 8 minutes simmer",
        infusionCount: "1 to 2 steepings",
        vessel: "Saucepan to glass",
        servingStyle: "Warm spiced evening sip"
      },
      preparationTime: "2 min",
      brewingTime: "7 min",
      difficulty: "Easy",
      servings: "1 cup",
      caffeine: "None",
      strength: "Strong",
      moods: ["bold", "earthy", "calm"],
      flavorProfile: {
        primary: ["Deep Eugenol Spice", "Woody Pungency", "Warm Camphor Sweetness", "Numbing Finish"],
        radar: { umami: 15, sweetness: 70, floral: 40, vegetal: 10, astringency: 35, earthiness: 95 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Lightly Bruise Cloves",
          instruction: "Lightly crush 6 to 8 whole clove buds with the back of a spoon to expose the essential aromatic core.",
          tip: "Do not grind to powder; whole crushed buds keep the brew clear and aromatic."
        },
        {
          step: 2,
          title: "Simmer in Water",
          instruction: "Add the cloves to 300ml water and bring to a simmer for 6–8 minutes on gentle heat.",
          tip: "The liquor will transform into a warm amber hue."
        },
        {
          step: 3,
          title: "Strain and Sweeten",
          instruction: "Strain into your glass and stir in a spoonful of raw honey and a strip of orange peel.",
          tip: "Enjoy after heavy meals for pleasant digestive comfort."
        }
      ],
      culturalNotes: "Zanzibar's historic stone town was the trading nexus for the ancient dhow spice routes linking Arabia, India, and Africa.",
      relatedTeas: ["ceylon-cinnamon-tea", "fresh-ginger-infusion", "masala-chai", "rooibos-red-bush"]
    },

    // 16. MORINGA HERBAL INFUSION
    {
      id: "moringa-herbal",
      name: "Moringa Leaf Herbal Infusion",
      nativeName: "Moringa oleifera Herbal",
      slug: "moringa-herbal",
      category: "herbal",
      type: "Herbal & Botanical Infusion",
      origin: {
        country: "India / Tropical Africa",
        region: "Sub-Himalayan & African Savannahs",
        elevation: "Tropical Plains",
        harvestSeason: "Dry Season Harvest"
      },
      heroImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
      ],
      description: "A bright herbaceous infusion harvested from the leaves of the 'Miracle Tree' (Moringa oleifera), carrying a mild green tea-like aroma with earthy, spinach, and subtle sweet nutty notes.",
      story: "Native to the foothills of the Himalayas, Moringa has been used in Ayurvedic traditions for millennia. Dried whole leaves are gently steeped to produce an energizing botanical liquor rich in natural chlorophyll and plant nutrients without containing caffeine.",
      ingredients: {
        core: ["Organic dried whole Moringa leaves (1–2 tsp)", "Filtered hot water (90°C–95°C)"],
        optional: ["Fresh lemon juice", "Raw honey", "Fresh mint sprig"]
      },
      equipment: ["Teapot with mesh strainer", "Ceramic cup"],
      brewingDetails: {
        temperature: "90°C – 95°C (194°F – 203°F)",
        teaAmount: "2.5 g (approx. 1.5 teaspoons)",
        waterAmount: "250 ml",
        steepingTime: "4 to 5 minutes",
        infusionCount: "2 steepings",
        vessel: "Ceramic teapot",
        servingStyle: "Morning or afternoon vitality cup"
      },
      preparationTime: "2 min",
      brewingTime: "4 min",
      difficulty: "Easy",
      servings: "1 cup",
      caffeine: "None",
      strength: "Light to Medium",
      moods: ["energizing", "refreshing", "earthy"],
      flavorProfile: {
        primary: ["Earthy Green", "Sweet Spinach", "Nutty Grass", "Clean Herbaceous Finish"],
        radar: { umami: 60, sweetness: 50, floral: 30, vegetal: 85, astringency: 15, earthiness: 75 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Measure Moringa Leaves",
          instruction: "Place 1.5 teaspoons of dried whole moringa leaves into your infuser.",
          tip: "Choose bright green, whole dried leaves rather than old brown leaves."
        },
        {
          step: 2,
          title: "Pour Hot Water",
          instruction: "Pour 250ml of 90°C water over the leaves. Cover and steep for 4 to 5 minutes.",
          tip: "Water slightly below boiling prevents vegetal bitterness."
        },
        {
          step: 3,
          title: "Strain and Enjoy",
          instruction: "Remove the infuser and enjoy the clear, bright green-gold infusion. Add lemon for a vibrant citrus twist.",
          tip: "Excellent hot or chilled over ice with fresh cucumber slices."
        }
      ],
      culturalNotes: "Moringa trees thrive in arid soils where few other crops survive, earning them deep respect as community nourishing plants across the tropics.",
      relatedTeas: ["sencha", "egyptian-chamomile", "rooibos-red-bush", "fresh-ginger-infusion"]
    },

    // 17. SENCHA
    {
      id: "sencha",
      name: "Japanese Sencha",
      nativeName: "煎茶",
      slug: "sencha",
      category: "green",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "Japan",
        region: "Shizuoka & Kagoshima",
        elevation: "100m – 400m",
        harvestSeason: "Spring First Flush (Shincha / Ichibancha)"
      },
      heroImage: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Japan's most widely consumed green tea, crafted by deep steaming (Fukamushi) freshly plucked leaves to yield an emerald cup with vibrant marine sweetness, crisp grassy clarity, and balanced astringency.",
      story: "Unlike Chinese pan-fired teas, Japanese sencha is briefly steamed within hours of harvest to arrest enzymatic oxidation. Developed in Uji in 1738 by Nagatani Soen, this method preserves the tender green color and high vitamin C content of the leaf.",
      ingredients: {
        core: ["Authentic Japanese Sencha loose needle leaves", "Soft water (70°C–80°C)"],
        optional: []
      },
      equipment: [
        "Japanese side-handle Kyusu teapot",
        "Small ceramic teacups (Yunomi)",
        "Water cooling bowl"
      ],
      brewingDetails: {
        temperature: "70°C – 80°C (158°F – 176°F)",
        teaAmount: "4.0 g (approx. 1 rounded tsp)",
        waterAmount: "180 ml – 200 ml",
        steepingTime: "1.0 minute (60 seconds)",
        infusionCount: "3 steepings",
        vessel: "Side-handle ceramic Kyusu",
        servingStyle: "Poured alternately to distribute strength"
      },
      preparationTime: "2 min",
      brewingTime: "1 min",
      difficulty: "Easy",
      servings: "1–2 cups",
      caffeine: "Medium",
      strength: "Medium",
      moods: ["refreshing", "energizing", "calm"],
      flavorProfile: {
        primary: ["Fresh Cut Grass", "Steamed Edamame", "Crisp Marine Note", "Refreshing Bittersweet"],
        radar: { umami: 85, sweetness: 70, floral: 40, vegetal: 95, astringency: 45, earthiness: 30 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Cool the Water in Cups",
          instruction: "Pour boiling water into your Yunomi teacups first to cool the water down to 75°C and warm the cups.",
          tip: "Steeping with boiling water makes sencha unpleasantly bitter."
        },
        {
          step: 2,
          title: "Add Leaves to Kyusu",
          instruction: "Place 4g of sencha needle leaves into the Kyusu.",
          tip: "Notice the deep glossy dark-green sheen of the rolled needles."
        },
        {
          step: 3,
          title: "Gentle 60-Second Steep",
          instruction: "Pour the cooled 75°C water from your cups into the Kyusu. Steep for 60 seconds without shaking.",
          tip: "Deep-steamed Fukamushi sencha requires only 45 seconds."
        },
        {
          step: 4,
          title: "Pour in Alternating Rounds",
          instruction: "Pour small amounts back and forth between each cup until every last drop is served.",
          tip: "Leaving no water in the pot ensures the leaves are ready for a crisp second steep."
        }
      ],
      culturalNotes: "Sencha represents over 80% of all green tea produced and consumed in Japan today.",
      relatedTeas: ["gyokuro", "matcha", "longjing", "hojicha"]
    },

    // 18. HOJICHA
    {
      id: "hojicha",
      name: "Kyoto Roasted Hojicha",
      nativeName: "ほうじ茶",
      slug: "hojicha",
      category: "green",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "Japan",
        region: "Kyoto Prefecture",
        elevation: "200m – 500m",
        harvestSeason: "Summer/Autumn Bancha & Sencha Leaves"
      },
      heroImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
      ],
      description: "A soothing Japanese roasted green tea roasted over high charcoal heat in porcelain pots, yielding a comforting amber liquor with toasty hazelnut, caramel, and smoky sweet aroma with low caffeine.",
      story: "Invented in Kyoto during the 1920s by tea merchants seeking to make the most of late-season bancha leaves and stems. By roasting at 200°C, the caffeine and catechins are sublimated, creating a gentle tea that can be enjoyed by children, monks, and evening drinkers alike.",
      ingredients: {
        core: ["Loose roasted Hojicha leaves and stems", "Boiling water (90°C–100°C)"],
        optional: ["Steamed milk & brown sugar syrup (for Hojicha Latte)"]
      },
      equipment: ["Large ceramic teapot (Dobin or Kyusu)", "Large mugs"],
      brewingDetails: {
        temperature: "90°C – 100°C (194°F – 212°F)",
        teaAmount: "4.0 g – 5.0 g (approx. 2 tablespoons)",
        waterAmount: "250 ml",
        steepingTime: "30 to 60 seconds (rapid extraction)",
        infusionCount: "2 to 3 steepings",
        vessel: "Heavy ceramic teapot",
        servingStyle: "Served steaming hot in everyday teacups"
      },
      preparationTime: "2 min",
      brewingTime: "45 sec",
      difficulty: "Easy",
      servings: "1–2 cups",
      caffeine: "Low",
      strength: "Medium",
      moods: ["calm", "sweet", "earthy"],
      flavorProfile: {
        primary: ["Toasted Hazelnut", "Caramelized Malt", "Warm Woody Smoke", "Gentle Sweetness"],
        radar: { umami: 40, sweetness: 85, floral: 15, vegetal: 20, astringency: 10, earthiness: 90 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Use Boiling Water",
          instruction: "Unlike regular Japanese green tea, Hojicha loves hot 95°C–100°C boiling water to release its roasted volatile pyrazines.",
          tip: "The high roasting eliminates bitterness, so high heat is safe."
        },
        {
          step: 2,
          title: "Add Voluminous Leaves",
          instruction: "Add 4–5g of light, airy roasted leaves into your pot.",
          tip: "Because leaves are roasted and puffed, measure generously by volume."
        },
        {
          step: 3,
          title: "Quick 45-Second Steep",
          instruction: "Pour boiling water and steep for just 30–45 seconds before decanting completely.",
          tip: "Hojicha infuses very rapidly into glowing amber liquid."
        }
      ],
      culturalNotes: "Hojicha is the standard evening tea served at traditional Japanese ryokans (inns) and family dinners.",
      relatedTeas: ["genmaicha", "sencha", "puerh-shou", "rooibos-red-bush"]
    },

    // 19. GENMAICHA
    {
      id: "genmaicha",
      name: "Japanese Genmaicha (Brown Rice Tea)",
      nativeName: "玄米茶",
      slug: "genmaicha",
      category: "green",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "Japan",
        region: "Shizuoka & Kyoto",
        elevation: "Lowland to Mid-hills",
        harvestSeason: "Bancha & Toasted Mochi Brown Rice"
      },
      heroImage: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
      ],
      description: "The 'People's Tea' of Japan, blending steamed green bancha leaves with roasted and popped brown rice grains, delivering a cozy, nutty popcorn aroma and gentle vegetal broth.",
      story: "Originally conceived as a way for working-class citizens to stretch their tea supply by blending it with cheap roasted unpolished brown rice (Genmai). Today, it is globally celebrated for its comforting, savory, toasted-grain character.",
      ingredients: {
        core: ["Genmaicha blend (Green tea leaves + roasted brown rice)", "Hot water (85°C–90°C)"],
        optional: ["Matcha dusting (Matcha-iri Genmaicha)"]
      },
      equipment: ["Kyusu or ceramic teapot", "Ceramic cups"],
      brewingDetails: {
        temperature: "85°C – 90°C (185°F – 194°F)",
        teaAmount: "4.0 g – 5.0 g",
        waterAmount: "200 ml",
        steepingTime: "1.0 to 1.5 minutes",
        infusionCount: "2 to 3 steepings",
        vessel: "Ceramic teapot",
        servingStyle: "Warm comfort meal companion"
      },
      preparationTime: "2 min",
      brewingTime: "1.5 min",
      difficulty: "Easy",
      servings: "1–2 cups",
      caffeine: "Low",
      strength: "Light to Medium",
      moods: ["calm", "earthy", "sweet"],
      flavorProfile: {
        primary: ["Toasted Popcorn", "Roasted Rice Grain", "Sweet Grass", "Nutty Broth"],
        radar: { umami: 70, sweetness: 80, floral: 20, vegetal: 65, astringency: 15, earthiness: 85 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Measure Blend",
          instruction: "Add 1 rounded tablespoon of Genmaicha blend into the teapot.",
          tip: "Ensure an even mix of green needle leaves and golden roasted rice kernels."
        },
        {
          step: 2,
          title: "Steep at 85°C",
          instruction: "Pour 200ml of 85°C water. Steep for 60 to 90 seconds.",
          tip: "Hot water releases the rich roasted grain fragrance immediately."
        },
        {
          step: 3,
          title: "Pour and Enjoy",
          instruction: "Pour into wide ceramic cups. Enjoy the soothing aroma of warm puffed rice.",
          tip: "Pairs wonderfully with sushi, rice dishes, and savory snacks."
        }
      ],
      culturalNotes: "Sometimes called 'Popcorn Tea' because a few kernels of rice pop like white blossoms during the roasting process.",
      relatedTeas: ["sencha", "hojicha", "longjing", "matcha"]
    },

    // 20. ASSAM ORTHODOX BLACK TEA
    {
      id: "assam-orthodox",
      name: "Assam Orthodox Gold",
      nativeName: "অসমীয়া চাহ",
      slug: "assam-orthodox",
      category: "black",
      type: "True Tea (Camellia sinensis var. assamica)",
      origin: {
        country: "India",
        region: "Brahmaputra River Valley, Assam",
        elevation: "Sea level – 120m (Tropical Floodplains)",
        harvestSeason: "Second Flush (June – July / Golden Tip Pluck)"
      },
      heroImage: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80"
      ],
      description: "The benchmark of bold black tea, grown along the tropical floodplains of the Brahmaputra River, famous for its rich golden tips, deep copper liquor, heavy maltiness, and brisk wake-up punch.",
      story: "Assam is home to the indigenous large-leaf tea varietal Camellia sinensis var. assamica, discovered growing wild in 1823 by Robert Bruce with the help of the local Singpho tribal chiefs. Today, Assam produces more than half of India's total tea.",
      ingredients: {
        core: ["Loose leaf Assam Second Flush Orthodox whole leaves with golden tips", "Fresh boiling water (100°C)"],
        optional: ["Splash of cold whole milk", "Raw brown sugar or honey"]
      },
      equipment: ["Porcelain or stoneware teapot", "Teacups", "Fine strainer"],
      brewingDetails: {
        temperature: "95°C – 100°C (203°F – 212°F)",
        teaAmount: "3.0 g per cup",
        waterAmount: "220 ml – 250 ml",
        steepingTime: "3.5 to 4.5 minutes",
        infusionCount: "2 steepings",
        vessel: "Stoneware teapot",
        servingStyle: "Classic British morning cup with milk or pure"
      },
      preparationTime: "2 min",
      brewingTime: "4 min",
      difficulty: "Easy",
      servings: "1–2 cups",
      caffeine: "High",
      strength: "Strong",
      moods: ["energizing", "bold", "traditional"],
      flavorProfile: {
        primary: ["Rich Barley Malt", "Dark Molasses", "Warm Toast", "Brisk Mineral Astringency"],
        radar: { umami: 40, sweetness: 75, floral: 25, vegetal: 10, astringency: 75, earthiness: 90 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Boil Fresh Water",
          instruction: "Bring fresh filtered water to a rolling 100°C boil.",
          tip: "Hardy Assam black tea needs vigorous boiling heat to extract its rich malty sweetness."
        },
        {
          step: 2,
          title: "Steep in Warm Pot",
          instruction: "Warm the pot, add 3g leaves per cup, and pour 250ml boiling water. Cover and steep for 4 minutes.",
          tip: "If drinking with milk, steep a full 4.5 minutes to create body that cuts through cream."
        },
        {
          step: 3,
          title: "Strain and Serve",
          instruction: "Strain into warm teacups. Sip pure to taste the sweet golden tip honey notes, or add a dash of cold milk.",
          tip: "The quintessential base for English Breakfast tea blends."
        }
      ],
      culturalNotes: "The Singpho people traditionally smoked indigenous Assam wild tea leaves inside green bamboo poles over hearth fires.",
      relatedTeas: ["darjeeling-first-flush", "masala-chai", "keemun", "turkish-rize-tea"]
    },

    // 21. KASHMIRI KAHWA
    {
      id: "kashmiri-kahwa",
      name: "Royal Kashmiri Kahwa",
      nativeName: "کشمیری قہوہ",
      slug: "kashmiri-kahwa",
      category: "traditional",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "India",
        region: "Kashmir Valley (Himalayas)",
        elevation: "1,600m – 2,200m",
        harvestSeason: "Green Tea base with Himalayan saffron & spices"
      },
      heroImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80"
      ],
      description: "A luxurious golden royal tea from the Kashmir Valley, made by simmering unoxidized green tea with precious Kashmiri saffron strands, green cardamom, cinnamon bark, and slivered blanched almonds.",
      story: "Tracing its heritage along the ancient Silk Road routes linking Central Asia and Kashmir, Kahwa was traditionally brewed in ornate brass or copper samovars stoked with burning charcoal coals, served at celebrations and snowy mountain mornings.",
      ingredients: {
        core: [
          "Mild Kashmiri green tea leaves (1.5 tsp)",
          "Pure Kashmiri Saffron (Kong / 8–10 strands)",
          "Green cardamom pods (3 pods, crushed)",
          "Cinnamon stick (1 piece)",
          "Slivered blanched almonds (1 tbsp)",
          "Water (400ml)",
          "Honey or sugar (1–2 tsp)"
        ],
        optional: ["Dried rose petals", "Crushed walnuts"]
      },
      equipment: [
        "Traditional brass Samovar or heavy saucepan",
        "Strainer",
        "Small glass cups or ceramic bowls"
      ],
      brewingDetails: {
        temperature: "95°C (Simmering extraction)",
        teaAmount: "4.0 g green tea leaves + saffron & spices",
        waterAmount: "400 ml",
        steepingTime: "4 to 5 minutes simmer",
        infusionCount: "Single ceremonial brew",
        vessel: "Samovar or saucepan to glass cups",
        servingStyle: "Garnished with floating slivered almonds and saffron threads"
      },
      preparationTime: "5 min",
      brewingTime: "5 min",
      difficulty: "Medium",
      servings: "2 cups",
      caffeine: "Medium",
      strength: "Medium",
      moods: ["sweet", "traditional", "floral"],
      flavorProfile: {
        primary: ["Precious Saffron", "Sweet Cardamom", "Nutty Almond", "Gentle Green Tea", "Honeyed Warmth"],
        radar: { umami: 40, sweetness: 90, floral: 90, vegetal: 35, astringency: 20, earthiness: 65 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Simmer Spices and Saffron",
          instruction: "In 400ml water, add crushed cardamom pods, cinnamon, and saffron strands. Bring to a gentle boil for 3 minutes until the water turns luminous golden.",
          tip: "Simmering first releases the golden crocin pigment and aroma from saffron."
        },
        {
          step: 2,
          title: "Add Green Tea and Sweetener",
          instruction: "Lower heat, add 1.5 tsp green tea leaves and honey. Simmer gently for 2 minutes. Do not boil vigorously to avoid bitterness.",
          tip: "Kashmiri green tea is light and unfermented, designed to complement aromatics."
        },
        {
          step: 3,
          title: "Garnish with Almonds and Serve",
          instruction: "Place a spoonful of slivered blanched almonds in each cup. Strain the golden hot tea over the almonds and serve steaming.",
          tip: "Sip the fragrant saffron liquor and enjoy the crunchy almonds at the finish."
        }
      ],
      culturalNotes: "In Kashmiri homes, serving Kahwa to guests is the highest gesture of warmth, honor, and festive celebration.",
      relatedTeas: ["masala-chai", "moroccan-mint", "ceylon-cinnamon-tea", "darjeeling-first-flush"]
    },

    // 22. TURKISH RIZE BLACK TEA
    {
      id: "turkish-rize-tea",
      name: "Turkish Rize Tea (Çay)",
      nativeName: "Rize Çayı",
      slug: "turkish-rize-tea",
      category: "traditional",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "Turkey",
        region: "Rize Province, Black Sea Coast",
        elevation: "Mountain hillsides facing Black Sea",
        harvestSeason: "May to October (3 harvests)"
      },
      heroImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Turkey's national staple, grown along the misty Black Sea hills of Rize, brewed slowly in a double stacked kettle (Çaydanlık) to yield a clear crimson liquor served in curved tulip glasses with beet sugar cubes.",
      story: "Although coffee was historically famous in the Ottoman Empire, coffee shortages after WWI led the young Turkish Republic under Mustafa Kemal Atatürk to establish domestic tea plantations in the humid Black Sea province of Rize in the 1920s. Today, Turkey has the highest per capita tea consumption on Earth.",
      ingredients: {
        core: ["Finely cut Rize Black Tea leaves (3–4 tbsp)", "Fresh water (for top and bottom kettle)", "Beet sugar cubes (Pancar Şekeri)"],
        optional: []
      },
      equipment: [
        "Double-stacked Turkish tea kettle (Çaydanlık)",
        "Traditional slim-waisted glass cups (İnce Belli Bardak)",
        "Small matching saucers and tiny stirring spoons"
      ],
      brewingDetails: {
        temperature: "Steam-heated 100°C over bottom kettle",
        teaAmount: "15.0 g – 20.0 g Rize tea",
        waterAmount: "Concentrated tea in top pot + hot water in bottom pot",
        steepingTime: "15 to 20 minutes gentle steam brewing",
        infusionCount: "Continuous dilution system",
        vessel: "Çaydanlık to tulip glass",
        servingStyle: "Açık (Light) or Koyu / Demli (Dark strong)"
      },
      preparationTime: "3 min",
      brewingTime: "18 min",
      difficulty: "Medium",
      servings: "6–10 small glasses",
      caffeine: "Medium to High",
      strength: "Strong",
      moods: ["energizing", "traditional", "bold"],
      flavorProfile: {
        primary: ["Bright Mahogany Red", "Clean Black Tea", "Subtle Sweet Hay", "Crisp Briskness"],
        radar: { umami: 30, sweetness: 70, floral: 20, vegetal: 10, astringency: 70, earthiness: 80 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Stack and Boil",
          instruction: "Fill the bottom pot of the Çaydanlık with water. Place 3–4 tablespoons of dry Rize tea into the empty top pot. Stack them and bring bottom water to a rolling boil over the stove.",
          tip: "The rising steam from the bottom pot gently warms the dry leaves on top."
        },
        {
          step: 2,
          title: "Brew the Concentrate (Dem)",
          instruction: "Once boiling, pour boiling water from the bottom pot into the top pot over the leaves. Refill the bottom pot with fresh water, re-stack, and reduce stove heat to low.",
          tip: "Let steep for 15–20 minutes until all tea leaves sink to the bottom of the top pot."
        },
        {
          step: 3,
          title: "Custom Pour into Tulip Glasses",
          instruction: "Pour the deep crimson tea concentrate (Dem) to fill one-third (for Açık light) or half (for Demli strong) of the tulip glass. Top up with boiling water from the bottom kettle.",
          tip: "Each guest customizes their preferred strength."
        },
        {
          step: 4,
          title: "Serve with Sugar Cubes",
          instruction: "Place two sugar cubes on the saucer. Clink the tiny spoon to dissolve the sugar and hold the hot glass by the rim.",
          tip: "Never add milk to Turkish tea."
        }
      ],
      culturalNotes: "In Turkey, sharing çay is an invitation to conversation and friendship; a Turkish proverb says: 'Conversations without tea are like a night sky without the moon.'",
      relatedTeas: ["moroccan-mint", "assam-orthodox", "darjeeling-first-flush", "puerh-shou"]
    },

    // 23. DONG DING OOLONG
    {
      id: "dong-ding",
      name: "Dong Ding Oolong (Frozen Peak)",
      nativeName: "凍頂烏龍茶",
      slug: "dong-ding",
      category: "oolong",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "Taiwan",
        region: "Lugu Township, Nantou County",
        elevation: "700m – 1,200m",
        harvestSeason: "Spring & Winter Flush"
      },
      heroImage: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Taiwan's celebrated classic oolong from Mount Dong Ding, tightly rolled into semi-spherical pearls and traditionally baked over charcoal for a golden honey liquor with toasted barley, gardenia, and buttery sweetness.",
      story: "According to tradition, tea scholar Lin San-Hsien brought 36 original tea bushes from Wuyi Mountain in Fujian to Taiwan in the mid-19th century and planted them on Mount Dong Ding ('Frozen Peak'). The high mountain mists and charcoal roasting craft made Dong Ding world famous.",
      ingredients: {
        core: ["Tightly rolled roasted Dong Ding oolong leaves (7g)", "Fresh boiling water (95°C)"],
        optional: []
      },
      equipment: ["Porcelain Gaiwan or Yixing pot", "Gong Dao Bei", "Aroma cups"],
      brewingDetails: {
        temperature: "90°C – 95°C (194°F – 203°F)",
        teaAmount: "7.0 g",
        waterAmount: "120 ml",
        steepingTime: "25s, 30s, 45s, 60s",
        infusionCount: "6 to 8 steepings",
        vessel: "Porcelain Gaiwan",
        servingStyle: "Gongfu Cha multi-steeping"
      },
      preparationTime: "2 min",
      brewingTime: "30 sec",
      difficulty: "Medium",
      servings: "2–4 people",
      caffeine: "Medium",
      strength: "Medium",
      moods: ["sweet", "floral", "traditional"],
      flavorProfile: {
        primary: ["Toasted Honey", "Gardenia Blossom", "Sweet Corn & Malt", "Buttery Linger"],
        radar: { umami: 50, sweetness: 85, floral: 85, vegetal: 35, astringency: 25, earthiness: 75 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Warm the Vessel and Rinse",
          instruction: "Warm your Gaiwan with hot water. Add 7g of Dong Ding pearls, pour 95°C water, and rinse for 5 seconds.",
          tip: "Inhale the warm lid fragrance to experience roasted honey and gardenia notes."
        },
        {
          step: 2,
          title: "Sequential Steeps",
          instruction: "Steep 25 seconds for the first round, 30 seconds for the second, decanting into small tasting cups.",
          tip: "The tightly rolled pearls unfurl into whole whole three-leaf clusters."
        }
      ],
      culturalNotes: "Dong Ding tea competition held twice a year in Lugu is the largest and most competitive tea quality judging event in the world.",
      relatedTeas: ["tieguanyin", "da-hong-pao", "oriental-beauty", "longjing"]
    },

    // 24. ORIENTAL BEAUTY
    {
      id: "oriental-beauty",
      name: "Oriental Beauty (Dongfang Meiren)",
      nativeName: "東方美人茶",
      slug: "oriental-beauty",
      category: "oolong",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "Taiwan",
        region: "Hsinchu & Miaoli Counties",
        elevation: "300m – 800m",
        harvestSeason: "Summer Pluck (June / After insect bite)"
      },
      heroImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
      ],
      description: "A rare, heavily oxidized Taiwanese oolong crafted from summer leaves bitten by tiny green leafhoppers (Jacobiasca formosana), triggering a natural botanical defense that yields intoxicating muscatel, wild honey, and ripe peach nectar sweetness.",
      story: "Legend has it that Queen Victoria tasted this multi-colored leaf tea (featuring white, green, yellow, red, and brown colors) and named it 'Oriental Beauty' as the leaves danced in her crystal cup like dancers of the East.",
      ingredients: {
        core: ["Multi-colored whole Oriental Beauty loose leaves", "Fresh water at 85°C–90°C"],
        optional: []
      },
      equipment: ["Clear glass Gaiwan or porcelain teapot", "Tasting cups"],
      brewingDetails: {
        temperature: "85°C – 90°C (185°F – 194°F lower temp!)",
        teaAmount: "5.0 g",
        waterAmount: "120 ml",
        steepingTime: "30s, 40s, 60s, 90s",
        infusionCount: "5 to 6 steepings",
        vessel: "Glass Gaiwan or white porcelain",
        servingStyle: "Pure without milk or sugar"
      },
      preparationTime: "2 min",
      brewingTime: "30 sec",
      difficulty: "Medium",
      servings: "2–3 people",
      caffeine: "Medium",
      strength: "Medium",
      moods: ["sweet", "floral", "calm"],
      flavorProfile: {
        primary: ["Wild Blossom Honey", "Ripe Peach & Muscatel", "Rosewood", "Silky Amber Finish"],
        radar: { umami: 40, sweetness: 98, floral: 95, vegetal: 15, astringency: 20, earthiness: 50 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Lower Temperature Brew",
          instruction: "Because the tender leafhopper-bitten buds are delicate, brew at 85°C rather than boiling.",
          tip: "Lower heat preserves the exquisite honeyed floral notes."
        },
        {
          step: 2,
          title: "Steep and Savor Nectar",
          instruction: "Infuse for 30–40 seconds. Watch the glowing amber nectar fill your cup.",
          tip: "Zero bitterness; pure honey nectar on the palate."
        }
      ],
      culturalNotes: "No chemical pesticides can ever be used on Oriental Beauty tea farms because the tiny tea jassid insects are strictly required to create the tea.",
      relatedTeas: ["darjeeling-first-flush", "dong-ding", "silver-needle", "ceylon-nuwara-eliya"]
    },

    // 25. KEEMUN BLACK TEA
    {
      id: "keemun",
      name: "Keemun Black Tea (Qimen Hongcha)",
      nativeName: "祁门红茶",
      slug: "keemun",
      category: "black",
      type: "True Tea (Camellia sinensis)",
      origin: {
        country: "China",
        region: "Qimen County, Huangshan, Anhui Province",
        elevation: "400m – 800m",
        harvestSeason: "Spring & Summer"
      },
      heroImage: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
      ],
      description: "One of China's most illustrious black teas, celebrated for its signature 'Keemun Fragrance' (Qi Men Xiang) blending unsweetened dark cocoa, dried plum, Chinese orchid, and subtle smoky cedar notes.",
      story: "First produced in 1875 by a former civil servant named Yu Ganchen who traveled to Fujian to learn the secrets of black tea making. It quickly gained international fame and was historically a favored tea of the British royal family.",
      ingredients: {
        core: ["Tight glossy black Keemun whole leaves", "Fresh boiling water (95°C)"],
        optional: []
      },
      equipment: ["Porcelain teapot or Gaiwan", "Teacups"],
      brewingDetails: {
        temperature: "90°C – 95°C (194°F – 203°F)",
        teaAmount: "3.0 g per cup",
        waterAmount: "200 ml",
        steepingTime: "3.0 minutes",
        infusionCount: "3 to 4 steepings",
        vessel: "White porcelain teapot",
        servingStyle: "Served pure or with a light slice of lemon"
      },
      preparationTime: "2 min",
      brewingTime: "3 min",
      difficulty: "Easy",
      servings: "1–2 cups",
      caffeine: "Medium",
      strength: "Medium",
      moods: ["bold", "earthy", "sweet"],
      flavorProfile: {
        primary: ["Dark Cacao", "Orchid Fragrance", "Dried Plum Fruit", "Smoky Cedar Wood"],
        radar: { umami: 45, sweetness: 80, floral: 75, vegetal: 10, astringency: 40, earthiness: 85 }
      },
      preparationSteps: [
        {
          step: 1,
          title: "Warm the Vessel",
          instruction: "Warm your porcelain teapot with hot water. Add 3g of dark needle-like Keemun leaves.",
          tip: "Inhale the dry leaf aroma of bittersweet chocolate and plum."
        },
        {
          step: 2,
          title: "Infuse at 92°C",
          instruction: "Pour 200ml of hot water. Steep for 3 minutes. Strain completely.",
          tip: "Notice the luminous amber-red liquor with a bright golden ring around the cup rim."
        }
      ],
      culturalNotes: "Keemun is the only Chinese black tea featured in the classic list of China's Ten Famous Teas.",
      relatedTeas: ["assam-orthodox", "darjeeling-first-flush", "da-hong-pao", "puerh-shou"]
    }
  ]
};

// Freeze dataset
if (typeof Object.freeze === "function") {
  Object.freeze(TeaVerseData);
}
