// ===== NEW SHOW OFF THE BRAND MAN — Main JS =====

// ---------- PRODUCT DATA ----------
const products = [
  { id: 1, name: "Shadow Oversized Tee", category: "T-Shirts", price: 1299, oldPrice: 1799, image: "images/product-tshirt.png", badge: "New", color: "black", sizes: ["S", "M", "L", "XL"], rating: 4.5, reviews: 28, desc: "Premium heavyweight cotton oversized tee with a relaxed drop-shoulder fit. Designed for those who own the room.", fabric: "100% Premium Cotton — 240 GSM", fit: "Oversized / Relaxed" },
  { id: 2, name: "Urban Flow Shirt", category: "Shirts", price: 1899, oldPrice: 2499, image: "images/product-shirt.png", badge: "Trending", color: "white", sizes: ["S", "M", "L", "XL"], rating: 4.7, reviews: 42, desc: "Clean-cut casual shirt in breathable cotton blend. Subtle texture, tailored modern fit.", fabric: "Cotton-Linen Blend — 180 GSM", fit: "Regular / Modern" },
  { id: 3, name: "Stealth Joggers", category: "Pants", price: 1699, oldPrice: 2199, image: "images/product-pants.png", badge: "Best Seller", color: "black", sizes: ["S", "M", "L", "XL"], rating: 4.8, reviews: 63, desc: "Tapered joggers with premium stretch fabric. Elastic waistband, zip pockets, street-ready comfort.", fabric: "Cotton-Polyester Stretch — 280 GSM", fit: "Slim / Tapered" },
  { id: 4, name: "Storm Oversized Hoodie", category: "Oversized", price: 2499, oldPrice: 3199, image: "images/product-oversized.png", badge: "Hot", color: "gray", sizes: ["S", "M", "L", "XL"], rating: 4.6, reviews: 35, desc: "Ultra-heavyweight oversized hoodie with kangaroo pocket and ribbed cuffs. Layering essential.", fabric: "French Terry Cotton — 380 GSM", fit: "Oversized / Boxy" },
  { id: 5, name: "Midnight Drop Tee", category: "T-Shirts", price: 1199, oldPrice: null, image: "images/product-tshirt.png", badge: null, color: "black", sizes: ["S", "M", "L", "XL"], rating: 4.3, reviews: 17, desc: "Essential crew-neck tee with signature embroidered logo. Everyday streetwear staple.", fabric: "Combed Cotton — 200 GSM", fit: "Regular" },
  { id: 6, name: "Boulevard Casual Shirt", category: "Shirts", price: 2099, oldPrice: 2799, image: "images/product-shirt.png", badge: "New", color: "white", sizes: ["M", "L", "XL"], rating: 4.4, reviews: 21, desc: "Premium twill cotton shirt with relaxed collar. Perfect for layered looks.", fabric: "Twill Cotton — 160 GSM", fit: "Relaxed" },
  { id: 7, name: "Apex Cargo Pants", category: "Pants", price: 2299, oldPrice: null, image: "images/product-pants.png", badge: null, color: "black", sizes: ["S", "M", "L"], rating: 4.5, reviews: 29, desc: "Utility cargo pants with multiple pockets and adjustable cuffs. Street meets function.", fabric: "Ripstop Cotton — 260 GSM", fit: "Relaxed / Tapered" },
  { id: 8, name: "Cloud Nine Oversized Tee", category: "Oversized", price: 1499, oldPrice: 1999, image: "images/product-tshirt.png", badge: "Trending", color: "gray", sizes: ["S", "M", "L", "XL"], rating: 4.7, reviews: 44, desc: "Super-soft oversized tee with dropped hem and raw-edge seams. Statement comfort.", fabric: "Organic Cotton — 260 GSM", fit: "Oversized / Drop Shoulder" },
  { id: 9, name: "Desert Wave Linen Shirt", category: "Shirts", price: 2199, oldPrice: 2899, image: "images/coll-summer.png", badge: "Summer", color: "white", sizes: ["S", "M", "L", "XL"], rating: 4.9, reviews: 12, desc: "Ultra-breathable linen shirt for maximum summer comfort. Relaxed fit, premium feel.", fabric: "100% Belgian Linen", fit: "Relaxed" },
  { id: 10, name: "Stealth Utility Vest", category: "Oversized", price: 3499, oldPrice: 4499, image: "images/coll-limit.png", badge: "Limited", color: "black", sizes: ["M", "L", "XL"], rating: 5.0, reviews: 8, desc: "Limited edition utility vest with modular pockets and waterproof finish.", fabric: "Gore-Tex Tech Shell", fit: "Regular" },
  { id: 11, name: "Urban Drifter Cap", category: "Oversized", price: 999, oldPrice: 1299, image: "images/coll-acc.png", badge: "New", color: "black", sizes: ["One Size"], rating: 4.8, reviews: 56, desc: "Distressed finish urban cap with adjustable strap and signature NSOBM embroidery.", fabric: "Washed Cotton Twill", fit: "Adjustable" },
  { id: 12, name: "Nomad Tote Bag", category: "Oversized", price: 1299, oldPrice: null, image: "images/coll-acc.png", badge: null, color: "tan", sizes: ["Large"], rating: 4.7, reviews: 31, desc: "Heavy-duty canvas tote with reinforced leather handles. Built for the daily commute.", fabric: "Heavy Canvas & Leather", fit: "Oversized" },
  { id: 13, name: "Midnight Phantom Sneakers", category: "Accessories", price: 4499, oldPrice: 5999, image: "images/prod_shoes.png", badge: "Trending", color: "black", sizes: ["UK 7", "UK 8", "UK 9", "UK 10"], rating: 4.8, reviews: 112, desc: "Premium high-top streetwear sneakers with a sleek dark aesthetic.", fabric: "Premium Leather & Mesh", fit: "True to size" },
  { id: 14, name: "Monarch Tailored Suit", category: "Formal", price: 12999, oldPrice: 15999, image: "images/prod_formal.png", badge: "New", color: "navy", sizes: ["38", "40", "42", "44"], rating: 4.9, reviews: 45, desc: "Elegant meticulously tailored suit for high-end formal wear.", fabric: "Italian Wool Blend", fit: "Slim Fit" },
  { id: 15, name: "Street Kid Outfit Set", category: "Kids", price: 1899, oldPrice: 2499, image: "images/prod_kids.png", badge: "Hot", color: "multicolor", sizes: ["3-4Y", "5-6Y", "7-8Y"], rating: 4.7, reviews: 88, desc: "Stylish and comfortable streetwear set designed specifically for kids.", fabric: "100% Cotton", fit: "Relaxed" },
  { id: 17, name: "Nightfall Oversized Tee", category: "T-Shirts", price: 1699, oldPrice: 2099, image: "images/prod_mens_tshirt.png", badge: "Trending", color: "black", sizes: ["M", "L", "XL", "XXL"], rating: 4.9, reviews: 72, desc: "Premium heavyweight black oversized tee. A modern streetwear essential.", fabric: "100% Organic Cotton", fit: "Oversized" },
  { id: 18, name: "Tactical Urban Cargos", category: "Pants", price: 2999, oldPrice: 3599, image: "images/prod_mens_pants.png", badge: "Hot", color: "black", sizes: ["S", "M", "L"], rating: 4.8, reviews: 41, desc: "Premium tactical cargo pants with modular pockets and adjustable cuffs.", fabric: "Heavyweight Twill", fit: "Relaxed" },
  { id: 19, name: "Luxury Core Shirt", category: "Shirts", price: 2499, oldPrice: null, image: "images/prod_mens_shirt.png", badge: "New", color: "white", sizes: ["S", "M", "L", "XL"], rating: 4.7, reviews: 29, desc: "Textured luxury casual shirt. Perfect for layering or wearing solo.", fabric: "Cotton-Linen Blend", fit: "Modern Fit" },
  { id: 20, name: "Onyx Street Hoodie", category: "Oversized", price: 2999, oldPrice: 3899, image: "images/product-oversized.png", badge: "Trending", color: "black", sizes: ["S", "M", "L", "XL"], rating: 4.8, reviews: 52, desc: "Premium black oversized hoodie with high-density print. Perfect for the urban streets.", fabric: "Heavyweight French Terry", fit: "Oversized" },
  { id: 21, name: "Slate Tech Pants", category: "Pants", price: 2499, oldPrice: null, image: "images/product-pants.png", badge: "New", color: "gray", sizes: ["M", "L", "XL"], rating: 4.6, reviews: 19, desc: "Sleek tech-inspired pants with water-resistant finish and adjustable ankles.", fabric: "Nylon-Spandex Blend", fit: "Tapered" },
  { id: 22, name: "Ghost White Oversized Tee", category: "Oversized", price: 1599, oldPrice: 1999, image: "images/product-tshirt.png", badge: "Trending", color: "white", sizes: ["S", "M", "L", "XL"], rating: 4.7, reviews: 33, desc: "Clean, minimalist white oversized tee. High-neck detail and premium fabric feel.", fabric: "Heavy Cotton", fit: "Oversized" },
  { id: 24, name: "Desert Sand Cargo Short", category: "Pants", price: 1899, oldPrice: 2299, image: "images/product-pants.png", badge: "New", color: "tan", sizes: ["S", "M", "L"], rating: 4.5, reviews: 14, desc: "Lightweight summer cargo shorts with a clean utility look. Premium sand-washed finish.", fabric: "Poplin Cotton", fit: "Relaxed" },
  { id: 25, name: "Core Logo Oversized Tee", category: "T-Shirts", price: 1399, oldPrice: null, image: "images/product-tshirt.png", badge: "New", color: "black", sizes: ["S", "M", "L", "XL"], rating: 4.9, reviews: 26, desc: "The definitive NSOBM oversized tee featuring our signature core logo in high-density print.", fabric: "Heavyweight Cotton", fit: "Oversized" },
];

