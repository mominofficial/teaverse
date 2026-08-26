/**
 * TeaVerse — Global Tea Encyclopedia & Brewing Guide
 * Client-Side Router, Search & Filter Engine, Live Timer, Interactive Views
 */

(function () {
  'use strict';

  // State Management
  const State = {
    currentRoute: '',
    searchQuery: '',
    selectedCategory: 'all',
    selectedCountry: 'all',
    selectedCaffeine: 'all',
    selectedMood: 'all',
    sortBy: 'popular',
    tempUnit: 'C', // 'C' or 'F'
    // Timer state
    timer: {
      interval: null,
      totalSeconds: 180,
      remainingSeconds: 180,
      isRunning: false
    }
  };

  // Audio Chime Generator using Web Audio API (Zero external assets)
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
      console.log('Audio not supported or permitted');
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
    const route = getRoute();
    State.currentRoute = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update nav active states
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(el => {
      const href = el.getAttribute('href').replace('#', '');
      if (route === href || (route === '/' && href === '/')) {
        el.classList.add('active');
      } else if (href !== '/' && route.startsWith(href)) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    const appContainer = document.getElementById('app-view-container');
    if (!appContainer) return;

    if (route === '/' || route === '') {
      renderHomePage(appContainer);
    } else if (route === '/explore') {
      renderExplorePage(appContainer);
    } else if (route.startsWith('/tea/')) {
      const slug = route.replace('/tea/', '');
      renderDetailPage(appContainer, slug);
    } else if (route === '/brewing') {
      renderBrewingGuidePage(appContainer);
    } else if (route === '/origins') {
      renderOriginsPage(appContainer);
    } else if (route === '/guide') {
      renderClassificationPage(appContainer);
    } else if (route === '/about') {
      renderAboutPage(appContainer);
    } else {
      renderNotFoundPage(appContainer);
    }
  }

  // --- Views ---

  // 1. HOMEPAGE
  function renderHomePage(container) {
    const featuredTeas = TeaVerseData.teas.slice(0, 6);
    const categories = TeaVerseData.categories.filter(c => c.id !== 'all');

    container.innerHTML = `
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-content">
              <div class="hero-badge-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Global Tea Encyclopedia
              </div>
              <h1 class="hero-title">A World of Tea, One Leaf at a Time.</h1>
              <p class="hero-subtitle">
                Discover the world's finest teas, their ancient origins, botanical ingredients, exquisite flavors, living traditions, and the mindful art of brewing them.
              </p>
              <div class="hero-cta-group">
                <a href="#/explore" class="btn btn-primary btn-lg">Explore Teas →</a>
                <a href="#/brewing" class="btn btn-secondary btn-lg">Brewing Guide</a>
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
                  <div class="stat-num">${TeaVerseData.origins.length}</div>
                  <div class="stat-label">Terroir Regions</div>
                </div>
                <div class="hero-stat-item">
                  <div class="stat-num">100%</div>
                  <div class="stat-label">Botanical Clarity</div>
                </div>
              </div>
            </div>
            
            <div class="hero-media-wrapper">
              <div class="hero-card-frame">
                <img src="./images/reference-teas.jpg" alt="Botanical herbal infusions" class="hero-card-img" onerror="this.src='https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80'">
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

      <!-- Botanical Classification Banner -->
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
                <span class="pill-tag">Yellow Tea</span>
              </div>
            </div>

            <div class="classification-box herbal-tisane">
              <div class="label-caps">Botanicals · Caffeine Free</div>
              <h3 class="classification-title">Herbal & Spiced Tisanes</h3>
              <p class="classification-desc">
                Herbal infusions (tisanes) are crafted from dried flowers, healing roots, aromatic barks, spices, and leaves of plants other than Camellia sinensis. Naturally caffeine-free and cherished across cultures for wellness.
              </p>
              <div class="classification-tags">
                <span class="pill-tag">Chamomile Flowers</span>
                <span class="pill-tag">Ceylon Cinnamon</span>
                <span class="pill-tag">Fresh Ginger</span>
                <span class="pill-tag">Rooibos Bush</span>
                <span class="pill-tag">Zanzibar Clove</span>
                <span class="pill-tag">Moringa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Category Exploration Section -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <div class="label-caps">Taxonomy & Varieties</div>
            <h2 class="section-title">Explore the Tea World</h2>
            <p class="section-subtitle">Navigate through centuries of cultivation styles, processing traditions, and sensory landscapes.</p>
          </div>

          <div class="category-grid">
            ${categories.map(cat => `
              <div class="category-card" onclick="window.location.hash='#/explore?category=${cat.id}'">
                <div>
                  <div class="category-card-header">
                    <div class="category-icon-wrapper">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z"/><path d="M12 6v6l4 2"/></svg>
                    </div>
                    <div class="category-count">${cat.count} Teas</div>
                  </div>
                  <h3 class="category-name">${cat.name}</h3>
                  <p class="category-desc">${cat.description}</p>
                </div>
                <div style="margin-top: 16px; font-size: 0.85rem; font-weight: 600; color: var(--color-olive-dark);">
                  Explore Category →
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Choose Your Tea Mood Section -->
      <section class="section" style="padding-top: 0;">
        <div class="container">
          <div class="mood-selector-container">
            <div class="label-caps">Sensory Experience</div>
            <h2 style="font-family: var(--font-serif); font-size: 2.4rem; margin: 8px 0 12px 0;">Choose Your Tea Mood</h2>
            <p style="color: var(--text-secondary); max-width: 540px; margin: 0 auto;">Select an intention or feeling, and let TeaVerse curate the ideal cup for your moment.</p>
            
            <div class="mood-chips-row">
              ${TeaVerseData.moods.map(m => `
                <button class="mood-chip" onclick="window.location.hash='#/explore?mood=${m.id}'">
                  <span>${m.label}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Teas Section -->
      <section class="section" style="background: var(--color-cream); border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
        <div class="container">
          <div class="section-header">
            <div class="label-caps">Editorial Selection</div>
            <h2 class="section-title">Iconic Global Harvests</h2>
            <p class="section-subtitle">A curated tasting flight of celebrated orthodox teas and restorative herbal infusions.</p>
          </div>

          <div class="tea-card-grid">
            ${featuredTeas.map(tea => renderTeaCardHtml(tea)).join('')}
          </div>

          <div style="text-align: center; margin-top: 48px;">
            <a href="#/explore" class="btn btn-primary btn-lg">View Complete Tea Catalog (${TeaVerseData.teas.length} Teas) →</a>
          </div>
        </div>
      </section>

      <!-- Tea Origins Preview Section -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <div class="label-caps">Terroir & Geography</div>
            <h2 class="section-title">Tea Around the World</h2>
            <p class="section-subtitle">From misty Himalayan altitudes to volcanic Japanese valleys and ancient Chinese river basins.</p>
          </div>

          <div class="category-grid">
            ${TeaVerseData.origins.slice(0, 4).map(origin => `
              <div class="category-card" onclick="window.location.hash='#/origins'">
                <div>
                  <div class="label-caps" style="color: var(--color-olive-dark);">${origin.nativeName}</div>
                  <h3 class="category-name" style="margin-top: 4px;">${origin.country}</h3>
                  <p class="category-desc">${origin.description}</p>
                </div>
                <div style="margin-top: 16px; font-size: 0.85rem; font-weight: 600; color: var(--color-charcoal);">
                  Explore Regions (${origin.regions.join(', ')}) →
                </div>
              </div>
            `).join('')}
          </div>

          <div style="text-align: center; margin-top: 36px;">
            <a href="#/origins" class="btn btn-secondary">Explore All ${TeaVerseData.origins.length} Tea Producing Countries →</a>
          </div>
        </div>
      </section>
    `;

    // Attach Randomizer button event
    const randomBtn = document.getElementById('hero-random-btn');
    if (randomBtn) {
      randomBtn.addEventListener('click', triggerTeaRandomizer);
    }
  }

  // 2. EXPLORE & DISCOVERY CATALOG VIEW
  function renderExplorePage(container) {
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
    if (urlParams.has('category')) State.selectedCategory = urlParams.get('category');
    if (urlParams.has('mood')) State.selectedMood = urlParams.get('mood');
    if (urlParams.has('country')) State.selectedCountry = urlParams.get('country');

    container.innerHTML = `
      <section class="section" style="padding-top: 40px;">
        <div class="container">
          <div class="section-header" style="margin-bottom: 36px; text-align: left; max-width: 100%;">
            <div class="label-caps">Encyclopedia Catalog</div>
            <h1 class="section-title" style="font-size: 3rem; margin-bottom: 8px;">Discover Your Next Cup</h1>
            <p class="section-subtitle">Search by name, region, raw ingredients, flavor notes, or brewing style.</p>
          </div>

          <!-- Search & Filter Bar -->
          <div class="explore-controls-wrapper">
            <div class="search-input-group">
              <svg class="search-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input type="text" id="catalog-search-input" class="search-input" placeholder="Search tea by name, country, ingredient, flavor (e.g., 'Matcha', 'Assam', 'Ginger', 'Floral')..." value="${State.searchQuery}">
              <button id="search-clear-btn" class="search-clear-btn" style="${State.searchQuery ? 'display:block;' : 'display:none;'}">✕</button>
            </div>

            <!-- Categories Filter Pills -->
            <div class="filter-bar-row">
              <div class="filter-pills-scroll" id="category-filter-container">
                ${TeaVerseData.categories.map(c => `
                  <button class="filter-pill ${State.selectedCategory === c.id ? 'active' : ''}" data-category="${c.id}">
                    ${c.name}
                  </button>
                `).join('')}
              </div>

              <!-- Sort Dropdown -->
              <div class="sort-select-wrapper">
                <label for="sort-select">Sort by:</label>
                <select id="sort-select" class="sort-select">
                  <option value="popular" ${State.sortBy === 'popular' ? 'selected' : ''}>Featured / Popular</option>
                  <option value="az" ${State.sortBy === 'az' ? 'selected' : ''}>Name (A–Z)</option>
                  <option value="country" ${State.sortBy === 'country' ? 'selected' : ''}>Origin Country</option>
                  <option value="time" ${State.sortBy === 'time' ? 'selected' : ''}>Brewing Time</option>
                </select>
              </div>
            </div>

            <!-- Secondary Filters: Country, Caffeine, Mood -->
            <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border-subtle);">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-olive); text-transform: uppercase;">Country:</span>
                <select id="filter-country" class="sort-select" style="padding: 6px 12px; font-size: 0.85rem;">
                  <option value="all">All Countries</option>
                  ${TeaVerseData.origins.map(o => `
                    <option value="${o.country}" ${State.selectedCountry === o.country ? 'selected' : ''}>${o.country}</option>
                  `).join('')}
                </select>
              </div>

              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-olive); text-transform: uppercase;">Caffeine:</span>
                <select id="filter-caffeine" class="sort-select" style="padding: 6px 12px; font-size: 0.85rem;">
                  <option value="all" ${State.selectedCaffeine === 'all' ? 'selected' : ''}>All Levels</option>
                  <option value="None" ${State.selectedCaffeine === 'None' ? 'selected' : ''}>Caffeine-Free (Tisanes)</option>
                  <option value="Low" ${State.selectedCaffeine === 'Low' ? 'selected' : ''}>Low Caffeine</option>
                  <option value="Medium" ${State.selectedCaffeine === 'Medium' ? 'selected' : ''}>Medium Caffeine</option>
                  <option value="High" ${State.selectedCaffeine === 'High' ? 'selected' : ''}>High Caffeine</option>
                </select>
              </div>

              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-olive); text-transform: uppercase;">Mood:</span>
                <select id="filter-mood" class="sort-select" style="padding: 6px 12px; font-size: 0.85rem;">
                  <option value="all">All Moods</option>
                  ${TeaVerseData.moods.map(m => `
                    <option value="${m.id}" ${State.selectedMood === m.id ? 'selected' : ''}>${m.label}</option>
                  `).join('')}
                </select>
              </div>

              ${(State.selectedCategory !== 'all' || State.selectedCountry !== 'all' || State.selectedCaffeine !== 'all' || State.selectedMood !== 'all' || State.searchQuery) ? `
                <button id="reset-filters-btn" class="btn btn-secondary btn-sm" style="margin-left: auto;">Reset Filters</button>
              ` : ''}
            </div>
          </div>

          <!-- Dynamic Results Meta Bar -->
          <div class="results-meta-bar">
            <div>Showing <span id="results-count-number" class="results-count-highlight">0</span> teas</div>
          </div>

          <!-- Cards Grid Container -->
          <div id="catalog-cards-container" class="tea-card-grid"></div>
        </div>
      </section>
    `;

    // Attach Listeners
    setupExploreListeners();
    renderFilteredCatalog();
  }

  function setupExploreListeners() {
    const searchInput = document.getElementById('catalog-search-input');
    const clearBtn = document.getElementById('search-clear-btn');
    const sortSelect = document.getElementById('sort-select');
    const countrySelect = document.getElementById('filter-country');
    const caffeineSelect = document.getElementById('filter-caffeine');
    const moodSelect = document.getElementById('filter-mood');
    const resetBtn = document.getElementById('reset-filters-btn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        State.searchQuery = e.target.value;
        if (clearBtn) clearBtn.style.display = State.searchQuery ? 'block' : 'none';
        renderFilteredCatalog();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        State.searchQuery = '';
        if (searchInput) searchInput.value = '';
        clearBtn.style.display = 'none';
        renderFilteredCatalog();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        State.sortBy = e.target.value;
        renderFilteredCatalog();
      });
    }

    if (countrySelect) {
      countrySelect.addEventListener('change', (e) => {
        State.selectedCountry = e.target.value;
        renderFilteredCatalog();
      });
    }

    if (caffeineSelect) {
      caffeineSelect.addEventListener('change', (e) => {
        State.selectedCaffeine = e.target.value;
        renderFilteredCatalog();
      });
    }

    if (moodSelect) {
      moodSelect.addEventListener('change', (e) => {
        State.selectedMood = e.target.value;
        renderFilteredCatalog();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        State.searchQuery = '';
        State.selectedCategory = 'all';
        State.selectedCountry = 'all';
        State.selectedCaffeine = 'all';
        State.selectedMood = 'all';
        State.sortBy = 'popular';
        renderExplorePage(document.getElementById('app-view-container'));
      });
    }

    // Category Pill delegation
    const catContainer = document.getElementById('category-filter-container');
    if (catContainer) {
      catContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-pill');
        if (!btn) return;
        const cat = btn.getAttribute('data-category');
        State.selectedCategory = cat;
        catContainer.querySelectorAll('.filter-pill').forEach(el => el.classList.remove('active'));
        btn.classList.add('active');
        renderFilteredCatalog();
      });
    }
  }

  function renderFilteredCatalog() {
    const gridContainer = document.getElementById('catalog-cards-container');
    const countDisplay = document.getElementById('results-count-number');
    if (!gridContainer) return;

    let items = [...TeaVerseData.teas];

    // Filter by Search Query
    if (State.searchQuery.trim()) {
      const q = State.searchQuery.trim().toLowerCase();
      items = items.filter(t => {
        return t.name.toLowerCase().includes(q) ||
          t.nativeName.toLowerCase().includes(q) ||
          t.origin.country.toLowerCase().includes(q) ||
          t.origin.region.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          t.flavorProfile.primary.some(f => f.toLowerCase().includes(q)) ||
          t.ingredients.core.some(i => i.toLowerCase().includes(q));
      });
    }

    // Filter by Category
    if (State.selectedCategory !== 'all') {
      items = items.filter(t => t.category === State.selectedCategory);
    }

    // Filter by Country
    if (State.selectedCountry !== 'all') {
      items = items.filter(t => t.origin.country.toLowerCase().includes(State.selectedCountry.toLowerCase()));
    }

    // Filter by Caffeine
    if (State.selectedCaffeine !== 'all') {
      items = items.filter(t => t.caffeine.toLowerCase().includes(State.selectedCaffeine.toLowerCase()));
    }

    // Filter by Mood
    if (State.selectedMood !== 'all') {
      items = items.filter(t => t.moods && t.moods.includes(State.selectedMood));
    }

    // Sort
    if (State.sortBy === 'az') {
      items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (State.sortBy === 'country') {
      items.sort((a, b) => a.origin.country.localeCompare(b.origin.country));
    } else if (State.sortBy === 'time') {
      items.sort((a, b) => parseFloat(a.brewingTime) - parseFloat(b.brewingTime));
    }

    if (countDisplay) countDisplay.textContent = items.length;

    if (items.length === 0) {
      gridContainer.innerHTML = `
        <div class="empty-state-box" style="grid-column: 1 / -1;">
          <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M8 11h6"/></svg>
          <h3 class="empty-state-title">No Teas Found</h3>
          <p class="empty-state-desc">We couldn't find any tea matching your search criteria. Try adjusting your filters or search query.</p>
          <button onclick="window.location.hash='#/explore'" class="btn btn-secondary btn-sm">Clear All Filters</button>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = items.map(t => renderTeaCardHtml(t)).join('');
  }

  // 3. INDIVIDUAL TEA DETAIL PAGE
  function renderDetailPage(container, slug) {
    const tea = TeaVerseData.teas.find(t => t.slug === slug);
    if (!tea) {
      renderNotFoundPage(container);
      return;
    }

    // Related teas
    const related = TeaVerseData.teas.filter(t => tea.relatedTeas.includes(t.slug));

    container.innerHTML = `
      <div class="tea-detail-container">
        <div class="container">
          <!-- Back Nav -->
          <div class="detail-back-nav">
            <a href="#/explore" class="btn-back">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m15 18-6-6 6-6"/></svg>
              Back to Catalog
            </a>
          </div>

          <!-- Hero Section -->
          <div class="detail-hero-grid">
            <div>
              <div class="detail-header-badges">
                <span class="badge-botanical-type">${tea.type}</span>
                <span class="badge-origin-country">${tea.origin.country} · ${tea.origin.region}</span>
              </div>
              <div class="detail-native-title">${tea.nativeName}</div>
              <h1 class="detail-main-title">${tea.name}</h1>
              <p class="detail-hero-desc">${tea.description}</p>

              <!-- Quick Specs Ribbon -->
              <div class="specs-quick-ribbon">
                <div class="spec-ribbon-item">
                  <span class="spec-ribbon-label">Water Temp</span>
                  <span class="spec-ribbon-val">${tea.brewingDetails.temperature.split('(')[0]}</span>
                </div>
                <div class="spec-ribbon-item">
                  <span class="spec-ribbon-label">Leaf Amount</span>
                  <span class="spec-ribbon-val">${tea.brewingDetails.teaAmount.split('(')[0]}</span>
                </div>
                <div class="spec-ribbon-item">
                  <span class="spec-ribbon-label">Steep Time</span>
                  <span class="spec-ribbon-val">${tea.brewingDetails.steepingTime.split('(')[0]}</span>
                </div>
                <div class="spec-ribbon-item">
                  <span class="spec-ribbon-label">Caffeine</span>
                  <span class="spec-ribbon-val">${tea.caffeine}</span>
                </div>
              </div>
            </div>

            <div class="detail-hero-media">
              <img src="${tea.heroImage}" alt="${tea.name}" class="detail-hero-img" onerror="this.src='https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80'">
            </div>
          </div>

          <!-- What You'll Need: Ingredients vs Equipment -->
          <div class="detail-split-grid">
            <div class="detail-card-panel">
              <div class="panel-header-row">
                <div class="panel-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <h3 class="panel-title">Required Ingredients</h3>
              </div>

              <div class="label-caps" style="margin-bottom: 12px;">Core Essentials</div>
              <ul style="margin-bottom: 24px;">
                ${tea.ingredients.core.map(ing => `
                  <li class="checklist-item">
                    <span class="checklist-bullet">✓</span>
                    <span>${ing}</span>
                  </li>
                `).join('')}
              </ul>

              ${tea.ingredients.optional && tea.ingredients.optional.length ? `
                <div class="label-caps" style="margin-bottom: 12px;">Optional Traditions & Garnishes</div>
                <ul>
                  ${tea.ingredients.optional.map(opt => `
                    <li class="checklist-item" style="color: var(--text-secondary);">
                      <span class="checklist-bullet" style="background: var(--color-cream);">+</span>
                      <span>${opt}</span>
                    </li>
                  `).join('')}
                </ul>
              ` : ''}
            </div>

            <div class="detail-card-panel">
              <div class="panel-header-row">
                <div class="panel-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>
                </div>
                <h3 class="panel-title">Recommended Teaware</h3>
              </div>

              <div class="label-caps" style="margin-bottom: 12px;">Equipment & Vessels</div>
              <ul>
                ${tea.equipment.map(eq => `
                  <li class="checklist-item">
                    <span class="checklist-bullet">◈</span>
                    <span>${eq}</span>
                  </li>
                `).join('')}
              </ul>

              <div style="margin-top: 24px; padding: 16px; background: var(--color-canvas); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--color-olive); margin-bottom: 4px;">Serving Style</div>
                <div style="font-size: 0.95rem; font-weight: 600; color: var(--color-charcoal);">${tea.brewingDetails.servingStyle}</div>
              </div>
            </div>
          </div>

          <!-- How to Brew It: Step-by-Step Vertical Timeline -->
          <div class="timeline-section">
            <div class="section-header" style="margin-bottom: 24px; text-align: left;">
              <div class="label-caps">Step-by-Step Preparation</div>
              <h2 class="section-title" style="font-size: 2.6rem;">How to Brew ${tea.name}</h2>
              <p class="section-subtitle">Follow these mindful procedures to extract maximum aroma, nuance, and sweetness.</p>
            </div>

            <div class="timeline-wrapper">
              ${tea.preparationSteps.map(step => `
                <div class="timeline-step-card">
                  <div class="step-marker-col">
                    <div class="step-num-badge">0${step.step}</div>
                    <div class="step-connector-line"></div>
                  </div>
                  <div class="step-content-box">
                    <h4 class="step-title">${step.title}</h4>
                    <p class="step-instruction">${step.instruction}</p>
                    ${step.tip ? `
                      <div class="step-tip-callout">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                        <span><strong>Master Tip:</strong> ${step.tip}</span>
                      </div>
                    ` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Flavor Profile & Sensory Radar -->
          <div class="flavor-profile-panel">
            <div class="label-caps">Sensory Character</div>
            <h3 style="font-family: var(--font-serif); font-size: 2rem; margin: 8px 0 16px 0;">Flavor Profile & Notes</h3>
            <div class="tea-card-flavor-tags" style="margin-bottom: 24px;">
              ${tea.flavorProfile.primary.map(f => `<span class="flavor-tag" style="font-size: 0.9rem; padding: 6px 14px; background: var(--color-canvas); border: 1px solid var(--border-medium);">${f}</span>`).join('')}
            </div>

            <div class="radar-bars-grid">
              ${Object.entries(tea.flavorProfile.radar).map(([key, val]) => `
                <div class="radar-bar-item">
                  <div class="radar-bar-header">
                    <span>${key}</span>
                    <span>${val}%</span>
                  </div>
                  <div class="radar-bar-track">
                    <div class="radar-bar-fill" style="width: ${val}%;"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Story & Cultural Heritage -->
          <div class="detail-split-grid">
            <div class="detail-card-panel">
              <div class="label-caps">Origin & Terroir</div>
              <h3 class="panel-title" style="margin: 8px 0 16px 0;">Where It Comes From</h3>
              <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px;">
                Harvested in <strong>${tea.origin.region}</strong> (${tea.origin.country}) at high mountain elevations of <strong>${tea.origin.elevation}</strong> during the prized <strong>${tea.origin.harvestSeason}</strong>.
              </p>
              <div style="padding: 16px; background: var(--color-cream); border-radius: var(--radius-md); font-size: 0.9rem; color: var(--color-olive-dark);">
                <strong>Cultural Note:</strong> ${tea.culturalNotes}
              </div>
            </div>

            <div class="detail-card-panel">
              <div class="label-caps">Heritage & Lore</div>
              <h3 class="panel-title" style="margin: 8px 0 16px 0;">The Story Behind the Leaf</h3>
              <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.7;">
                ${tea.story}
              </p>
            </div>
          </div>

          <!-- Photo Gallery -->
          ${tea.gallery && tea.gallery.length ? `
            <div style="margin-bottom: 60px;">
              <div class="label-caps" style="margin-bottom: 12px;">Visual Journey</div>
              <h3 style="font-family: var(--font-serif); font-size: 2rem; margin-bottom: 24px;">Tea Gallery</h3>
              <div class="detail-gallery-grid">
                ${tea.gallery.map(imgUrl => `
                  <div class="gallery-photo-frame">
                    <img src="${imgUrl}" alt="${tea.name}" class="gallery-photo-img" onerror="this.src='https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80'">
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Related Teas -->
          ${related.length ? `
            <div style="margin-top: 60px; padding-top: 40px; border-top: 1px solid var(--border-subtle);">
              <div class="label-caps" style="margin-bottom: 12px;">Explore Further</div>
              <h3 style="font-family: var(--font-serif); font-size: 2.2rem; margin-bottom: 32px;">You May Also Like</h3>
              <div class="tea-card-grid">
                ${related.map(r => renderTeaCardHtml(r)).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // 4. DEDICATED BREWING GUIDE PAGE & INTERACTIVE CALCULATOR
  function renderBrewingGuidePage(container) {
    container.innerHTML = `
      <div class="brewing-guide-page-container">
        <div class="container">
          <div class="section-header" style="text-align: left; max-width: 100%;">
            <div class="label-caps">Practical Brewing Science</div>
            <h1 class="section-title" style="font-size: 3.2rem;">The Master Brewing Guide</h1>
            <p class="section-subtitle">Master water chemistry, leaf ratios, precision temperatures, and interactive digital steeping.</p>
          </div>

          <!-- Interactive Ratio Calculator & Live Steeping Timer App -->
          <div class="calculator-app-wrapper">
            <div class="calculator-grid">
              <!-- Controls Column -->
              <div class="calc-controls-col">
                <div>
                  <div class="label-caps" style="color: var(--color-olive);">Preset Variety</div>
                  <h3 style="font-family: var(--font-serif); font-size: 1.8rem; margin: 4px 0 16px 0;">Select Your Tea Type</h3>
                  <div class="filter-pills-scroll" id="calc-presets-row">
                    <button class="filter-pill active" data-preset="green" data-grams="3" data-water="200" data-temp="80" data-time="120">Green Tea</button>
                    <button class="filter-pill" data-preset="black" data-grams="3" data-water="220" data-temp="98" data-time="240">Black Tea</button>
                    <button class="filter-pill" data-preset="oolong" data-grams="6" data-water="120" data-temp="95" data-time="30">Oolong (Gongfu)</button>
                    <button class="filter-pill" data-preset="white" data-grams="4" data-water="180" data-temp="85" data-time="270">White Tea</button>
                    <button class="filter-pill" data-preset="matcha" data-grams="2" data-water="75" data-temp="75" data-time="30">Matcha (Whisk)</button>
                    <button class="filter-pill" data-preset="herbal" data-grams="4" data-water="250" data-temp="100" data-time="360">Herbal Tisane</button>
                  </div>
                </div>

                <!-- Tea Amount Slider -->
                <div class="calc-control-group">
                  <div class="calc-label-row">
                    <span class="calc-label">Leaf Quantity</span>
                    <span id="calc-grams-val" class="calc-current-val">3.0 g</span>
                  </div>
                  <input type="range" id="calc-grams-slider" class="calc-range-slider" min="1" max="15" step="0.5" value="3">
                </div>

                <!-- Water Volume Slider -->
                <div class="calc-control-group">
                  <div class="calc-label-row">
                    <span class="calc-label">Water Volume</span>
                    <span id="calc-water-val" class="calc-current-val">200 ml</span>
                  </div>
                  <input type="range" id="calc-water-slider" class="calc-range-slider" min="50" max="600" step="25" value="200">
                </div>

                <!-- Temperature Slider -->
                <div class="calc-control-group">
                  <div class="calc-label-row">
                    <span class="calc-label">Water Temperature</span>
                    <span id="calc-temp-val" class="calc-current-val">80°C</span>
                  </div>
                  <input type="range" id="calc-temp-slider" class="calc-range-slider" min="50" max="100" step="1" value="80">
                </div>

                <!-- Steeping Duration Slider -->
                <div class="calc-control-group">
                  <div class="calc-label-row">
                    <span class="calc-label">Steep Duration</span>
                    <span id="calc-time-val" class="calc-current-val">2:00 min</span>
                  </div>
                  <input type="range" id="calc-time-slider" class="calc-range-slider" min="15" max="480" step="15" value="120">
                </div>
              </div>

              <!-- Live Digital Steeping Timer Dial -->
              <div class="timer-dial-panel">
                <div class="label-caps" style="margin-bottom: 16px;">Live Steeping Clock</div>
                
                <div class="timer-circle-wrapper">
                  <svg class="timer-svg" viewBox="0 0 200 200">
                    <circle class="timer-bg-circle" cx="100" cy="100" r="90"></circle>
                    <circle id="timer-progress-ring" class="timer-progress-circle" cx="100" cy="100" r="90"></circle>
                  </svg>
                  <div class="timer-display-inner">
                    <div id="timer-digits-text" class="timer-time-digits">02:00</div>
                    <div id="timer-status-badge" class="timer-status-label">Ready to Steep</div>
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

          <!-- Comprehensive Brewing Principles -->
          <div class="detail-split-grid">
            <div class="detail-card-panel">
              <h3 class="panel-title" style="margin-bottom: 12px;">Water Chemistry & Quality</h3>
              <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px;">
                Tea is 99% water. For optimal flavor clarity, use fresh, filtered spring water with a neutral pH (6.8–7.4) and low total dissolved solids (TDS 50–120 ppm). Avoid distilled water (lacks minerals to carry aroma) and hard tap water (creates chalky scum).
              </p>
              <div class="label-caps" style="color: var(--color-olive);">Golden Rule: Never re-boil standing water</div>
            </div>

            <div class="detail-card-panel">
              <h3 class="panel-title" style="margin-bottom: 12px;">Western vs. Gongfu Brewing</h3>
              <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px;">
                <strong>Western Style:</strong> Low leaf ratio (2–3g), large volume (250–350ml), long single infusion (3–5 min).<br>
                <strong>Gongfu Cha:</strong> High leaf ratio (6–8g), small volume (100–120ml), rapid sequential infusions (10–30 sec). Reveals unfolding flavor layers.
              </p>
              <div class="label-caps" style="color: var(--color-olive);">Best for: Wuyi Yancha, Tieguanyin, Pu-erh</div>
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

    const timerDigits = document.getElementById('timer-digits-text');
    const timerStatus = document.getElementById('timer-status-badge');
    const timerProgress = document.getElementById('timer-progress-ring');
    const startPauseBtn = document.getElementById('timer-start-pause-btn');
    const resetBtn = document.getElementById('timer-reset-btn');
    const add30Btn = document.getElementById('timer-add-30-btn');
    const presetsContainer = document.getElementById('calc-presets-row');

    function updateTimerDisplay() {
      const mins = Math.floor(State.timer.remainingSeconds / 60);
      const secs = State.timer.remainingSeconds % 60;
      if (timerDigits) {
        timerDigits.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }

      if (timerProgress) {
        const circumference = 2 * Math.PI * 90; // 565.48
        const progress = State.timer.remainingSeconds / State.timer.totalSeconds;
        const offset = circumference * (1 - progress);
        timerProgress.style.strokeDashoffset = isNaN(offset) ? 0 : offset;
      }
    }

    function setTimerSeconds(sec) {
      clearInterval(State.timer.interval);
      State.timer.isRunning = false;
      State.timer.totalSeconds = sec;
      State.timer.remainingSeconds = sec;
      if (timerStatus) timerStatus.textContent = 'Ready to Steep';
      if (startPauseBtn) startPauseBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Start Timer`;
      updateTimerDisplay();
    }

    if (gramsSlider) {
      gramsSlider.addEventListener('input', (e) => {
        if (gramsVal) gramsVal.textContent = `${parseFloat(e.target.value).toFixed(1)} g`;
      });
    }

    if (waterSlider) {
      waterSlider.addEventListener('input', (e) => {
        if (waterVal) waterVal.textContent = `${e.target.value} ml`;
      });
    }

    if (tempSlider) {
      tempSlider.addEventListener('input', (e) => {
        if (tempVal) tempVal.textContent = `${e.target.value}°C`;
      });
    }

    if (timeSlider) {
      timeSlider.addEventListener('input', (e) => {
        const sec = parseInt(e.target.value, 10);
        const mins = Math.floor(sec / 60);
        const remSec = sec % 60;
        if (timeVal) timeVal.textContent = `${mins}:${String(remSec).padStart(2, '0')} min`;
        setTimerSeconds(sec);
      });
    }

    // Presets
    if (presetsContainer) {
      presetsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-pill');
        if (!btn) return;
        presetsContainer.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const g = btn.getAttribute('data-grams');
        const w = btn.getAttribute('data-water');
        const t = btn.getAttribute('data-temp');
        const s = btn.getAttribute('data-time');

        if (gramsSlider) { gramsSlider.value = g; if (gramsVal) gramsVal.textContent = `${g} g`; }
        if (waterSlider) { waterSlider.value = w; if (waterVal) waterVal.textContent = `${w} ml`; }
        if (tempSlider) { tempSlider.value = t; if (tempVal) tempVal.textContent = `${t}°C`; }
        if (timeSlider) {
          timeSlider.value = s;
          const mins = Math.floor(s / 60);
          const remSec = s % 60;
          if (timeVal) timeVal.textContent = `${mins}:${String(remSec).padStart(2, '0')} min`;
        }
        setTimerSeconds(parseInt(s, 10));
      });
    }

    // Timer controls
    if (startPauseBtn) {
      startPauseBtn.addEventListener('click', () => {
        if (!State.timer.isRunning) {
          // Start / Resume
          if (State.timer.remainingSeconds <= 0) {
            State.timer.remainingSeconds = State.timer.totalSeconds;
          }
          State.timer.isRunning = true;
          if (timerStatus) timerStatus.textContent = 'Steeping in Progress...';
          startPauseBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> Pause`;

          State.timer.interval = setInterval(() => {
            State.timer.remainingSeconds--;
            updateTimerDisplay();

            if (State.timer.remainingSeconds <= 0) {
              clearInterval(State.timer.interval);
              State.timer.isRunning = false;
              if (timerStatus) timerStatus.textContent = '✨ Steeping Complete! Pour Now.';
              startPauseBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Start`;
              playBrewingChime();
            }
          }, 1000);
        } else {
          // Pause
          clearInterval(State.timer.interval);
          State.timer.isRunning = false;
          if (timerStatus) timerStatus.textContent = 'Paused';
          startPauseBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Resume`;
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        setTimerSeconds(State.timer.totalSeconds);
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

  // 5. TEA ORIGINS ATLAS VIEW
  function renderOriginsPage(container) {
    container.innerHTML = `
      <section class="section" style="padding-top: 40px;">
        <div class="container">
          <div class="section-header" style="text-align: left; max-width: 100%;">
            <div class="label-caps">Terroir & Geography</div>
            <h1 class="section-title" style="font-size: 3.2rem;">Tea Terroirs Around the World</h1>
            <p class="section-subtitle">Discover the microclimates, high-mountain mists, and historic origins shaping global tea culture.</p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr; gap: 32px;">
            ${TeaVerseData.origins.map(origin => `
              <div class="detail-card-panel" style="display: grid; grid-template-columns: 1fr; gap: 24px;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px;">
                  <div>
                    <span class="label-caps">${origin.nativeName}</span>
                    <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--color-charcoal);">${origin.country}</h2>
                  </div>
                  <a href="#/explore?country=${encodeURIComponent(origin.country)}" class="btn btn-secondary btn-sm">Explore ${origin.country} Teas →</a>
                </div>

                <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
                  <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.7;">
                    ${origin.description}
                  </p>
                  
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; background: var(--color-canvas); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                    <div>
                      <div class="label-caps" style="margin-bottom: 4px;">Key Cultivation Regions</div>
                      <div style="font-weight: 600; color: var(--color-charcoal);">${origin.regions.join(' · ')}</div>
                    </div>
                    <div>
                      <div class="label-caps" style="margin-bottom: 4px;">Climate & Terroir</div>
                      <div style="font-weight: 500; color: var(--text-secondary);">${origin.climate}</div>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  // 6. CLASSIFICATION & BOTANY VIEW
  function renderClassificationPage(container) {
    container.innerHTML = `
      <section class="section" style="padding-top: 40px;">
        <div class="container">
          <div class="section-header" style="text-align: left; max-width: 100%;">
            <div class="label-caps">Botanical Education</div>
            <h1 class="section-title" style="font-size: 3.2rem;">Understanding True Tea vs. Tisanes</h1>
            <p class="section-subtitle">A clear scientific and cultural guide to botanical taxonomy, oxidation levels, and raw plant materials.</p>
          </div>

          <div class="detail-split-grid">
            <div class="detail-card-panel" style="border-left: 4px solid var(--color-olive);">
              <div class="label-caps">The Sacred Camellia</div>
              <h2 style="font-family: var(--font-serif); font-size: 2.2rem; margin: 8px 0 16px 0;">Camellia Sinensis (True Tea)</h2>
              <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px;">
                Every genuine cup of green, white, yellow, oolong, black, and pu-erh tea comes from the evergreen shrub <em>Camellia sinensis</em>. The two primary botanical varieties are:
              </p>
              <ul style="margin-bottom: 20px;">
                <li class="checklist-item"><strong>Camellia sinensis var. sinensis:</strong> Small-leaf variety native to central and southern China, cold-hardy, creating delicate floral and sweet green, white, and rock oolong teas.</li>
                <li class="checklist-item"><strong>Camellia sinensis var. assamica:</strong> Large-leaf variety indigenous to the tropical Assam river valleys and Yunnan, producing rich, malty black and deep fermented pu-erh teas.</li>
              </ul>
            </div>

            <div class="detail-card-panel" style="border-left: 4px solid var(--color-amber);">
              <div class="label-caps">Botanicals & Tisanes</div>
              <h2 style="font-family: var(--font-serif); font-size: 2.2rem; margin: 8px 0 16px 0;">Herbal & Botanical Infusions</h2>
              <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px;">
                Herbal teas (properly referred to as <em>Tisanes</em>) do not contain Camellia sinensis leaves and are naturally caffeine-free:
              </p>
              <ul>
                <li class="checklist-item"><strong>Flowers:</strong> Chamomile, Hibiscus (Karkadeh), Lavender, Chrysanthemum.</li>
                <li class="checklist-item"><strong>Roots & Barks:</strong> Fresh Ginger rhizome, True Ceylon Cinnamon quills, Turmeric root.</li>
                <li class="checklist-item"><strong>Seeds & Spices:</strong> Whole Zanzibar Cloves, Green Cardamom pods.</li>
                <li class="checklist-item"><strong>Endemic Shrubs:</strong> South African Rooibos and Honeybush.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // 7. ABOUT TEA-VERSE VIEW
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
              Whether learning how to whisk ceremonial matcha in Kyoto, decocting spiced stovetop masala chai in Kolkata, or practicing Gongfu rock oolong steeping, TeaVerse provides exact ratios, water temperatures, and historical context for every cup.
            </p>
          </div>

          <div class="detail-card-panel" style="background: var(--color-cream); margin-bottom: 32px;">
            <h3 class="panel-title" style="margin-bottom: 16px;">Educational Accuracy & Standards</h3>
            <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7;">
              TeaVerse does not invent traditional teas or make medical claims. We clearly distinguish authentic <em>Camellia sinensis</em> true teas from herbal tisanes. All brewing parameters are based on time-tested tea master standards.
            </p>
          </div>

          <!-- Project Authors & Credits -->
          <div class="detail-card-panel" style="border: 1.5px solid var(--color-sage);">
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

  // 8. 404 NOT FOUND
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

  // --- Helper: Render Tea Card HTML ---
  function renderTeaCardHtml(tea) {
    return `
      <a href="#/tea/${tea.slug}" class="tea-card">
        <div class="tea-card-media">
          <img src="${tea.heroImage}" alt="${tea.name}" class="tea-card-img" onerror="this.src='https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80'">
          <div class="tea-card-category-badge">${tea.category}</div>
          <div class="tea-card-origin-badge">${tea.origin.country}</div>
        </div>
        <div class="tea-card-body">
          <div>
            <div class="tea-card-header">
              <div class="tea-card-native-name">${tea.nativeName}</div>
              <h3 class="tea-card-title">${tea.name}</h3>
            </div>
            <p class="tea-card-desc">${tea.description}</p>
            <div class="tea-card-flavor-tags">
              ${tea.flavorProfile.primary.slice(0, 3).map(f => `<span class="flavor-tag">${f}</span>`).join('')}
            </div>
          </div>
          <div class="tea-card-footer">
            <span>${tea.brewingDetails.temperature.split('(')[0]} · ${tea.brewingTime}</span>
            <span class="tea-card-link-text">
              View Guide
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </div>
        </div>
      </a>
    `;
  }

  // --- Randomizer Modal ("Surprise Me") ---
  function triggerTeaRandomizer() {
    const randomIndex = Math.floor(Math.random() * TeaVerseData.teas.length);
    const randomTea = TeaVerseData.teas[randomIndex];

    let modal = document.getElementById('random-tea-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'random-tea-modal';
      modal.className = 'modal-overlay';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <div class="modal-title">✨ Tea Recommendation for You</div>
          <button id="modal-close-btn" class="modal-close-btn">✕</button>
        </div>
        <div class="modal-body">
          <div style="border-radius: var(--radius-lg); overflow: hidden; aspect-ratio: 16/9; margin-bottom: 20px;">
            <img src="${randomTea.heroImage}" alt="${randomTea.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80'">
          </div>
          <div class="label-caps">${randomTea.origin.country} · ${randomTea.type}</div>
          <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--color-charcoal); margin: 4px 0 12px 0;">${randomTea.name}</h2>
          <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">${randomTea.description}</p>
          
          <div class="tea-card-flavor-tags" style="margin-bottom: 24px;">
            ${randomTea.flavorProfile.primary.map(f => `<span class="flavor-tag">${f}</span>`).join('')}
          </div>

          <div style="display: flex; gap: 12px; justify-content: flex-end;">
            <button id="modal-reroll-btn" class="btn btn-secondary btn-sm">Roll Again ↻</button>
            <a href="#/tea/${randomTea.slug}" id="modal-view-tea-btn" class="btn btn-primary btn-sm">Explore Guide →</a>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('is-active');

    document.getElementById('modal-close-btn').addEventListener('click', () => {
      modal.classList.remove('is-active');
    });

    document.getElementById('modal-reroll-btn').addEventListener('click', () => {
      triggerTeaRandomizer();
    });

    document.getElementById('modal-view-tea-btn').addEventListener('click', () => {
      modal.classList.remove('is-active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('is-active');
    });
  }

  // --- Initialize App ---
  function init() {
    // Hash routing
    window.addEventListener('hashchange', handleRouting);
    handleRouting();

    // Sticky header shadow
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.site-header');
      if (header) {
        if (window.scrollY > 20) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }
      }
    });

    // Mobile Navigation Drawer Toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    const drawerBackdrop = document.getElementById('drawer-backdrop');
    const drawerClose = document.getElementById('drawer-close-btn');

    function toggleDrawer(open) {
      if (mobileDrawer) mobileDrawer.classList.toggle('is-open', open);
      if (drawerBackdrop) drawerBackdrop.classList.toggle('is-open', open);
    }

    if (mobileToggle) mobileToggle.addEventListener('click', () => toggleDrawer(true));
    if (drawerClose) drawerClose.addEventListener('click', () => toggleDrawer(false));
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', () => toggleDrawer(false));

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => toggleDrawer(false));
    });

    // Header Quick Search Button
    const headerSearchBtn = document.getElementById('header-search-trigger');
    if (headerSearchBtn) {
      headerSearchBtn.addEventListener('click', () => {
        window.location.hash = '#/explore';
        setTimeout(() => {
          const input = document.getElementById('catalog-search-input');
          if (input) input.focus();
        }, 150);
      });
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
