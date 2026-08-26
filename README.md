# TeaVerse — Global Tea Encyclopedia & Practical Brewing Guide

> **"Explore Every Leaf. Discover Every Brew."**  
> *A visual journey through the world's teas, origins, botanical ingredients, and living traditions.*

---

## 🍃 Overview

**TeaVerse** is a luxury digital botanical encyclopedia and interactive brewing guide showcasing authentic teas from around the world. Designed with an editorial aesthetic featuring natural sage green (`#A3A58B`), warm beige (`#D6CFBC`), cream (`#F4F0E6`), and dark charcoal (`#292A24`), it serves as an educational knowledge library.

### Core Features:
- **Comprehensive Global Catalog (25+ Authentic Teas)**:
  - True teas (*Camellia sinensis*): Green, Black, White, Oolong, Pu-erh, Yellow, Matcha, and regional traditions (Moroccan Atay, Turkish Çay, Kashmiri Kahwa).
  - Herbal & Botanical Infusions: Rooibos, Chamomile, Moringa, Ceylon Cinnamon, Ginger, Zanzibar Clove.
- **Botanical Clarity**: Clear visual distinction between *Camellia sinensis* true teas and herbal tisanes.
- **Interactive Multi-Faceted Explorer**: Real-time search with live query matching across tea names, regions, ingredients, and flavor profiles with category, country, and caffeine filters.
- **Mood Selector & Randomizer**: Choose tea by mood (*Calm, Refreshing, Energizing, Floral, Earthy, Sweet, Traditional*) or click **"Surprise Me"** to discover unexpected varieties.
- **Individual Tea Guides**:
  - Detailed overview & cultural story
  - Core ingredients vs. required teaware checklist
  - Step-by-step numbered brewing timeline with master tips
  - Sensory flavor profile and radar breakdown
  - Geographic terroir & climate data
  - Visual image gallery and related tea recommendations
- **Interactive Brewing Calculator & Live Countdown Timer**:
  - Precision leaf-to-water ratio and temperature sliders
  - Live digital circular steeping timer with Web Audio API chime on completion (zero external audio dependencies).
- **100% Static & GitHub Pages Ready**: Pure HTML5, CSS3, and modern vanilla JavaScript with client-side hash routing (`#/`, `#/explore`, `#/tea/:slug`, `#/brewing`, `#/origins`, `#/guide`, `#/about`).

---

## 📁 Directory Structure

```
teaverse/
├── index.html                   # Master semantic layout with responsive view container
├── README.md                    # Deployment and customization guide
├── css/
│   ├── style.css                # Luxury design system, typography, animations, responsive
│   └── components.css           # Cards, modals, timeline, brewing calculator, timer dial
├── js/
│   ├── data.js                  # 25+ structured tea records, categories, origins, and moods
│   └── app.js                   # Client-side router, search/filter engine, audio timer, randomizer
├── images/
│   ├── teaverse-logo.png        # Official brand emblem
│   └── reference-teas.jpg       # Botanical herbal reference imagery
└── data/
    └── teas.json                # Standalone raw JSON dataset for external APIs / tools
```

---

## 🚀 How to Run Locally

Because TeaVerse is built with standard web technologies and client-side hash routing, it runs on any local web server:

### Using Python:
```bash
# In the project directory:
python -m http.server 8090
```
Then open `http://localhost:8090` in your web browser.

### Using Node / VS Code Live Server:
```bash
npx serve .
```

---

## 🌐 How to Deploy to GitHub Pages

1. **Create a GitHub Repository**:
   - Create a new public repository on GitHub (e.g. `teaverse`).
2. **Push Project Files**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TeaVerse static encyclopedia"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/teaverse.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to your repository's **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **Deploy from a branch**.
   - Set the branch to `main` and folder to `/ (root)`.
   - Click **Save**.
4. Your website will be live at `https://YOUR_USERNAME.github.io/teaverse/`.

---

## ➕ How to Add a New Tea Entry

To add a new tea, open `js/data.js` and append an object to `TeaVerseData.teas`:

```javascript
{
  id: "new-tea-id",
  name: "Tea English Name",
  nativeName: "Native Script Name",
  slug: "new-tea-slug",
  category: "green", // green | black | white | oolong | puerh | yellow | matcha | chai | traditional | herbal
  type: "True Tea (Camellia sinensis)", // or "Herbal & Botanical Infusion"
  origin: {
    country: "Country Name",
    region: "Region Name",
    elevation: "500m – 1,000m",
    harvestSeason: "Spring Pluck"
  },
  heroImage: "URL to high-res image",
  gallery: ["Image URL 1", "Image URL 2"],
  description: "Concise editorial summary...",
  story: "Historical lore, folklore, cultural context...",
  ingredients: {
    core: ["Ingredient 1", "Ingredient 2"],
    optional: ["Optional garnish or sweetener"]
  },
  equipment: ["Teapot", "Cups", "Strainer"],
  brewingDetails: {
    temperature: "80°C – 85°C",
    teaAmount: "3.0 g",
    waterAmount: "200 ml",
    steepingTime: "2 to 3 minutes",
    infusionCount: "3 steepings",
    vessel: "Porcelain Teapot",
    servingStyle: "Served hot in porcelain cups"
  },
  preparationTime: "2 min",
  brewingTime: "3 min",
  difficulty: "Easy", // Easy | Medium | Advanced
  servings: "1–2 cups",
  caffeine: "Medium", // None | Low | Medium | High
  strength: "Medium", // Light | Medium | Strong
  moods: ["calm", "refreshing"],
  flavorProfile: {
    primary: ["Floral", "Honey", "Sweet Grass"],
    radar: { umami: 60, sweetness: 85, floral: 90, vegetal: 40, astringency: 20, earthiness: 30 }
  },
  preparationSteps: [
    {
      step: 1,
      title: "Warm the Vessel",
      instruction: "Warm your teaware with hot water...",
      tip: "Helps preserve steeping temperature..."
    }
  ],
  culturalNotes: "Cultural heritage notes...",
  relatedTeas: ["related-tea-slug-1", "related-tea-slug-2"]
}
```

---

## 📜 License & Scope
TeaVerse is an independent educational encyclopedia designed for open botanical learning.