// ---------- CART STATE ----------
let cart = JSON.parse(localStorage.getItem('nsobm_cart') || '[]');

function saveCart() { localStorage.setItem('nsobm_cart', JSON.stringify(cart)); updateCartCount(); }
function updateCartCount() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = count);
}
function addToCart(productId, size) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  size = size || product.sizes[0];
  const existing = cart.find(i => i.id === productId && i.size === size);
  if (existing) { existing.qty++; } else { cart.push({ id: productId, name: product.name, price: product.price, image: product.image, size, qty: 1 }); }
  saveCart();
  showToast(`${product.name} added to cart!`);
}
function removeFromCart(index) { cart.splice(index, 1); saveCart(); }
function updateQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty < 1) cart.splice(index, 1);
  saveCart();
}

// ---------- TOAST ----------
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ---------- NAVBAR ----------
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

function toggleMobileNav() {
  document.getElementById('mobileNav')?.classList.toggle('open');
  document.getElementById('mobileOverlay')?.classList.toggle('open');
}

// ---------- SCROLL ANIMATIONS ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.15 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-up,.fade-in,.scale-in').forEach(el => observer.observe(el));
  updateCartCount();
  initPage();
});

// ---------- RENDER PRODUCT CARDS ----------
function renderProductCard(p) {
  return `
    <div class="product-card fade-up" onclick="goToProduct(${p.id})">
      <div class="product-card__img">
        <img src="${p.image}" alt="${p.name}">
        ${p.badge ? `<span class="product-card__badge badge badge-dark">${p.badge}</span>` : ''}
        <div class="product-card__actions">
          <button class="product-card__action-btn" title="Quick View" onclick="event.stopPropagation();goToProduct(${p.id})"><i class="fas fa-eye"></i></button>
          <button class="product-card__action-btn" title="Add to Cart" onclick="event.stopPropagation();addToCart(${p.id})"><i class="fas fa-shopping-bag"></i></button>
        </div>
      </div>
      <p class="product-card__brand">NSOBM</p>
      <h3 class="product-card__name">${p.name}</h3>
      <div class="product-card__price">
        <span>₹${p.price.toLocaleString()}</span>
        ${p.oldPrice ? `<span class="old-price">₹${p.oldPrice.toLocaleString()}</span>` : ''}
      </div>
    </div>`;
}

