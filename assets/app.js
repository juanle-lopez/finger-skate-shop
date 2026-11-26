const PRODUCTS = [
  {id:"t1",cat:"tablas",name:"Tabla Clásica",price:14.9,img:"images/board_clasica.jpg",
    desc:"Maple canadiense sin tratar, 34 mm de ancho. Ligera y lista para personalizar a tu gusto."},
  {id:"t2",cat:"tablas",name:"Tabla Flame",price:16.9,img:"images/board_flame.jpg",
    desc:"Acabado de llamas blancas sobre fibra negra. Grip de alto agarre y canto biselado."},
  {id:"t3",cat:"tablas",name:"Tabla Check",price:16.9,img:"images/board_check.jpg",
    desc:"Estampado ajedrezado blanco y negro. Cóncavo medio, ideal para flips técnicos."},
  {id:"t4",cat:"tablas",name:"Tabla Wave",price:18.9,img:"images/board_wave.jpg",
    desc:"Estampado marmolado azul. Forma ancha y estable, perfecta para rampas y manuals."},
  {id:"r1",cat:"rampas",name:"Rampa Wedge",price:9.9,img:"images/ramp_wedge.jpg",
    desc:"Cuña de acero con ángulo suave. Ideal para coger velocidad e iniciarte en los saltos."},
  {id:"r2",cat:"rampas",name:"Quarter Pipe",price:12.9,img:"images/ramp_quarter.jpg",
    desc:"Transición curva de 90°. Perfecta para airwalks y grinds de entrada."},
  {id:"r3",cat:"rampas",name:"Set Escaleras + Rail",price:19.9,img:"images/ramp_stairs.jpg",
    desc:"Seis escalones con pasamanos de acero pulido. El clásico de todo street spot."},
  {id:"r4",cat:"rampas",name:"Ledge Box",price:11.9,img:"images/ramp_box.jpg",
    desc:"Cajón bajo con canto metálico, pensado para grinds y slides técnicos."},
  {id:"r5",cat:"rampas",name:"Rail Metálico",price:8.9,img:"images/ramp_rail.jpg",
    desc:"Rail recto independiente. Fácil de combinar con cualquier otro obstáculo."},
  {id:"r6",cat:"rampas",name:"Wedge Ledge",price:10.9,img:"images/ramp_wedge2.jpg",
    desc:"Cuña con ledge superior: dos obstáculos combinados en uno solo."},
  {id:"r7",cat:"rampas",name:"Mini Half-Pipe",price:15.9,img:"images/ramp_ubox.jpg",
    desc:"Transición doble en U, perfecta para encadenar trucos de ida y vuelta."},
  {id:"r8",cat:"rampas",name:"Pirámide",price:13.9,img:"images/ramp_pyramid.jpg",
    desc:"Plataforma elevada con cuatro caras en pendiente. Versátil para cualquier ángulo."},
  {id:"a1",cat:"acc",name:"Set de Ejes",price:6.9,img:"images/acc_ejes.jpg",
    desc:"Ejes de aluminio ligero y altura estándar. Respuesta ágil en los giros."},
  {id:"a2",cat:"acc",name:"Ruedas Pro",price:4.9,img:"images/acc_ruedas.jpg",
    desc:"Goma suave de alto rebote. Rodaje silencioso y muy controlado."},
  {id:"a3",cat:"acc",name:"Rodamientos",price:3.9,img:"images/acc_rodamientos.jpg",
    desc:"Precisión ABEC para ruedas rápidas y sin fricción."},
  {id:"a4",cat:"acc",name:"Tornillería",price:2.5,img:"images/acc_tornilleria.jpg",
    desc:"Kit completo de tornillos y tuercas para montar tu tabla desde cero."},
  {id:"a5",cat:"acc",name:"Grip Tape (x2)",price:3.5,img:"images/acc_grip.jpg",
    desc:"Dos láminas de grip de grano fino. Agarre máximo para tus dedos."}
];
const byId = (id) => PRODUCTS.find(p => p.id === id);
const fmt = (n) => n.toFixed(2).replace('.', ',') + ' €';

