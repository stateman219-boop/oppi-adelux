
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
  { id: 1, name: 'Shirts & Tops', category: 'Shirts & Tops', price: 5000, color: 'Unisex', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85', note: 'Everyday shirts and tops.' },
  { id: 2, name: 'Baggy Jeans', category: 'Denim', price: 12000, color: 'Unisex', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85', note: 'Relaxed denim styles.' },
  { id: 3, name: 'Jerseys', category: 'Sportswear', price: 8000, color: 'Unisex', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85', note: 'Sport-inspired everyday wear.' },
  { id: 4, name: 'Joggers & Hoodies', category: 'Casualwear', price: 15000, color: 'Unisex', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85', note: 'Comfortable casual pieces.' },
  { id: 26, name: 'Dress Design 01', category: 'Dresses', price: 18000, color: 'For her', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images%202/IMG_5821.jpeg', note: 'ADELUX dress collection.' },
  { id: 27, name: 'Dress Design 02', category: 'Dresses', price: 18000, color: 'For her', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images%202/IMG_5822.jpeg', note: 'ADELUX dress collection.' },
  { id: 28, name: 'Dress Design 03', category: 'Dresses', price: 18000, color: 'For her', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images%202/IMG_5823.jpeg', note: 'ADELUX dress collection.' },
  { id: 29, name: 'Dress Design 04', category: 'Dresses', price: 18000, color: 'For her', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images%202/IMG_5824.jpeg', note: 'ADELUX dress collection.' },
  { id: 30, name: 'Dress Design 05', category: 'Dresses', price: 18000, color: 'For her', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images%202/IMG_5825.jpeg', note: 'ADELUX dress collection.' },
  { id: 31, name: 'Dress Design 06', category: 'Dresses', price: 18000, color: 'For her', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images%202/IMG_5826.jpeg', note: 'ADELUX dress collection.' },
  { id: 32, name: 'Dress Design 07', category: 'Dresses', price: 18000, color: 'For her', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images%202/IMG_5827.jpeg', note: 'ADELUX dress collection.' },
  { id: 33, name: 'Dress Design 08', category: 'Dresses', price: 18000, color: 'For her', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images%202/IMG_5828.jpeg', note: 'ADELUX dress collection.' },
  { id: 34, name: 'Dress Design 09', category: 'Dresses', price: 18000, color: 'For her', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images%202/IMG_5829.jpeg', note: 'ADELUX dress collection.' },
  { id: 35, name: 'Dress Design 10', category: 'Dresses', price: 18000, color: 'For her', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images%202/IMG_5830.jpeg', note: 'ADELUX dress collection.' },
  { id: 36, name: 'Dress Design 11', category: 'Dresses', price: 18000, color: 'For her', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images%202/IMG_5831.jpeg', note: 'ADELUX dress collection.' },
  { id: 6, name: 'Shoes, Bags & Jewelry', category: 'Accessories', price: 10000, color: 'Accessories', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85', note: 'Accessories to complete your look.' },
  { id: 7, name: 'Agbada Design 01', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5799.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 8, name: 'Agbada Design 02', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5800.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 9, name: 'Agbada Design 03', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5801.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 10, name: 'Agbada Design 04', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5802.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 11, name: 'Agbada Design 05', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5803.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 12, name: 'Agbada Design 06', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5804.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 13, name: 'Agbada Design 07', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5805.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 14, name: 'Agbada Design 08', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5806.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 15, name: 'Agbada Design 09', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5807.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 16, name: 'Agbada Design 10', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5808.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 17, name: 'Agbada Design 11', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5809.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 18, name: 'Agbada Design 12', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5810.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 19, name: 'Agbada Design 13', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5811.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 20, name: 'Agbada Design 14', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5812.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 21, name: 'Agbada Design 15', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5813.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 22, name: 'Agbada Design 16', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5814.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 23, name: 'Agbada Design 17', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5815.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 24, name: 'Agbada Design 18', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5816.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 25, name: 'Agbada Design 19', category: 'Traditional Wear', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5817.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
];

const visibleCategories = ['Shirts & Tops', 'Sportswear', 'Dresses', 'Traditional Wear'];

const money = (amount: number) => amount === 0 ? 'Contact for price' : new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount);

let activeCategory = 'All pieces';
let searchTerm = '';
let searchOpen = false;
type BagLine = { lineId: number; product: Product; quantity: number };
function loadSavedBag(): BagLine[] {
  try {
    const saved = JSON.parse(localStorage.getItem('adelux-bag-v1') || '[]') as { productId: number; quantity: number; lineId: number }[];
    return saved.flatMap(line => {
      const product = products.find(item => item.id === line.productId);
      return product && Number.isFinite(line.quantity) && line.quantity > 0
        ? [{ lineId: line.lineId || line.productId, product, quantity: Math.floor(line.quantity) }]
        : [];
    });
  } catch { return []; }
}
let bag: BagLine[] = loadSavedBag();
let bagOpen = false;
let menuOpen = false;
let shopCategoriesOpen = false;

const app = document.querySelector<HTMLDivElement>('#app')!;

function productCard(product: Product, preview = false) {
  const action = preview
    ? `data-view-more="${product.category}" aria-label="View more ${product.category}"`
    : `data-add="${product.id}" aria-label="Add ${product.name} to cart"`;
  return `
    <article class="product-card ${preview ? "product-card-preview" : ""}" ${preview ? `data-open-category="${product.category}" tabindex="0" role="link" aria-label="Open the full ${product.category} collection"` : ""}>
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="image-label">ADELUX / OBJECT ${String(product.id).padStart(2, '0')}</span>
        ${preview
          ? `<button class="quick-add" ${action}>VIEW MORE</button>`
          : `<button class="quick-add" ${action}>ADD TO CART <span>＋</span></button>`}
      </div>
      <div class="product-meta">
        <div><p class="product-name">${product.name}</p>${product.category === 'Dresses' ? '' : `<p class="product-color">${product.color} · Unisex</p>`}</div>
        <p class="price">${money(product.price)}</p>
      </div>
    </article>`;
}

function categoryPageMarkup(category: string) {
  const categoryProducts = products.filter(product => product.category === category);
  return `
    <section class="category-page">
      <div class="category-page-top">
        <a class="category-back" href="/adelux/">BACK TO ADELUX</a>
        <p class="eyebrow">THE ADELUX EDIT</p>
        <h1>${category}</h1>
        <p class="category-page-intro">Explore every piece in this collection. Select your favourites and add them to your bag.</p>
        <span class="category-page-count">${categoryProducts.length} ${categoryProducts.length === 1 ? 'PIECE' : 'PIECES'}</span>
      </div>
      <div class="product-grid category-page-grid">
        ${categoryProducts.map(product => productCard(product)).join('')}
      </div>
    </section>`;
}

function mainContentMarkup() {
  const requestedSlug = new URLSearchParams(window.location.search).get('category');
  const category = products.map(product => product.category).find(name =>
    name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === requestedSlug
  );
  return category ? categoryPageMarkup(category) : `
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
            Unisex styles for all ages.<br>
            Elevate your style with pieces you love.
          </p>
          <a class="light-link" href="#collection">
            Discover the collection
          </a>
        </div>
      </section>

      <section class="intro-strip" id="story">
        <p class="eyebrow">THE ADELUX PERSPECTIVE</p>
        <p class="intro-statement">
          Unleash your elegance.<br>
          <em>Elevate your style.</em>
        </p>
        <p class="intro-note">
          Premium quality, effortless comfort and styles you'll love every day.
        </p>
      </section>

      <section class="collection-section" id="collection">
        <div class="section-heading">
          <div><p class="eyebrow">THE CURRENT EDIT</p><h2>AVAILABLE <em>PRODUCTS</em></h2></div>
          <p class="section-aside">Explore each collection.<br>Choose your favourites from the full edit.</p>
        </div>
        <div class="collection-tools">
          <div class="category-tabs">
            ${['All pieces', ...visibleCategories].map(category => `
              <button class="category-tab ${activeCategory === category ? 'active' : ''}" data-category="${category}">${category}</button>
            `).join('')}
          </div>
          <span class="result-count">${products.filter(product => visibleCategories.includes(product.category) && (activeCategory === 'All pieces' || product.category === activeCategory) && (product.name + ' ' + product.category + ' ' + product.color + ' ' + product.note).toLowerCase().includes(searchTerm.toLowerCase())).length} PIECES</span>
        </div>
        <div class="product-grid overview-grid">
          ${[...new Map(products.filter(product =>
            visibleCategories.includes(product.category) &&
            (activeCategory === 'All pieces' || product.category === activeCategory) &&
            (product.name + ' ' + product.category + ' ' + product.color + ' ' + product.note).toLowerCase().includes(searchTerm.toLowerCase())
          ).map(product => [product.category, product])).values()].map(product => productCard(product, true)).join('') ||
            '<p class="no-results">No collections match your search.</p>'}
        </div>
      </section>

      <section class="campaign">
        <img
          src="https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/SECOND%20FRAME.png"
          alt="ADELUX campaign">
        <div class="campaign-overlay">
          <p class="eyebrow campaign-eyebrow">BEYOND THE SEASON</p>
          <h2 class="campaign-heading">Wear what<br><em>remains.</em></h2>
          <a class="light-link campaign-link" href="#collection">
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
`;
}

function render() {
  const categories = ['All pieces', ...visibleCategories];

  const shown = products.filter(product =>
    visibleCategories.includes(product.category) &&
    (activeCategory === 'All pieces' ||
      product.category === activeCategory) &&
    (
      product.name + ' ' +
      product.category + ' ' +
      product.color + ' ' + product.note
    ).toLowerCase().includes(searchTerm.toLowerCase())
  );

  app.innerHTML = `
    <div class="announcement">
      ADELUX COLLECTIONS · UNLEASH YOUR ELEGANCE
    </div>

    <header class="site-header">
      <button class="menu-trigger" id="menu-trigger"
        aria-label="Open menu" aria-expanded="${menuOpen}" aria-controls="menu-drawer">
        <span></span><span></span>
      </button>

      <nav class="desktop-nav">
        <a href="/adelux/">Shop</a>
        <a href="/adelux/#story">Our point of view</a>
      </nav>

      <div class="wordmark brand-cycle" aria-label="ADELUX Collections and Oppi Graphics">
        <a class="brand-name is-active" data-brand="adelux" href="/adelux/" aria-label="ADELUX Collections"><img src="/adelux-logo.png.png" alt="ADELUX Collections" class="brand-logo brand-logo-adelux"></a>
        <a class="brand-name" data-brand="oppi" href="/" aria-label="OPPIGRAPHIX"><img src="/oppi-logo.png.png" alt="OPPIGRAPHIX" class="brand-logo brand-logo-oppi"></a>
      </div>

      <div class="header-actions">
        <button id="account-toggle" class="text-action">Sign up / Sign in</button>
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
        <button id="shop-collection-toggle" class="shop-collection-toggle" aria-expanded="${shopCategoriesOpen}" aria-controls="shop-subcategories">Shop our collection <span class="shop-chevron">${shopCategoriesOpen ? '−' : '＋'}</span></button>
        <div class="drawer-subcategories ${shopCategoriesOpen ? 'is-open' : ''}" id="shop-subcategories" aria-label="Shop categories" ${shopCategoriesOpen ? '' : 'hidden'}>
          <button data-shop-category="Shirts & Tops">Shirts &amp; tops</button>
          <button data-shop-category="Sportswear">Jerseys</button>
          <button data-shop-category="Dresses">Dresses</button>
          <button data-shop-category="Traditional Wear">Agbada designs</button>
        </div>
        <a href="/adelux/#story" data-menu-link>Our point of view</a>
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
${mainContentMarkup()}
    </main>


    <footer class="footer">
      <a class="wordmark" href="#">
        ADELUX <span>COLLECTIONS</span>
      </a>
      <p>Unleash your elegance. · @adeluxcollections<br><a href="https://wa.me/2348184952775">+234 907 374 0692</a> · <a href="https://wa.me/2348184952775">+234 816 708 7184</a></p>
      <span>@adeluxcollections · 2026</span>
    </footer>

    <div class="cart-backdrop ${bagOpen ? 'is-open' : ''}" id="cart-backdrop" aria-hidden="${!bagOpen}"></div>
    <aside class="cart-drawer ${bagOpen ? 'is-open' : ''}" id="cart-drawer" aria-hidden="${!bagOpen}" aria-label="Shopping cart">
      <div class="cart-head"><div><p class="eyebrow">YOUR SELECTION</p><h2>Shopping cart <span>(${bag.reduce((n, item) => n + item.quantity, 0)})</span></h2></div><button id="cart-close" aria-label="Close cart">Close</button></div>
      <div class="cart-items">${bag.length ? bag.map(({lineId, product, quantity}) => `<article class="cart-item"><img src="${product.image}" alt="${product.name}"><div class="cart-item-info"><p class="cart-item-name">${product.name}</p><p class="cart-item-color">${product.color}</p><p class="cart-item-price">${money(product.price)}</p><div class="cart-quantity"><button data-qty="${lineId}" data-change="-1" aria-label="Decrease quantity">Decrease</button><span>${quantity}</span><button data-qty="${lineId}" data-change="1" aria-label="Increase quantity">Increase</button><button class="cart-remove" data-remove="${lineId}">Remove</button></div></div></article>`).join('') : '<p class="cart-empty">Your cart is empty.<br>Find something considered.</p>'}</div>
      <div class="cart-foot"><div class="cart-subtotal"><span>Subtotal</span><strong>${money(bag.reduce((sum, item) => sum + item.product.price * item.quantity, 0))}</strong></div><p>Enter your email at checkout. Payment will be processed securely by Paystack.</p><button class="cart-checkout" id="cart-checkout" ${bag.length ? '' : 'disabled'}>Proceed to payment</button></div>
    </aside>
    <a class="whatsapp-float" href="https://wa.me/2348184952775?text=Hello%20ADELUX%2C%20I%20would%20like%20more%20information%20about%20your%20collection." target="_blank" rel="noopener noreferrer" aria-label="Chat with ADELUX on WhatsApp for more information" title="Chat with us on WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16.02 3C8.86 3 3.04 8.78 3.04 15.9c0 2.27.6 4.49 1.75 6.45L3 29l6.85-1.78a13.1 13.1 0 0 0 6.17 1.55h.01c7.16 0 12.98-5.78 12.98-12.9A12.82 12.82 0 0 0 16.02 3Zm0 23.58h-.01a10.9 10.9 0 0 1-5.55-1.51l-.4-.24-4.07 1.06 1.09-3.94-.26-.41a10.65 10.65 0 0 1-1.67-5.64c0-5.99 4.9-10.86 10.88-10.86 2.9 0 5.63 1.13 7.68 3.18a10.75 10.75 0 0 1 3.19 7.67c0 5.99-4.9 10.85-10.88 10.85Zm5.97-8.13c-.33-.16-1.94-.96-2.24-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.16-1.4-.51-2.67-1.63-.99-.87-1.66-1.94-1.85-2.27-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.06-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.15 1.12-1.15 2.73s1.18 3.17 1.34 3.39c.16.22 2.32 3.54 5.62 4.96.79.34 1.4.54 1.88.69.79.25 1.51.22 2.08.13.63-.09 1.94-.79 2.21-1.56.27-.77.27-1.43.19-1.56-.08-.14-.3-.22-.63-.38Z"/></svg>
      
    </a>
    <div class="toast" id="toast" role="status"></div><div class="account-backdrop" id="account-backdrop" aria-hidden="true"><section class="account-panel" role="dialog" aria-modal="true"><button id="account-close" class="account-close">×</button><p class="eyebrow">ADELUX ACCOUNT</p><h2 id="account-title">Your purchases,<br><em>kept together.</em></h2><div class="account-tabs"><button id="account-signin-tab">Sign in</button><button id="account-signup-tab">Create account</button></div><form id="account-form"><label id="name-wrap">Name<input id="account-name" autocomplete="name"></label><label>Email<input id="account-email" type="email" required></label><label>Password<input id="account-password" type="password" minlength="6" required></label><button class="account-submit" id="account-submit">Sign in</button></form><div id="account-history" hidden></div><button id="account-signout" hidden>Sign out</button><p class="account-note">Saved locally in this browser. Not cloud-synced or a secure online account.</p></section></div>
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
    bag.push({ lineId: Date.now() + Math.floor(Math.random() * 1000), product, quantity: 1 });
  }

  saveBag();
  render();
  showToast(`${product.name} added to your cart`);
}

function saveBag() {
  try {
    localStorage.setItem('adelux-bag-v1', JSON.stringify(bag.map(({ lineId, product, quantity }) => ({ lineId, productId: product.id, quantity }))));
  } catch { /* Keep the bag available for this visit if storage is unavailable. */ }
}

const PAYMENTS_API_URL = 'https://oppi-adelux.onrender.com';

async function startPaystackCheckout() {
  if (!bag.length) return;
  const email = window.prompt('Enter your email address for Paystack checkout:');
  if (!email) return;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    showToast('Please enter a valid email address');
    return;
  }
  const button = document.querySelector<HTMLButtonElement>('#cart-checkout');
  if (button) { button.disabled = true; button.textContent = 'Connecting to payment… (Render may take up to 90 seconds)'; }
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 90000);
  try {
    const response = await fetch(PAYMENTS_API_URL + '/api/payments/initialize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.trim().toLowerCase(), items: bag.map(({ product, quantity }) => ({ productId: product.id, quantity })) }),
      signal: controller.signal
    });
    const raw = await response.text();
    let data: { authorizationUrl?: string; error?: string } = {};
    try { data = JSON.parse(raw); } catch { throw new Error('Payment server returned an unreadable response. Check Render logs.'); }
    if (!response.ok || !data.authorizationUrl) throw new Error(data.error || 'Checkout could not start (HTTP ' + response.status + ').');
    showToast('Opening Paystack…');
    window.location.href = data.authorizationUrl;
  } catch (error) {
    const message = error instanceof DOMException && error.name === 'AbortError'
      ? 'Payment server took too long to respond. Render may be waking up; please retry once.'
      : error instanceof TypeError
        ? 'Could not reach the payment server. Check Render is Live and its logs.'
        : error instanceof Error ? error.message : 'Payment service unavailable.';
    showToast(message);
    if (button) { button.disabled = false; button.textContent = 'Retry payment'; }
  } finally {
    window.clearTimeout(timeout);
  }
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


let accountMode:'signin'|'signup'='signin';type AccountData={name:string;email:string;passwordHash:string;orders:{date:string;items:string;status:string}[]};const accountKey='adelux-account-v1';function getAccount():AccountData|null{try{return JSON.parse(localStorage.getItem(accountKey)||'null')}catch{return null}}async function passwordHash(p:string){const d=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(p));return [...new Uint8Array(d)].map(x=>x.toString(16).padStart(2,'0')).join('')}function accountModeSet(m:'signin'|'signup'){accountMode=m;const signup=m==='signup';document.querySelector('#name-wrap')?.toggleAttribute('hidden',!signup);document.querySelector('#account-signin-tab')?.classList.toggle('active',!signup);document.querySelector('#account-signup-tab')?.classList.toggle('active',signup);document.querySelector('#account-submit')!.textContent=signup?'Create account':'Sign in';(document.querySelector('#account-name') as HTMLInputElement).required=signup}function accountOpen(){const a=getAccount();document.querySelector('#account-backdrop')?.classList.add('is-open');document.body.classList.add('account-open');const form=document.querySelector<HTMLFormElement>('#account-form'),hist=document.querySelector<HTMLDivElement>('#account-history'),out=document.querySelector<HTMLButtonElement>('#account-signout');if(a){form!.hidden=true;hist!.hidden=false;hist.innerHTML='<h3>Purchase / enquiry history</h3>'+(a.orders.length?a.orders.slice().reverse().map(o=>'<article><strong>'+o.date+'</strong><p>'+o.items+'</p><small>'+o.status+'</small></article>').join(''):'<p>No records yet.</p>');out!.hidden=false;document.querySelector('#account-title')!.textContent='Welcome, '+a.name}else{form!.hidden=false;hist!.hidden=true;out!.hidden=true;accountModeSet('signin')}}function accountClose(){document.querySelector('#account-backdrop')?.classList.remove('is-open');document.body.classList.remove('account-open')}

function bindEvents() {
  document.querySelectorAll<HTMLButtonElement>('[data-category]')
    .forEach(button => {
      button.addEventListener('click', () => {
        const category = button.dataset.category || 'All pieces';
        if (category === 'All pieces') {
          activeCategory = 'All pieces';
          render();
        } else {
          const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          window.location.href = '/adelux/?category=' + encodeURIComponent(slug);
        }
      });
    });

  document.querySelectorAll<HTMLButtonElement>('[data-add]')
    .forEach(button => button.addEventListener('click', () => addToBag(Number(button.dataset.add))));

  document.querySelectorAll<HTMLElement>('[data-open-category]').forEach(card => {
    const openCategory = () => {
      const category = card.dataset.openCategory || '';
      const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      window.location.href = '/adelux/?category=' + encodeURIComponent(slug);
    };
    card.addEventListener('click', event => {
      if ((event.target as HTMLElement).closest('button')) return;
      openCategory();
    });
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openCategory();
      }
    });
  });

  document.querySelectorAll<HTMLButtonElement>('[data-view-more]')
    .forEach(button => button.addEventListener('click', () => {
      const category = button.dataset.viewMore || '';
      const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      window.location.href = '/adelux/?category=' + encodeURIComponent(slug);
    }));

  document.querySelector('#account-toggle')?.addEventListener('click',accountOpen);document.querySelector('#account-close')?.addEventListener('click',accountClose);document.querySelector('#account-backdrop')?.addEventListener('click',e=>{if(e.target===e.currentTarget)accountClose()});document.querySelector('#account-signin-tab')?.addEventListener('click',()=>accountModeSet('signin'));document.querySelector('#account-signup-tab')?.addEventListener('click',()=>accountModeSet('signup'));document.querySelector('#account-signout')?.addEventListener('click',()=>{localStorage.removeItem(accountKey);accountClose()});document.querySelector<HTMLFormElement>('#account-form')?.addEventListener('submit',async e=>{e.preventDefault();const email=(document.querySelector<HTMLInputElement>('#account-email')!).value.trim().toLowerCase(),pass=(document.querySelector<HTMLInputElement>('#account-password')!).value,name=(document.querySelector<HTMLInputElement>('#account-name')!).value.trim(),hash=await passwordHash(pass),a=getAccount();if(accountMode==='signup'){if(a){showToast('A local account already exists');return}localStorage.setItem(accountKey,JSON.stringify({name:name||email.split('@')[0],email,passwordHash:hash,orders:[]}));showToast('Account created')}else if(!a||a.email!==email||a.passwordHash!==hash){showToast('Email or password incorrect');return}else showToast('Signed in');accountOpen()});

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

  document.querySelector('#shop-collection-toggle')?.addEventListener('click', () => {
    shopCategoriesOpen = !shopCategoriesOpen;
    const submenu = document.querySelector('#shop-subcategories');
    submenu?.classList.toggle('is-open', shopCategoriesOpen);
    if (submenu) submenu.toggleAttribute('hidden', !shopCategoriesOpen);
    document.querySelector('#shop-collection-toggle')?.setAttribute('aria-expanded', String(shopCategoriesOpen));
    const chevron = document.querySelector('.shop-chevron');
    if (chevron) chevron.textContent = shopCategoriesOpen ? '−' : '＋';
  });
  document.querySelectorAll<HTMLButtonElement>('[data-shop-category]').forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.shopCategory || '';
    const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    window.location.href = '/adelux/?category=' + encodeURIComponent(slug);
  }));

  document.querySelector('#drawer-search')?.addEventListener('click', () => {
    setMenuOpen(false);
    document.querySelector('#search-row')?.classList.add('is-visible');
    document.querySelector<HTMLInputElement>('#site-search')?.focus();
  });

  document.querySelector('#drawer-bag')?.addEventListener('click', () => { setMenuOpen(false); setCartOpen(true); });
  document.querySelector('#cart-close')?.addEventListener('click', () => setCartOpen(false));
  document.querySelector('#cart-backdrop')?.addEventListener('click', () => setCartOpen(false));
  document.querySelectorAll<HTMLButtonElement>('[data-qty]').forEach(button => button.addEventListener('click', () => {
    const item = bag.find(entry => entry.lineId === Number(button.dataset.qty)); if (!item) return;
    item.quantity += Number(button.dataset.change);
    if (item.quantity <= 0) bag = bag.filter(entry => entry.lineId !== item.lineId);
    saveBag(); render(); setCartOpen(true);
  }));
  document.querySelectorAll<HTMLButtonElement>('[data-remove]').forEach(button => button.addEventListener('click', () => {
    bag = bag.filter(entry => entry.lineId !== Number(button.dataset.remove)); saveBag(); render(); setCartOpen(true);
  }));
  document.querySelector('#cart-checkout')?.addEventListener('click', startPaystackCheckout);
}

render();

let activeBrand = 'adelux';
window.setInterval(() => {
  const nextBrand = activeBrand === 'adelux' ? 'oppi' : 'adelux';
  const current = document.querySelector(`.brand-name[data-brand="${activeBrand}"]`);
  const next = document.querySelector(`.brand-name[data-brand="${nextBrand}"]`);
  if (current && next) {
    current.classList.remove('is-active');
    next.classList.add('is-active');
    activeBrand = nextBrand;
  }
}, 5000);