function goToProduct(id) { window.location.href = `product.html?id=${id}`; }

// ---------- PAGE INIT ----------
function initPage() {
  // Homepage grids
  const trendingGrid = document.getElementById('trendingGrid');
  if (trendingGrid) {
    trendingGrid.innerHTML = products.slice(0, 12).map(renderProductCard).join('');
    trendingGrid.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
  const newGrid = document.getElementById('newArrivalsGrid');
  if (newGrid) {
    newGrid.innerHTML = products.filter(p => p.badge === 'New' || p.badge === 'Trending').slice(0, 6).map(renderProductCard).join('');
    newGrid.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }

  // Shop page
  const shopGrid = document.getElementById('shopProductsGrid');
  if (shopGrid) initShop();

  // Product detail
  const productDetail = document.getElementById('productDetail');
  if (productDetail) initProductDetail();

  // Cart page
  const cartItems = document.getElementById('cartItems');
  if (cartItems) renderCart();

  // Checkout page
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) initCheckout();
}

// ---------- SHOP PAGE ----------
function initShop() {
  let filtered = [...products];
  const grid = document.getElementById('shopProductsGrid');
  const countEl = document.getElementById('shopCount');
  const sortEl = document.getElementById('shopSort');

  function render() {
    grid.innerHTML = filtered.map(renderProductCard).join('');
    if (countEl) countEl.textContent = `${filtered.length} products`;
    grid.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }

  render();

  // Sort
  if (sortEl) sortEl.addEventListener('change', () => {
    const v = sortEl.value;
    if (v === 'low') filtered.sort((a, b) => a.price - b.price);
    else if (v === 'high') filtered.sort((a, b) => b.price - a.price);
    else if (v === 'newest') filtered.sort((a, b) => b.id - a.id);
    else filtered = [...products];
    render();
  });

  // Category filter
  document.querySelectorAll('.filter-cat').forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = [...document.querySelectorAll('.filter-cat:checked')].map(c => c.value);
      filtered = checked.length ? products.filter(p => checked.includes(p.category)) : [...products];
      render();
    });
  });

  // Size filter
  document.querySelectorAll('.filter-size').forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = [...document.querySelectorAll('.filter-size:checked')].map(c => c.value);
      filtered = checked.length ? products.filter(p => p.sizes.some(s => checked.includes(s))) : [...products];
      render();
    });
  });
}

