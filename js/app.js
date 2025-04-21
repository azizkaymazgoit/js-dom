/* const testEl = document.querySelector(".test")

const testFunc = () => {
    console.log("tıklandı")
}

testEl.addEventListener("click", testFunc) */

// en içteki elemandan başlayıp -> window

/* const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");

const parentClick = (event) => {
    // event.stopPropagation();
    console.log(event)
    console.log("target: ", event.target)
    console.log("curent target: ",event.currentTarget)
    console.log("parent tıklandı")
}

const childClick = (event) => {
    // event.stopPropagation();
    // event.stopImmediatePropagation();
    console.log("target: ", event.target)
    console.log("curent target: ",event.currentTarget)
    console.log("child tıklandı")
}

const innerChildClick = (event) => {
    // event.stopPropagation();
    console.log(event)
    console.log("target: ", event.target)
    console.log("curent target: ",event.currentTarget)
    console.log("innerChildClick tıklandı")
}


// parent.addEventListener("click", parentClick);
child.addEventListener("click", childClick);
innerChild.addEventListener("click", innerChildClick); */

/* document.addEventListener("click", function(e) {
    console.log("target: ", e.target)
    console.log("current target: ", e.currentTarget)
}) */

/* const container = document.querySelector(".container");

const children = [...container.children]

children.forEach((child) => {
    child.addEventListener("click", function(event) {
        console.log(event);
    })
}) */

/*const container = document.querySelector(".container");

const handleColor = (event) => {
    //console.log("target: ", event)
    // console.log("current target: ", event.currentTarget)
    if(event.target === event.currentTarget) {
        document.querySelector("body").style.backgroundColor = "purple"
    }else {
        document.querySelector("body").style.backgroundColor = event.target.dataset.color
    }
}

container.addEventListener("click", handleColor) */

// console.log(_.kebabCase("aziz kayamz asdasd asd as asdahsdgak"))

// console.log(Math.floor(Math.random() * 500))

/* console.log(_.random(0,200)) */

/* document.querySelector(".modalBtn").addEventListener("click", function() {
    const ekran = basicLightbox.create(`<h1>Merhaba</h1>`)
    ekran.show();
}) */

/*const products = [
  {
    id: 1,
    img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
    name: "Monitor",
    price: 3000,
    description: "23-inch monitor with Full HD resolution.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
    name: "Laptop",
    price: 20000,
    description:
      "Lightweight and powerful laptop with a 15-inch display and SSD.",
  },
  {
    id: 3,
    img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
    name: "Smartphone",
    price: 8000,
    description: "Equipped with a triple camera and a multi-core processor.",
  },
  {
    id: 4,
    img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
    name: "Tablet",
    price: 12000,
    description: "10-inch tablet with high performance and a Retina display.",
  },
];


const container = document.querySelector('.products');

container.innerHTML= createMarkup(products);

function createMarkup(arr) {
    return arr.map(({id, img, name, price}) => `
        <li data-id="${ id }" class="item product-item">
            <img src="${ img }" alt="${ name }" width="300"/>
            <h2>${ name }</h2>
            <p>Fiyat: ${ price } TL</p>
        </li>`).join('');
}


container.addEventListener('click', handlerProductClick);


function handlerProductClick(evt) {
    if (evt.target === evt.currentTarget) {
        return;
    }

    const currentProduct = evt.target.closest('.product-item');
    
    const id = currentProduct.dataset.id;
    const product = products.find(({id: productId}) => productId === Number(id));
    
    const instance = basicLightbox.create(`
    <div class="modal">
        
      <img src="${ product.img }" alt="${ product.name }"/>
      <h2>${ product.name }</h2>
      <h3>${ product.price } TL</h3>
      <p>${ product.description }</p>
    </div>
`);
    instance.show();
}*/


// objelerde - dizilerde

/* const ad = kisi.ad;
const soyad = kisi.soyad; */

// const {ad, soyad, yas = "deafult değer", meslek : job} = kisi;

/*console.log("ad1: ", ad);
console.log("soyad2: ", soyad);
console.log("yas: ", yas);
console.log("meslek: ", job);*/

/* const kisiler = [
    {
        ad: "Aziz",
        soyad: "Kaymaz",
        yas: 30,
        meslek: "Yazılım"
    },
    {
        ad: "Mehmet",
        soyad: "Kaymaz",
        yas: 25,
        meslek: "Tasarım"
    }
]

kisiler.forEach(({ad, soyad, yas}) => {
    
    console.log(`Merhaba ${ad} ${soyad} Hoşgeldin`)

}) */

