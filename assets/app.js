const PRODUCTS = [
  {id:"t1",cat:"tablas",name:"Tabla Clásica",price:14.9,img:"images/board_clasica.jpg",rating:4.6,reviews:128,stock:23,
    desc:"Maple canadiense sin tratar, 34 mm de ancho. Ligera y lista para personalizar a tu gusto.",
    specs:[["Material","Maple canadiense de 7 capas"],["Ancho","34 mm"],["Cóncavo","Medio"],["Acabado","Sin tratar, natural"],["Nivel","Iniciación / todo uso"]],
    bullets:["Base ligera para montar tu propio setup de ejes y ruedas","Superficie lijada a mano para un agarre uniforme del grip","Compatible con todos los ejes de nuestro catálogo"]},
  {id:"t2",cat:"tablas",name:"Tabla Flame",price:16.9,img:"images/board_flame.jpg",rating:4.8,reviews:94,stock:17,
    desc:"Acabado de llamas blancas sobre fibra negra. Grip de alto agarre y canto biselado.",
    specs:[["Material","Fibra de arce prensada"],["Ancho","34.5 mm"],["Cóncavo","Pronunciado"],["Acabado","Serigrafía llamas blancas"],["Nivel","Intermedio"]],
    bullets:["Canto biselado para un mejor agarre en flips","Grip de alta fricción ya instalado de fábrica","Diseño exclusivo, tirada limitada"]},
  {id:"t3",cat:"tablas",name:"Tabla Check",price:16.9,img:"images/board_check.jpg",rating:4.7,reviews:81,stock:30,
    desc:"Estampado ajedrezado blanco y negro. Cóncavo medio, ideal para flips técnicos.",
    specs:[["Material","Maple canadiense de 7 capas"],["Ancho","34 mm"],["Cóncavo","Medio-alto"],["Acabado","Estampado ajedrez"],["Nivel","Intermedio / avanzado"]],
    bullets:["Pop rápido gracias a su construcción multicapa","Cóncavo pensado para flips técnicos y precisos","Combina bien con ejes de perfil bajo"]},
  {id:"t4",cat:"tablas",name:"Tabla Wave",price:18.9,img:"images/board_wave.jpg",rating:4.9,reviews:56,stock:12,
    desc:"Estampado marmolado azul. Forma ancha y estable, perfecta para rampas y manuals.",
    specs:[["Material","Maple + fibra de vidrio"],["Ancho","35.5 mm"],["Cóncavo","Suave"],["Acabado","Marmolado azul"],["Nivel","Todo nivel"]],
    bullets:["La más ancha del catálogo: máxima estabilidad","Ideal para rampas, manuals y líneas largas","Fibra de vidrio añadida para mayor durabilidad"]},
  {id:"r1",cat:"rampas",name:"Rampa Wedge",price:9.9,img:"images/ramp_wedge.jpg",rating:4.5,reviews:63,stock:40,
    desc:"Cuña de acero con ángulo suave. Ideal para coger velocidad e iniciarte en los saltos.",
    specs:[["Material","Acero pintado"],["Medidas","9 x 6 x 3 cm"],["Ángulo","15°"],["Peso","110 g"]],
    bullets:["Base antideslizante para apoyar sobre cualquier mesa","Perfecta como primer obstáculo de salto","Combinable con el Rail Metálico"]},
  {id:"r2",cat:"rampas",name:"Quarter Pipe",price:12.9,img:"images/ramp_quarter.jpg",rating:4.7,reviews:49,stock:22,
    desc:"Transición curva de 90°. Perfecta para airwalks y grinds de entrada.",
    specs:[["Material","Acero pulido"],["Medidas","10 x 8 x 4 cm"],["Transición","90°, radio 4 cm"],["Peso","160 g"]],
    bullets:["Curva pulida a mano para una rodadura suave","Ideal para trucos aéreos de entrada y salida","Base lastrada para que no se mueva"]},
  {id:"r3",cat:"rampas",name:"Set Escaleras + Rail",price:19.9,img:"images/ramp_stairs.jpg",rating:4.8,reviews:71,stock:15,
    desc:"Seis escalones con pasamanos de acero pulido. El clásico de todo street spot.",
    specs:[["Material","Acero + aluminio"],["Medidas","14 x 9 x 5 cm"],["Escalones","6"],["Peso","240 g"]],
    bullets:["El obstáculo más completo del catálogo","Pasamanos desmontable para variar el setup","Réplica fiel de un spot de street real"]},
  {id:"r4",cat:"rampas",name:"Ledge Box",price:11.9,img:"images/ramp_box.jpg",rating:4.4,reviews:38,stock:28,
    desc:"Cajón bajo con canto metálico, pensado para grinds y slides técnicos.",
    specs:[["Material","Madera + canto de acero"],["Medidas","11 x 6 x 3 cm"],["Altura","3 cm"],["Peso","130 g"]],
    bullets:["Canto metálico para grinds largos y suaves","Altura baja ideal para empezar con slides","Base amplia y estable"]},
  {id:"r5",cat:"rampas",name:"Rail Metálico",price:8.9,img:"images/ramp_rail.jpg",rating:4.6,reviews:52,stock:35,
    desc:"Rail recto independiente. Fácil de combinar con cualquier otro obstáculo.",
    specs:[["Material","Acero inoxidable"],["Medidas","12 x 3 x 4 cm"],["Diámetro","4 mm"],["Peso","95 g"]],
    bullets:["El más versátil: combina con cualquier rampa","Acabado pulido para grinds rápidos","Fácil de transportar"]},
  {id:"r6",cat:"rampas",name:"Wedge Ledge",price:10.9,img:"images/ramp_wedge2.jpg",rating:4.5,reviews:27,stock:19,
    desc:"Cuña con ledge superior: dos obstáculos combinados en uno solo.",
    specs:[["Material","Acero pintado"],["Medidas","10 x 6 x 4 cm"],["Ángulo","12°"],["Peso","125 g"]],
    bullets:["Dos obstáculos en uno: ahorra espacio en tu setup","Ledge superior para grinds técnicos","Buen punto de salto para encadenar trucos"]},
  {id:"r7",cat:"rampas",name:"Mini Half-Pipe",price:15.9,img:"images/ramp_ubox.jpg",rating:4.9,reviews:44,stock:14,
    desc:"Transición doble en U, perfecta para encadenar trucos de ida y vuelta.",
    specs:[["Material","Acero pulido"],["Medidas","16 x 7 x 5 cm"],["Transición","Doble, radio 5 cm"],["Peso","310 g"]],
    bullets:["El favorito para sesiones largas de práctica","Transición simétrica en ambos lados","Acabado antideslizante en la base"]},
  {id:"r8",cat:"rampas",name:"Pirámide",price:13.9,img:"images/ramp_pyramid.jpg",rating:4.3,reviews:19,stock:21,
    desc:"Plataforma elevada con cuatro caras en pendiente. Versátil para cualquier ángulo.",
    specs:[["Material","Acero pintado"],["Medidas","12 x 12 x 5 cm"],["Caras","4, pendiente 15°"],["Peso","220 g"]],
    bullets:["Cuatro rampas en una sola pieza","Encara el obstáculo desde cualquier lado","Base amplia, muy estable"]},
  {id:"a1",cat:"acc",name:"Set de Ejes",price:6.9,img:"images/acc_ejes.jpg",rating:4.6,reviews:142,stock:60,
    desc:"Ejes de aluminio ligero y altura estándar. Respuesta ágil en los giros.",
    specs:[["Material","Aluminio aeronáutico"],["Altura","Estándar (8 mm)"],["Ancho","32 mm"],["Compatibilidad","Todas las tablas del catálogo"]],
    bullets:["Respuesta ágil en giros y carving","Tornillería incluida para el montaje","Par de ejes delantero y trasero"]},
  {id:"a2",cat:"acc",name:"Ruedas Pro",price:4.9,img:"images/acc_ruedas.jpg",rating:4.7,reviews:167,stock:55,
    desc:"Goma suave de alto rebote. Rodaje silencioso y muy controlado.",
    specs:[["Material","Uretano de alto rebote"],["Diámetro","7.5 mm"],["Dureza","92A"],["Unidades","Pack de 4"]],
    bullets:["Rodaje silencioso incluso en superficies duras","Alto rebote para más velocidad en rampas","Dureza media: control sin perder agarre"]},
  {id:"a3",cat:"acc",name:"Rodamientos",price:3.9,img:"images/acc_rodamientos.jpg",rating:4.5,reviews:103,stock:70,
    desc:"Precisión ABEC para ruedas rápidas y sin fricción.",
    specs:[["Material","Acero cromado"],["Precisión","ABEC-7"],["Unidades","8 (set completo)"],["Compatibilidad","Ruedas Pro y estándar"]],
    bullets:["Fricción mínima para ruedas más rápidas","Precisión ABEC-7, nivel competición","Vienen lubricados de fábrica"]},
  {id:"a4",cat:"acc",name:"Tornillería",price:2.5,img:"images/acc_tornilleria.jpg",rating:4.4,reviews:58,stock:90,
    desc:"Kit completo de tornillos y tuercas para montar tu tabla desde cero.",
    specs:[["Material","Acero inoxidable"],["Unidades","8 tornillos + 8 tuercas"],["Medida","M2 x 8 mm"],["Compatibilidad","Universal"]],
    bullets:["Todo lo necesario para un montaje completo","Cabeza Phillips, fácil de apretar con mini-destornillador","Acabado anticorrosión"]},
  {id:"a5",cat:"acc",name:"Grip Tape (x2)",price:3.5,img:"images/acc_grip.jpg",rating:4.8,reviews:112,stock:48,
    desc:"Dos láminas de grip de grano fino. Agarre máximo para tus dedos.",
    specs:[["Material","Lija de grano fino"],["Unidades","2 láminas"],["Medidas","4 x 10 cm c/u"],["Compatibilidad","Cualquier tabla estándar"]],
    bullets:["Agarre máximo incluso con los dedos sudados","Grano fino: no raya la piel","Recortable a la forma exacta de tu tabla"]}
];
const byId = (id) => PRODUCTS.find(p => p.id === id) || (window.App && App.customItems && App.customItems[id]);
const fmt = (n) => n.toFixed(2).replace('.', ',') + ' €';

