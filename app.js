
let tab1 = document.querySelector(".main-tabpost-tab-first")
let tab2 = document.querySelector(".main-tabpost-tab-second")
let tabpost1 = document.querySelector(".main-tabpost-item-first")
let tabpost2 = document.querySelector(".main-tabpost-item-second")
let testkey = document.querySelector(".main-search-input")


window.addEventListener('click', function (e){
    if(e.target === tab1){
        tabpost2.classList.remove("active-tab")
        tabpost1.classList.add("active-tab")
        tab2.classList.remove("active")
        tab1.classList.add("active")

    } if (e.target === tab2) {
        tabpost1.classList.remove("active-tab")
        tabpost2.classList.add("active-tab")
        tab1.classList.remove("active")
        tab2.classList.add("active")
    }
    }) 


let footerPlus = document.querySelector(".footer-menu-item-plus")
let footerPlusSecond = document.querySelector(".plus-second")
let footerSubmenu = document.querySelector(".footer-submenu")
let footerPlusFirst = document.querySelector(".plus-first")



window.addEventListener('click', function (e){
    if(e.target === footerPlus ||e.target === footerPlusFirst ||e.target === footerPlusSecond){    
        if(footerPlusSecond.classList.contains("clouse")) {
            footerPlusSecond.classList.remove("clouse")
            footerSubmenu.classList.remove("active-plus")
        } else {
            footerPlusSecond.classList.add("clouse")
            footerSubmenu.classList.add("active-plus")
        }
        
    }
})

let clouseCategory = document.querySelector(".close-category")
let mainRight = document.querySelector(".main-right")
let openCategory = document.querySelector(".open-category")
let closeCategoryLineFirst = document.querySelector(".close-category-first")
let closeCategoryLineLost = document.querySelector(".close-category-lost")

window.addEventListener('click', function (e){
    if(e.target === clouseCategory ||e.target === closeCategoryLineFirst ||e.target === closeCategoryLineLost){    
        if(mainRight.classList.contains("hide-tablet")) {
            mainRight.classList.remove("hide-tablet")
        } else {
            mainRight.classList.add("hide-tablet")
        }
        
    }
})
window.addEventListener('click', function (e){
    if(e.target === openCategory){    
        if(mainRight.classList.contains("hide-tablet")) {
            mainRight.classList.remove("hide-tablet")
        } else {
            mainRight.classList.add("hide-tablet")
        }
        
    }
})


window.addEventListener('scroll', function (){
    if(window.innerWidth < 768) {
        if(window.pageYOffset <= 200 ||window.pageYOffset >= 4350 ) {
            openCategory.classList.add("hide-tablet")
            console.log(window.innerWidth)
        } else {
            openCategory.classList.remove("hide-tablet")
            console.log(window.pageYOffset)
        }
    }else {
        if(window.pageYOffset <= 400 ||window.pageYOffset >= 2100  ) {
            openCategory.classList.add("hide-tablet")
            console.log(window.innerWidth)
        } else {
            openCategory.classList.remove("hide-tablet")
            console.log(window.pageYOffset)
        }
    }

    
    // console.log(window.innerWidth )
    // console.log(window.pageYOffset)
})


