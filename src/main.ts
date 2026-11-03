
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
  { id: 1, name: "Classic cotton shirt", category: "Shirts & Tops", price: 12000, color: "Men & women", image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 2, name: "Linen short-sleeve shirt", category: "Shirts & Tops", price: 14500, color: "Men & women", image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 3, name: "Oversized graphic tee", category: "Shirts & Tops", price: 17000, color: "Men & women", image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 4, name: "Plain premium T-shirt", category: "Shirts & Tops", price: 19500, color: "Men & women", image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 5, name: "Polo shirt", category: "Shirts & Tops", price: 12000, color: "Men & women", image: 'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 6, name: "Striped button-down", category: "Shirts & Tops", price: 14500, color: "Men & women", image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 7, name: "Ankara detail shirt", category: "Shirts & Tops", price: 17000, color: "Men & women", image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 8, name: "Relaxed camp-collar shirt", category: "Shirts & Tops", price: 19500, color: "Men & women", image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 9, name: "Long-sleeve Oxford shirt", category: "Shirts & Tops", price: 12000, color: "Men & women", image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 10, name: "Ribbed fitted top", category: "Shirts & Tops", price: 14500, color: "Men & women", image: 'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 11, name: "Boxy streetwear tee", category: "Shirts & Tops", price: 17000, color: "Men & women", image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 12, name: "Linen blend shirt", category: "Shirts & Tops", price: 19500, color: "Men & women", image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 13, name: "Smart casual shirt", category: "Shirts & Tops", price: 12000, color: "Men & women", image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 14, name: "Printed statement tee", category: "Shirts & Tops", price: 14500, color: "Men & women", image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 15, name: "Sleeveless summer top", category: "Shirts & Tops", price: 17000, color: "Men & women", image: 'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 16, name: "Embroidered shirt", category: "Shirts & Tops", price: 19500, color: "Men & women", image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 17, name: "Denim shirt", category: "Shirts & Tops", price: 12000, color: "Men & women", image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 18, name: "Relaxed tunic top", category: "Shirts & Tops", price: 14500, color: "Men & women", image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 19, name: "Premium basic tee", category: "Shirts & Tops", price: 17000, color: "Men & women", image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85', note: "Everyday Nigerian-ready shirts, polos and smart tops." },
  { id: 20, name: "Baggy blue jeans", category: "Denim", price: 25000, color: "Men & women", image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 21, name: "Wide-leg denim", category: "Denim", price: 27500, color: "Men & women", image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 22, name: "Straight-cut jeans", category: "Denim", price: 30000, color: "Men & women", image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 23, name: "Relaxed-fit jeans", category: "Denim", price: 32500, color: "Men & women", image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 24, name: "High-waist wide-leg jeans", category: "Denim", price: 25000, color: "Men & women", image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 25, name: "Dark-wash denim", category: "Denim", price: 27500, color: "Men & women", image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 26, name: "Light-wash jeans", category: "Denim", price: 30000, color: "Men & women", image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 27, name: "Denim cargo pants", category: "Denim", price: 32500, color: "Men & women", image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 28, name: "Distressed street jeans", category: "Denim", price: 25000, color: "Men & women", image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 29, name: "Classic black jeans", category: "Denim", price: 27500, color: "Men & women", image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 30, name: "Denim maxi skirt", category: "Denim", price: 30000, color: "Men & women", image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 31, name: "Denim shorts", category: "Denim", price: 32500, color: "Men & women", image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 32, name: "Boyfriend jeans", category: "Denim", price: 25000, color: "Men & women", image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 33, name: "Tapered denim", category: "Denim", price: 27500, color: "Men & women", image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 34, name: "Patchwork jeans", category: "Denim", price: 30000, color: "Men & women", image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 35, name: "Flared denim", category: "Denim", price: 32500, color: "Men & women", image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 36, name: "Utility denim trousers", category: "Denim", price: 25000, color: "Men & women", image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 37, name: "Raw-hem jeans", category: "Denim", price: 27500, color: "Men & women", image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 38, name: "Everyday relaxed denim", category: "Denim", price: 30000, color: "Men & women", image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85', note: "Relaxed denim and versatile streetwear fits." },
  { id: 39, name: "Nigeria-inspired football jersey", category: "Sportswear", price: 18000, color: "Men & women", image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 40, name: "Classic football jersey", category: "Sportswear", price: 20500, color: "Men & women", image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 41, name: "Training T-shirt", category: "Sportswear", price: 23000, color: "Men & women", image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 42, name: "Mesh sports top", category: "Sportswear", price: 25500, color: "Men & women", image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 43, name: "Performance polo", category: "Sportswear", price: 18000, color: "Men & women", image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 44, name: "Track jacket", category: "Sportswear", price: 20500, color: "Men & women", image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 45, name: "Training shorts", category: "Sportswear", price: 23000, color: "Men & women", image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 46, name: "Football warm-up top", category: "Sportswear", price: 25500, color: "Men & women", image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 47, name: "Athletic leggings", category: "Sportswear", price: 18000, color: "Men & women", image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 48, name: "Sports bra top", category: "Sportswear", price: 20500, color: "Men & women", image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 49, name: "Training joggers", category: "Sportswear", price: 23000, color: "Men & women", image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 50, name: "Sleeveless basketball jersey", category: "Sportswear", price: 25500, color: "Men & women", image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 51, name: "Zip-up sports top", category: "Sportswear", price: 18000, color: "Men & women", image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 52, name: "Activewear set", category: "Sportswear", price: 20500, color: "Men & women", image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 53, name: "Breathable running tee", category: "Sportswear", price: 23000, color: "Men & women", image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 54, name: "Track pants", category: "Sportswear", price: 25500, color: "Men & women", image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 55, name: "Football fan shirt", category: "Sportswear", price: 18000, color: "Men & women", image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 56, name: "Gym vest", category: "Sportswear", price: 20500, color: "Men & women", image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 57, name: "Lightweight training set", category: "Sportswear", price: 23000, color: "Men & women", image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85', note: "Football-inspired jerseys, training sets and active essentials." },
  { id: 58, name: "Classic pullover hoodie", category: "Casualwear", price: 22000, color: "Men & women", image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 59, name: "Zip-up hoodie", category: "Casualwear", price: 24500, color: "Men & women", image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 60, name: "Fleece joggers", category: "Casualwear", price: 27000, color: "Men & women", image: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 61, name: "Matching hoodie set", category: "Casualwear", price: 29500, color: "Men & women", image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 62, name: "Oversized sweatshirt", category: "Casualwear", price: 22000, color: "Men & women", image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 63, name: "Cargo joggers", category: "Casualwear", price: 24500, color: "Men & women", image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 64, name: "Relaxed lounge set", category: "Casualwear", price: 27000, color: "Men & women", image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 65, name: "Crew-neck sweatshirt", category: "Casualwear", price: 29500, color: "Men & women", image: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 66, name: "Everyday tracksuit", category: "Casualwear", price: 22000, color: "Men & women", image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 67, name: "Lightweight zip jacket", category: "Casualwear", price: 24500, color: "Men & women", image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 68, name: "Cotton sweatpants", category: "Casualwear", price: 27000, color: "Men & women", image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 69, name: "Boxy sweatshirt", category: "Casualwear", price: 29500, color: "Men & women", image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 70, name: "Ribbed lounge set", category: "Casualwear", price: 22000, color: "Men & women", image: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 71, name: "Streetwear co-ord", category: "Casualwear", price: 24500, color: "Men & women", image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 72, name: "Drawstring joggers", category: "Casualwear", price: 27000, color: "Men & women", image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 73, name: "Varsity jacket", category: "Casualwear", price: 29500, color: "Men & women", image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 74, name: "Relaxed shorts set", category: "Casualwear", price: 22000, color: "Men & women", image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 75, name: "Quarter-zip pullover", category: "Casualwear", price: 24500, color: "Men & women", image: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 76, name: "Everyday casual set", category: "Casualwear", price: 27000, color: "Men & women", image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85', note: "Comfortable hoodies, joggers and coordinated weekend outfits." },
  { id: 77, name: "Cotton day dress", category: "Dresses", price: 28000, color: "Women", image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 78, name: "Ankara midi dress", category: "Dresses", price: 30500, color: "Women", image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 79, name: "Maxi summer dress", category: "Dresses", price: 33000, color: "Women", image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 80, name: "Shirt dress", category: "Dresses", price: 35500, color: "Women", image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 81, name: "Wrap dress", category: "Dresses", price: 28000, color: "Women", image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 82, name: "Boubou-inspired dress", category: "Dresses", price: 30500, color: "Women", image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 83, name: "A-line casual dress", category: "Dresses", price: 33000, color: "Women", image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 84, name: "Linen midi dress", category: "Dresses", price: 35500, color: "Women", image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 85, name: "Puff-sleeve dress", category: "Dresses", price: 28000, color: "Women", image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 86, name: "Straight-cut kaftan dress", category: "Dresses", price: 30500, color: "Women", image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 87, name: "Floral weekend dress", category: "Dresses", price: 33000, color: "Women", image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 88, name: "Tiered maxi dress", category: "Dresses", price: 35500, color: "Women", image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 89, name: "Modest long dress", category: "Dresses", price: 28000, color: "Women", image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 90, name: "Gathered waist dress", category: "Dresses", price: 30500, color: "Women", image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 91, name: "Off-shoulder occasion dress", category: "Dresses", price: 33000, color: "Women", image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 92, name: "Everyday tunic dress", category: "Dresses", price: 35500, color: "Women", image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 93, name: " Ankara panel dress", category: "Dresses", price: 28000, color: "Women", image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 94, name: "Elegant dinner dress", category: "Dresses", price: 30500, color: "Women", image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 95, name: "Relaxed weekend maxi", category: "Dresses", price: 33000, color: "Women", image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85', note: "Easy-to-wear dresses for work, outings, celebrations and weekends." },
  { id: 96, name: "Structured everyday handbag", category: "Accessories", price: 15000, color: "Accessories", image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 97, name: "Mini shoulder bag", category: "Accessories", price: 17500, color: "Accessories", image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 98, name: "Crossbody bag", category: "Accessories", price: 20000, color: "Accessories", image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 99, name: "Classic tote bag", category: "Accessories", price: 22500, color: "Accessories", image: 'https://images.unsplash.com/photo-1506629905607-d9d3a9f1d9f1?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 100, name: "Leather-look belt", category: "Accessories", price: 15000, color: "Accessories", image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 101, name: "Statement earrings", category: "Accessories", price: 17500, color: "Accessories", image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 102, name: "Beaded bracelet set", category: "Accessories", price: 20000, color: "Accessories", image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 103, name: "Minimal necklace", category: "Accessories", price: 22500, color: "Accessories", image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 104, name: "Everyday sunglasses", category: "Accessories", price: 15000, color: "Accessories", image: 'https://images.unsplash.com/photo-1506629905607-d9d3a9f1d9f1?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 105, name: "Classic cap", category: "Accessories", price: 17500, color: "Accessories", image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 106, name: "Bucket hat", category: "Accessories", price: 20000, color: "Accessories", image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 107, name: "Soft scarf", category: "Accessories", price: 22500, color: "Accessories", image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 108, name: "Evening clutch", category: "Accessories", price: 15000, color: "Accessories", image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 109, name: "Woven handbag", category: "Accessories", price: 17500, color: "Accessories", image: 'https://images.unsplash.com/photo-1506629905607-d9d3a9f1d9f1?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 110, name: "Pendant necklace", category: "Accessories", price: 20000, color: "Accessories", image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 111, name: "Layered bracelet", category: "Accessories", price: 22500, color: "Accessories", image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 112, name: "Premium wallet", category: "Accessories", price: 15000, color: "Accessories", image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 113, name: "Fashion slides", category: "Accessories", price: 17500, color: "Accessories", image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 114, name: "Statement headwrap", category: "Accessories", price: 20000, color: "Accessories", image: 'https://images.unsplash.com/photo-1506629905607-d9d3a9f1d9f1?auto=format&fit=crop&w=900&q=85', note: "Finishing touches for everyday outfits and special occasions." },
  { id: 115, name: "Kids Ankara two-piece set", category: "Kids (5–12)", price: 12000, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 116, name: "Boys cotton T-shirt", category: "Kids (5–12)", price: 14500, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 117, name: "Girls cotton day dress", category: "Kids (5–12)", price: 17000, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 118, name: "Kids polo shirt", category: "Kids (5–12)", price: 19500, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 119, name: "Boys smart senator set", category: "Kids (5–12)", price: 12000, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 120, name: "Girls Ankara peplum set", category: "Kids (5–12)", price: 14500, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 121, name: "Kids denim jeans", category: "Kids (5–12)", price: 17000, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 122, name: "Girls party dress", category: "Kids (5–12)", price: 19500, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 123, name: "Boys casual shorts set", category: "Kids (5–12)", price: 12000, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 124, name: "Kids hoodie and joggers", category: "Kids (5–12)", price: 14500, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 125, name: "Girls modest maxi dress", category: "Kids (5–12)", price: 17000, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 126, name: "Boys native kaftan", category: "Kids (5–12)", price: 19500, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 127, name: "Kids football jersey", category: "Kids (5–12)", price: 12000, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 128, name: "Girls skirt and top set", category: "Kids (5–12)", price: 14500, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 129, name: "Kids denim jacket", category: "Kids (5–12)", price: 17000, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 130, name: "Boys printed shirt", category: "Kids (5–12)", price: 19500, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 131, name: "Girls puff-sleeve dress", category: "Kids (5–12)", price: 12000, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 132, name: "Kids festive native wear", category: "Kids (5–12)", price: 14500, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 133, name: "Everyday cotton co-ord", category: "Kids (5–12)", price: 17000, color: "Boys & girls · Ages 5–12", image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=900&q=85', note: "Comfortable, colourful Nigerian kidswear for school, outings and celebrations." },
  { id: 134, name: 'Agbada Design 01', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5799.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 135, name: 'Agbada Design 02', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5800.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 136, name: 'Agbada Design 03', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5801.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 137, name: 'Agbada Design 04', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5802.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 138, name: 'Agbada Design 05', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5803.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 139, name: 'Agbada Design 06', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5804.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 140, name: 'Agbada Design 07', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5805.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 141, name: 'Agbada Design 08', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5806.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 142, name: 'Agbada Design 09', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5807.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 143, name: 'Agbada Design 10', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5808.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 144, name: 'Agbada Design 11', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5809.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 145, name: 'Agbada Design 12', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5810.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 146, name: 'Agbada Design 13', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5811.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 147, name: 'Agbada Design 14', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5812.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 148, name: 'Agbada Design 15', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5813.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 149, name: 'Agbada Design 16', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5814.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 150, name: 'Agbada Design 17', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5815.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 151, name: 'Agbada Design 18', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5816.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
  { id: 152, name: 'Agbada Design 19', category: 'Traditional Wear', price: 0, color: 'Made to order', image: 'https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/images/IMG_5817.JPG', note: 'Nigerian traditional agbada design · Enquire for fabric, colour and sizing.' },
];

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

function productCard(product: Product) {
  return `
    <article class="product-card">
      <button class="product-image"
        data-view="${product.id}"
        aria-label="Enquire about ${product.name}">
        <img src="${product.image}"
          alt="${product.name}" loading="lazy">
        <span class="image-label">
          ${[2, 4, 5, 6].includes(product.id) ? "" : `ADELUX / OBJECT ${String(product.id).padStart(2, "0")}`}
        </span>
        <span class="quick-add">
          Add to cart
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
    'Shirts & Tops',
    'Denim',
    'Sportswear',
    'Casualwear',
    'Dresses',
    'Accessories',
    'Traditional Wear',
    'Kids (5–12)',
  ];

  const shown = products.filter(product =>
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
        <a href="#collection">Shop</a>
        <a href="#story">Our point of view</a>
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
          <button data-shop-category="Shirts & Tops">Shirts & tops</button>
          <button data-shop-category="Denim">Baggy jeans</button>
          <button data-shop-category="Sportswear">Jerseys</button>
          <button data-shop-category="Casualwear">Joggers</button>
          <button data-shop-category="Casualwear">Hoodies</button>
          <button data-shop-category="Dresses">Cotton dresses</button>
          <button data-shop-category="Accessories">Shoes</button>
          <button data-shop-category="Accessories">Bags</button>
          <button data-shop-category="Accessories">Jewelry</button>
          <button data-shop-category="Traditional Wear">Agbada designs</button>
          <button data-shop-category="Kids (5–12)">Kids clothing · Ages 5–12</button>
        </div>
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
          <div>
            <p class="eyebrow">THE CURRENT EDIT</p>
            <h2>AVAILABLE <em>PRODUCTS</em></h2>
          </div>
          <p class="section-aside">
            Premium quality and everyday style,<br>for all ages.
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
            : `<p class="no-results">${activeCategory === 'Kids (5–12)' ? 'No pieces match this search. Try another style.' : 'Nothing in this edit yet.'}</p>`}
        </div>
      </section>

      <section class="campaign">
        <img
          src="https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/SECOND%20FRAME.png"
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

    <p class="image-credit">Agbada reference photograph: Ayobami99 / Wikimedia Commons · CC BY-SA 4.0</p>

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
    activeCategory = button.dataset.shopCategory || 'All pieces';
    searchTerm = '';
    render();
    setMenuOpen(false);
    document.querySelector('#collection')?.scrollIntoView({ behavior: 'smooth' });
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