const TRUCK_COLORS = [
  {key:"plata",name:"Plata",filter:"none"},
  {key:"negro",name:"Negro",filter:"brightness(0.4) contrast(1.3)"},
  {key:"oro",name:"Oro",filter:"sepia(1) saturate(4) hue-rotate(-15deg) brightness(1.05)"}
];
const WHEEL_COLORS = [
  {key:"blanco",name:"Blanco",filter:"none"},
  {key:"negro",name:"Negro",filter:"brightness(0.3)"},
  {key:"naranja",name:"Naranja",filter:"sepia(1) saturate(5) hue-rotate(320deg) brightness(1.05)"}
];
const GRIP_COLORS = [
  {key:"negro",name:"Negro",filter:"none"},
  {key:"azul",name:"Azul",filter:"brightness(1.6) saturate(3) hue-rotate(185deg)"},
  {key:"rojo",name:"Rojo",filter:"brightness(1.5) saturate(4) hue-rotate(330deg)"}
];
const DECK_TIPS = {
  t1:"La Clásica es ligera y neutra: combínala con Ruedas Pro para ganar rapidez en los flips.",
  t2:"La Flame tiene mucho grip: unos Ejes anchos te darán más estabilidad en grinds.",
  t3:"La Check favorece los flips técnicos: prueba Rodamientos de precisión para más inercia.",
  t4:"La Wave es ancha y estable: perfecta para practicar en la Quarter Pipe o el Mini Half-Pipe."
};

