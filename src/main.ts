
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

let products: Product[] = [
  { id: 1, name: 'Shirt Design 01', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/IMG_5841.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 37, name: 'Shirt Design 02', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/IMG_5842.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 38, name: 'Shirt Design 03', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/IMG_5843.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 39, name: 'Shirt Design 04', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/IMG_5844.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 40, name: 'Shirt Design 05', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/IMG_5845.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 41, name: 'Shirt Design 06', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/IMG_5846.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 42, name: 'Shirt Design 07', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/IMG_5847.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 43, name: 'Shirt Design 08', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/IMG_5848.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 44, name: 'Shirt Design 09', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/IMG_5849.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 45, name: 'Shirt Design 10', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/IMG_5850.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 46, name: 'Shirt Design 11', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/IMG_5851.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 47, name: 'Shirt Design 12', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/IMG_5852.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 48, name: 'Shirt Design 13', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/IMG_5853.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 49, name: 'Shirt Design 14', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/IMG_5854.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 50, name: 'Shirt Design 15', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/IMG_5855.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 2, name: 'Baggy Jeans', category: 'Denim', price: 12000, color: 'Unisex', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85', note: 'Relaxed denim styles.' },
  { id: 3, name: 'Jersey Design 01', category: 'Sportswear', price: 25000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%204/IMG_5857.jpeg', note: 'ADELUX jersey collection.' },
  { id: 51, name: 'Jersey Design 02', category: 'Sportswear', price: 25000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%204/IMG_5858.jpeg', note: 'ADELUX jersey collection.' },
  { id: 52, name: 'Jersey Design 03', category: 'Sportswear', price: 25000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%204/IMG_5859.jpeg', note: 'ADELUX jersey collection.' },
  { id: 53, name: 'Jersey Design 04', category: 'Sportswear', price: 25000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%204/IMG_5860.jpeg', note: 'ADELUX jersey collection.' },
  { id: 54, name: 'Jersey Design 05', category: 'Sportswear', price: 25000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%204/IMG_5861.jpeg', note: 'ADELUX jersey collection.' },
  { id: 55, name: 'Jersey Design 06', category: 'Sportswear', price: 25000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%204/IMG_5862.jpeg', note: 'ADELUX jersey collection.' },
  { id: 56, name: 'Jersey Design 07', category: 'Sportswear', price: 25000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%204/IMG_5863.jpeg', note: 'ADELUX jersey collection.' },
  { id: 57, name: 'Jersey Design 08', category: 'Sportswear', price: 25000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%204/IMG_5864.jpeg', note: 'ADELUX jersey collection.' },
  { id: 58, name: 'Jersey Design 09', category: 'Sportswear', price: 25000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%204/IMG_5865.jpeg', note: 'ADELUX jersey collection.' },
  { id: 59, name: 'Jersey Design 10', category: 'Sportswear', price: 25000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%204/IMG_5866.jpeg', note: 'ADELUX jersey collection.' },
  { id: 60, name: 'Jersey Design 11', category: 'Sportswear', price: 25000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%204/IMG_5867.jpeg', note: 'ADELUX jersey collection.' },
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
  { id: 7, name: 'Native Monogramming 01', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5799.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 8, name: 'Native Monogramming 02', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5800.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 9, name: 'Native Monogramming 03', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5801.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 10, name: 'Native Monogramming 04', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5802.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 11, name: 'Native Monogramming 05', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5803.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 12, name: 'Native Monogramming 06', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5804.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 13, name: 'Native Monogramming 07', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5805.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 14, name: 'Native Monogramming 08', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5806.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 15, name: 'Native Monogramming 09', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5807.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 16, name: 'Native Monogramming 10', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5808.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 17, name: 'Native Monogramming 11', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5809.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 18, name: 'Native Monogramming 12', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5810.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 19, name: 'Native Monogramming 13', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5811.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 20, name: 'Native Monogramming 14', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5812.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 21, name: 'Native Monogramming 15', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5813.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 22, name: 'Native Monogramming 16', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5814.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 23, name: 'Native Monogramming 17', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5815.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 24, name: 'Native Monogramming 18', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5816.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 25, name: 'Native Monogramming 19', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5817.JPG', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 61, name: 'Native Monogramming 20', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/0690746b-e849-49e6-a46d-56143d372ca7.jpeg', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 62, name: 'Native Monogramming 21', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/4ddf6b87-727c-4ccf-9f81-f32739552f15.jpeg', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 63, name: 'Native Monogramming 22', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/b190e280-f6cd-42a2-ad56-a1b35157e98f.jpeg', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 64, name: 'Native Monogramming 23', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/b2ed2508-afd7-4af2-a94e-ab9f79af183a.jpeg', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 65, name: 'Native Monogramming 24', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/d5870484-9c3f-4408-b991-ef3f58752a07.jpeg', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 66, name: 'Native Monogramming 25', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/d61cfd6c-4af1-4282-9cf0-7da15a71352b.jpeg', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 67, name: 'Native Monogramming 26', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/fad101f3-4299-4842-bfab-5580e0723c89.jpeg', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 68, name: 'Native Monogramming 27', category: 'Native Monogramming', price: 20000, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/fe60fa3e-d16d-4df8-9ab5-027d75ed0c78.jpeg', note: 'Custom Agbada design · Enquire for fabric, colour and sizing.' },
  { id: 69, name: 'Dress Design 12', category: 'Dresses', price: 18000, color: 'For her', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images%202/26d6c63a-a965-4fbd-83cb-dd1a5184e4e9.jpeg', note: 'ADELUX dress collection.' },
  { id: 70, name: 'Dress Design 13', category: 'Dresses', price: 18000, color: 'For her', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images%202/78d04124-04d0-4045-ae0b-f0b83851ae76.jpeg', note: 'ADELUX dress collection.' },
  { id: 71, name: 'Shirt Design 16', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/6ed5c595-7178-46d0-8475-4a2ade88e050.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 72, name: 'Shirt Design 17', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/77d909de-c7e7-4bb9-b539-f58c293b45fa.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 73, name: 'Shirt Design 18', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/87fcd5a5-5f68-4080-96ab-14e410e0b7b5.jpeg', note: 'ADELUX shirts and tops collection.' },
  { id: 74, name: 'Shirt Design 19', category: 'Shirts & Tops', price: 15000, color: 'Unisex', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/image%203/ea32978a-3637-41c0-893a-5ae8df60143a.jpeg', note: 'ADELUX shirts and tops collection.' },
];


// Give every product a simple numbered name, restarting the sequence in each section.
const productNumbers = new Map<string, number>();
products = products.map(product => {
  const number = (productNumbers.get(product.category) || 0) + 1;
  productNumbers.set(product.category, number);
  return { ...product, name: `Adelux Pro ${number}` };
});

const visibleCategories = ['Shirts & Tops', 'Sportswear', 'Dresses', 'Native Monogramming', 'Kids'];

const money = (amount: number) => amount === 0 ? 'Contact for price' : new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount);
const productMinimumPrice = (product: Product) => product.category === 'Dresses' ? 35000 : product.category === 'Denim' ? 30000 : product.price;
const productPriceLabel = (product: Product) => product.category === 'Dresses' ? '₦35,000 – ₦40,000' : product.category === 'Denim' ? '₦30,000 – ₦35,000' : money(product.price);

let activeCategory = 'All pieces';
let searchTerm = '';
let searchOpen = false;
let sortOrder: 'featured' | 'price-low' | 'price-high' | 'name' | 'newest' = 'featured';
let wishlistOnly = false;
function loadWishlist(): number[] { try { const saved = JSON.parse(localStorage.getItem('adelux-wishlist-v1') || '[]'); return Array.isArray(saved) ? saved.filter((id: unknown) => typeof id === 'number' && products.some(product => product.id === id)) : []; } catch { return []; } }
let wishlist = loadWishlist();
function loadRecentlyViewed(): number[] { try { const saved = JSON.parse(localStorage.getItem('adelux-recent-v1') || '[]'); return Array.isArray(saved) ? saved.filter((id: unknown) => typeof id === 'number' && products.some(product => product.id === id)).slice(0, 6) : []; } catch { return []; } }
let recentlyViewed = loadRecentlyViewed();
function saveRecentlyViewed(id: number) { recentlyViewed = [id, ...recentlyViewed.filter(item => item !== id)].slice(0, 6); try { localStorage.setItem('adelux-recent-v1', JSON.stringify(recentlyViewed)); } catch { /* Recent items remain available for this visit. */ } }
function recentViewedMarkup() { const items = recentlyViewed.map(id => products.find(product => product.id === id)).filter((p): p is Product => Boolean(p)); return `<section id="recently-viewed" class="recently-viewed" ${items.length ? '' : 'hidden'}><p class="eyebrow">PICK UP WHERE YOU LEFT OFF</p><h2>Recently viewed</h2><div class="recently-viewed-grid">${items.map(product => `<button class="recent-view-card" data-details="${product.id}"><img src="${product.image}" alt="${product.name}" loading="lazy"><span>${product.name}</span><strong>${productPriceLabel(product)}</strong></button>`).join('')}</div></section>`; }
function saveWishlist() { try { localStorage.setItem('adelux-wishlist-v1', JSON.stringify(wishlist)); } catch { /* Wishlist remains available for this visit. */ } }
function toggleWishlist(id: number) { wishlist = wishlist.includes(id) ? wishlist.filter(item => item !== id) : [...wishlist, id]; saveWishlist(); render(); }
function filteredProducts(category?: string): Product[] {
  let result = products.filter(product => visibleCategories.includes(product.category) && (!category || product.category === category) && (product.name + ' ' + product.category + ' ' + product.color + ' ' + product.note).toLowerCase().includes(searchTerm.toLowerCase()) && (!wishlistOnly || wishlist.includes(product.id)));
  if (sortOrder === 'price-low') result = result.slice().sort((a, b) => (a.price || Number.MAX_SAFE_INTEGER) - (b.price || Number.MAX_SAFE_INTEGER));
  if (sortOrder === 'price-high') result = result.slice().sort((a, b) => b.price - a.price);
  if (sortOrder === 'name') result = result.slice().sort((a, b) => a.name.localeCompare(b.name));
  if ((sortOrder as string) === 'newest') result = result.slice().sort((a, b) => b.id - a.id);
  return result;
}
type BagLine = { lineId: number; product: Product; quantity: number; size: string; colorChoice: string; namePrintingText?: string; namePrintingFee?: number };
function loadSavedBag(): BagLine[] {
  try {
    const saved = JSON.parse(localStorage.getItem('adelux-bag-v1') || '[]') as { productId: number; quantity: number; lineId: number; size?: string; colorChoice?: string; namePrintingText?: string; namePrintingFee?: number }[];
    return saved.flatMap(line => {
      const product = products.find(item => item.id === line.productId);
      return product && Number.isFinite(line.quantity) && line.quantity > 0
        ? [{ lineId: line.lineId || line.productId, product, quantity: Math.floor(line.quantity), size: line.size || 'Not selected', colorChoice: line.colorChoice || 'Not specified', namePrintingText: typeof line.namePrintingText === 'string' ? line.namePrintingText.slice(0, 15) : '', namePrintingFee: Number.isFinite(line.namePrintingFee) ? Math.max(0, Number(line.namePrintingFee)) : 0 }]
        : [];
    });
  } catch { return []; }
}
let bag: BagLine[] = loadSavedBag();
let bagOpen = false;
let menuOpen = false;
let shopCategoriesOpen = false;

const app = document.querySelector<HTMLDivElement>('#app')!;
app.addEventListener('click', event => { const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-details]'); if (button) openProductDetails(Number(button.dataset.details)); });

function productCard(product: Product, preview = false) {
  const isEnquiry = product.category === 'Native Monogramming' || product.category === 'Kids' || product.price === 0;
  const action = preview
    ? `data-view-more="${product.category}" aria-label="View more ${product.category}"`
    : `data-details="${product.id}" aria-label="Choose options and enquire on WhatsApp about ${product.name}"`;
  return `
    <article class="product-card ${preview ? "product-card-preview" : ""}" ${preview ? `data-open-category="${product.category}" tabindex="0" role="link" aria-label="Open the full ${product.category} collection"` : ""}>
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="image-label">ADELUX / OBJECT ${String(product.id).padStart(2, '0')}</span>
        <button class="wishlist-button ${wishlist.includes(product.id) ? 'is-saved' : ''}" data-wishlist="${product.id}" aria-label="${wishlist.includes(product.id) ? 'Remove from' : 'Add to'} wishlist" aria-pressed="${wishlist.includes(product.id)}">${wishlist.includes(product.id) ? '♥' : '♡'}</button>
        ${preview
          ? `<button class="quick-add" ${action}>VIEW MORE</button>`
          : `<button class="quick-add" ${action}>${isEnquiry ? 'ENQUIRE ON WHATSAPP' : 'SELECT OPTIONS'} <span>＋</span></button>`}
      </div>
      <div class="product-meta">
        <div><p class="product-name">${product.name}</p>${product.category === 'Dresses' ? '' : `<p class="product-color">${product.color} · Unisex</p>`}<button class="product-details-link" data-details="${product.id}">${isEnquiry ? 'Enquire on WhatsApp' : 'View details'}</button></div>
        <p class="price">${productPriceLabel(product)}</p>
      </div>
    </article>`;
}

function categoryPageMarkup(category: string) {
  const categoryProducts = filteredProducts(category);
  return `
    <section class="category-page">
      ${category === 'Native Monogramming' ? `<header class="native-monogram-intro"><p class="eyebrow">ADELUX · MADE TO ORDER</p><h1>Native Monogramming</h1><p>Personalised native pieces, finished with care and made around your style.</p><strong>₦15,000 – ₦20,000</strong></header>` : ''}
      <nav class="category-tabs category-page-tabs" aria-label="Browse ADELUX collections">
        ${['All pieces', ...visibleCategories].map(item => `
          <button class="category-tab ${item === category ? 'active' : ''}" data-category="${item}" ${item === category ? 'aria-current="page"' : ''}>${item === 'Sportswear' ? 'Jerseys' : item}</button>
        `).join('')}
      </nav>
      <div class="collection-filter-row">
        <button class="saved-filter ${wishlistOnly ? 'is-active' : ''}" data-wishlist-filter aria-pressed="${wishlistOnly}">Saved pieces (${wishlist.length})</button>

      </div>
      <div class="product-grid category-page-grid">
        ${categoryProducts.length ? categoryProducts.map(product => productCard(product)).join('') : '<p class="no-results">' + (wishlistOnly ? 'No saved pieces in this collection yet.' : category === 'Kids' ? 'New kids wear pieces will appear here as images are uploaded to the ADELUX GitHub kids wear folder.' : 'No products match your search.') + '</p>'}
      </div>
    </section>`;
}

function mainContentMarkup() {
  const requestedSlug = new URLSearchParams(window.location.search).get('category');
  const category = requestedSlug === 'kids' ? 'Kids' : products.map(product => product.category).find(name =>
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
              <button class="category-tab ${activeCategory === category ? 'active' : ''}" data-category="${category}">${category === 'Sportswear' ? 'Jerseys' : category}</button>
            `).join('')}
          </div>
          <span class="result-count">${filteredProducts(activeCategory === 'All pieces' ? undefined : activeCategory).length} PIECES</span>
        </div>
        <div class="collection-filter-row">
          <button class="saved-filter ${wishlistOnly ? 'is-active' : ''}" data-wishlist-filter aria-pressed="${wishlistOnly}">Saved pieces (${wishlist.length})</button>

        </div>
        <div class="product-grid overview-grid">
          ${[...new Map(filteredProducts(activeCategory === 'All pieces' ? undefined : activeCategory).map(product => [product.category, product])).values()].map(product => productCard(product, true)).join('') ||
            '<p class="no-results">No collections match your search.</p>'}
        </div>
      </section>

      <section class="campaign">
        <img
          src="https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/SECOND%20FRAME.png"
          alt="ADELUX campaign">
        <div class="campaign-overlay">
          <p class="eyebrow campaign-eyebrow">BEYOND THE SEASON</p>
          <h2 class="campaign-heading">CLASSY AND<br><em>AFFORDABLE</em></h2>
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
    <a class="announcement oppi-announcement" href="https://oppigraphix.com/" aria-label="Visit OPPIGRAPHIX printing, branding and publishing services">
      <span class="announcement-track">
        <span class="announcement-message"><strong>OPPIGRAPHIX LTD</strong><span>BRAND • PUBLISH • PROMOTE</span><span>NEED IT PRINTED? LET'S MAKE IT HAPPEN.</span></span>
        <span class="announcement-message" aria-hidden="true"><strong>OPPIGRAPHIX LTD</strong><span>BRAND • PUBLISH • PROMOTE</span><span>NEED IT PRINTED? LET'S MAKE IT HAPPEN.</span></span>
      </span>
    </a>

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
        <a class="brand-name is-active" data-brand="adelux" href="/adelux/" aria-label="ADELUX Collections home"><img src="/adelux-logo.png.png" alt="ADELUX Collections" class="brand-logo brand-logo-adelux"></a>
        <a class="brand-name" data-brand="oppi" href="/" aria-label="OPPIGRAPHIX"><img src="/oppi-logo.png.png" alt="OPPIGRAPHIX" class="brand-logo brand-logo-oppi"></a>
      </div>

      <div class="header-actions">
        <button id="search-toggle" class="text-action" aria-expanded="${searchOpen}">Search</button>
        <button id="saved-toggle" class="text-action">Saved (${wishlist.length})</button>
        <button id="header-track-toggle" class="text-action">Track order</button>
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
          <button data-shop-category="Native Monogramming">Native monogramming</button>
          <button data-shop-category="Kids">Kids</button>
        </div>
        <a href="/adelux/#story" data-menu-link>Our point of view</a>
        <button id="drawer-search">Search the collection</button>
        <button id="drawer-bag">Shopping bag <span>${bag.reduce((total, item) => total + item.quantity, 0)}</span></button>
        <button id="drawer-track-order">Track my order</button>
      </nav>
      <p class="drawer-note">Unleash your elegance.<br>Designed for everyone. Made to stay.</p>
    </aside>

    <div class="search-row ${searchOpen ? 'is-visible' : ''}" id="search-row">
      <label for="site-search">SEARCH THE COLLECTION</label>
      <input id="site-search"
        placeholder="Try coat or knitwear"
        value="${searchTerm.replace(/"/g, '&quot;')}">
      <button id="clear-search" aria-label="Clear search">Clear</button>
    </div>

    <main>
${mainContentMarkup()}
      ${recentViewedMarkup()}
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
      <div class="cart-items">${bag.length ? bag.map(({lineId, product, quantity, size, colorChoice, namePrintingText, namePrintingFee}) => `<article class="cart-item"><img src="${product.image}" alt="${product.name}"><div class="cart-item-info"><p class="cart-item-name">${product.name}</p><p class="cart-item-color">${product.color} · Size: ${size} · Colour: ${colorChoice}${namePrintingText ? ' · Name: ' + namePrintingText : ''}</p><p class="cart-item-price">${productPriceLabel(product)}${namePrintingFee ? ' <small>+ ' + money(namePrintingFee) + ' name printing</small>' : ''}</p><div class="cart-quantity"><button data-qty="${lineId}" data-change="-1" aria-label="Decrease quantity">Decrease</button><span>${quantity}</span><button data-qty="${lineId}" data-change="1" aria-label="Increase quantity">Increase</button><button class="cart-remove" data-remove="${lineId}">Remove</button></div></div></article>`).join('') : '<p class="cart-empty">Your cart is empty.<br>Find something considered.</p>'}</div>
      <div class="cart-foot"><div class="cart-subtotal"><span>Subtotal</span><strong>${money(bag.reduce((sum, item) => sum + (productMinimumPrice(item.product) + (item.namePrintingFee || 0)) * item.quantity, 0))}</strong></div><p>Send your selected items and preferences to ADELUX on WhatsApp. We will confirm availability, delivery/collection and payment details with you.</p><button class="cart-checkout" id="cart-checkout" ${bag.length ? '' : 'disabled'}>SEND ORDER TO WHATSAPP</button><button class="track-order-link" id="track-order-open">Already ordered? Track your order</button></div>
    </aside>
    <div class="product-detail-backdrop" id="product-detail-backdrop" aria-hidden="true"></div>
    <div class="checkout-backdrop" id="checkout-backdrop" aria-hidden="true"><section class="checkout-panel" role="dialog" aria-modal="true" aria-labelledby="checkout-title"><button class="checkout-close" id="checkout-close" type="button" aria-label="Close checkout">×</button><button class="modal-back" id="checkout-back" type="button">← Back to shopping bag</button><p class="eyebrow">ADELUX COLLECTIONS · CHECKOUT</p><h2 id="checkout-title">Your details,<br><em>then WhatsApp.</em></h2><p class="checkout-intro">Add your contact details and we will send your full selection to ADELUX on WhatsApp. The team will confirm availability and payment arrangements.</p><form id="checkout-form"><label>Full name<input name="name" autocomplete="name" required minlength="2" placeholder="Your full name"></label><label>Mobile number<input name="phone" type="tel" autocomplete="tel" inputmode="tel" required minlength="10" placeholder="e.g. 08012345678"></label><label>Email address <span>(optional)</span><input name="email" type="email" autocomplete="email" placeholder="you@example.com"></label><label>Additional instructions <span>(optional)</span><textarea name="note" rows="3" maxlength="500" placeholder="Any notes for the ADELUX team"></textarea></label><div class="collection-confirm"><strong>Order follow-up</strong><span>ADELUX will confirm availability, total price and fulfilment options with you on WhatsApp.</span></div><button class="checkout-pay" id="checkout-pay" type="submit">Send details to WhatsApp</button></form></section></div>
    <div class="track-backdrop" id="track-backdrop" aria-hidden="true"><section class="track-panel" role="dialog" aria-modal="true" aria-labelledby="track-title"><button class="checkout-close" id="track-close" type="button" aria-label="Close order tracking">×</button><button class="modal-back" id="track-back" type="button">← Back</button><p class="eyebrow">ADELUX ORDER CARE</p><h2 id="track-title">Track your order.</h2><form id="track-form"><label>Order number<input name="orderNumber" required placeholder="e.g. AD12AB34CD56"></label><label>Mobile number used at checkout<input name="phone" type="tel" inputmode="tel" required placeholder="Your checkout mobile number"></label><button class="checkout-pay" type="submit">Check order progress</button></form><div id="track-result" aria-live="polite"></div></section></div>
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

let selectedProduct: Product | null = null;
function openProductDetails(id: number) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  selectedProduct = product;
  saveRecentlyViewed(id);
  const recentMarkup = recentViewedMarkup();
  const recentSection = document.querySelector('#recently-viewed');
  if (recentSection) recentSection.outerHTML = recentMarkup;
  else document.querySelector('main')?.insertAdjacentHTML('beforeend', recentMarkup);
  const modal = document.querySelector<HTMLDivElement>('#product-detail-backdrop');
  if (!modal) return;
  modal.innerHTML = `<section class="product-detail-panel" role="dialog" aria-modal="true" aria-labelledby="detail-title"><button class="detail-close" id="detail-close" aria-label="Close details">×</button><div class="detail-image-wrap"><img src="${product.image}" alt="${product.name}"></div><div class="detail-copy"><button class="detail-back" id="detail-back" type="button" aria-label="Go back to the collection">← Back to collection</button><p class="eyebrow">ADELUX COLLECTIONS · ${product.category === 'Sportswear' ? 'JERSEYS' : product.category.toUpperCase()}</p><h2 id="detail-title">${product.name}</h2><p class="detail-price">${productPriceLabel(product)}</p><p class="detail-description">${product.note}</p><label class="detail-field">Select size<select id="detail-size" required><option value="">Choose your size</option>${(product.category === 'Native Monogramming' ? ['Made to measure','S','M','L','XL','XXL'] : ['XS','S','M','L','XL','XXL']).map(x=>`<option value="${x}">${x}</option>`).join('')}</select></label><fieldset class="detail-field colour-picker-field"><legend>Choose a colour</legend><div class="colour-palette" id="detail-colour-palette"><button type="button" class="colour-swatch" data-colour="Black" aria-label="Black" title="Black"><span style="--swatch:#111111"></span><small>Black</small></button><button type="button" class="colour-swatch" data-colour="White" aria-label="White" title="White"><span style="--swatch:#ffffff"></span><small>White</small></button><button type="button" class="colour-swatch" data-colour="Red" aria-label="Red" title="Red"><span style="--swatch:#d92736"></span><small>Red</small></button><button type="button" class="colour-swatch" data-colour="Navy" aria-label="Navy" title="Navy"><span style="--swatch:#172b4d"></span><small>Navy</small></button><button type="button" class="colour-swatch" data-colour="Blue" aria-label="Blue" title="Blue"><span style="--swatch:#2463c5"></span><small>Blue</small></button><button type="button" class="colour-swatch" data-colour="Grey" aria-label="Grey" title="Grey"><span style="--swatch:#858585"></span><small>Grey</small></button><button type="button" class="colour-swatch" data-colour="Beige" aria-label="Beige" title="Beige"><span style="--swatch:#d8c3a5"></span><small>Beige</small></button><button type="button" class="colour-swatch" data-colour="Brown" aria-label="Brown" title="Brown"><span style="--swatch:#795548"></span><small>Brown</small></button><button type="button" class="colour-swatch" data-colour="Green" aria-label="Green" title="Green"><span style="--swatch:#28734a"></span><small>Green</small></button><button type="button" class="colour-swatch" data-colour="Pink" aria-label="Pink" title="Pink"><span style="--swatch:#e89ab5"></span><small>Pink</small></button><button type="button" class="colour-swatch" data-colour="Yellow" aria-label="Yellow" title="Yellow"><span style="--swatch:#f1ce42"></span><small>Yellow</small></button><button type="button" class="colour-swatch" data-colour="Purple" aria-label="Purple" title="Purple"><span style="--swatch:#7652a5"></span><small>Purple</small></button><button type="button" class="colour-swatch" data-colour="Orange" aria-label="Orange" title="Orange"><span style="--swatch:#ed8733"></span><small>Orange</small></button><button type="button" class="colour-swatch colour-other" data-colour="Other"><span>＋</span><small>Other</small></button></div><input id="detail-color-other" maxlength="40" placeholder="Enter another colour" hidden><input id="detail-color" type="hidden" value=""><small>We will confirm colour availability before production.</small></fieldset><label class="detail-field">Additional details or special requests <textarea id="detail-notes" rows="3" maxlength="500" placeholder="Write any extra instructions here (optional)"></textarea></label>${product.category === 'Sportswear' ? `<section class="jersey-name-option"><label class="jersey-name-toggle"><input type="checkbox" id="jersey-name-enabled"><span><strong>Add a name to this jersey?</strong><small>Optional back-name printing</small></span></label><div class="jersey-name-fields" id="jersey-name-fields" hidden><label class="detail-field" for="jersey-name-text">Name to print<input id="jersey-name-text" type="text" maxlength="15" autocomplete="off" placeholder="Enter name (up to 15 characters)"><small>1–8 characters: ₦2,000 · 9–15 characters: ₦3,000</small></label><p class="jersey-name-price" id="jersey-name-price">Name printing: ₦0</p></div></section>` : ''}<button class="detail-add" id="detail-add">CONTINUE ON WHATSAPP</button><p class="detail-note">Your selections and notes will be sent to ADELUX on WhatsApp to confirm availability and your order.</p><details class="size-guide"><summary>View size guide</summary><div class="size-guide-content">${product.category === 'Native Monogramming' ? '<p>Traditional pieces are best measured individually. Prepare chest, shoulder, sleeve, top length, waist, hip and trouser length measurements. Select “Made to measure” and our team will confirm details.</p>' : product.category === 'Dresses' ? '<p>Indicative body measurements (cm), not garment measurements:</p><table><tr><th>Size</th><th>Bust</th><th>Waist</th><th>Hip</th></tr><tr><td>XS</td><td>80–84</td><td>60–64</td><td>86–90</td></tr><tr><td>S</td><td>85–89</td><td>65–69</td><td>91–95</td></tr><tr><td>M</td><td>90–94</td><td>70–74</td><td>96–100</td></tr><tr><td>L</td><td>95–101</td><td>75–81</td><td>101–107</td></tr><tr><td>XL</td><td>102–108</td><td>82–88</td><td>108–114</td></tr><tr><td>XXL</td><td>109–116</td><td>89–96</td><td>115–122</td></tr></table>' : '<p>Indicative chest measurements (cm), not garment measurements:</p><table><tr><th>Size</th><th>Chest</th></tr><tr><td>XS</td><td>86–91</td></tr><tr><td>S</td><td>92–97</td></tr><tr><td>M</td><td>98–103</td></tr><tr><td>L</td><td>104–109</td></tr><tr><td>XL</td><td>110–117</td></tr><tr><td>XXL</td><td>118–125</td></tr></table>'}<small>Reference guide only. ADELUX’s final garment measurements and fit should be confirmed before production. Measure around the fullest part of the chest/bust without pulling the tape tight.</small></div></details><div class="complete-look"><p class="eyebrow">STYLE IT WITH</p><h3>Complete the look</h3><div class="complete-look-grid">${(product.category === 'Dresses' ? [products.find(p=>p.id===6), products.find(p=>p.id===2)] : [products.find(p=>p.id===2), products.find(p=>p.id===6)]).filter((p): p is Product => Boolean(p)).map(p=>`<button class="complete-look-item" data-details="${p.id}"><img src="${p.image}" alt="${p.name}"><span>${p.name}</span><strong>${productPriceLabel(p)}</strong></button>`).join('')}</div></div></div></section>`;
  const jerseyNameEnabled = modal.querySelector<HTMLInputElement>('#jersey-name-enabled');
  const jerseyNameFields = modal.querySelector<HTMLDivElement>('#jersey-name-fields');
  const colourInput = modal.querySelector<HTMLInputElement>('#detail-color');
  const otherColour = modal.querySelector<HTMLInputElement>('#detail-color-other');
  modal.querySelectorAll<HTMLButtonElement>('[data-colour]').forEach(swatch => swatch.addEventListener('click', () => {
    const colour = swatch.dataset.colour || '';
    modal.querySelectorAll('[data-colour]').forEach(item => item.classList.remove('is-selected'));
    swatch.classList.add('is-selected');
    if (colourInput) colourInput.value = colour === 'Other' ? (otherColour?.value.trim() || 'Other - to specify') : colour;
    if (otherColour) { otherColour.hidden = colour !== 'Other'; if (colour === 'Other') otherColour.focus(); else otherColour.value = ''; }
  }));
  otherColour?.addEventListener('input', () => { if (colourInput) colourInput.value = otherColour.value.trim() || 'Other - to specify'; });
  const jerseyNameText = modal.querySelector<HTMLInputElement>('#jersey-name-text');
  const jerseyNamePrice = modal.querySelector<HTMLParagraphElement>('#jersey-name-price');
  const updateJerseyNamePrice = () => {
    const length = (jerseyNameText?.value || '').trim().length;
    const fee = length === 0 ? 0 : length <= 8 ? 2000 : 3000;
    if (jerseyNamePrice) jerseyNamePrice.textContent = 'Name printing: ' + money(fee);
  };
  jerseyNameEnabled?.addEventListener('change', () => { if (jerseyNameFields) jerseyNameFields.hidden = !jerseyNameEnabled.checked; if (!jerseyNameEnabled.checked && jerseyNameText) jerseyNameText.value = ''; updateJerseyNamePrice(); });
  jerseyNameText?.addEventListener('input', updateJerseyNamePrice);
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('detail-open');
  document.querySelector('#detail-close')?.addEventListener('click', closeProductDetails);
  document.querySelector('#detail-back')?.addEventListener('click', closeProductDetails);
  modal.onclick = event => { if (event.target === modal) closeProductDetails(); };
  document.querySelector('#detail-add')?.addEventListener('click', () => {
    const size = (document.querySelector<HTMLInputElement | HTMLSelectElement>('#detail-size')?.value || '').trim();
    const colorChoice = (document.querySelector<HTMLInputElement>('#detail-color')?.value || '').trim() || 'Not selected - please advise';
    const customNotes = (document.querySelector<HTMLTextAreaElement>('#detail-notes')?.value || '').trim();
    if (!size) { showToast('Please select a size first'); return; }
    let namePrintingText = '';
    let namePrintingFee = 0;
    if (product.category === 'Sportswear' && document.querySelector<HTMLInputElement>('#jersey-name-enabled')?.checked) {
      namePrintingText = (document.querySelector<HTMLInputElement>('#jersey-name-text')?.value || '').trim();
      if (!namePrintingText) { showToast('Enter the name you want printed'); document.querySelector<HTMLInputElement>('#jersey-name-text')?.focus(); return; }
      if (!/^[A-Za-z0-9 .'-]{1,15}$/.test(namePrintingText)) { showToast('Use up to 15 letters, numbers or simple spaces'); return; }
      namePrintingFee = namePrintingText.length <= 8 ? 2000 : 3000;
    }
    const message = [
      'Hello ADELUX, I would like to place an order / enquire about this product.',
      '',
      'Product: ' + product.name,
      'Category: ' + product.category,
      'Price range: ' + productPriceLabel(product),
      'Size: ' + size,
      'Preferred colour: ' + colorChoice,
      'Quantity: 1',
      namePrintingText ? 'Jersey name to print: ' + namePrintingText : '',
      namePrintingFee ? 'Name printing fee shown: ' + money(namePrintingFee) : '',
      customNotes ? 'Additional instructions: ' + customNotes : '',
      '',
      'Please confirm availability, final price and next steps.'
    ].filter(Boolean).join('\n');
    window.open('https://wa.me/2348184952775?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
    closeProductDetails();
  });
}
function closeProductDetails() { document.querySelector('#product-detail-backdrop')?.classList.remove('is-open'); document.querySelector('#product-detail-backdrop')?.setAttribute('aria-hidden', 'true'); document.body.classList.remove('detail-open'); selectedProduct = null; }

function addToBag(id: number, size = 'Not selected', colorChoice = 'Not specified', namePrintingText = '', namePrintingFee = 0) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  const existing = bag.find(item => item.product.id === id && item.size === size && item.colorChoice === colorChoice && (item.namePrintingText || '') === namePrintingText && (item.namePrintingFee || 0) === namePrintingFee);

  if (existing) {
    existing.quantity++;
  } else {
    bag.push({ lineId: Date.now() + Math.floor(Math.random() * 1000), product, quantity: 1, size, colorChoice, namePrintingText, namePrintingFee });
  }

  saveBag();
  render();
  showToast(`${product.name} added to your cart`);
}

function saveBag() {
  try {
    localStorage.setItem('adelux-bag-v1', JSON.stringify(bag.map(({ lineId, product, quantity, size, colorChoice, namePrintingText, namePrintingFee }) => ({ lineId, productId: product.id, quantity, size, colorChoice, namePrintingText: namePrintingText || '', namePrintingFee: namePrintingFee || 0 }))));
  } catch { /* Keep the bag available for this visit if storage is unavailable. */ }
}

const PAYMENTS_API_URL = 'https://adelux-payments-api.onrender.com';

function openCheckout() {
  if (!bag.length) return;
  setCartOpen(false);
  const modal = document.querySelector<HTMLDivElement>('#checkout-backdrop');
  modal?.classList.add('is-open');
  modal?.setAttribute('aria-hidden','false');
  document.body.classList.add('checkout-open');
}
function closeCheckout() {
  document.querySelector('#checkout-backdrop')?.classList.remove('is-open');
  document.querySelector('#checkout-backdrop')?.setAttribute('aria-hidden','true');
  document.body.classList.remove('checkout-open');
}
function sendWhatsAppOrder(event: SubmitEvent) {
  event.preventDefault();
  if (!bag.length) return;
  const form = document.querySelector<HTMLFormElement>('#checkout-form');
  if (!form || !form.reportValidity()) return;
  const values = new FormData(form);
  const name = String(values.get('name') || '').trim();
  const phone = String(values.get('phone') || '').trim();
  const email = String(values.get('email') || '').trim();
  const note = String(values.get('note') || '').trim();
  const lines = bag.map((item, index) => [
    (index + 1) + '. ' + item.product.name,
    '   Category: ' + item.product.category,
    '   Quantity: ' + item.quantity,
    '   Size: ' + item.size,
    '   Colour: ' + item.colorChoice,
    '   Price range: ' + productPriceLabel(item.product),
    item.namePrintingText ? '   Jersey name: ' + item.namePrintingText : '',
    item.namePrintingFee ? '   Name printing fee shown: ' + money(item.namePrintingFee) : ''
  ].filter(Boolean).join('\n'));
  const subtotal = bag.reduce((sum, item) => sum + (productMinimumPrice(item.product) + (item.namePrintingFee || 0)) * item.quantity, 0);
  const message = [
    'Hello ADELUX, I would like to enquire / place an order for the following items:',
    '',
    ...lines,
    '',
    'Estimated subtotal from minimum prices: ' + money(subtotal),
    '',
    'Customer name: ' + name,
    'Contact number: ' + phone,
    email ? 'Email: ' + email : '',
    note ? 'Additional instructions: ' + note : '',
    '',
    'Please confirm availability, final total, delivery or collection options, and payment instructions.'
  ].filter(Boolean).join('\n');
  window.open('https://wa.me/2348184952775?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
  closeCheckout();
}
async function trackOrder(event: SubmitEvent) {
  event.preventDefault();
  const form = document.querySelector<HTMLFormElement>('#track-form');
  if (!form || !form.reportValidity()) return;
  const values = new FormData(form);
  const orderNumber = String(values.get('orderNumber')||'').trim().toUpperCase();
  const phone = String(values.get('phone')||'').trim();
  const target = document.querySelector<HTMLDivElement>('#track-result');
  if (target) target.innerHTML = '<p>Looking up your order…</p>';
  try {
    const response = await fetch(PAYMENTS_API_URL + '/api/orders/track?orderNumber=' + encodeURIComponent(orderNumber) + '&phone=' + encodeURIComponent(phone));
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Could not find that order.');
    const labels = ['Order received','Order packaged','Sent to Area 10 store','Ready for pickup','Customer called to arrange pickup'];
    const sequence = ['order_received','packaged','sent_to_store','ready_for_pickup','customer_called'];
    const currentIndex = data.status === 'collected' ? 4 : sequence.indexOf(data.status);
    target!.innerHTML = '<div class="track-summary"><strong>Order ' + data.orderNumber + '</strong><span>Payment: ' + String(data.paymentStatus).toUpperCase() + '</span><p>Collection: ' + data.collectionLocation + '</p>' + (data.status === 'collected' ? '<p><strong>Order collected. Thank you for choosing ADELUX.</strong></p>' : '') + '</div><ol class="order-timeline">' + labels.map((label,index)=>'<li class="' + (index <= currentIndex ? 'is-complete' : '') + '"><span class="timeline-day">DAY ' + (index+1) + '</span><strong>' + label + '</strong><small>' + (data.history?.find((entry:any)=>entry.status===sequence[index])?.at ? new Date(data.history.find((entry:any)=>entry.status===sequence[index]).at).toLocaleString('en-NG') : (index <= currentIndex ? 'In progress' : 'Pending')) + '</small></li>').join('') + '</ol><p class="track-help">On Day 5, ADELUX will call the mobile number supplied at checkout to arrange pickup.</p>';
  } catch(error) { if (target) target.innerHTML = '<p class="track-error">' + (error instanceof Error ? error.message : 'Order tracking is unavailable.') + '</p>'; }
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


let accountMode:'signin'|'signup'='signin';type AccountData={name:string;email:string;passwordHash:string;orders:{date:string;items:string;status:string}[]};const accountKey='adelux-account-v1';function getAccount():AccountData|null{try{return JSON.parse(localStorage.getItem(accountKey)||'null')}catch{return null}}async function passwordHash(p:string){const d=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(p));return [...new Uint8Array(d)].map(x=>x.toString(16).padStart(2,'0')).join('')}function accountModeSet(m:'signin'|'signup'){accountMode=m;const signup=m==='signup';document.querySelector('#name-wrap')?.toggleAttribute('hidden',!signup);document.querySelector('#account-signin-tab')?.classList.toggle('active',!signup);document.querySelector('#account-signup-tab')?.classList.toggle('active',signup);document.querySelector('#account-submit')!.textContent=signup?'Create account':'Sign in';(document.querySelector('#account-name') as HTMLInputElement).required=signup}function accountOpen(){const a=getAccount();document.querySelector('#account-backdrop')?.classList.add('is-open');document.body.classList.add('account-open');const form=document.querySelector<HTMLFormElement>('#account-form'),hist=document.querySelector<HTMLDivElement>('#account-history'),out=document.querySelector<HTMLButtonElement>('#account-signout');if(!form||!hist||!out)return;if(a){form!.hidden=true;hist!.hidden=false;hist!.innerHTML='<h3>Purchase / enquiry history</h3>'+(a.orders.length?a.orders.slice().reverse().map(o=>'<article><strong>'+o.date+'</strong><p>'+o.items+'</p><small>'+o.status+'</small></article>').join(''):'<p>No records yet.</p>');out!.hidden=false;document.querySelector('#account-title')!.textContent='Welcome, '+a.name}else{form!.hidden=false;hist!.hidden=true;out!.hidden=true;accountModeSet('signin')}}function accountClose(){document.querySelector('#account-backdrop')?.classList.remove('is-open');document.body.classList.remove('account-open')}

function bindEvents() {
  document.querySelectorAll<HTMLButtonElement>('[data-category]')
    .forEach(button => {
      button.addEventListener('click', () => {
        const category = button.dataset.category || 'All pieces';
        if (category === 'All pieces') {
          window.location.href = '/adelux/#collection';
        } else {
          const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          window.location.href = '/adelux/?category=' + encodeURIComponent(slug);
        }
      });
    });

  document.querySelectorAll<HTMLButtonElement>('[data-enquire]')
    .forEach(button => button.addEventListener('click', () => {
      const product = products.find(item => item.id === Number(button.dataset.enquire));
      if (product) openProductDetails(product.id);
    }));
  document.querySelectorAll<HTMLButtonElement>('[data-wishlist]')
    .forEach(button => button.addEventListener('click', event => { event.stopPropagation(); toggleWishlist(Number(button.dataset.wishlist)); }));
  document.querySelectorAll<HTMLButtonElement>('[data-wishlist-filter]')
    .forEach(button => button.addEventListener('click', () => { wishlistOnly = !wishlistOnly; render(); }));
  document.querySelector<HTMLSelectElement>('#sort-products')?.addEventListener('change', event => { sortOrder = (event.target as HTMLSelectElement).value as typeof sortOrder; render(); });

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

  document.querySelector('#saved-toggle')?.addEventListener('click', () => { wishlistOnly = !wishlistOnly; render(); if (!window.location.search.includes('category')) window.location.hash = 'collection'; });document.querySelector('#account-close')?.addEventListener('click',accountClose);document.querySelector('#account-backdrop')?.addEventListener('click',e=>{if(e.target===e.currentTarget)accountClose()});document.querySelector('#account-signin-tab')?.addEventListener('click',()=>accountModeSet('signin'));document.querySelector('#account-signup-tab')?.addEventListener('click',()=>accountModeSet('signup'));document.querySelector('#account-signout')?.addEventListener('click',()=>{localStorage.removeItem(accountKey);accountClose()});document.querySelector<HTMLFormElement>('#account-form')?.addEventListener('submit',async e=>{e.preventDefault();const email=(document.querySelector<HTMLInputElement>('#account-email')!).value.trim().toLowerCase(),pass=(document.querySelector<HTMLInputElement>('#account-password')!).value,name=(document.querySelector<HTMLInputElement>('#account-name')!).value.trim(),hash=await passwordHash(pass),a=getAccount();if(accountMode==='signup'){if(a){showToast('A local account already exists');return}localStorage.setItem(accountKey,JSON.stringify({name:name||email.split('@')[0],email,passwordHash:hash,orders:[]}));showToast('Account created')}else if(!a||a.email!==email||a.passwordHash!==hash){showToast('Email or password incorrect');return}else showToast('Signed in');accountOpen()});

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

  const openSearch = () => { searchOpen = true; setMenuOpen(false); render(); document.querySelector<HTMLInputElement>('#site-search')?.focus(); };
  document.querySelector('#search-toggle')?.addEventListener('click', () => { searchOpen = !searchOpen; render(); if (searchOpen) document.querySelector<HTMLInputElement>('#site-search')?.focus(); });
  document.querySelector('#drawer-search')?.addEventListener('click', openSearch);

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
  document.querySelector('#cart-checkout')?.addEventListener('click', openCheckout);
  document.querySelector('#checkout-close')?.addEventListener('click', closeCheckout);
  document.querySelector('#checkout-back')?.addEventListener('click', () => { closeCheckout(); setCartOpen(true); });
  document.querySelector('#checkout-backdrop')?.addEventListener('click', e=>{if(e.target===e.currentTarget)closeCheckout()});
  document.querySelector<HTMLFormElement>('#checkout-form')?.addEventListener('submit', sendWhatsAppOrder);
  const openTrack = () => { setCartOpen(false); setMenuOpen(false); document.querySelector('#track-backdrop')?.classList.add('is-open'); document.querySelector('#track-backdrop')?.setAttribute('aria-hidden','false'); document.body.classList.add('track-open'); };
  document.querySelector('#track-order-open')?.addEventListener('click',openTrack);
  document.querySelector('#header-track-toggle')?.addEventListener('click',openTrack);
  document.querySelector('#drawer-track-order')?.addEventListener('click',openTrack);
  document.querySelector('#track-back')?.addEventListener('click',()=>{document.querySelector('#track-backdrop')?.classList.remove('is-open');document.querySelector('#track-backdrop')?.setAttribute('aria-hidden','true');document.body.classList.remove('track-open')});
  document.querySelector('#track-close')?.addEventListener('click',()=>{document.querySelector('#track-backdrop')?.classList.remove('is-open');document.querySelector('#track-backdrop')?.setAttribute('aria-hidden','true');document.body.classList.remove('track-open')});
  document.querySelector('#track-backdrop')?.addEventListener('click',e=>{if(e.target===e.currentTarget){document.querySelector('#track-backdrop')?.classList.remove('is-open');document.body.classList.remove('track-open')}});
  document.querySelector<HTMLFormElement>('#track-form')?.addEventListener('submit',trackOrder);

}

render();
void loadKidsCollection();
if (new URLSearchParams(window.location.search).get('track') === '1') { document.querySelector('#track-backdrop')?.classList.add('is-open'); document.querySelector('#track-backdrop')?.setAttribute('aria-hidden','false'); document.body.classList.add('track-open'); }

async function loadKidsCollection() {
  try {
    const response = await fetch('https://api.github.com/repos/stateman219-boop/oppi-adelux/contents/kids%20wear?ref=main');
    if (!response.ok) throw new Error('Kids collection could not be loaded');
    const files = await response.json() as Array<{ name: string; type: string; download_url: string | null }>;
    const images = files
      .filter(file => file.type === 'file' && /\.(jpe?g|png|webp|avif|gif)$/i.test(file.name))
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
    const kids = images.map((file, index) => {
      let hash = 2166136261;
      for (const char of file.name) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
      const id = 100000 + (hash >>> 0);
      const label = file.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim();
      return {
        id,
        name: `Adelux Pro ${index + 1}`,
        category: 'Kids',
        price: 0,
        color: 'Made to order',
        image: file.download_url || `https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/kids%20wear/${encodeURIComponent(file.name)}`,
        note: 'ADELUX kids wear collection. Contact us for sizes, colours and pricing.'
      } as Product;
    });
    products = [...products.filter(product => product.category !== 'Kids'), ...kids];
    render();
  } catch (error) {
    console.warn('ADELUX Kids collection:', error);
  }
}

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
