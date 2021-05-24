
let tab1 = document.querySelector(".main-tabpost-tab-first")
let tab2 = document.querySelector(".main-tabpost-tab-second")
let tabpost1 = document.querySelector(".main-tabpost-item-first")
let tabpost2 = document.querySelector(".main-tabpost-item-second")
let testkey = document.querySelector(".main-search-input")
let footerPlus = document.querySelector(".footer-menu-item-plus")
let footerPlusSecond = document.querySelector(".plus-second")
let footerSubmenu = document.querySelector(".footer-submenu")
let footerPlusFirst = document.querySelector(".plus-first")
let clouseCategory = document.querySelector(".close-category")
let mainRight = document.querySelector(".main-right")
let openCategory = document.querySelector(".open-category")
let closeCategoryLineFirst = document.querySelector(".close-category-first")
let closeCategoryLineLast = document.querySelector(".close-category-last")
let buttonUpPage = document.querySelector(".up-page")
let heidthMain = document.querySelector(".main")
let heidthHeader = document.querySelector(".header")
let btnMobileMenu = document.querySelector(".open-mobile-menu")
let mobileMenu = document.querySelector('.mobile-menu')
let  clickMobileMenu
let  clickMobileMenuPosition
let scrollMobileMenu
let positionLeft
let workAria


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



window.addEventListener('click', function (e){
    if(e.target === clouseCategory ||e.target === closeCategoryLineFirst ||e.target === closeCategoryLineLast){    
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
function openMobileMenu () {
    btnMobileMenu.classList.add("close-mobile-menu")
    mobileMenu.classList.remove('hide-tablet') 
    mobileMenu.style.left = 15 + "px"

}
function closeMobileMenu () {
    btnMobileMenu.classList.remove("close-mobile-menu") 
    mobileMenu.classList.add('hide-tablet') 
}

btnMobileMenu.addEventListener("click", function(e){
    btnMobileMenu.classList.contains("close-mobile-menu") ? 
    closeMobileMenu () : openMobileMenu ()
    
})

mobileMenu.addEventListener("touchstart", function(e){
    positionLeft = e.touches[0].target.offsetLeft
    clickMobileMenuPosition = e.targetTouches[0].clientX - positionLeft
    clickMobileMenu = e.targetTouches[0].clientX
   
})



mobileMenu.addEventListener("touchmove", function(e) {  
    moveAt(e);
    
    function moveAt(e) {
        workAria = e.targetTouches[0].clientX - clickMobileMenuPosition + mobileMenu.offsetWidth;
        let boxShadowLeft = e.touches[0].target.offsetLeft - 14
        console.log(boxShadowLeft)
        scrollMobileMenu = e.targetTouches[0].clientX
        
        if( scrollMobileMenu >  clickMobileMenu  && scrollMobileMenu < clickMobileMenu + 15) {
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
    if(e.target.style.left.slice(0, -2) < 15 && e.target.style.left.slice(0, -2) > -25 || scrollMobileMenu >  clickMobileMenu){
        mobileMenu.style.left = 15 + "px"
        mobileMenu.style.boxShadow = ""
    } else if(e.target.style.left.slice(0, -2) < -25){
        mobileMenu.classList.add('hide-tablet')
        btnMobileMenu.classList.remove("close-mobile-menu")

    }

  })