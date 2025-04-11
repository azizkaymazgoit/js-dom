// querySelector
// querySelectorAll

// elemanın kendisi
// class .
// id #

// node

// document.getElementById
// const eleman = document.getElementById("idDeneme")
// console.log(eleman)

//document.getElementsByClassName
//const elemanlar = document.getElementsByClassName("classAdi")
// console.log(elemanlar)

// const parEl = document.getElementById("paragraf")
// console.log(parEl.textContent)

// parEl.textContent = "asdasdas"
// console.log(parEl.textContent)

// console.log(parEl)

// classList add, remove, replace, contains, toggle

// console.log("contains: ", parEl.classList.contains("kirmizi"))
// console.log(parEl.classList)

// const btnEl = document.querySelector("#btn");
// const parEl = document.querySelector("#paragraf")

/* btnEl.addEventListener("click", function() {
    
    // önce var mı yok mu kontrol etmem gerekiyor
    if(parEl.classList.contains("kirmizi")) {
        // varsa silicem
        parEl.classList.remove("kirmizi")
        console.log("silindi..")
    }else {
        // yoksa ekliycem
        parEl.classList.add("kirmizi")
        console.log("eklendi..")
    }
    
}) */

/* btnEl.addEventListener("click", function() {
    parEl.classList.toggle("kirmizi")
}); */


/* const parEl = document.querySelector("#paragraf");
parEl.style.fontSize = "50px"
console.log(parEl) */

// hasAttribute
// const parEl = document.querySelector("#paragraf");
// console.log(parEl.hasAttribute("href")) // o özellik var mı yok mu diye kontrol ediyoruz

/* const imgEl = document.querySelector("#resmim")
// imgEl.setAttribute("alt", "Burası resmin açıklaması")
// imgEl.setAttribute("href", "#")
console.log(imgEl.getAttribute("alt")) */

// data attribute
/* const actions = document.querySelectorAll('.actions button');
console.log(actions);
console.log(actions[0].dataset.title); */

/* const newEl = document.createElement("p") // <p></p>
newEl.textContent = "Bu bir paragraftır."
newEl.classList.add("kirmizi")


// append = son child
// prepend = ilk child
// before = ilk kardeş
// after = son kardeş
const bodyEl = document.querySelector("body");
bodyEl.after(newEl)

const divEl = document.querySelector("div")
console.log(divEl)
divEl.remove(); */

/* const btnEl = document.querySelector("#menuEkle")
const menuEl = document.querySelector(".menu")

// bir eleman oluşturulacak
function elemanOlustur(menuAdi, menuLink) {
    const newItem = document.createElement("li")
    
    const newLink = document.createElement("a")
    newLink.setAttribute("href", menuLink)
    newLink.textContent = menuAdi.toUpperCase()

    // eleman menunun içine basılacak
    newItem.append(newLink)
    menuEl.append(newItem)
}


// buttona tıklanacak
btnEl.addEventListener("click", function() {
    menuEl.innerHTML = ""
    elemanOlustur("Anasayfa", "/anasayfa")
    elemanOlustur("Hakkımda", "/hakkimda")
    elemanOlustur("İletişim", "/iletisim")
}); */


// innerHTML
/*const pEl = document.querySelector("p");
console.log(pEl.innerHTML)
pEl.innerHTML = `${pEl.innerHTML} <br><br> asdads` */


// addEventListener
// anonim fonksiyon

// btnEl.removeEventListener("click", handleYaziBas2);

/*const btnEl = document.querySelector("#btnTikla");
const icerikEl = document.querySelector("#icerik");

const handleYaziBas = () => {
    icerikEl.append("merhab 1");
}

btnEl.addEventListener("click", handleYaziBas); */

/* const handleYaziYaz = (e) => {
    console.log(e)
}

document.addEventListener("click", handleYaziYaz) */

// keyup : tuştan elimi çektikten sonra
// keydown: tuşa bastığım

