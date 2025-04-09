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

const btnEl = document.querySelector("#menuEkle")
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
});


// innerHTML
/*const pEl = document.querySelector("p");
console.log(pEl.innerHTML)
pEl.innerHTML = `${pEl.innerHTML} <br><br> asdads` */