// ---------- PRODUCT DETAIL ----------
function initProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const p = products.find(pr => pr.id === id) || products[0];

  document.getElementById('pdpName').textContent = p.name;
  document.getElementById('pdpPrice').innerHTML = `₹${p.price.toLocaleString()} ${p.oldPrice ? `<span class="old-price">₹${p.oldPrice.toLocaleString()}</span>` : ''}`;
  document.getElementById('pdpDesc').textContent = p.desc;
  document.getElementById('pdpMainImg').src = p.image;
  document.getElementById('pdpFabric').textContent = p.fabric;
  document.getElementById('pdpFit').textContent = p.fit;
  document.getElementById('pdpRating').innerHTML = `<span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))}</span> ${p.rating} (${p.reviews} reviews)`;

  // Sizes
  const sizeContainer = document.getElementById('pdpSizes');
  sizeContainer.innerHTML = p.sizes.map((s, i) => `<button class="size-option ${i === 0 ? 'active' : ''}" data-size="${s}">${s}</button>`).join('');
  let selectedSize = p.sizes[0];
  sizeContainer.querySelectorAll('.size-option').forEach(btn => {
    btn.addEventListener('click', () => {
      sizeContainer.querySelectorAll('.size-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = btn.dataset.size;
    });
  });

  // Thumbs
  const thumbs = document.getElementById('pdpThumbs');
  thumbs.innerHTML = [1, 2, 3, 4].map((_, i) => `<div class="product-gallery__thumb ${i === 0 ? 'active' : ''}"><img src="${p.image}" alt="View ${i + 1}"></div>`).join('');
  thumbs.querySelectorAll('.product-gallery__thumb').forEach(t => {
    t.addEventListener('click', () => {
      thumbs.querySelectorAll('.product-gallery__thumb').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
    });
  });

  // Add to cart / Buy now
  document.getElementById('pdpAddCart').addEventListener('click', () => addToCart(p.id, selectedSize));
  document.getElementById('pdpBuyNow').addEventListener('click', () => { addToCart(p.id, selectedSize); window.location.href = 'cart.html'; });

  // Related products
  const relGrid = document.getElementById('relatedGrid');
  if (relGrid) {
    const related = products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
    relGrid.innerHTML = related.map(renderProductCard).join('');
    relGrid.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }

  // Page title
  document.title = `${p.name} — NSOBM`;
}