const App = {
  cart: {}, toastSeq: 0,
  detailId: null, detailQty: 1,
  cfgDeck: 't1', cfgTruck: 'plata', cfgWheel: 'blanco', cfgGrip: 'negro', cfgBearings: true,

  init(){
    try {
      const raw = localStorage.getItem('fs_cart_v1');
      if (raw) { const c = JSON.parse(raw); if (c && typeof c === 'object') this.cart = c; }
    } catch(e) {}
    this.bindReveal();
    if (document.getElementById('gridTablas')) this.renderGrid('gridTablas', 'tablas');
    if (document.getElementById('gridRampas')) this.renderGrid('gridRampas', 'rampas');
    if (document.getElementById('gridAcc')) this.renderGrid('gridAcc', 'acc');
    if (document.getElementById('cfgDecks')) this.renderConfigurator();
    this.renderCartBadge();
    this.bindScroll();
    const bearingsBox = document.getElementById('cfgBearingsBox');
    if (bearingsBox) bearingsBox.checked = this.cfgBearings;
  },

  persist(){ try { localStorage.setItem('fs_cart_v1', JSON.stringify(this.cart)); } catch(e) {} },

  bindScroll(){
    const nav = document.getElementById('navEl');
    const bar = document.getElementById('progressBar');
    const totop = document.getElementById('totop');
    const hero = document.getElementById('heroImg');
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + '%';
      nav.classList.toggle('scrolled', y > 40);
      totop.classList.toggle('show', y > 700);
      hero.style.transform = 'translateY(' + Math.min(70, y * 0.15) + 'px) scale(1.04)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    totop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  },
  bindReveal(){
    const els = Array.from(document.querySelectorAll('.reveal, .reveal-item'));
    this._io = ('IntersectionObserver' in window) ? new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('on'); });
    }, { threshold: 0.12 }) : null;
    if (this._io) { els.forEach((el) => this._io.observe(el)); }
    else { els.forEach((el) => el.classList.add('on')); }
  },
  observeReveal(nodeList){
    if (this._io) { nodeList.forEach((el) => this._io.observe(el)); }
    else { nodeList.forEach((el) => el.classList.add('on')); }
  },

  cartCount(){ return Object.values(this.cart).reduce((a,b)=>a+b,0); },
  cartTotal(){ return PRODUCTS.reduce((s,p)=> s + (this.cart[p.id]||0)*p.price, 0); },

  renderCartBadge(){
    const el = document.getElementById('cartBadge');
    const n = this.cartCount();
    el.innerHTML = n > 0 ? '<span class="badge">' + n + '</span>' : '';
    const tb = document.getElementById('tabCartBadge');
    if (tb) { tb.textContent = n; tb.style.display = n > 0 ? 'flex' : 'none'; }
  },

  renderGrid(containerId, cat){
    const el = document.getElementById(containerId);
    const items = PRODUCTS.filter(p => p.cat === cat);
    el.innerHTML = items.map((p, i) => {
      const qty = this.cart[p.id] || 0;
      return '<div class="card reveal-pop" style="transition-delay:' + ((i % 4) * 0.08) + 's">' +
        '<div class="cardimg" onclick="App.openDetail(\'' + p.id + '\')">' +
          '<img src="' + p.img + '" alt="' + p.name + '">' +
          '<span class="qtybadge" data-qty-for="' + p.id + '" style="display:' + (qty > 0 ? 'flex' : 'none') + '">' + qty + '</span>' +
        '</div>' +
        '<div class="cardbody">' +
          '<div class="cardname">' + p.name + '</div>' +
          '<div class="cardprice">' + fmt(p.price) + '</div>' +
          '<button class="addbtn" onclick="App.addToCart(\'' + p.id + '\')">Añadir a la cesta</button>' +
        '</div>' +
      '</div>';
    }).join('');
    this.observeReveal(el.querySelectorAll('.reveal-pop'));
  },
  refreshGrids(){
    document.querySelectorAll('[data-qty-for]').forEach((el) => {
      const id = el.getAttribute('data-qty-for');
      const qty = this.cart[id] || 0;
      el.textContent = qty;
      el.style.display = qty > 0 ? 'flex' : 'none';
    });
  },

  showToast(msg){
    const seq = ++this.toastSeq;
    let el = document.getElementById('toastEl');
    if (el) el.remove();
    el = document.createElement('div');
    el.id = 'toastEl';
    el.className = 'toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => { if (this.toastSeq === seq) { const t = document.getElementById('toastEl'); if (t) t.remove(); } }, 2200);
  },

  addToCart(id){
    this.cart[id] = (this.cart[id] || 0) + 1;
    this.persist();
    this.renderCartBadge();
    this.refreshGrids();
    if (this.cartDrawerOpen) this.renderDrawer();
    this.showToast(byId(id).name + ' añadida a la cesta');
  },
  changeQty(id, delta){
    this.cart[id] = (this.cart[id] || 0) + delta;
    if (this.cart[id] <= 0) delete this.cart[id];
    this.persist();
    this.renderCartBadge();
    this.refreshGrids();
    this.renderDrawer();
  },
  removeItem(id){
    delete this.cart[id];
    this.persist();
    this.renderCartBadge();
    this.refreshGrids();
    this.renderDrawer();
  },

  cartDrawerOpen: false,
  toggleCart(){
    this.cartDrawerOpen = !this.cartDrawerOpen;
    if (this.cartDrawerOpen) { this.renderDrawer(); } else { this.closeOverlay('drawerWrap'); }
  },
  closeCart(){ this.cartDrawerOpen = false; this.closeOverlay('drawerWrap'); },
  renderDrawer(){
    const items = PRODUCTS.filter(p => this.cart[p.id]);
    const linesHtml = items.length === 0
      ? '<div class="emptycart">Tu cesta está vacía.<br>Añade alguna tabla, rampa o accesorio.</div>'
      : items.map(p => {
          const qty = this.cart[p.id];
          return '<div class="drawerline">' +
            '<img src="' + p.img + '" alt="' + p.name + '">' +
            '<div class="dlinfo">' +
              '<div class="dlname">' + p.name + '</div>' +
              '<div class="dlprice">' + fmt(p.price) + ' / ud.</div>' +
              '<div class="qtyctrl">' +
                '<button onclick="App.changeQty(\'' + p.id + '\',-1)">-</button>' +
                '<span>' + qty + '</span>' +
                '<button onclick="App.changeQty(\'' + p.id + '\',1)">+</button>' +
              '</div>' +
            '</div>' +
            '<div class="dlright">' +
              '<div class="dltotal">' + fmt(p.price * qty) + '</div>' +
              '<button class="rm" onclick="App.removeItem(\'' + p.id + '\')">Quitar</button>' +
            '</div>' +
          '</div>';
        }).join('');
    const html =
      '<div class="backdrop" onclick="App.closeCart()"></div>' +
      '<aside class="drawer">' +
        '<div class="drawerhead"><span>Tu cesta</span><button class="iconbtn" onclick="App.closeCart()">✕</button></div>' +
        '<div class="drawerlist">' + linesHtml + '</div>' +
        '<div class="drawerfoot">' +
          '<div class="subtotal"><span>Subtotal</span><span>' + fmt(this.cartTotal()) + '</span></div>' +
          '<button class="checkoutbtn" onclick="App.openPayment()">Finalizar compra</button>' +
        '</div>' +
      '</aside>';
    this.showOverlay('drawerWrap', html);
  },

  openPayment(){
    if (Object.keys(this.cart).length === 0) return;
    this.cartDrawerOpen = false;
    const html =
      '<div class="backdrop" onclick="App.closePayment()"></div>' +
      '<div class="modal paymodal">' +
        '<div class="payhead"><h3 style="font-size:19px">Pago</h3><button class="iconbtn" onclick="App.closePayment()">✕</button></div>' +
        '<div class="paytotal"><span>Total a pagar</span><span>' + fmt(this.cartTotal()) + '</span></div>' +
        '<div class="field"><label>Nombre completo</label><input type="text" id="payName" placeholder="Nombre y apellidos"></div>' +
        '<div class="field"><label>Email</label><input type="email" id="payEmail" placeholder="tucorreo@ejemplo.com"></div>' +
        '<div class="field"><label>Número de tarjeta (simulada)</label><input type="text" id="payCard" inputmode="numeric" maxlength="19" placeholder="4242 4242 4242 4242"></div>' +
        '<div class="fieldrow">' +
          '<div class="field"><label>Caducidad</label><input type="text" id="payExpiry" placeholder="MM/AA" maxlength="5"></div>' +
          '<div class="field"><label>CVC</label><input type="text" id="payCvc" inputmode="numeric" maxlength="3" placeholder="123"></div>' +
        '</div>' +
        '<button class="checkoutbtn" onclick="App.submitPayment()">Pagar ' + fmt(this.cartTotal()) + '</button>' +
        '<div class="securenote"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="1.5"/></svg>Entorno de pago simulado — no se procesa ningún cargo real.</div>' +
      '</div>';
    this.showOverlay('drawerWrap', html);
    document.getElementById('payCard').addEventListener('input', (e) => {
      const digits = e.target.value.replace(/\D/g, '').slice(0, 16);
      e.target.value = digits.replace(/(.{4})/g, '$1 ').trim();
    });
    document.getElementById('payExpiry').addEventListener('input', (e) => {
      let v = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
      if (v.length >= 3) v = v.slice(0,2) + '/' + v.slice(2);
      e.target.value = v;
    });
    document.getElementById('payCvc').addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
    });
  },
  closePayment(){ this.renderDrawer(); this.cartDrawerOpen = true; },

  submitPayment(){
    const name = document.getElementById('payName').value.trim();
    const email = document.getElementById('payEmail').value.trim();
    const card = document.getElementById('payCard').value.replace(/\D/g,'');
    if (!name || !email || card.length < 12) {
      this.showToast('Rellena nombre, email y un número de tarjeta válido');
      return;
    }
    this.showOverlay('drawerWrap',
      '<div class="backdrop"></div>' +
      '<div class="modal" style="text-align:center">' +
        '<div class="spinner"></div>' +
        '<h3 style="font-size:18px">Procesando pago…</h3>' +
        '<p class="modalsub">Un momento, estamos confirmando tu pedido simulado.</p>' +
      '</div>'
    );
    setTimeout(() => {
      const order = 'FS-' + Math.floor(1000 + Math.random() * 9000);
      this.cart = {};
      this.persist();
      this.renderCartBadge();
      this.refreshGrids();
      this.showOverlay('drawerWrap',
        '<div class="backdrop" onclick="App.closeAll()"></div>' +
        '<div class="modal">' +
          '<div class="modalicon">✓</div>' +
          '<h3>¡Pago realizado!</h3>' +
          '<p>Número de pedido <b>' + order + '</b></p>' +
          '<p class="modalsub">Compra de demostración — no se ha realizado ningún cargo real. Te hemos "enviado" la confirmación a ' + email + '. ¡Gracias por pasarte por la tienda!</p>' +
          '<button class="btn" style="margin:14px auto 0" onclick="App.closeAll()">Seguir comprando</button>' +
        '</div>'
      );
    }, 1400);
  },
  closeAll(){ this.cartDrawerOpen = false; this.closeOverlay('drawerWrap'); },

  openDetail(id){
    this.detailId = id; this.detailQty = 1;
    this.renderDetail();
  },
  renderDetail(){
    const p = byId(this.detailId);
    if (!p) return;
    const html =
      '<div class="backdrop" onclick="App.closeDetail()"></div>' +
      '<div class="modal detailmodal">' +
        '<div class="detailimg"><img src="' + p.img + '" alt="' + p.name + '"></div>' +
        '<div class="detailbody">' +
          '<div class="detailname">' + p.name + '</div>' +
          '<div class="detailprice">' + fmt(p.price) + '</div>' +
          '<p class="detaildesc">' + p.desc + '</p>' +
          '<div class="detailqty">' +
            '<button onclick="App.decDetailQty()">-</button>' +
            '<span id="detailQtyVal">' + this.detailQty + '</span>' +
            '<button onclick="App.incDetailQty()">+</button>' +
          '</div>' +
          '<button class="detailadd" onclick="App.addDetailToCart()">Añadir a la cesta</button>' +
        '</div>' +
        '<button class="iconbtn" style="position:absolute;top:16px;right:16px" onclick="App.closeDetail()">✕</button>' +
      '</div>';
    this.showOverlay('detailWrap', html);
  },
  closeDetail(){ this.detailId = null; this.closeOverlay('detailWrap'); },
  incDetailQty(){ this.detailQty++; document.getElementById('detailQtyVal').textContent = this.detailQty; },
  decDetailQty(){ this.detailQty = Math.max(1, this.detailQty - 1); document.getElementById('detailQtyVal').textContent = this.detailQty; },
  addDetailToCart(){
    const id = this.detailId;
    if (!id) return;
    this.cart[id] = (this.cart[id] || 0) + this.detailQty;
    this.persist();
    this.renderCartBadge();
    this.refreshGrids();
    this.closeDetail();
    this.showToast(byId(id).name + ' añadida a la cesta');
  },

  showOverlay(key, html){
    let holder = document.getElementById(key);
    if (!holder) {
      holder = document.createElement('div');
      holder.id = key;
      document.getElementById('overlays').appendChild(holder);
    }
    holder.innerHTML = html;
  },
  closeOverlay(key){
    const holder = document.getElementById(key);
    if (holder) holder.innerHTML = '';
  },

  selectDeck(id){ this.cfgDeck = id; this.renderConfigurator(); },
  selectTruck(key){ this.cfgTruck = key; this.renderConfigurator(); },
  selectWheel(key){ this.cfgWheel = key; this.renderConfigurator(); },
  selectGrip(key){ this.cfgGrip = key; this.renderConfigurator(); },
  toggleBearings(){ this.cfgBearings = document.getElementById('cfgBearingsBox').checked; this.renderConfigurator(); },

  renderConfigurator(){
    const firstPaint = !this._cfgRevealed;
    const popClass = firstPaint ? ' reveal-pop' : '';
    const decks = PRODUCTS.filter(p => p.cat === 'tablas');
    document.getElementById('cfgDecks').innerHTML = decks.map((p, i) =>
      '<div class="cfgdeck' + popClass + ' ' + (p.id === this.cfgDeck ? 'on' : '') + '" style="transition-delay:' + (i*0.07) + 's" onclick="App.selectDeck(\'' + p.id + '\')">' +
        '<img src="' + p.img + '" alt="' + p.name + '"><div class="cfglabel">' + p.name + '</div>' +
      '</div>'
    ).join('');

    const truckImg = byId('a1').img, wheelImg = byId('a2').img, gripImg = byId('a5').img;
    const swatchHtml = (colors, img, current, selFn) => colors.map((c, i) =>
      '<div class="swatchcol">' +
        '<div class="swatch' + popClass + ' ' + (c.key === current ? 'on' : '') + '" style="transition-delay:' + (i*0.07) + 's" onclick="App.' + selFn + '(\'' + c.key + '\')">' +
          '<img src="' + img + '" style="filter:' + c.filter + '"></div>' +
        '<div class="swatchname">' + c.name + '</div>' +
      '</div>'
    ).join('');
    document.getElementById('cfgTrucks').innerHTML = swatchHtml(TRUCK_COLORS, truckImg, this.cfgTruck, 'selectTruck');
    document.getElementById('cfgWheels').innerHTML = swatchHtml(WHEEL_COLORS, wheelImg, this.cfgWheel, 'selectWheel');
    document.getElementById('cfgGrips').innerHTML = swatchHtml(GRIP_COLORS, gripImg, this.cfgGrip, 'selectGrip');
    if (firstPaint) {
      this.observeReveal(document.querySelectorAll('#cfgDecks .reveal-pop, #cfgTrucks .reveal-pop, #cfgWheels .reveal-pop, #cfgGrips .reveal-pop'));
      this._cfgRevealed = true;
    }

    const truckFilter = (TRUCK_COLORS.find(c => c.key === this.cfgTruck) || {}).filter || 'none';
    const wheelFilter = (WHEEL_COLORS.find(c => c.key === this.cfgWheel) || {}).filter || 'none';
    const gripFilter = (GRIP_COLORS.find(c => c.key === this.cfgGrip) || {}).filter || 'none';
    const deckImg = byId(this.cfgDeck).img;
    document.getElementById('cfgPreview').innerHTML =
      '<div class="pv"><img src="' + deckImg + '"></div>' +
      '<div class="pv"><img src="' + truckImg + '" style="filter:' + truckFilter + '"></div>' +
      '<div class="pv"><img src="' + wheelImg + '" style="filter:' + wheelFilter + '"></div>' +
      '<div class="pv"><img src="' + gripImg + '" style="filter:' + gripFilter + '"></div>';

    document.getElementById('cfgTip').textContent = DECK_TIPS[this.cfgDeck] || '';
    document.getElementById('bearingPrice').textContent = fmt(byId('a3').price);

    let total = byId(this.cfgDeck).price + byId('a1').price + byId('a2').price + byId('a5').price;
    if (this.cfgBearings) total += byId('a3').price;
    document.getElementById('cfgTotal').textContent = fmt(total);
  },

  addSetup(){
    this.cart[this.cfgDeck] = (this.cart[this.cfgDeck] || 0) + 1;
    this.cart['a1'] = (this.cart['a1'] || 0) + 1;
    this.cart['a2'] = (this.cart['a2'] || 0) + 1;
    this.cart['a5'] = (this.cart['a5'] || 0) + 1;
    if (this.cfgBearings) this.cart['a3'] = (this.cart['a3'] || 0) + 1;
    this.persist();
    this.renderCartBadge();
    this.refreshGrids();
    this.showToast('Setup completo añadido a la cesta (color de vista previa)');
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());