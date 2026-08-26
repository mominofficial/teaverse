/**
 * TeaVerse — Global Tea Encyclopedia & Brewing Guide
 * Complete Client-Side Router, Search & Filter Engine, Live Timer, Interactive Experiences
 * Developed by Momin Ali · Planned & UI by Opi Sultana Nira
 */

(function () {
  'use strict';

  // Application State
  const State = {
    currentRoute: '',
    searchQuery: '',
    selectedCategory: 'all',
    selectedCountry: 'all',
    selectedCaffeine: 'all',
    selectedFlavor: 'all',
    selectedTimeOfDay: 'all',
    selectedMood: 'all',
    selectedSituation: 'tired',
    sortBy: 'popular',
    tempUnit: 'C',
    // Live Steeping Timer
    timer: {
      interval: null,
      totalSeconds: 180,
      remainingSeconds: 180,
      isRunning: false
    }
  };

  // Web Audio API Chime (zero external audio file dependency)
  function playBrewingChime() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.3); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.6); // G5

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch (e) {
      console.log('Audio chime not permitted or supported');
    }
  }

  // --- Router ---
  function getRoute() {
    const hash = window.location.hash.slice(1);
    return hash || '/';
  }

  function navigateTo(route) {
    window.location.hash = route;
  }

  function handleRouting() {
    const rawRoute = getRoute();
    const [pathPart, queryPart] = rawRoute.split('?');
    State.currentRoute = pathPart;

    // Parse URL params
    const params = new URLSearchParams(queryPart || '');
    if (params.has('category')) State.selectedCategory = params.get('category');
    if (params.has('country')) State.selectedCountry = params.get('country');
    if (params.has('flavor')) State.selectedFlavor = params.get('flavor');
    if (params.has('caffeine')) State.selectedCaffeine = params.get('caffeine');
    if (params.has('mood')) State.selectedMood = params.get('mood');
    if (params.has('search')) State.searchQuery = params.get('search');
    if (params.has('time')) State.selectedTimeOfDay = params.get('time');

    const appContainer = document.getElementById('app-view-container');
    if (!appContainer) return;

    window.scrollTo({ top: 0, behavior: 'instant' });

    // Route matching
    if (pathPart === '/' || pathPart === '') {
      renderHomePage(appContainer);
    } else if (pathPart === '/explore') {
      renderExplorePage(appContainer);
    } else if (pathPart.startsWith('/tea/')) {
      const slug = pathPart.replace('/tea/', '');
      renderDetailPage(appContainer, slug);
    } else if (pathPart === '/find-tea') {
      renderFindTeaPage(appContainer);
    } else if (pathPart === '/wellness') {
      renderWellnessPage(appContainer);
    } else if (pathPart === '/brewing') {
      renderBrewingPage(appContainer);
    } else if (pathPart === '/origins') {
      renderOriginsPage(appContainer);
    } else if (pathPart === '/guide') {
      renderClassificationPage(appContainer);
    } else if (pathPart === '/about') {
      renderAboutPage(appContainer);
    } else {
      renderNotFoundPage(appContainer);
    }

    updateActiveNavLinks();
  }

  function updateActiveNavLinks() {
    const currentHash = '#' + State.currentRoute;
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      const linkHash = link.getAttribute('href');
      if (linkHash === currentHash || (currentHash === '#/' && linkHash === '#/')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // --- Views ---

  // 1. HOMEPAGE
  function renderHomePage(container) {
    const bdTeas = TeaVerseData.teas.filter(t => t.countryCategory === 'bangladesh');
    const featuredBdTeas = bdTeas.slice(0, 6);
    const globalHighlights = TeaVerseData.teas.filter(t => t.countryCategory !== 'bangladesh').slice(0, 4);

    container.innerHTML = `
      <!-- Hero Section with User's Uploaded Hero Image -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-content">
              <div class="hero-badge-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Global Botanical Encyclopedia
              </div>
              <h1 class="hero-title">A World of Tea, One Leaf at a Time.</h1>
              <p class="hero-subtitle">
                Explore every leaf, discover every brew. A visual botanical encyclopedia and practical brewing guide for authentic teas, terroirs, ingredients, and living traditions from around the world.
              </p>
              <div class="hero-cta-group">
                <a href="#/explore?category=bangladesh" class="btn btn-primary btn-lg">Explore Bangladesh Teas →</a>
                <a href="#/explore" class="btn btn-secondary btn-lg">Global Catalog</a>
                <button id="hero-random-btn" class="btn btn-accent btn-lg" style="margin-left:auto;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                  Surprise Me
                </button>
              </div>
              <div class="hero-stats-row">
                <div class="hero-stat-item">
                  <div class="stat-num">${TeaVerseData.teas.length}+</div>
                  <div class="stat-label">Authentic Teas</div>
                </div>
                <div class="hero-stat-item">
                  <div class="stat-num">${bdTeas.length}</div>
                  <div class="stat-label">Bangladesh Varieties</div>
                </div>
                <div class="hero-stat-item">
                  <div class="stat-num">100%</div>
                  <div class="stat-label">Botanical Clarity</div>
                </div>
              </div>
            </div>
            
            <div class="hero-media-wrapper">
              <div class="hero-card-frame">
                <img src="./images/main-hero.jpg" alt="TeaVerse botanical herbal teas and ingredients" class="hero-card-img" onerror="this.src='./images/hero-teaverse.jpg'">
                <div class="hero-floating-badge">
                  <div>
                    <div class="floating-badge-title">Pure Botanical Mastery</div>
                    <div class="floating-badge-desc">From mountain camellia leaves to soothing tisanes</div>
                  </div>
                  <a href="#/guide" class="btn btn-primary btn-sm">Learn Botany</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PROMINENT BANGLADESH SECTION: Tea of Bangladesh -->
      <section class="section" style="background: var(--color-canvas); border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle); padding: 80px 0;">
        <div class="container">
          <div class="section-header">
            <div class="label-caps" style="color: var(--color-olive);">Featured Heritage & Living Culture</div>
            <h2 class="section-title" style="font-size: 2.8rem;">Discover the Tea of Bangladesh</h2>
            <p class="section-subtitle">
              Explore the tea gardens, regional traditions, processing styles, and unique tea culture of Bangladesh — from the 170-year historic hills of Sreemangal to the pioneering flatlands of Panchagarh and iconic roadside Tonger Cha.
            </p>
          </div>

          <!-- Featured Bangladesh Teas Grid -->
          <div class="tea-grid" style="margin-bottom: 40px;">
            ${featuredBdTeas.map(tea => renderTeaCard(tea)).join('')}
          </div>

          <div style="text-align: center; margin-top: 32px; display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
            <a href="#/explore?category=bangladesh" class="btn btn-primary btn-lg">
              Explore All Bangladesh Teas (${bdTeas.length}) →
            </a>
            <a href="#/origins" class="btn btn-secondary btn-lg">
              View Bangladesh Tea Regions
            </a>
          </div>
        </div>
      </section>

      <!-- INTERACTIVE "FIND YOUR TEA" (Which Tea is Right for Me?) -->
      <section class="section" id="interactive-find-tea" style="background: var(--color-cream); padding: 80px 0;">
        <div class="container">
          <div class="section-header">
            <div class="label-caps">Interactive Selector</div>
            <h2 class="section-title" style="font-size: 2.8rem;">Find Your Tea</h2>
            <p class="section-subtitle">What are you looking for today? Select your current situation or craving for immediate personalized recommendations.</p>
          </div>

          <!-- Situation Selector Pills -->
          <div class="mood-chips-scroll" style="margin-bottom: 32px; justify-content: center;">
            ${TeaVerseData.situations.map(sit => `
              <button class="mood-chip-btn ${State.selectedSituation === sit.id ? 'active' : ''}" data-situation="${sit.id}">
                ${sit.title}
              </button>
            `).join('')}
          </div>

          <!-- Dynamic Situation Result Container -->
          <div id="situation-results-box" class="detail-card-panel" style="background: var(--color-surface); border: 1.5px solid var(--color-sage); padding: 32px;">
            ${renderSituationRecommendation(State.selectedSituation)}
          </div>
        </div>
      </section>

      <!-- BOTANICAL CLASSIFICATION BANNER -->
      <section class="classification-banner">
        <div class="container">
          <div class="classification-grid">
            <div class="classification-box true-tea">
              <div class="label-caps">Botany · Camellia Sinensis</div>
              <h3 class="classification-title">True Tea Varieties</h3>
              <p class="classification-desc">
                All true teas originate from a single botanical species: <em>Camellia sinensis</em>. The astonishing diversity of green, white, yellow, oolong, black, and dark pu-erh teas stems solely from cultivar, terroir, and enzymatic oxidation craftsmanship.
              </p>
              <div class="classification-tags">
                <span class="pill-tag">Green Tea</span>
                <span class="pill-tag">Black Tea</span>
                <span class="pill-tag">White Tea</span>
                <span class="pill-tag">Oolong Tea</span>
                <span class="pill-tag">Pu-erh</span>
                <span class="pill-tag">Ceremonial Matcha</span>
              </div>
            </div>

            <div class="classification-box herbal-tisane">
              <div class="label-caps">Botanicals · Caffeine-Free</div>
              <h3 class="classification-title">Herbal Infusions (Tisanes)</h3>
              <p class="classification-desc">
                Herbal teas contain zero <em>Camellia sinensis</em> leaves. Crafted from dried botanical roots (Ginger, Turmeric), soothing flower blossoms (Chamomile, Roselle), aromatic barks (Ceylon Cinnamon, Arjun), and leaves (Krishna Tulsi, Moringa, Rooibos).
              </p>
              <div class="classification-tags">
                <span class="pill-tag">Krishna Tulsi</span>
                <span class="pill-tag">Rooibos</span>
                <span class="pill-tag">Chamomile</span>
                <span class="pill-tag">Ceylon Cinnamon</span>
                <span class="pill-tag">Ginger Root</span>
                <span class="pill-tag">Moringa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TEA BY TIME OF DAY -->
      <section class="section" style="padding: 70px 0;">
        <div class="container">
          <div class="section-header">
            <div class="label-caps">Daily Routine</div>
            <h2 class="section-title">Tea by Time of Day</h2>
            <p class="section-subtitle">Choose teas balanced for your circadian rhythm based on natural caffeine levels and botanical characteristics.</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
            <div class="detail-card-panel" style="border-top: 4px solid var(--color-sage);">
              <div class="label-caps">Morning (Wake Up)</div>
              <h3 style="font-family: var(--font-serif); font-size: 1.6rem; margin: 8px 0 12px 0;">Invigorating & Brisk</h3>
              <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
                Caffeinated teas to provide alert focus without the jittery crash of coffee.
              </p>
              <div style="font-size: 0.88rem; color: var(--color-charcoal); font-weight: 600; margin-bottom: 16px;">
                Recommended: Sreemangal CTC, Matcha, Dudh Cha, Assam Orthodox
              </div>
              <a href="#/explore?time=Morning" class="btn btn-secondary btn-sm">Explore Morning Teas →</a>
            </div>

            <div class="detail-card-panel" style="border-top: 4px solid var(--color-beige);">
              <div class="label-caps">Afternoon (Adda & Focus)</div>
              <h3 style="font-family: var(--font-serif); font-size: 1.6rem; margin: 8px 0 12px 0;">Balanced & Refreshing</h3>
              <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
                Moderate caffeine teas paired with digestive citrus, floral aromas, or rock oolongs.
              </p>
              <div style="font-size: 0.88rem; color: var(--color-charcoal); font-weight: 600; margin-bottom: 16px;">
                Recommended: Lebu Cha with Bit Lobon, Tetulia Oolong, Longjing, Sencha
              </div>
              <a href="#/explore?time=Afternoon" class="btn btn-secondary btn-sm">Explore Afternoon Teas →</a>
            </div>

            <div class="detail-card-panel" style="border-top: 4px solid var(--color-olive);">
              <div class="label-caps">Evening & Night (Unwind)</div>
              <h3 style="font-family: var(--font-serif); font-size: 1.6rem; margin: 8px 0 12px 0;">Calming & Caffeine-Free</h3>
              <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
                Naturally caffeine-free botanical tisanes or roasted teas that promote tranquil rest.
              </p>
              <div style="font-size: 0.88rem; color: var(--color-charcoal); font-weight: 600; margin-bottom: 16px;">
                Recommended: Egyptian Chamomile, Krishna Tulsi, Rooibos, Hojicha
              </div>
              <a href="#/explore?time=Evening" class="btn btn-secondary btn-sm">Explore Evening Teas →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- TEA BY FLAVOR EXPLORER -->
      <section class="section" style="background: var(--color-surface); padding: 70px 0; border-top: 1px solid var(--border-subtle);">
        <div class="container">
          <div class="section-header">
            <div class="label-caps">Sensory Palate</div>
            <h2 class="section-title">What Flavor Are You Craving?</h2>
            <p class="section-subtitle">Click any flavor profile note to instantly filter our encyclopedia.</p>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; max-width: 900px; margin: 0 auto;">
            ${['Floral', 'Fruity', 'Earthy', 'Spicy', 'Sweet', 'Smoky', 'Nutty', 'Grassy', 'Umami', 'Malty', 'Refreshing', 'Strong', 'Light'].map(flavor => `
              <a href="#/explore?flavor=${encodeURIComponent(flavor)}" class="pill-tag" style="font-size: 0.95rem; padding: 10px 18px; cursor: pointer; transition: all 0.2s ease;">
                ${flavor}
              </a>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- GLOBAL TERROIRS PREVIEW -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <div class="label-caps">Geography & Soil</div>
            <h2 class="section-title">Global Terroirs & Heritage</h2>
            <p class="section-subtitle">From Bangladesh's rain-drenched Sylhet hills to Mount Wuyi's volcanic cliffs and Kyoto's misty river basins.</p>
          </div>

          <div class="origin-preview-grid">
            ${TeaVerseData.origins.slice(0, 4).map(origin => `
              <div class="origin-preview-card">
                <div class="origin-preview-title">${origin.country}</div>
                <div class="origin-preview-native">${origin.nativeName}</div>
                <div class="origin-preview-desc">${origin.description}</div>
                <a href="#/explore?country=${encodeURIComponent(origin.country)}" class="btn btn-secondary btn-sm" style="margin-top: 16px;">
                  Explore ${origin.country} Teas →
                </a>
              </div>
            `).join('')}
          </div>
          <div style="text-align: center; margin-top: 32px;">
            <a href="#/origins" class="btn btn-primary">View Global Terroirs Atlas →</a>
          </div>
        </div>
      </section>
    `;

    setupHomePageInteractiveEvents();
  }

  function renderSituationRecommendation(situationId) {
    const sit = TeaVerseData.situations.find(s => s.id === situationId) || TeaVerseData.situations[0];
    const recTeas = TeaVerseData.teas.filter(t => (sit.categoryIds || []).includes(t.id)).slice(0, 4);

    return `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; margin-bottom: 16px;">
          <div>
            <span class="label-caps" style="color: var(--color-olive);">Recommendation for:</span>
            <h3 style="font-family: var(--font-serif); font-size: 2rem; color: var(--color-charcoal); margin: 4px 0;">${sit.title}</h3>
          </div>
          <a href="#/explore?situation=${sit.id}" class="btn btn-secondary btn-sm">View Full Collection →</a>
        </div>

        <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px;">
          ${sit.explanation}
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
          ${recTeas.map(t => `
            <a href="#/tea/${t.slug}" class="tea-card" style="text-decoration: none;">
              <div class="tea-card-image-wrap" style="height: 140px;">
                <img src="${t.heroImage}" alt="${t.name}" class="tea-card-image" onerror="this.src='https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80'">
                <div class="tea-card-category-badge">${t.origin.country}</div>
              </div>
              <div class="tea-card-body" style="padding: 16px;">
                <h4 style="font-family: var(--font-serif); font-size: 1.2rem; margin-bottom: 4px; color: var(--color-charcoal);">${t.name}</h4>
                <div style="font-size: 0.8rem; color: var(--text-muted);">${t.brewingDetails.temperature} · ${t.brewingDetails.steepingTime}</div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }

  function setupHomePageInteractiveEvents() {
    // Randomizer button in Hero
    const randomBtn = document.getElementById('hero-random-btn');
    if (randomBtn) {
      randomBtn.addEventListener('click', triggerRandomTeaModal);
    }

    // Situation buttons
    document.querySelectorAll('.mood-chip-btn[data-situation]').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.mood-chip-btn[data-situation]').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        State.selectedSituation = this.dataset.situation;
        const box = document.getElementById('situation-results-box');
        if (box) {
          box.innerHTML = renderSituationRecommendation(State.selectedSituation);
        }
      });
    });
  }

  // 2. DISCOVERY CATALOG & MULTI-FILTER EXPLORER VIEW
  function renderExplorePage(container) {
    container.innerHTML = `
      <section class="section" style="padding-top: 40px;">
        <div class="container">
          <div class="section-header" style="text-align: left; max-width: 100%;">
            <div class="label-caps">Search & Filter Catalog</div>
            <h1 class="section-title" style="font-size: 3.2rem;">Explore the Global Tea Collection</h1>
            <p class="section-subtitle">
              Filter through authentic true teas, regional traditions, Bangladeshi heritage teas, and soothing botanical infusions.
            </p>
          </div>

          <!-- Multi-Faceted Filter & Search Bar -->
          <div class="filter-controls-card">
            <div class="search-input-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input type="text" id="explore-search-input" class="search-input" placeholder="Search by tea name, region, Bangladesh, ginger, floral, caffeine..." value="${State.searchQuery}">
              ${State.searchQuery ? `<button id="clear-search-btn" style="border:none;background:none;cursor:pointer;color:var(--text-muted);">✕</button>` : ''}
            </div>

            <!-- Category Pills (Highlighting Bangladesh) -->
            <div class="filter-pills-row">
              <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted); align-self: center;">Category:</span>
              ${TeaVerseData.categories.map(cat => `
                <button class="filter-pill ${State.selectedCategory === cat.id ? 'active' : ''} ${cat.id === 'bangladesh' ? 'featured-bd-pill' : ''}" data-category="${cat.id}">
                  ${cat.id === 'bangladesh' ? '🇧🇩 ' : ''}${cat.name}
                </button>
              `).join('')}
            </div>

            <!-- Secondary Filters Grid -->
            <div class="filter-dropdowns-row">
              <div class="filter-select-group">
                <label class="filter-label">Country / Origin:</label>
                <select id="filter-country-select" class="filter-select">
                  <option value="all" ${State.selectedCountry === 'all' ? 'selected' : ''}>All Countries</option>
                  ${TeaVerseData.origins.map(o => `
                    <option value="${o.country}" ${State.selectedCountry === o.country ? 'selected' : ''}>${o.country}</option>
                  `).join('')}
                </select>
              </div>

              <div class="filter-select-group">
                <label class="filter-label">Caffeine Level:</label>
                <select id="filter-caffeine-select" class="filter-select">
                  <option value="all" ${State.selectedCaffeine === 'all' ? 'selected' : ''}>All Levels</option>
                  <option value="None" ${State.selectedCaffeine === 'None' ? 'selected' : ''}>Caffeine-Free (0 mg)</option>
                  <option value="Low" ${State.selectedCaffeine === 'Low' ? 'selected' : ''}>Low (~15-25 mg)</option>
                  <option value="Medium" ${State.selectedCaffeine === 'Medium' ? 'selected' : ''}>Moderate (~30-50 mg)</option>
                  <option value="High" ${State.selectedCaffeine === 'High' ? 'selected' : ''}>Higher (~60-80 mg)</option>
                </select>
              </div>

              <div class="filter-select-group">
                <label class="filter-label">Flavor Profile:</label>
                <select id="filter-flavor-select" class="filter-select">
                  <option value="all" ${State.selectedFlavor === 'all' ? 'selected' : ''}>All Flavors</option>
                  ${['Floral', 'Fruity', 'Earthy', 'Spicy', 'Sweet', 'Smoky', 'Nutty', 'Grassy', 'Umami', 'Malty', 'Refreshing', 'Strong', 'Light'].map(fl => `
                    <option value="${fl}" ${State.selectedFlavor === fl ? 'selected' : ''}>${fl}</option>
                  `).join('')}
                </select>
              </div>

              <div class="filter-select-group">
                <label class="filter-label">Sort By:</label>
                <select id="filter-sort-select" class="filter-select">
                  <option value="popular" ${State.sortBy === 'popular' ? 'selected' : ''}>Featured / Curated</option>
                  <option value="name" ${State.sortBy === 'name' ? 'selected' : ''}>Name (A–Z)</option>
                  <option value="country" ${State.sortBy === 'country' ? 'selected' : ''}>Country / Origin</option>
                  <option value="time" ${State.sortBy === 'time' ? 'selected' : ''}>Steeping Time</option>
                </select>
              </div>

              <div style="display: flex; align-items: flex-end;">
                <button id="reset-all-filters-btn" class="btn btn-secondary btn-sm" style="height: 42px;">Reset Filters</button>
              </div>
            </div>
          </div>

          <!-- Active Filter Tags & Count -->
          <div id="results-count-bar" style="margin-bottom: 24px; font-size: 0.95rem; color: var(--text-secondary); display: flex; justify-content: space-between; align-items: center;">
            <!-- Rendered dynamically -->
          </div>

          <!-- Tea Cards Grid -->
          <div id="explore-tea-grid" class="tea-grid">
            <!-- Rendered dynamically -->
          </div>
        </div>
      </section>
    `;

    setupExplorePageEvents();
    updateExploreResults();
  }

  function filterTeasDataset() {
    return TeaVerseData.teas.filter(tea => {
      // 1. Search Query
      if (State.searchQuery) {
        const q = State.searchQuery.toLowerCase().trim();
        const matchesName = tea.name.toLowerCase().includes(q);
        const matchesNative = tea.nativeName.toLowerCase().includes(q);
        const matchesCountry = tea.origin.country.toLowerCase().includes(q);
        const matchesRegion = tea.origin.region.toLowerCase().includes(q);
        const matchesDesc = tea.description.toLowerCase().includes(q);
        const matchesFlavors = tea.flavorProfile.primary.some(f => f.toLowerCase().includes(q));
        const matchesIngredients = (tea.ingredients.core || []).some(i => i.toLowerCase().includes(q));
        const matchesCategory = tea.category.toLowerCase().includes(q);
        const matchesBd = q === 'bangladesh' && tea.countryCategory === 'bangladesh';

        if (!matchesName && !matchesNative && !matchesCountry && !matchesRegion && !matchesDesc && !matchesFlavors && !matchesIngredients && !matchesCategory && !matchesBd) {
          return false;
        }
      }

      // 2. Category Filter
      if (State.selectedCategory !== 'all') {
        if (State.selectedCategory === 'bangladesh') {
          if (tea.countryCategory !== 'bangladesh') return false;
        } else if (tea.category !== State.selectedCategory) {
          return false;
        }
      }

      // 3. Country Filter
      if (State.selectedCountry !== 'all') {
        if (tea.origin.country !== State.selectedCountry) return false;
      }

      // 4. Caffeine Filter
      if (State.selectedCaffeine !== 'all') {
        if (tea.caffeine !== State.selectedCaffeine) return false;
      }

      // 5. Flavor Filter
      if (State.selectedFlavor !== 'all') {
        const fl = State.selectedFlavor.toLowerCase();
        const hasFlavor = tea.flavorProfile.primary.some(f => f.toLowerCase().includes(fl));
        if (!hasFlavor) return false;
      }

      // 6. Time of Day Filter
      if (State.selectedTimeOfDay !== 'all') {
        if (State.selectedTimeOfDay === 'Morning' && tea.caffeine === 'None') return false;
        if (State.selectedTimeOfDay === 'Evening' && tea.caffeine === 'High') return false;
      }

      // 7. Mood Filter
      if (State.selectedMood !== 'all') {
        if (!tea.moods.includes(State.selectedMood)) return false;
      }

      return true;
    }).sort((a, b) => {
      if (State.sortBy === 'name') return a.name.localeCompare(b.name);
      if (State.sortBy === 'country') return a.origin.country.localeCompare(b.origin.country);
      if (State.sortBy === 'time') return a.brewingTime.localeCompare(b.brewingTime);
      return 0;
    });
  }

  function updateExploreResults() {
    const filtered = filterTeasDataset();
    const countBar = document.getElementById('results-count-bar');
    const grid = document.getElementById('explore-tea-grid');

    if (countBar) {
      countBar.innerHTML = `
        <div>Showing <strong>${filtered.length}</strong> of ${TeaVerseData.teas.length} teas</div>
        ${State.selectedCategory === 'bangladesh' ? `<span class="pill-tag" style="background: var(--color-sage); color: #fff;">🇧🇩 Bangladesh Collection</span>` : ''}
      `;
    }

    if (grid) {
      if (filtered.length === 0) {
        grid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--color-surface); border-radius: var(--radius-md); border: 1px dashed var(--border-subtle);">
            <div style="font-size: 2.5rem; margin-bottom: 12px;">🍃</div>
            <h3 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 8px;">No matching teas found</h3>
            <p style="color: var(--text-secondary); max-width: 460px; margin: 0 auto 20px auto;">
              Try adjusting your search terms, selecting "All Categories", or resetting the active filters.
            </p>
            <button id="empty-reset-btn" class="btn btn-primary btn-sm">Clear All Filters</button>
          </div>
        `;
        const emptyBtn = document.getElementById('empty-reset-btn');
        if (emptyBtn) {
          emptyBtn.addEventListener('click', resetAllFilters);
        }
      } else {
        grid.innerHTML = filtered.map(t => renderTeaCard(t)).join('');
      }
    }
  }

  function resetAllFilters() {
    State.searchQuery = '';
    State.selectedCategory = 'all';
    State.selectedCountry = 'all';
    State.selectedCaffeine = 'all';
    State.selectedFlavor = 'all';
    State.selectedTimeOfDay = 'all';
    State.selectedMood = 'all';
    State.sortBy = 'popular';

    const searchInput = document.getElementById('explore-search-input');
    if (searchInput) searchInput.value = '';

    document.querySelectorAll('.filter-pill').forEach(p => {
      p.classList.toggle('active', p.dataset.category === 'all');
    });

    const countrySelect = document.getElementById('filter-country-select');
    if (countrySelect) countrySelect.value = 'all';
    const caffeineSelect = document.getElementById('filter-caffeine-select');
    if (caffeineSelect) caffeineSelect.value = 'all';
    const flavorSelect = document.getElementById('filter-flavor-select');
    if (flavorSelect) flavorSelect.value = 'all';
    const sortSelect = document.getElementById('filter-sort-select');
    if (sortSelect) sortSelect.value = 'popular';

    updateExploreResults();
  }

  function setupExplorePageEvents() {
    const searchInput = document.getElementById('explore-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        State.searchQuery = e.target.value;
        updateExploreResults();
      });
    }

    const clearSearchBtn = document.getElementById('clear-search-btn');
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        State.searchQuery = '';
        if (searchInput) searchInput.value = '';
        updateExploreResults();
      });
    }

    // Category pills
    document.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', function () {
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        State.selectedCategory = this.dataset.category;
        updateExploreResults();
      });
    });

    // Country select
    const countrySelect = document.getElementById('filter-country-select');
    if (countrySelect) {
      countrySelect.addEventListener('change', (e) => {
        State.selectedCountry = e.target.value;
        updateExploreResults();
      });
    }

    // Caffeine select
    const caffeineSelect = document.getElementById('filter-caffeine-select');
    if (caffeineSelect) {
      caffeineSelect.addEventListener('change', (e) => {
        State.selectedCaffeine = e.target.value;
        updateExploreResults();
      });
    }

    // Flavor select
    const flavorSelect = document.getElementById('filter-flavor-select');
    if (flavorSelect) {
      flavorSelect.addEventListener('change', (e) => {
        State.selectedFlavor = e.target.value;
        updateExploreResults();
      });
    }

    // Sort select
    const sortSelect = document.getElementById('filter-sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        State.sortBy = e.target.value;
        updateExploreResults();
      });
    }

    // Reset button
    const resetBtn = document.getElementById('reset-all-filters-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', resetAllFilters);
    }
  }

  // 3. INDIVIDUAL TEA DETAIL GUIDE VIEW
  function renderDetailPage(container, slug) {
    const tea = TeaVerseData.teas.find(t => t.slug === slug || t.id === slug);

    if (!tea) {
      renderNotFoundPage(container);
      return;
    }

    const related = TeaVerseData.teas
      .filter(t => (tea.relatedTeas || []).includes(t.slug) || (tea.relatedTeas || []).includes(t.id))
      .slice(0, 3);

    container.innerHTML = `
      <div class="tea-detail-container">
        <div class="container">
          <!-- Back Link -->
          <div style="margin-bottom: 24px;">
            <a href="#/explore" class="back-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
              Back to Catalog
            </a>
          </div>

          <!-- Hero Banner Section -->
          <div class="tea-detail-hero">
            <div class="detail-hero-media">
              <img src="${tea.heroImage}" alt="${tea.name}" class="detail-hero-img" onerror="this.src='https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80'">
            </div>

            <div class="detail-hero-content">
              <div class="detail-badge-row">
                <span class="detail-type-badge">${tea.type}</span>
                <span class="detail-category-badge">${tea.origin.country}</span>
                ${tea.countryCategory === 'bangladesh' ? `<span class="detail-category-badge" style="background: var(--color-sage); color:#fff;">🇧🇩 Bangladesh Heritage</span>` : ''}
              </div>

              <div class="detail-native-title">${tea.nativeName}</div>
              <h1 class="detail-main-title">${tea.name}</h1>
              <p class="detail-lead-desc">${tea.description}</p>

              <!-- Quick Specs Grid -->
              <div class="specs-grid">
                <div class="spec-cell">
                  <div class="spec-cell-label">Water Temp</div>
                  <div class="spec-cell-val">${tea.brewingDetails.temperature}</div>
                </div>
                <div class="spec-cell">
                  <div class="spec-cell-label">Leaf / Tea Amount</div>
                  <div class="spec-cell-val">${tea.brewingDetails.teaAmount}</div>
                </div>
                <div class="spec-cell">
                  <div class="spec-cell-label">Steeping Time</div>
                  <div class="spec-cell-val">${tea.brewingDetails.steepingTime}</div>
                </div>
                <div class="spec-cell">
                  <div class="spec-cell-label">Caffeine Level</div>
                  <div class="spec-cell-val">${tea.caffeine}</div>
                </div>
                <div class="spec-cell">
                  <div class="spec-cell-label">Difficulty</div>
                  <div class="spec-cell-val">${tea.difficulty}</div>
                </div>
                <div class="spec-cell">
                  <div class="spec-cell-label">Recommended Vessel</div>
                  <div class="spec-cell-val">${tea.brewingDetails.vessel}</div>
                </div>
              </div>

              <div style="margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
                <a href="#/brewing?tea=${tea.slug}" class="btn btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Open Live Steeping Timer
                </a>
              </div>
            </div>
          </div>

          <!-- SECTION 1: WHAT YOU'LL NEED (Ingredients & Equipment) -->
          <div class="detail-card-panel" style="margin-bottom: 40px;">
            <div class="label-caps" style="color: var(--color-olive);">Preparation Checklist</div>
            <h2 class="panel-title" style="margin-bottom: 24px;">What You'll Need</h2>

            <div class="detail-split-grid">
              <!-- Raw Ingredients -->
              <div style="background: var(--color-canvas); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <h3 style="font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 12px; color: var(--color-charcoal);">
                  Core Ingredients
                </h3>
                <ul class="checklist-items" style="list-style: none; padding: 0;">
                  ${tea.ingredients.core.map(item => `
                    <li class="checklist-item">
                      <svg class="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>${item}</span>
                    </li>
                  `).join('')}
                </ul>

                ${(tea.ingredients.optional && tea.ingredients.optional.length > 0) ? `
                  <h4 style="font-family: var(--font-serif); font-size: 1.1rem; margin: 16px 0 8px 0; color: var(--text-secondary);">
                    Optional Additions:
                  </h4>
                  <ul class="checklist-items" style="list-style: none; padding: 0;">
                    ${tea.ingredients.optional.map(opt => `
                      <li class="checklist-item" style="color: var(--text-secondary);">
                        <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-sage)" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
                        <span>${opt}</span>
                      </li>
                    `).join('')}
                  </ul>
                ` : ''}
              </div>

              <!-- Required Equipment -->
              <div style="background: var(--color-canvas); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <h3 style="font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 12px; color: var(--color-charcoal);">
                  Recommended Teaware & Equipment
                </h3>
                <ul class="checklist-items" style="list-style: none; padding: 0;">
                  ${tea.equipment.map(eq => `
                    <li class="checklist-item">
                      <svg class="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>${eq}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          </div>

          <!-- SECTION 2: HOW TO PREPARE (Step-by-Step Procedure) -->
          <div class="detail-card-panel" style="margin-bottom: 40px;">
            <div class="label-caps" style="color: var(--color-olive);">Master Brewing Procedure</div>
            <h2 class="panel-title" style="margin-bottom: 24px;">How to Prepare (${tea.preparationTime} prep · ${tea.brewingTime} brew)</h2>

            <div class="timeline-steps">
              ${tea.preparationSteps.map(stepObj => `
                <div class="timeline-step-item">
                  <div class="timeline-step-num">0${stepObj.step}</div>
                  <div class="timeline-step-content">
                    <h3 class="timeline-step-title">${stepObj.title}</h3>
                    <p class="timeline-step-desc">${stepObj.instruction}</p>
                    ${stepObj.tip ? `
                      <div class="timeline-step-tip">
                        <strong>Master Tip:</strong> ${stepObj.tip}
                      </div>
                    ` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- SECTION 3: FLAVOR PROFILE & SENSORY RADAR -->
          <div class="detail-card-panel" style="margin-bottom: 40px;">
            <div class="label-caps">Sensory Experience</div>
            <h2 class="panel-title" style="margin-bottom: 16px;">Flavor Profile & Sensory Notes</h2>
            <div class="flavor-pills-row" style="margin-bottom: 24px;">
              ${tea.flavorProfile.primary.map(f => `<span class="flavor-pill">${f}</span>`).join('')}
            </div>

            <!-- Visual Radar Progress Bars -->
            <div class="sensory-bars-grid">
              ${Object.entries(tea.flavorProfile.radar).map(([key, val]) => `
                <div class="sensory-bar-row">
                  <div class="sensory-bar-label">
                    <span>${key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <span style="font-weight: 600;">${val}%</span>
                  </div>
                  <div class="sensory-progress-track">
                    <div class="sensory-progress-fill" style="width: ${val}%;"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- SECTION 4: STORY, TERROIR & CULTURAL LORE -->
          <div class="detail-split-grid" style="margin-bottom: 40px;">
            <div class="detail-card-panel">
              <div class="label-caps">Historical Lore</div>
              <h3 class="panel-title" style="margin-bottom: 16px;">Story & Heritage</h3>
              <p style="color: var(--text-secondary); line-height: 1.8; font-size: 1.05rem;">
                ${tea.story}
              </p>
              ${tea.culturalNotes ? `
                <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--border-subtle); font-size: 0.95rem; color: var(--text-muted);">
                  <strong>Cultural Context:</strong> ${tea.culturalNotes}
                </div>
              ` : ''}
            </div>

            <div class="detail-card-panel">
              <div class="label-caps">Terroir & Origin</div>
              <h3 class="panel-title" style="margin-bottom: 16px;">Geographic Provenance</h3>
              <div style="margin-bottom: 16px; font-size: 1.1rem; color: var(--color-charcoal); font-weight: 600;">
                ${tea.origin.region}, ${tea.origin.country}
              </div>
              <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px;">
                Elevation: <strong>${tea.origin.elevation}</strong><br>
                Harvest Season: <strong>${tea.origin.harvestSeason}</strong>
              </p>
              ${tea.wellnessNotes ? `
                <div style="background: var(--color-canvas); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                  <div class="label-caps" style="color: var(--color-olive); margin-bottom: 4px;">Botanical & Wellness Notes</div>
                  <div style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">${tea.wellnessNotes}</div>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- RELATED TEAS -->
          ${related.length > 0 ? `
            <div style="margin-top: 60px;">
              <h3 style="font-family: var(--font-serif); font-size: 2.2rem; margin-bottom: 24px;">You May Also Enjoy</h3>
              <div class="tea-grid">
                ${related.map(r => renderTeaCard(r)).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // 4. "FIND YOUR TEA" / INTERACTIVE SELECTOR PAGE
  function renderFindTeaPage(container) {
    container.innerHTML = `
      <section class="section" style="padding-top: 40px;">
        <div class="container">
          <div class="section-header">
            <div class="label-caps">Interactive Selector</div>
            <h1 class="section-title" style="font-size: 3.2rem;">Find Your Perfect Tea</h1>
            <p class="section-subtitle">Select what you are feeling or looking for right now to receive immediate recommendations backed by botanical and tea characteristics.</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 40px;">
            ${TeaVerseData.situations.map(sit => `
              <div class="detail-card-panel situation-choice-card ${State.selectedSituation === sit.id ? 'active-situation' : ''}" data-sit-id="${sit.id}" style="cursor: pointer; transition: all 0.2s ease;">
                <h3 style="font-family: var(--font-serif); font-size: 1.3rem; margin-bottom: 6px; color: var(--color-charcoal);">${sit.title}</h3>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0;">${sit.description}</p>
              </div>
            `).join('')}
          </div>

          <div id="full-find-tea-results" class="detail-card-panel" style="background: var(--color-surface); border: 2px solid var(--color-sage); padding: 36px;">
            ${renderSituationRecommendation(State.selectedSituation)}
          </div>
        </div>
      </section>
    `;

    document.querySelectorAll('.situation-choice-card').forEach(card => {
      card.addEventListener('click', function () {
        document.querySelectorAll('.situation-choice-card').forEach(c => c.classList.remove('active-situation'));
        this.classList.add('active-situation');
        State.selectedSituation = this.dataset.sitId;
        const box = document.getElementById('full-find-tea-results');
        if (box) {
          box.innerHTML = renderSituationRecommendation(State.selectedSituation);
        }
      });
    });
  }

  // 5. TEA & WELLNESS PAGE
  function renderWellnessPage(container) {
    container.innerHTML = `
      <section class="section" style="padding-top: 40px;">
        <div class="container" style="max-width: 960px;">
          <div class="section-header" style="text-align: left;">
            <div class="label-caps">Botanical Learning & Mindful Living</div>
            <h1 class="section-title" style="font-size: 3.2rem;">Tea & Wellness</h1>
            <p class="section-subtitle">
              An educational overview of natural tea compounds, caffeine guidelines, and traditional botanical uses.
            </p>
          </div>

          <!-- Medical Disclaimer Notice -->
          <div class="detail-card-panel" style="background: var(--color-cream); border-left: 4px solid var(--color-olive); margin-bottom: 36px;">
            <h3 style="font-family: var(--font-serif); font-size: 1.3rem; margin-bottom: 8px;">Educational Scope & Transparency</h3>
            <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7; margin: 0;">
              TeaVerse presents botanical and cultural information strictly for educational and cultural discovery. Tea is a wonderful natural beverage, but it is not intended to diagnose, treat, cure, or prevent any medical condition. Below, we clearly distinguish between <strong>Traditional Cultural Uses</strong> and <strong>Scientific Research Associations</strong>.
            </p>
          </div>

          <!-- Section 1: Natural Compounds -->
          <div class="detail-card-panel" style="margin-bottom: 32px;">
            <div class="label-caps">Active Botanical Constituents</div>
            <h2 class="panel-title" style="margin-bottom: 16px;">Key Natural Compounds in Tea</h2>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
              <div style="background: var(--color-canvas); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <h4 style="font-family: var(--font-serif); font-size: 1.2rem; margin-bottom: 6px;">L-Theanine</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
                  An amino acid concentrated in shade-grown green teas (Gyokuro, Matcha) and young spring buds that synergizes with caffeine to promote calm, focused alertness.
                </p>
              </div>

              <div style="background: var(--color-canvas); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <h4 style="font-family: var(--font-serif); font-size: 1.2rem; margin-bottom: 6px;">EGCG Catechins</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
                  Potent plant polyphenols abundant in minimally oxidized green and white teas, studied extensively for antioxidant cellular properties.
                </p>
              </div>

              <div style="background: var(--color-canvas); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <h4 style="font-family: var(--font-serif); font-size: 1.2rem; margin-bottom: 6px;">Theaflavins & Thearubigins</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
                  Complex polyphenols formed during enzymatic black tea oxidation, responsible for rich copper color, maltiness, and brisk body.
                </p>
              </div>
            </div>
          </div>

          <!-- Section 2: Caffeine Information & Extraction -->
          <div class="detail-card-panel" style="margin-bottom: 32px;">
            <div class="label-caps">Caffeine Guidance</div>
            <h2 class="panel-title" style="margin-bottom: 16px;">Understanding Caffeine in Tea</h2>
            <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px;">
              Caffeine content in a cup is not fixed solely by leaf type. It depends dynamically on:
            </p>
            <ul style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 24px; padding-left: 20px;">
              <li><strong>Leaf Ratio:</strong> More grams of tea per cup release more caffeine.</li>
              <li><strong>Water Temperature:</strong> Boiling water (100°C) extracts caffeine rapidly; cooler water (70°C–80°C) extracts significantly less.</li>
              <li><strong>Steeping Time:</strong> Longer steeping times yield higher caffeine concentrations.</li>
              <li><strong>Leaf Grade:</strong> Small broken CTC particles infuse caffeine faster than intact whole orthodox leaves.</li>
            </ul>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; text-align: center;">
              <div style="padding: 16px; background: var(--color-canvas); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-olive);">0 mg</div>
                <div style="font-weight: 600; margin-top: 4px;">Caffeine-Free</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Chamomile, Tulsi, Rooibos, Ginger</div>
              </div>

              <div style="padding: 16px; background: var(--color-canvas); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-sage);">15–25 mg</div>
                <div style="font-weight: 600; margin-top: 4px;">Low Caffeine</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Hojicha, Genmaicha, White Peony</div>
              </div>

              <div style="padding: 16px; background: var(--color-canvas); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-charcoal);">30–50 mg</div>
                <div style="font-weight: 600; margin-top: 4px;">Moderate Caffeine</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Longjing, Oolong, Darjeeling</div>
              </div>

              <div style="padding: 16px; background: var(--color-canvas); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-charcoal);">60–80 mg</div>
                <div style="font-weight: 600; margin-top: 4px;">Higher Caffeine</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Matcha, CTC Black, Dudh Cha</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // 6. DEDICATED BREWING GUIDE & LIVE TIMER VIEW
  function renderBrewingPage(container) {
    container.innerHTML = `
      <div class="brewing-guide-container">
        <div class="container">
          <div class="section-header" style="text-align: left; max-width: 100%;">
            <div class="label-caps">Mindful Steeping & Precision Ratios</div>
            <h1 class="section-title" style="font-size: 3.2rem;">The Art of Brewing</h1>
            <p class="section-subtitle">Fine-tune your water-to-leaf ratio, temperature, and steeping duration with our interactive calculator and precision audio timer.</p>
          </div>

          <div class="brewing-calc-grid">
            <!-- Left: Interactive Ratio Calculator -->
            <div class="calc-card-panel">
              <h2 class="calc-panel-title">Brewing Ratio Calculator</h2>

              <!-- Preset Variety Buttons -->
              <div class="calc-preset-row">
                <button class="calc-preset-btn active" data-preset="green">Green Tea</button>
                <button class="calc-preset-btn" data-preset="black">Black Tea</button>
                <button class="calc-preset-btn" data-preset="oolong">Oolong</button>
                <button class="calc-preset-btn" data-preset="white">White Tea</button>
                <button class="calc-preset-btn" data-preset="matcha">Matcha</button>
                <button class="calc-preset-btn" data-preset="herbal">Herbal</button>
              </div>

              <!-- Sliders -->
              <div class="calc-control-group">
                <div class="calc-control-label">
                  <span>Leaf Amount:</span>
                  <span id="calc-grams-val" class="calc-control-val">3.0 g</span>
                </div>
                <input type="range" id="calc-grams-slider" class="range-slider" min="1.0" max="10.0" step="0.5" value="3.0">
              </div>

              <div class="calc-control-group">
                <div class="calc-control-label">
                  <span>Water Volume:</span>
                  <span id="calc-water-val" class="calc-control-val">200 ml</span>
                </div>
                <input type="range" id="calc-water-slider" class="range-slider" min="50" max="500" step="25" value="200">
              </div>

              <div class="calc-control-group">
                <div class="calc-control-label">
                  <span>Water Temperature:</span>
                  <span id="calc-temp-val" class="calc-control-val">80°C</span>
                </div>
                <input type="range" id="calc-temp-slider" class="range-slider" min="50" max="100" step="5" value="80">
              </div>

              <div class="calc-control-group">
                <div class="calc-control-label">
                  <span>Steeping Duration:</span>
                  <span id="calc-time-val" class="calc-control-val">2.0 min (120s)</span>
                </div>
                <input type="range" id="calc-time-slider" class="range-slider" min="15" max="420" step="15" value="120">
              </div>
            </div>

            <!-- Right: Live Steeping Timer with SVG Progress Dial -->
            <div class="calc-card-panel" style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
              <div class="label-caps" style="color: var(--color-olive);">Digital Steeping Clock</div>
              <h2 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 24px;">Live Steeping Timer</h2>

              <div class="timer-dial-wrapper">
                <div class="timer-dial-svg-wrap">
                  <svg width="220" height="220" viewBox="0 0 220 220">
                    <circle cx="110" cy="110" r="95" class="timer-dial-bg"/>
                    <circle cx="110" cy="110" r="95" id="timer-progress-ring" class="timer-dial-progress"/>
                  </svg>
                  <div class="timer-display-inner">
                    <div id="timer-countdown-text" class="timer-countdown-text">02:00</div>
                    <div id="timer-status-text" class="timer-status-text">Ready to Steep</div>
                  </div>
                </div>

                <div class="timer-button-row">
                  <button id="timer-start-pause-btn" class="btn btn-primary btn-sm" style="min-width: 110px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    Start Timer
                  </button>
                  <button id="timer-reset-btn" class="btn btn-secondary btn-sm">Reset</button>
                  <button id="timer-add-30-btn" class="btn btn-secondary btn-sm">+30s</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    setupBrewingCalculatorApp();
  }

  function setupBrewingCalculatorApp() {
    const gramsSlider = document.getElementById('calc-grams-slider');
    const waterSlider = document.getElementById('calc-water-slider');
    const tempSlider = document.getElementById('calc-temp-slider');
    const timeSlider = document.getElementById('calc-time-slider');

    const gramsVal = document.getElementById('calc-grams-val');
    const waterVal = document.getElementById('calc-water-val');
    const tempVal = document.getElementById('calc-temp-val');
    const timeVal = document.getElementById('calc-time-val');

    const presets = {
      green: { g: 3.0, w: 200, t: 80, s: 120 },
      black: { g: 3.0, w: 220, t: 98, s: 210 },
      oolong: { g: 5.0, w: 150, t: 92, s: 60 },
      white: { g: 4.0, w: 180, t: 82, s: 240 },
      matcha: { g: 2.0, w: 70, t: 75, s: 30 },
      herbal: { g: 3.0, w: 250, t: 100, s: 300 }
    };

    function applyPreset(presetKey) {
      const p = presets[presetKey];
      if (!p) return;
      if (gramsSlider) { gramsSlider.value = p.g; gramsVal.textContent = p.g.toFixed(1) + ' g'; }
      if (waterSlider) { waterSlider.value = p.w; waterVal.textContent = p.w + ' ml'; }
      if (tempSlider) { tempSlider.value = p.t; tempVal.textContent = p.t + '°C'; }
      if (timeSlider) {
        timeSlider.value = p.s;
        timeVal.textContent = (p.s / 60).toFixed(1) + ' min (' + p.s + 's)';
        State.timer.totalSeconds = p.s;
        State.timer.remainingSeconds = p.s;
        updateTimerDisplay();
      }
    }

    document.querySelectorAll('.calc-preset-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.calc-preset-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        applyPreset(this.dataset.preset);
      });
    });

    if (gramsSlider) gramsSlider.addEventListener('input', (e) => { gramsVal.textContent = parseFloat(e.target.value).toFixed(1) + ' g'; });
    if (waterSlider) waterSlider.addEventListener('input', (e) => { waterVal.textContent = e.target.value + ' ml'; });
    if (tempSlider) tempSlider.addEventListener('input', (e) => { tempVal.textContent = e.target.value + '°C'; });
    if (timeSlider) {
      timeSlider.addEventListener('input', (e) => {
        const sec = parseInt(e.target.value, 10);
        timeVal.textContent = (sec / 60).toFixed(1) + ' min (' + sec + 's)';
        if (!State.timer.isRunning) {
          State.timer.totalSeconds = sec;
          State.timer.remainingSeconds = sec;
          updateTimerDisplay();
        }
      });
    }

    // Timer Controls
    const startPauseBtn = document.getElementById('timer-start-pause-btn');
    const resetBtn = document.getElementById('timer-reset-btn');
    const add30Btn = document.getElementById('timer-add-30-btn');

    if (startPauseBtn) {
      startPauseBtn.addEventListener('click', () => {
        if (State.timer.isRunning) {
          pauseTimer();
        } else {
          startTimer();
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        resetTimer();
      });
    }

    if (add30Btn) {
      add30Btn.addEventListener('click', () => {
        State.timer.remainingSeconds += 30;
        State.timer.totalSeconds += 30;
        updateTimerDisplay();
      });
    }

    updateTimerDisplay();
  }

  function startTimer() {
    if (State.timer.isRunning) return;
    State.timer.isRunning = true;
    const startBtn = document.getElementById('timer-start-pause-btn');
    const statusText = document.getElementById('timer-status-text');

    if (startBtn) startBtn.innerHTML = `Pause`;
    if (statusText) statusText.textContent = 'Steeping in Progress...';

    State.timer.interval = setInterval(() => {
      if (State.timer.remainingSeconds > 0) {
        State.timer.remainingSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(State.timer.interval);
        State.timer.isRunning = false;
        if (startBtn) startBtn.innerHTML = `Start Timer`;
        if (statusText) statusText.textContent = '✨ Steeping Complete!';
        playBrewingChime();
      }
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(State.timer.interval);
    State.timer.isRunning = false;
    const startBtn = document.getElementById('timer-start-pause-btn');
    const statusText = document.getElementById('timer-status-text');
    if (startBtn) startBtn.innerHTML = `Resume`;
    if (statusText) statusText.textContent = 'Timer Paused';
  }

  function resetTimer() {
    clearInterval(State.timer.interval);
    State.timer.isRunning = false;
    State.timer.remainingSeconds = State.timer.totalSeconds;
    const startBtn = document.getElementById('timer-start-pause-btn');
    const statusText = document.getElementById('timer-status-text');
    if (startBtn) startBtn.innerHTML = `Start Timer`;
    if (statusText) statusText.textContent = 'Ready to Steep';
    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    const countdownEl = document.getElementById('timer-countdown-text');
    const ringEl = document.getElementById('timer-progress-ring');
    if (!countdownEl) return;

    const min = Math.floor(State.timer.remainingSeconds / 60);
    const sec = State.timer.remainingSeconds % 60;
    countdownEl.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

    if (ringEl && State.timer.totalSeconds > 0) {
      const radius = 95;
      const circumference = 2 * Math.PI * radius;
      const progress = State.timer.remainingSeconds / State.timer.totalSeconds;
      const offset = circumference * (1 - progress);
      ringEl.style.strokeDasharray = `${circumference}`;
      ringEl.style.strokeDashoffset = `${offset}`;
    }
  }

  // 7. TEA ORIGINS & TERROIRS VIEW (Highlighting Bangladesh Regions)
  function renderOriginsPage(container) {
    container.innerHTML = `
      <section class="section" style="padding-top: 40px;">
        <div class="container">
          <div class="section-header" style="text-align: left; max-width: 100%;">
            <div class="label-caps">Terroirs, Soils & Climate</div>
            <h1 class="section-title" style="font-size: 3.2rem;">Tea Terroirs Around the World</h1>
            <p class="section-subtitle">Discover the microclimates, high-mountain mists, and historic origins shaping global tea culture.</p>
          </div>

          <!-- Featured Bangladesh Tea Regions -->
          <div class="detail-card-panel" style="margin-bottom: 40px; border: 2px solid var(--color-sage);">
            <div class="label-caps" style="color: var(--color-olive);">Primary Focus</div>
            <h2 style="font-family: var(--font-serif); font-size: 2.4rem; margin: 8px 0 16px 0;">Tea Regions of Bangladesh</h2>
            <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px;">
              Bangladesh is the 10th largest tea producer in the world with over 168 commercial tea gardens across Sylhet, Moulvibazar, Habiganj, Panchagarh, and Chattogram.
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
              ${TeaVerseData.bangladeshRegions.map(reg => `
                <div style="background: var(--color-canvas); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                  <div class="label-caps" style="color: var(--color-olive); margin-bottom: 4px;">${reg.district}</div>
                  <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--color-charcoal); margin-bottom: 4px;">${reg.name}</h3>
                  <div style="font-size: 0.85rem; font-weight: 600; color: var(--color-sage); margin-bottom: 10px;">${reg.title}</div>
                  <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 12px;">${reg.description}</p>
                  <div style="font-size: 0.8rem; color: var(--text-muted);"><strong>Key Estates:</strong> ${reg.keyEstates.join(', ')}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Global Origins List -->
          <div style="display: grid; grid-template-columns: 1fr; gap: 32px;">
            ${TeaVerseData.origins.map(origin => `
              <div class="detail-card-panel" style="display: grid; grid-template-columns: 1fr; gap: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px; flex-wrap: wrap;">
                  <div>
                    <span class="label-caps">${origin.nativeName}</span>
                    <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--color-charcoal); margin: 4px 0;">${origin.country}</h2>
                  </div>
                  <a href="#/explore?country=${encodeURIComponent(origin.country)}" class="btn btn-secondary btn-sm">Explore ${origin.country} Teas →</a>
                </div>

                <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.7;">
                  ${origin.description}
                </p>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; background: var(--color-canvas); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                  <div>
                    <div class="label-caps" style="margin-bottom: 4px;">Key Regions</div>
                    <div style="font-weight: 600; color: var(--color-charcoal);">${origin.regions.join(' · ')}</div>
                  </div>
                  <div>
                    <div class="label-caps" style="margin-bottom: 4px;">Climate & Soil</div>
                    <div style="font-weight: 500; color: var(--text-secondary);">${origin.climate}</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  // 8. CLASSIFICATION & BOTANY VIEW
  function renderClassificationPage(container) {
    container.innerHTML = `
      <section class="section" style="padding-top: 40px;">
        <div class="container">
          <div class="section-header" style="text-align: left; max-width: 100%;">
            <div class="label-caps">Botanical Science & Processing</div>
            <h1 class="section-title" style="font-size: 3.2rem;">Tea Botany & Taxonomy</h1>
            <p class="section-subtitle">Understanding the science behind Camellia sinensis varieties and botanical infusions.</p>
          </div>

          <div class="detail-split-grid" style="margin-bottom: 40px;">
            <div class="detail-card-panel" style="border-left: 4px solid var(--color-sage);">
              <div class="label-caps">True Teas</div>
              <h2 style="font-family: var(--font-serif); font-size: 2.2rem; margin: 8px 0 16px 0;">Camellia Sinensis</h2>
              <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px;">
                Two primary botanical varieties account for almost all global tea production:
              </p>
              <ul>
                <li class="checklist-item"><strong>Camellia sinensis var. sinensis:</strong> Small leaf, native to China, cold-hardy, delicate floral and sweet notes.</li>
                <li class="checklist-item"><strong>Camellia sinensis var. assamica:</strong> Large leaf, native to Assam, tropical, high in theaflavins, bold maltiness. Found across Sylhet and Assam.</li>
              </ul>
            </div>

            <div class="detail-card-panel" style="border-left: 4px solid var(--color-amber);">
              <div class="label-caps">Botanicals & Tisanes</div>
              <h2 style="font-family: var(--font-serif); font-size: 2.2rem; margin: 8px 0 16px 0;">Herbal & Botanical Infusions</h2>
              <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px;">
                Herbal infusions (Tisanes) do not contain Camellia sinensis leaves and are naturally caffeine-free:
              </p>
              <ul>
                <li class="checklist-item"><strong>Flowers:</strong> Chamomile, Hibiscus (Chukair), Lavender.</li>
                <li class="checklist-item"><strong>Leaves & Herbs:</strong> Krishna Tulsi, Moringa, Rooibos, Basak.</li>
                <li class="checklist-item"><strong>Roots & Barks:</strong> Fresh Ginger, Ceylon True Cinnamon, Arjun tree bark.</li>
                <li class="checklist-item"><strong>Seeds:</strong> Nigella Sativa (Kalo Jeera), Fenugreek (Methi), Clove.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // 9. ABOUT PAGE WITH CREATOR CREDITS
  function renderAboutPage(container) {
    container.innerHTML = `
      <section class="section" style="padding-top: 40px;">
        <div class="container" style="max-width: 860px;">
          <div class="section-header" style="text-align: left;">
            <div class="label-caps">Our Purpose & Philosophy</div>
            <h1 class="section-title" style="font-size: 3.2rem;">About TeaVerse</h1>
            <p class="section-subtitle">Dedicated to bringing the world's tea knowledge, terroir geography, and mindful brewing rituals together in one serene digital library.</p>
          </div>

          <div class="detail-card-panel" style="margin-bottom: 32px;">
            <h3 class="panel-title" style="margin-bottom: 16px;">An Open Visual Knowledge Space</h3>
            <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 16px;">
              TeaVerse is an independent educational encyclopedia created for tea enthusiasts, curious learners, and mindful brewers worldwide. Our mission is to make authentic tea traditions accessible, scientifically grounded, and visually inspiring without the noise of commercial e-commerce.
            </p>
            <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.8;">
              Whether learning how to whisk ceremonial matcha in Kyoto, decocting spiced stovetop masala chai, tasting Malnicherra's 1854 heritage, or practicing Gongfu rock oolong steeping, TeaVerse provides exact ratios, water temperatures, and historical context for every cup.
            </p>
          </div>

          <!-- Project Authors & Credits -->
          <div class="detail-card-panel" style="border: 1.5px solid var(--color-sage); margin-bottom: 32px;">
            <div class="label-caps" style="color: var(--color-olive);">Project Team & Attribution</div>
            <h3 class="panel-title" style="margin: 8px 0 16px 0;">Creators & Design Leadership</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px;">
              <div style="padding: 16px; background: var(--color-canvas); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div class="label-caps" style="color: var(--color-olive); margin-bottom: 4px;">Development & Engineering</div>
                <div style="font-family: var(--font-serif); font-size: 1.4rem; font-weight: 700; color: var(--color-charcoal);">Momin Ali</div>
                <div style="font-size: 0.85rem; color: var(--text-secondary);">Full-Stack Frontend Architecture, Dynamic Filtering & Interactive Steeping Engine</div>
              </div>

              <div style="padding: 16px; background: var(--color-canvas); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div class="label-caps" style="color: var(--color-olive); margin-bottom: 4px;">Concept, Planning & UI/UX</div>
                <div style="font-family: var(--font-serif); font-size: 1.4rem; font-weight: 700; color: var(--color-charcoal);">Opi Sultana Nira</div>
                <div style="font-size: 0.85rem; color: var(--text-secondary);">Botanical Curation, Editorial Visual Concept, Palette Direction & Experience Architecture</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // 10. 404 NOT FOUND
  function renderNotFoundPage(container) {
    container.innerHTML = `
      <section class="section" style="text-align: center; padding: 120px 24px;">
        <div class="container">
          <h1 style="font-family: var(--font-serif); font-size: 4rem; margin-bottom: 16px;">Page Not Found</h1>
          <p style="color: var(--text-secondary); margin-bottom: 32px;">The tea guide or page you are looking for does not exist in our encyclopedia.</p>
          <a href="#/" class="btn btn-primary">Return to Homepage</a>
        </div>
      </section>
    `;
  }

  // --- Helper: Render Standard Tea Card ---
  function renderTeaCard(tea) {
    const isBd = tea.countryCategory === 'bangladesh';
    return `
      <div class="tea-card">
        <a href="#/tea/${tea.slug}" class="tea-card-image-wrap">
          <img src="${tea.heroImage}" alt="${tea.name}" class="tea-card-image" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80'">
          <div class="tea-card-category-badge ${isBd ? 'bd-badge' : ''}">
            ${isBd ? '🇧🇩 ' : ''}${tea.origin.country}
          </div>
        </a>

        <div class="tea-card-body">
          <div class="tea-card-origin-text">
            <span class="origin-flag">${tea.nativeName}</span> · ${tea.origin.region}
          </div>
          <h3 class="tea-card-title">
            <a href="#/tea/${tea.slug}" class="tea-card-title-link">${tea.name}</a>
          </h3>
          <p class="tea-card-desc">${tea.description}</p>

          <div class="tea-card-flavor-tags">
            ${tea.flavorProfile.primary.slice(0, 3).map(f => `<span class="pill-tag">${f}</span>`).join('')}
          </div>

          <div class="tea-card-footer">
            <div class="tea-card-prep-info">
              <span>${tea.brewingDetails.temperature}</span>
              <span>·</span>
              <span>${tea.brewingDetails.steepingTime}</span>
            </div>
            <a href="#/tea/${tea.slug}" class="btn btn-secondary btn-sm">Guide →</a>
          </div>
        </div>
      </div>
    `;
  }

  // --- "Surprise Me" Randomizer Modal ---
  function triggerRandomTeaModal() {
    const teas = TeaVerseData.teas;
    const randomTea = teas[Math.floor(Math.random() * teas.length)];
    showRandomModal(randomTea);
  }

  function showRandomModal(tea) {
    let modal = document.getElementById('random-tea-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'random-tea-modal';
      modal.className = 'random-modal-backdrop';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="random-modal-card">
        <button id="modal-close-btn" class="modal-close-btn" aria-label="Close modal">✕</button>
        <div class="label-caps" style="color: var(--color-sage);">Serendipitous Discovery</div>
        <div style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 4px;">${tea.nativeName}</div>
        <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--color-charcoal); margin-bottom: 12px;">${tea.name}</h2>
        
        <div style="border-radius: var(--radius-md); overflow: hidden; height: 180px; margin-bottom: 16px;">
          <img src="${tea.heroImage}" alt="${tea.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80'">
        </div>

        <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px; font-size: 0.95rem;">
          ${tea.description}
        </p>

        <div style="display: flex; gap: 12px; justify-content: flex-end;">
          <button id="modal-reroll-btn" class="btn btn-secondary btn-sm">Roll Again 🎲</button>
          <a href="#/tea/${tea.slug}" id="modal-view-guide-btn" class="btn btn-primary btn-sm">Explore Guide →</a>
        </div>
      </div>
    `;

    modal.classList.add('visible');

    const closeBtn = modal.querySelector('#modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => modal.classList.remove('visible'));
    }

    const rerollBtn = modal.querySelector('#modal-reroll-btn');
    if (rerollBtn) {
      rerollBtn.addEventListener('click', () => {
        const nextTea = TeaVerseData.teas[Math.floor(Math.random() * TeaVerseData.teas.length)];
        showRandomModal(nextTea);
      });
    }

    const viewBtn = modal.querySelector('#modal-view-guide-btn');
    if (viewBtn) {
      viewBtn.addEventListener('click', () => modal.classList.remove('visible'));
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('visible');
    });
  }

  // --- Mobile Drawer and Global Header Setup ---
  function setupGlobalUI() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-nav-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    const closeBtn = document.getElementById('drawer-close-btn');

    function openDrawer() {
      if (drawer) drawer.classList.add('open');
      if (backdrop) backdrop.classList.add('visible');
    }

    function closeDrawer() {
      if (drawer) drawer.classList.remove('open');
      if (backdrop) backdrop.classList.remove('visible');
    }

    if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    const headerSearchTrigger = document.getElementById('header-search-trigger');
    if (headerSearchTrigger) {
      headerSearchTrigger.addEventListener('click', () => {
        navigateTo('/explore');
      });
    }
  }

  // Initialize App
  function initApp() {
    setupGlobalUI();
    window.addEventListener('hashchange', handleRouting);
    handleRouting();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