// ---------- CART ----------
function renderCart() {
  const container = document.getElementById('cartItems');
  const summaryEl = document.getElementById('cartSummary');
  const emptyEl = document.getElementById('cartEmpty');
  const cartContent = document.getElementById('cartContent');

  if (cart.length === 0) {
    if (cartContent) cartContent.style.display = 'none';
    if (emptyEl) emptyEl.style.display = 'block';
    return;
  }
  if (cartContent) cartContent.style.display = 'grid';
  if (emptyEl) emptyEl.style.display = 'none';

  container.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <div class="cart-item__img"><img src="${item.image}" alt="${item.name}"></div>
      <div>
        <h4 class="cart-item__name">${item.name}</h4>
        <p class="cart-item__meta">Size: ${item.size}</p>
        <div class="cart-item__qty">
          <button onclick="updateQty(${i},-1);renderCart()">−</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${i},1);renderCart()">+</button>
        </div>
        <p class="cart-item__remove" onclick="removeFromCart(${i});renderCart()">Remove</p>
      </div>
      <div class="cart-item__price">₹${(item.price * item.qty).toLocaleString()}</div>
    </div>`).join('');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  summaryEl.innerHTML = `
    <div class="cart-summary__row"><span>Subtotal</span><span>₹${subtotal.toLocaleString()}</span></div>
    <div class="cart-summary__row"><span>Shipping</span><span>${shipping === 0 ? 'Free' : '₹' + shipping}</span></div>
    <div class="cart-summary__row total"><span>Total</span><span>₹${(subtotal + shipping).toLocaleString()}</span></div>
    <a href="checkout.html" class="btn btn-primary btn-full" style="margin-top:20px">Proceed to Checkout</a>
    <a href="shop.html" class="btn btn-outline btn-full" style="margin-top:8px">Continue Shopping</a>`;
}

// ---------- CHECKOUT ----------
function initCheckout() {
  const steps = document.querySelectorAll('.checkout-step');
  const panels = document.querySelectorAll('.checkout-panel');
  let currentStep = 0;

  function showStep(i) {
    panels.forEach((p, idx) => p.style.display = idx === i ? 'block' : 'none');
    steps.forEach((s, idx) => { s.classList.remove('active', 'done'); if (idx < i) s.classList.add('done'); if (idx === i) s.classList.add('active'); });
    currentStep = i;
  }
  showStep(0);

  document.getElementById('toPayment')?.addEventListener('click', (e) => { e.preventDefault(); showStep(1); });
  document.getElementById('toConfirm')?.addEventListener('click', (e) => {
    e.preventDefault(); showStep(2);
    cart = []; saveCart();
  });

  // Payment options
  document.querySelectorAll('.payment-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      opt.querySelector('input').checked = true;
    });
  });

  // Order summary
  const checkoutSummary = document.getElementById('checkoutSummary');
  if (checkoutSummary) {
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const shipping = subtotal > 999 ? 0 : 99;
    checkoutSummary.innerHTML = `
      ${cart.map(i => `<div class="cart-summary__row"><span>${i.name} × ${i.qty}</span><span>₹${(i.price * i.qty).toLocaleString()}</span></div>`).join('')}
      <div class="cart-summary__row"><span>Shipping</span><span>${shipping === 0 ? 'Free' : '₹' + shipping}</span></div>
      <div class="cart-summary__row total"><span>Total</span><span>₹${(subtotal + shipping).toLocaleString()}</span></div>`;
  }
}

// ---------- FILTER TOGGLE ----------
function toggleFilter(el) {
  el.closest('.filter-group').classList.toggle('collapsed');
}
function openMobileFilters() {
  document.querySelector('.filters')?.classList.add('open');
}
function closeMobileFilters() {
  document.querySelector('.filters')?.classList.remove('open');
}
