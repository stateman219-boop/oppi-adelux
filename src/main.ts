
import './styles.css';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  color: string;
  image: string;
  note: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'The Form Coat',
    category: 'Outerwear',
    price: 285000,
    color: 'Espresso',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=900&q=85',
    note: 'A considered silhouette in a rich, tactile finish.',
  },
  {
    id: 2,
    name: 'The Everyday Knit',
    category: 'Knitwear',
    price: 98000,
    color: 'Oat',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=85',
    note: 'Soft structure. Designed to be worn on repeat.',
  },
  {
    id: 3,
    name: 'The Tailored Trouser',
    category: 'Tailoring',
    price: 125000,
    color: 'Charcoal',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85',
    note: 'An easy, precise line with room to move.',
  },
  {
    id: 4,
    name: 'The Studio Shirt',
    category: 'Essentials',
    price: 72000,
    color: 'Ivory',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85',
    note: 'Quietly distinctive, from morning through evening.',
  },
  {
    id: 5,
    name: 'The Weekend Jacket',
    category: 'Outerwear',
    price: 198000,
    color: 'Stone',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85',
    note: 'Relaxed utility refined by proportion.',
  },
  {
    id: 6,
    name: 'The Soft Layer',
    category: 'Knitwear',
    price: 89000,
    color: 'Black',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=85',
    note: 'A clean layer with an understated presence.',
  },
];

const money = (amount: number) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);

let activeCategory = 'All pieces';
let searchTerm = '';
let bag: { product: Product; quantity: number }[] = [];
let bagOpen = false;
let menuOpen = false;

const app = document.querySelector<HTMLDivElement>('#app')!;

function productCard(product: Product) {
  return `
    <article class="product-card">
      <button class="product-image"
        data-view="${product.id}"
        aria-label="Add ${product.name} to bag">
        <img src="${product.image}"
          alt="${product.name}" loading="lazy">
        <span class="image-label">
          ADELUX / OBJECT ${String(product.id).padStart(2, '0')}
        </span>
        <span class="quick-add">
          Quick add
        </span>
      </button>

      <div class="product-meta">
        <div>
          <p class="product-name">${product.name}</p>
          <p class="product-color">${product.color} · Unisex</p>
        </div>
        <p class="price">${money(product.price)}</p>
      </div>
    </article>`;
}

