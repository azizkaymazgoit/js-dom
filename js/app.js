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

const products = [
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
}