const KITS = [
  {id:"k1",name:"Kit Iniciación",img:"images/board_clasica.jpg",
    desc:"Todo lo que necesitas para empezar: tabla, ejes, ruedas y grip en un solo pack.",
    includes:["t1","a1","a2","a5"],price:24.9},
  {id:"k2",name:"Kit Pro Completo",img:"images/board_flame.jpg",
    desc:"El set definitivo: tabla, ejes, ruedas, rodamientos, grip y tornillería.",
    includes:["t2","a1","a2","a3","a4","a5"],price:29.9},
  {id:"k3",name:"Kit Rampas Starter",img:"images/ramp_quarter.jpg",
    desc:"Tres obstáculos clásicos para montar tu primer street spot en casa.",
    includes:["r5","r1","r4"],price:24.9}
];
const kitOriginal = (k) => k.includes.reduce((s,id) => s + byId(id).price, 0);
const kitSavings = (k) => Math.max(0, kitOriginal(k) - k.price);

const starRow = (rating, reviews) => {
  const full = Math.round(rating);
  let stars = '';
  for (let i=1; i<=5; i++) {
    stars += '<svg viewBox="0 0 24 24" width="14" height="14"><path d="M12 2.5l2.9 6 6.6.8-4.8 4.6 1.2 6.5L12 17l-5.9 3.4 1.2-6.5L2.5 9.3l6.6-.8z" fill="' + (i<=full ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="1.3"/></svg>';
  }
  return '<span class="stars">' + stars + '</span><span class="ratingtxt">' + rating.toFixed(1) + ' · ' + reviews + ' valoraciones</span>';
};

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

  customItems: {},
  init(){
    try {
      const raw = localStorage.getItem('fs_cart_v1');
      if (raw) { const c = JSON.parse(raw); if (c && typeof c === 'object') this.cart = c; }
    } catch(e) {}
    try {
      const rawc = localStorage.getItem('fs_custom_v1');
      if (rawc) { const c = JSON.parse(rawc); if (c && typeof c === 'object') this.customItems = c; }
    } catch(e) {}
    this.bindReveal();
    if (document.getElementById('designerCanvas')) this.initDesigner();
    if (document.getElementById('gridTablas')) this.renderGrid('gridTablas', 'tablas');
    if (document.getElementById('gridRampas')) this.renderGrid('gridRampas', 'rampas');
    if (document.getElementById('gridAcc')) this.renderGrid('gridAcc', 'acc');
    if (document.getElementById('cfgDecks')) this.renderConfigurator();
    if (document.getElementById('gridKits')) this.renderKits('gridKits');
    if (document.getElementById('gridKitsHome')) this.renderKits('gridKitsHome');
    this.renderCartBadge();
    this.bindScroll();
    const bearingsBox = document.getElementById('cfgBearingsBox');
    if (bearingsBox) bearingsBox.checked = this.cfgBearings;
  },

  persist(){ try { localStorage.setItem('fs_cart_v1', JSON.stringify(this.cart)); } catch(e) {} },
  persistCustom(){ try { localStorage.setItem('fs_custom_v1', JSON.stringify(this.customItems)); } catch(e) {} },

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
  cartTotal(){ return Object.keys(this.cart).reduce((s,id)=>{ const p = byId(id); return s + (p ? (this.cart[id]||0)*p.price : 0); }, 0); },

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
          (p.rating != null ? '<div class="miniRating">' + starRow(p.rating, p.reviews||0) + '</div>' : '') +
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

  renderKits(containerId){
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = KITS.map((k) => {
      const orig = kitOriginal(k);
      const save = kitSavings(k);
      const pct = Math.round((save/orig)*100);
      return '<div class="card kitcard">' +
        '<div class="cardimg" onclick="App.openKitDetail(\'' + k.id + '\')">' +
          '<img src="' + k.img + '" alt="' + k.name + '">' +
          '<span class="kitbadge">-' + pct + '%</span>' +
        '</div>' +
        '<div class="cardbody">' +
          '<div class="cardname">' + k.name + '</div>' +
          '<p class="kitincludes">' + k.includes.map((id)=>byId(id).name).join(' + ') + '</p>' +
          '<div class="kitprices"><span class="kitold">' + fmt(orig) + '</span><span class="cardprice">' + fmt(k.price) + '</span></div>' +
          '<div class="kitsave">Ahorras ' + fmt(save) + '</div>' +
          '<button class="addbtn" onclick="App.addKitToCart(\'' + k.id + '\')">Añadir kit a la cesta</button>' +
        '</div>' +
      '</div>';
    }).join('');
    this.observeReveal(el.querySelectorAll('.card'));
  },
  addKitToCart(kitId){
    const k = KITS.find((x) => x.id === kitId);
    if (!k) return;
    k.includes.forEach((id) => { this.cart[id] = (this.cart[id] || 0) + 1; });
    this.persist();
    this.renderCartBadge();
    this.refreshGrids();
    this.showToast(k.name + ' añadido a la cesta');
  },
  openKitDetail(kitId){
    const k = KITS.find((x) => x.id === kitId);
    if (!k) return;
    const orig = kitOriginal(k);
    const save = kitSavings(k);
    const html =
      '<div class="backdrop" onclick="App.closeDetail()"></div>' +
      '<div class="modal detailmodal">' +
        '<div class="detailimg"><img src="' + k.img + '" alt="' + k.name + '"></div>' +
        '<div class="detailbody">' +
          '<div class="detailname">' + k.name + '</div>' +
          '<div class="kitprices" style="margin-top:6px"><span class="kitold">' + fmt(orig) + '</span><span class="detailprice" style="margin-top:0">' + fmt(k.price) + '</span></div>' +
          '<div class="kitsave" style="margin-top:4px">Ahorras ' + fmt(save) + ' frente a comprar cada pieza por separado</div>' +
          '<p class="detaildesc">' + k.desc + '</p>' +
          '<div class="detailspecs">' + k.includes.map((id) => {
            const p = byId(id);
            return '<div class="specrow"><span>' + p.name + '</span><span>' + fmt(p.price) + '</span></div>';
          }).join('') + '</div>' +
          '<button class="detailadd" onclick="App.addKitToCart(\'' + k.id + '\');App.closeDetail()">Añadir kit a la cesta</button>' +
        '</div>' +
        '<button class="iconbtn" style="position:fixed;top:max(16px,env(safe-area-inset-top));right:max(16px,env(safe-area-inset-right));z-index:175;background:rgba(20,19,17,.8)" onclick="App.closeDetail()">✕</button>' +
      '</div>';
    this.showOverlay('detailWrap', html);
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
    const items = Object.keys(this.cart).filter((id) => this.cart[id] > 0).map((id) => byId(id)).filter(Boolean);
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
    const specsHtml = (p.specs||[]).map((s) =>
      '<div class="specrow"><span>' + s[0] + '</span><span>' + s[1] + '</span></div>'
    ).join('');
    const bulletsHtml = (p.bullets||[]).map((b) => '<li>' + b + '</li>').join('');
    const stockHtml = p.stock != null
      ? '<div class="stockrow"><span class="stockdot"></span>En stock — quedan ' + p.stock + ' unidades</div>'
      : '';
    const html =
      '<div class="backdrop" onclick="App.closeDetail()"></div>' +
      '<div class="modal detailmodal">' +
        '<div class="detailimg"><img src="' + p.img + '" alt="' + p.name + '"></div>' +
        '<div class="detailbody">' +
          '<div class="detailname">' + p.name + '</div>' +
          (p.rating != null ? '<div class="ratingrow">' + starRow(p.rating, p.reviews||0) + '</div>' : '') +
          '<div class="detailprice">' + fmt(p.price) + '</div>' +
          stockHtml +
          '<p class="detaildesc">' + p.desc + '</p>' +
          (bulletsHtml ? '<ul class="detailbullets">' + bulletsHtml + '</ul>' : '') +
          (specsHtml ? '<div class="detailspecs">' + specsHtml + '</div>' : '') +
          '<div class="trustrow">' +
            '<span><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="7" width="20" height="13" rx="2"/><path d="M7 7V5a5 5 0 0 1 10 0v2"/></svg>Pago seguro simulado</span>' +
            '<span><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7h13v10H3zM16 10h3l2 3v4h-5z"/><circle cx="7.5" cy="19" r="1.6"/><circle cx="17.5" cy="19" r="1.6"/></svg>Envío en 24–48h</span>' +
            '<span><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5"/></svg>Devolución 30 días</span>' +
          '</div>' +
          '<div class="detailqty">' +
            '<button onclick="App.decDetailQty()">-</button>' +
            '<span id="detailQtyVal">' + this.detailQty + '</span>' +
            '<button onclick="App.incDetailQty()">+</button>' +
          '</div>' +
          '<button class="detailadd" onclick="App.addDetailToCart()">Añadir a la cesta</button>' +
        '</div>' +
        '<button class="iconbtn" style="position:fixed;top:max(16px,env(safe-area-inset-top));right:max(16px,env(safe-area-inset-right));z-index:175;background:rgba(20,19,17,.8)" onclick="App.closeDetail()">✕</button>' +
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
    holder.scrollTop = 0;
    document.body.classList.add('modalopen');
  },
  closeOverlay(key){
    const holder = document.getElementById(key);
    if (holder) holder.innerHTML = '';
    const stillOpen = ['detailWrap', 'drawerWrap'].some((k) => {
      const h = document.getElementById(k);
      return h && h.innerHTML.trim() !== '';
    });
    if (!stillOpen) document.body.classList.remove('modalopen');
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
  },

  initDesigner(){
    const canvas = document.getElementById('designerCanvas');
    const ctx = canvas.getContext('2d');
    this._dz = { canvas, ctx, layers: [], selected: null, dragging: false, dragOffset: {x:0,y:0}, baseColor: '#141311' };
    const dz = this._dz;
    this.designerRenderColors();
    this.designerDraw();

    const pos = (e) => {
      const r = canvas.getBoundingClientRect();
      const t = e.touches && e.touches[0];
      const cx = (t ? t.clientX : e.clientX) - r.left;
      const cy = (t ? t.clientY : e.clientY) - r.top;
      return { x: cx * canvas.width / r.width, y: cy * canvas.height / r.height };
    };
    const hit = (p) => {
      for (let i = dz.layers.length - 1; i >= 0; i--) {
        const l = dz.layers[i];
        const dx = p.x - l.x, dy = p.y - l.y;
        const c = Math.cos(-l.rot*Math.PI/180), s = Math.sin(-l.rot*Math.PI/180);
        const lx = dx*c - dy*s, ly = dx*s + dy*c;
        const hw = (l.w||80)/2*l.scale, hh = (l.h||40)/2*l.scale;
        if (Math.abs(lx) <= hw && Math.abs(ly) <= hh) return l;
      }
      return null;
    };
    const down = (e) => {
      const p = pos(e);
      const l = hit(p);
      dz.selected = l;
      if (l) { dz.dragging = true; dz.dragOffset = { x: p.x - l.x, y: p.y - l.y }; }
      this.designerUpdateLayerPanel();
      this.designerDraw();
      e.preventDefault();
    };
    const move = (e) => {
      if (!dz.dragging || !dz.selected) return;
      const p = pos(e);
      dz.selected.x = p.x - dz.dragOffset.x;
      dz.selected.y = p.y - dz.dragOffset.y;
      this.designerDraw();
      e.preventDefault();
    };
    const up = () => { dz.dragging = false; };
    canvas.addEventListener('mousedown', down);
    canvas.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    canvas.addEventListener('touchstart', down, { passive: false });
    canvas.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('touchend', up);

    const fileInput = document.getElementById('designerFileInput');
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
          const maxW = dz.canvas.width * 0.7;
          const scale0 = Math.min(1, maxW / img.width);
          const l = { type:'image', img, x: dz.canvas.width/2, y: dz.canvas.height/2, w: img.width*scale0, h: img.height*scale0, scale:1, rot:0 };
          dz.layers.push(l);
          dz.selected = l;
          this.designerUpdateLayerPanel();
          this.designerDraw();
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });
  },

  designerRenderColors(){
    const colors = ['#141311','#ffffff','#e8a15c','#2b6cb0','#2f855a','#9b2c2c','#6b46c1','#1a202c'];
    document.getElementById('designerColors').innerHTML = colors.map((c) =>
      '<span class="cswatch" style="background:' + c + '" onclick="App.designerSetColor(\'' + c + '\')"></span>'
    ).join('');
  },
  designerSetColor(c){ this._dz.baseColor = c; this.designerDraw(); },

  designerAddText(){
    const input = document.getElementById('designerTextInput');
    const text = input.value.trim();
    if (!text) return;
    const color = document.getElementById('designerTextColor').value;
    const font = document.getElementById('designerFont').value;
    const dz = this._dz;
    const l = { type:'text', text, color, font, size:30, x: dz.canvas.width/2, y: dz.canvas.height/2, w: Math.max(40, text.length*17), h:36, scale:1, rot:0 };
    dz.layers.push(l);
    dz.selected = l;
    input.value = '';
    this.designerUpdateLayerPanel();
    this.designerDraw();
  },

  designerUpdateLayerPanel(){
    const el = document.getElementById('designerLayerControls');
    if (el) el.style.display = this._dz.selected ? 'block' : 'none';
  },
  designerScaleSel(f){ if (!this._dz.selected) return; this._dz.selected.scale = Math.max(0.3, Math.min(3, this._dz.selected.scale * f)); this.designerDraw(); },
  designerRotateSel(deg){ if (!this._dz.selected) return; this._dz.selected.rot = (this._dz.selected.rot + deg) % 360; this.designerDraw(); },
  designerDeleteSel(){
    const dz = this._dz;
    if (!dz.selected) return;
    dz.layers = dz.layers.filter((l) => l !== dz.selected);
    dz.selected = null;
    this.designerUpdateLayerPanel();
    this.designerDraw();
  },
  designerReset(){
    const dz = this._dz;
    dz.layers = [];
    dz.selected = null;
    dz.baseColor = '#141311';
    this.designerUpdateLayerPanel();
    this.designerDraw();
  },

  designerDeckPath(ctx, w, h){
    const r = w/2;
    ctx.beginPath();
    ctx.moveTo(r, 0);
    ctx.arcTo(w, 0, w, r, r);
    ctx.lineTo(w, h-r);
    ctx.arcTo(w, h, w-r, h, r);
    ctx.lineTo(r, h);
    ctx.arcTo(0, h, 0, h-r, r);
    ctx.lineTo(0, r);
    ctx.arcTo(0, 0, r, 0, r);
    ctx.closePath();
  },

  designerDraw(){
    const dz = this._dz;
    const { ctx, canvas } = dz;
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0,0,w,h);
    ctx.save();
    this.designerDeckPath(ctx, w, h);
    ctx.clip();
    ctx.fillStyle = dz.baseColor;
    ctx.fillRect(0,0,w,h);
    dz.layers.forEach((l) => {
      ctx.save();
      ctx.translate(l.x, l.y);
      ctx.rotate(l.rot * Math.PI/180);
      ctx.scale(l.scale, l.scale);
      if (l.type === 'image') {
        ctx.drawImage(l.img, -l.w/2, -l.h/2, l.w, l.h);
      } else {
        ctx.fillStyle = l.color;
        ctx.font = '700 ' + l.size + 'px ' + l.font + ', sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(l.text, 0, 0);
      }
      if (l === dz.selected) {
        ctx.strokeStyle = 'rgba(232,161,92,.9)';
        ctx.lineWidth = 2/l.scale;
        ctx.setLineDash([6,4]);
        ctx.strokeRect(-l.w/2, -l.h/2, l.w, l.h);
      }
      ctx.restore();
    });
    ctx.restore();
    ctx.save();
    this.designerDeckPath(ctx, w, h);
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#c87a3e';
    ctx.stroke();
    ctx.restore();
  },

  designerAddToCart(){
    const dz = this._dz;
    if (!dz) return;
    const dataUrl = dz.canvas.toDataURL('image/jpeg', 0.85);
    const id = 'custom-' + Date.now();
    this.customItems[id] = { id, name: 'Tabla personalizada', price: 24.9, img: dataUrl };
    this.persistCustom();
    this.cart[id] = (this.cart[id] || 0) + 1;
    this.persist();
    this.renderCartBadge();
    this.showToast('Tu diseño se ha añadido a la cesta');
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());