/* const kisi = {
    ad: "Aziz",
    soyad: "Kaymaz",
    yas: 30,
    meslek: "Yazılım"
}

function kisiYaz({ad, soyad}) {
    console.log(`Merhaba ${ad} ${soyad} Hoşgeldin 2`);
}

function kisiYaz({ad = "asdas", soyad} = {ad : "boş değer2"}) {
    console.log(`Merhaba ${ad} ${soyad} Hoşgeldin 2`);
}

kisiYaz(); */

/* const kisi = {
    ad: "Aziz",
    soyad: "Kaymaz",
    yas: 30,
    meslek: "Yazılım",
    diller: {
        frontend: "react",
        backend: "nodejs"
    }
}

const {ad, diller: {frontend, backend}, yas, ...rest} = kisi;

console.log("ad: ", ad)
console.log("frontend: ", frontend)
console.log("backend: ", backend)
console.log("yas: ", yas)
console.log("geri kalanlar: ", rest) */

/* const gunler = ["pazartesi", "salı", "çarşamba", "perşembe", "cuma"];

// const pazartesi = gunler[0]

const [,,crs, ...kalanlar] = gunler;

// console.log(pts)
// console.log(sl)
console.log(crs)
console.log(kalanlar) */

/* const user = {
  id: 1,
  username: "harry_potter",
  profile: {
    name: "Harry",
    surname: "Potter",
    age: 25,
  },
};

const {profile: {name, surname}, username} = user;


console.log(`Kullanıcı adı: ${ name }`);
console.log(`Soyadı: ${ surname }`);
console.log(`Kullanıcı adı (rumuz olarak): ${ username }`); */

/* const product = {
    name: 'Smart TV',
    price: 25000,
    category: 'Electronics',
    details: {
      brand: 'Samsung',
      color: 'Black',
      weight: '15.5'
    }
  };

  const {name, price, category, details: {brand, color, weight}} = product;

  console.log(`Назва товару: ${ name }`);
  console.log(`Ціна: ${ price } грн`);
  console.log(`Категорія: ${ category }`);
  console.log('Деталі:');
  console.log(`- Бренд: ${ brand }`);
  console.log(`- Колір: ${ color }`);
  console.log(`- Вага: ${ weight } кг`); */


// JSON



/* const kisi = {
    name: "aziz",
    soyad: "kaymaz",
    meslek: "Yazılım",
    yas: 30,
    deneme: function() {
        console.log("sdasdas")
    }
}

const jsonData = JSON.stringify(kisi)
console.log(jsonData)*/


/* const gelenData = `
{
    "isim": "aziz",
    "soyad": "kaymaz",
    "yas": 30
}
`;

const parseData = JSON.parse(gelenData)
console.log(parseData) */


/* const gelenData = `
{
    "isim": "aziz",
    "soyad": "kaymaz",
    "yas": 30,
}
`

try {
    console.log("try çalıştı")
    const parseData = JSON.parse(gelenData)
    console.log(parseData)
}catch (err) {
    console.log("resimler yüklenemd")
    console.log(err)
}

console.log("kod devam ediyor") */

/* localStorage.setItem("tema", "light")
localStorage.setItem("user", "azizkaymaz")
// localStorage.removeItem("tema")

console.log("getitem::::",localStorage.getItem("tema"))

if(localStorage.getItem("tema")) {
    console.log("var")
}else {
    console.log("yok")
}

localStorage.clear() */


/* const kullaniciAyarlari = {
    dil: "tr",
    bildirim: false,
    tema: "dark",
}

const stringiData = JSON.stringify(kullaniciAyarlari)
// localStorage.setItem("ayarlar", stringiData)

// localStorage.setItem("ayarlar", kullaniciAyarlari)

// console.log(localStorage.getItem("ayarlar"))


const parseData = localStorage.getItem("ayarlar")
console.log(parseData)

console.log(JSON.parse(parseData)) */


if (localStorage.getItem('theme')) {
    const currentTheme = localStorage.getItem('theme');
    document.body.classList.add(currentTheme);
} else {
    document.body.classList.add('light-mode');
}

const btnEl = document.getElementById('themeToggle')

btnEl.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme')

    if (currentTheme === 'light-mode') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode'); 
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode'); 
    }
});