// event.key - o anki klavyenin tuş değerini dönüyo
// event.code - global karşılığı

/* const icerikEl = document.querySelector("#icerik");

const handleYaziBasKeyUp = (e) => {
    console.log("işlem bitti")
}

const handleYaziBasKeyDown = (e) => {
    icerikEl.append(e.key);
    console.log("key: ", e.key)
    console.log("code: ", e.code)
}

// document.addEventListener("keyup", handleYaziBasKeyUp)
document.addEventListener("keydown", handleYaziBasKeyDown) */


// input

// focus, blur, change, input

/* const inputEl = document.querySelector("#myInput");

// focus
const handleFuncFocus = (e) => {
    // console.log("focus: ",e)
    //inputEl.style.backgroundColor = "green";
}
inputEl.addEventListener("focus", handleFuncFocus);

// blur
const handleFuncBlur = (e) => {
    // console.log("blur: ",e)
    // inputEl.style.backgroundColor = "yellow";
}
inputEl.addEventListener("blur", handleFuncBlur);

// change
const handleFuncChange = (e) => {
    // console.log("change: ",e)
}
inputEl.addEventListener("change", handleFuncChange);

// input
const handleFuncInput = (e) => {
    //console.log("input: ",e)
    // console.log(e.target.value)
    // console.log(e)
    const girdi = e.target.value;
    if(girdi.includes("@")) {
        inputEl.style.backgroundColor = "green"
    }else {
        inputEl.style.backgroundColor = "red"
    }
}
inputEl.addEventListener("input", handleFuncInput); */


// submit event

/* const formEl = document.querySelector(".js-form");

const formHandle = (e) => {
    e.preventDefault();
    console.log(e)
    const name = e.target.elements.email.value
    const pas = e.target.elements.password.value
    const commentForm = e.target.elements.comment.value
    login(name, password)
}

formEl.addEventListener("submit", formHandle) */

/* const boxEl = document.querySelector(".js-box")

const renkHandleEkle = (e) => {
    boxEl.classList.add("box--active")
}

const renkHandleSil = (e) => {
    boxEl.classList.remove("box--active")
}

boxEl.addEventListener("mouseenter", renkHandleEkle);

boxEl.addEventListener("mouseleave", renkHandleSil); */


const cars = [
    {
        id: 1,
        car: 'Audi',
        type: 'A6',
        price: 30000,
        img: 'https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg'
    },
    {
        id: 2,
        car: 'Honda',
        type: 'Civic',
        price: 12000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
    },
    {
        id: 3,
        car: 'Audi',
        type: 'Q7',
        price: 40000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
    },
    {
        id: 4,
        car: 'BMW',
        type: '5 siries',
        price: 9000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
    },
    {
        id: 5,
        car: 'Honda',
        type: 'Accord',
        price: 20000,
        number: '+380000000000',
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
    },
    {
        id: 6,
        car: 'Volvo',
        type: 'XC60',
        price: 7000,
        img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
    }
];

const elements = {
    form: document.querySelector('.js-form'),
    container: document.querySelector('.js-list')
};

function createMarkup(arr) {
    return arr.map(({id, car, type, price, img}) => `
      <li class="car-card" data-id="${ id }">
        <img src="${ img }" alt="${ type }" class="car-image">
        <h2 class="car-title">${ car }</h2>
        <h3 class="car-type">${ type }</h3>
        <span class="car-price">${ price } $</span>
      </li>`).join('');
}

elements.container.style.display = 'flex';
elements.container.style.gap = '25px';
elements.container.innerHTML = createMarkup(cars);

elements.form.addEventListener('submit', handlerSearch);

function handlerSearch(evt) {
    evt.preventDefault();
    
    const {options, query} = evt.currentTarget.elements;
    const result = cars.filter(item => item[options.value].toLowerCase().includes(query.value.toLowerCase()));
    
    elements.container.innerHTML = createMarkup(result);
}