function render() {
  const categories = [
    'All pieces',
    'Outerwear',
    'Tailoring',
    'Knitwear',
    'Essentials',
  ];

  const shown = products.filter(product =>
    (activeCategory === 'All pieces' ||
      product.category === activeCategory) &&
    (
      product.name + ' ' +
      product.category + ' ' +
      product.color
    ).toLowerCase().includes(searchTerm.toLowerCase())
  );

  app.innerHTML = `
    <div class="announcement">
      A considered wardrobe, made for every day.
    </div>

    <header class="site-header">
      <button class="menu-trigger" id="menu-trigger"
        aria-label="Open menu" aria-expanded="${menuOpen}" aria-controls="menu-drawer">
        <span></span><span></span>
      </button>

      <nav class="desktop-nav">
        <a href="#collection">Shop</a>
        <a href="#story">Our point of view</a>
      </nav>

      <a class="wordmark brand-cycle" href="#" aria-label="ADELUX Collections and Oppi Graphics">
        <span class="brand-name is-active" data-brand="adelux">ADELUX <small>COLLECTIONS</small></span>
        <span class="brand-name" data-brand="oppi">OPPI <small>GRAPHICS</small></span>
      </a>

      <div class="header-actions">
        <button id="search-toggle" class="text-action">
          Search
        </button>
        <button id="bag-toggle" class="bag-button">
          Bag
          <span class="bag-count">
            ${bag.reduce((total, item) =>
              total + item.quantity, 0)}
          </span>
        </button>
      </div>
    </header>

    <div class="menu-backdrop ${menuOpen ? 'is-open' : ''}" id="menu-backdrop" aria-hidden="${!menuOpen}"></div>
    <aside class="menu-drawer ${menuOpen ? 'is-open' : ''}" id="menu-drawer" aria-hidden="${!menuOpen}">
      <div class="drawer-head">
        <a class="wordmark" href="#">ADELUX <span>COLLECTIONS</span></a>
        <button id="menu-close" class="drawer-close" aria-label="Close menu">Close</button>
      </div>
      <nav class="drawer-nav" aria-label="Main menu">
        <a href="#collection" data-menu-link>Shop the collection</a>
        <a href="#story" data-menu-link>Our point of view</a>
        <button id="drawer-search">Search the collection</button>
        <button id="drawer-bag">Shopping bag <span>${bag.reduce((total, item) => total + item.quantity, 0)}</span></button>
      </nav>
      <p class="drawer-note">Unleash your elegance.<br>Designed for everyone. Made to stay.</p>
    </aside>

    <div class="search-row" id="search-row">
      <label for="site-search">SEARCH THE COLLECTION</label>
      <input id="site-search"
        placeholder="Try coat or knitwear"
        value="${searchTerm.replace(/"/g, '&quot;')}">
      <button id="clear-search" aria-label="Clear search">Clear</button>
    </div>

    <main>
      <section class="hero">
        <img class="hero-image"
          src="https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/adelux-hero.png"
          alt="ADELUX fashion editorial">

        <div class="hero-shade"></div>

        <div class="hero-topline">
          <span>COLLECTION 01 — THE PERMANENT WARDROBE</span>
          <span>DESIGNED TO OUTLAST THE MOMENT</span>
        </div>

        <div class="hero-copy">
          <p class="eyebrow">A STUDY IN SIMPLICITY</p>
          <h1>Fresh Looks.<br><em>Bold Energy.</em></h1>
          <p class="hero-description">
            Pieces that find their place in your life.<br>
            Designed for everyone. Made to stay.
          </p>
          <a class="light-link" href="#collection">
            Discover the collection
          </a>
        </div>
      </section>

      <section class="intro-strip" id="story">
        <p class="eyebrow">THE ADELUX PERSPECTIVE</p>
        <p class="intro-statement">
          A wardrobe is not built in a season.<br>
          It is <em>collected over time.</em>
        </p>
        <p class="intro-note">
          Thoughtful proportions. Honest textures.
          A shared language of dressing, beyond labels and seasons.
        </p>
      </section>

      <section class="collection-section" id="collection">
        <div class="section-heading">
          <div>
            <p class="eyebrow">THE CURRENT EDIT</p>
            <h2>AVAILABLE <em>PRODUCTS</em></h2>
          </div>
          <p class="section-aside">
            Objects for the everyday,<br>made with intention.
          </p>
        </div>

        <div class="collection-tools">
          <div class="category-tabs">
            ${categories.map(category => `
              <button
                class="category-tab ${
                  activeCategory === category ? 'active' : ''
                }"
                data-category="${category}">
                ${category}
              </button>
            `).join('')}
          </div>
          <span class="result-count">${shown.length} PIECES</span>
        </div>

        <div class="product-grid">
          ${shown.length
            ? shown.map(productCard).join('')
            : '<p class="no-results">Nothing in this edit yet.</p>'}
        </div>
      </section>

      <section class="campaign">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=85"
          alt="ADELUX campaign">
        <div class="campaign-overlay">
          <p class="eyebrow">BEYOND THE SEASON</p>
          <h2>Wear what<br><em>remains.</em></h2>
          <a class="light-link" href="#collection">
            Explore the edit
          </a>
        </div>
      </section>

      <section class="values">
        <div>
          <span class="value-number">01</span>
          <h3>Intentional by design</h3>
          <p>Every detail has a purpose.</p>
        </div>
        <div>
          <span class="value-number">02</span>
          <h3>Made to be lived in</h3>
          <p>Comfort, character and versatility.</p>
        </div>
        <div>
          <span class="value-number">03</span>
          <h3>Beyond the binary</h3>
          <p>Clothing for everyone.</p>
        </div>
      </section>
    </main>

    <footer class="footer">
      <a class="wordmark" href="#">
        ADELUX <span>COLLECTIONS</span>
      </a>
      <p>Unleash your elegance.</p>
      <span>© ADELUX COLLECTIONS 2026</span>
    </footer>

    <div class="cart-backdrop ${bagOpen ? 'is-open' : ''}" id="cart-backdrop" aria-hidden="${!bagOpen}"></div>
    <aside class="cart-drawer ${bagOpen ? 'is-open' : ''}" id="cart-drawer" aria-hidden="${!bagOpen}" aria-label="Shopping cart">
      <div class="cart-head"><div><p class="eyebrow">YOUR SELECTION</p><h2>Shopping cart <span>(${bag.reduce((n, item) => n + item.quantity, 0)})</span></h2></div><button id="cart-close" aria-label="Close cart">Close</button></div>
      <div class="cart-items">${bag.length ? bag.map(({product, quantity}) => `<article class="cart-item"><img src="${product.image}" alt="${product.name}"><div class="cart-item-info"><p class="cart-item-name">${product.name}</p><p class="cart-item-color">${product.color}</p><p class="cart-item-price">${money(product.price)}</p><div class="cart-quantity"><button data-qty="${product.id}" data-change="-1" aria-label="Decrease quantity">Decrease</button><span>${quantity}</span><button data-qty="${product.id}" data-change="1" aria-label="Increase quantity">Increase</button><button class="cart-remove" data-remove="${product.id}">Remove</button></div></div></article>`).join('') : '<p class="cart-empty">Your cart is empty.<br>Find something considered.</p>'}</div>
      <div class="cart-foot"><div class="cart-subtotal"><span>Subtotal</span><strong>${money(bag.reduce((sum, item) => sum + item.product.price * item.quantity, 0))}</strong></div><p>Shipping and taxes calculated at checkout.</p><button class="cart-checkout" id="cart-checkout" ${bag.length ? '' : 'disabled'}>Continue to checkout</button></div>
    </aside>
    <div class="toast" id="toast" role="status"></div>
  `;

  bindEvents();
}

