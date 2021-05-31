
let tab1 = document.querySelector(".main-tabpost-tab-first")
let tab2 = document.querySelector(".main-tabpost-tab-second")
let tabpost1 = document.querySelector(".main-tabpost-item-first")
let tabpost2 = document.querySelector(".main-tabpost-item-second")
let testkey = document.querySelector(".main-search-input")
let footerPlus = document.querySelector(".footer-menu-item-plus")
let footerPlusSecond = document.querySelector(".plus-second")
let footerSubmenu = document.querySelector(".footer-submenu")
let clouseCategory = document.querySelector(".close-category")
let mainRight = document.querySelector(".main-right")
let openCategory = document.querySelector(".open-category")
let buttonUpPage = document.querySelector(".up-page")
let heidthMain = document.querySelector(".main")
let btnMobileMenu = document.querySelector(".open-mobile-menu")
let mobileMenu = document.querySelector('.mobile-menu')
let clickMobileMenu
let clickMobileMenuPosition
let scrollMobileMenu
let boxShadowLeft
let positionLeft
let mainRightPositionRight
let clickMainRightPosition
let clickMainRight
let boxShadowMainRight
let scrollMainRight

function openMobileMenu () {
    btnMobileMenu.classList.add("close-mobile-menu")
    mobileMenu.classList.remove('hide-tablet') 
    mobileMenu.style.left = 15 + "px"
    mobileMenu.style.transition = "1s"

}
function closeMobileMenu () {
    btnMobileMenu.classList.remove("close-mobile-menu") 
    mobileMenu.style.left = -400 + "px"
    mobileMenu.style.transition = "1s"
}

btnMobileMenu.addEventListener("click", function(e){
    btnMobileMenu.classList.contains("close-mobile-menu") ? 
    closeMobileMenu () : openMobileMenu ()
    
})

mobileMenu.addEventListener("touchstart", function(e){
    positionLeft = mobileMenu.style.left.slice(0, -2)
    clickMobileMenuPosition = e.targetTouches[0].clientX - positionLeft
    clickMobileMenu = e.targetTouches[0].clientX
    mobileMenu.style.transition = "0s"   
})

mobileMenu.addEventListener("touchmove", function(e) {  
    moveAt(e);
    
    function moveAt(e) {
        boxShadowLeft = mobileMenu.style.left.slice(0, -2) - 14
        scrollMobileMenu = e.targetTouches[0].clientX
        
        if( scrollMobileMenu >  clickMobileMenu  && scrollMobileMenu < clickMobileMenu + 30) {
            mobileMenu.style.left = scrollMobileMenu - clickMobileMenuPosition + 'px';
            mobileMenu.style.boxShadow = `${boxShadowLeft}px 0px 20px #223a7b`;
        }else if (scrollMobileMenu < clickMobileMenu) {
            mobileMenu.style.left = scrollMobileMenu - clickMobileMenuPosition + 'px';
            mobileMenu.style.boxShadow = ""
        }
        
        return (mobileMenu.style.left, scrollMobileMenu)
    }
    
})

mobileMenu.addEventListener("touchend", function(e) { 
    if(mobileMenu.style.left.slice(0, -2) < 30 && mobileMenu.style.left.slice(0, -2) > -40 || scrollMobileMenu >  clickMobileMenu){
        mobileMenu.style.left = 15 + "px"
        mobileMenu.style.boxShadow = ""
    } else if(mobileMenu.style.left.slice(0, -2) < -39){
        closeMobileMenu ()
    }

})

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

footerPlus.addEventListener('click', function (){
    if(footerPlusSecond.classList.contains("clouse")) {
        footerPlusSecond.classList.remove("clouse")
        footerSubmenu.classList.remove("active-plus")
    } else {
        footerPlusSecond.classList.add("clouse")
        footerSubmenu.classList.add("active-plus")
    }
})

clouseCategory.addEventListener('click', function (){
    mainRight.style.right = '-400px'
    mainRight.style.transition = "1s" 
})

openCategory.addEventListener('click', function (){
    mainRight.style.right = '20px'
    mainRight.style.transition = "1s" 
})


window.addEventListener('scroll', function (){
    if(window.innerWidth < 768) {
        if(window.pageYOffset <= 200 ||window.pageYOffset >= (heidthMain.offsetHeight - 500)) {
            openCategory.classList.add("hide-tablet")
        } else {
            openCategory.classList.remove("hide-tablet")
        }
    }else {
        if(window.pageYOffset <= 400 ||window.pageYOffset >= (heidthMain.offsetHeight - 500)) {
            openCategory.classList.add("hide-tablet")
        } else {
            openCategory.classList.remove("hide-tablet")
           
        }
    }
})

window.addEventListener('scroll', function (){
    if(window.innerWidth < 768) {
        if(window.pageYOffset <= 200) {
            buttonUpPage.classList.add("hide-tablet")
        } else {
            buttonUpPage.classList.remove("hide-tablet")
        }
    }else {
        if(window.pageYOffset <= 400) {
            buttonUpPage.classList.add("hide-tablet")

        } else {
            buttonUpPage.classList.remove("hide-tablet")
        }
    }

})

buttonUpPage.addEventListener("click", function(){
    window.scroll(0, 0)
})

mainRight.addEventListener("touchstart", function(e){
    mainRightPositionRight = mainRight.style.right.slice(0, -2)
    clickMainRightPosition = e.targetTouches[0].clientX - mainRightPositionRight
    clickMainRight = e.targetTouches[0].clientX
    mainRight.style.transition = "0s"    
})

mainRight.addEventListener("touchmove", function(e) {  

    boxShadowMainRight = mainRight.style.right.slice(0, -2) - 19
    scrollMainRight = e.targetTouches[0].clientX

    if( scrollMainRight > clickMainRight - 30 && scrollMainRight < clickMainRight ) {
        mainRight.style.right = (scrollMainRight - clickMainRight) *-1 + +mainRightPositionRight + 'px';
        mainRight.style.boxShadow = `-${boxShadowMainRight}px 0px 20px #223a7b`;

    }else if (scrollMainRight > clickMainRight) {
        mainRight.style.right = (scrollMainRight - clickMainRight) *-1 + +mainRightPositionRight + 'px';;
        mainRight.style.boxShadow = ""
    }
    
    return (mainRight.style.right, scrollMainRight)
    
    
})

mainRight.addEventListener("touchend", function(e) { 
    if(mainRight.style.right.slice(0, -2) > mainRightPositionRight || mainRight.style.right.slice(0, -2) > -40){
        mainRight.style.right = mainRightPositionRight + "px"
        mainRight.style.boxShadow = ""
    } else if(mainRight.style.right.slice(0, -2) < -39){
        mainRight.style.right = '-400px'
        mainRight.style.transition = "1s" 

    }

})


let set = setInterval(plusSlide, 5000)

window.addEventListener("mouseover", function(e){
    if(e.target.parentElement.classList.value === "item" || e.target.parentElement.classList.value === "slider" ){
        clearInterval(set)
        return set = null
    }else{
        if(set === null){
            set = setInterval(plusSlide, 5000)
        }
    }   
})

var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}