function setCartOpen(open: boolean) {
  bagOpen = open;
  document.querySelector('#cart-drawer')?.classList.toggle('is-open', open);
  document.querySelector('#cart-backdrop')?.classList.toggle('is-open', open);
  document.querySelector('#cart-drawer')?.setAttribute('aria-hidden', String(!open));
  document.querySelector('#cart-backdrop')?.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('cart-open', open);
}

function setMenuOpen(open: boolean) {
  menuOpen = open;
  document.querySelector("#menu-drawer")?.classList.toggle("is-open", open);
  document.querySelector("#menu-backdrop")?.classList.toggle("is-open", open);
  document.querySelector("#menu-drawer")?.setAttribute("aria-hidden", String(!open));
  document.querySelector("#menu-backdrop")?.setAttribute("aria-hidden", String(!open));
  document.querySelector("#menu-trigger")?.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
}

function addToBag(id: number) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  const existing = bag.find(item => item.product.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    bag.push({ product, quantity: 1 });
  }

  render();
  showToast(`${product.name} added to your bag`);
}

function showToast(message: string) {
  const toast = document.querySelector<HTMLDivElement>('#toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  window.setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function bindEvents() {
  document.querySelectorAll<HTMLButtonElement>('[data-category]')
    .forEach(button => {
      button.addEventListener('click', () => {
        activeCategory = button.dataset.category || 'All pieces';
        render();
      });
    });

  document.querySelectorAll<HTMLButtonElement>('[data-view]')
    .forEach(button => {
      button.addEventListener('click', () => {
        addToBag(Number(button.dataset.view));
      });
    });

  document.querySelector('#search-toggle')
    ?.addEventListener('click', () => {
      document.querySelector('#search-row')
        ?.classList.toggle('is-visible');
      document.querySelector<HTMLInputElement>('#site-search')?.focus();
    });

  document.querySelector<HTMLInputElement>('#site-search')
    ?.addEventListener('input', event => {
      searchTerm = (event.target as HTMLInputElement).value;
      render();

      const input = document.querySelector<HTMLInputElement>('#site-search');
      if (input) {
        input.focus();
        input.setSelectionRange(searchTerm.length, searchTerm.length);
      }
    });

  document.querySelector('#clear-search')
    ?.addEventListener('click', () => {
      searchTerm = '';
      render();
    });

  document.querySelector('#bag-toggle')
    ?.addEventListener('click', () => {
      setCartOpen(true);
    });

  document.querySelector('#menu-trigger')
    ?.addEventListener('click', () => setMenuOpen(!menuOpen));

  document.querySelector('#menu-close')?.addEventListener('click', () => setMenuOpen(false));
  document.querySelector('#menu-backdrop')?.addEventListener('click', () => setMenuOpen(false));
  document.querySelectorAll<HTMLAnchorElement>('[data-menu-link]')
    .forEach(link => link.addEventListener('click', () => setMenuOpen(false)));

  document.querySelector('#drawer-search')?.addEventListener('click', () => {
    setMenuOpen(false);
    document.querySelector('#search-row')?.classList.add('is-visible');
    document.querySelector<HTMLInputElement>('#site-search')?.focus();
  });

  document.querySelector('#drawer-bag')?.addEventListener('click', () => { setMenuOpen(false); setCartOpen(true); });
  document.querySelector('#cart-close')?.addEventListener('click', () => setCartOpen(false));
  document.querySelector('#cart-backdrop')?.addEventListener('click', () => setCartOpen(false));
  document.querySelectorAll<HTMLButtonElement>('[data-qty]').forEach(button => button.addEventListener('click', () => {
    const item = bag.find(entry => entry.product.id === Number(button.dataset.qty)); if (!item) return;
    item.quantity += Number(button.dataset.change);
    if (item.quantity <= 0) bag = bag.filter(entry => entry.product.id !== item.product.id);
    render(); setCartOpen(true);
  }));
  document.querySelectorAll<HTMLButtonElement>('[data-remove]').forEach(button => button.addEventListener('click', () => {
    bag = bag.filter(entry => entry.product.id !== Number(button.dataset.remove)); render(); setCartOpen(true);
  }));
  document.querySelector('#cart-checkout')?.addEventListener('click', () => showToast('Checkout is not connected yet'));
}

render();

