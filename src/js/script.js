    // let header = document.querySelector('.header'),
    //     navItem = document.querySelectorAll('.header>div>div'),
    //     navSpan = document.querySelectorAll('.header__navigation__item-nav'),
    //     navCart = document.querySelectorAll('.header__block-search-cart-lang>a span'),
    //     navSearch = document.querySelectorAll('.header__block-search-cart-lang__search i'),
    //     navLang = document.querySelectorAll('.header__block-search-cart-lang__lang>a');
    //     burgerSpan = document.querySelectorAll('.header__block-burger>span');

    //     window.onscroll = function(e) {
    //         if(this.oldScroll <= scrollY){
    //             console.log('down');
    //             for (var i = 0; i < navItem.length; i++) {
    //                 navItem[i].classList.add("black");
    //             }
    //             for (var i = 0; i < navSpan.length; i++) {
    //                 navSpan[i].classList.add("black");
    //             }
    //             for (var i = 0; i < navCart.length; i++) {
    //                 navCart[i].classList.add("black");
    //             }
    //             for (var i = 0; i < navLang.length; i++) {
    //                 navLang[i].classList.add("black");
    //             }
    //             for (var i = 0; i < burgerSpan.length; i++) {
    //                 burgerSpan[i].style.backgroundColor = "black";
    //             }
    //             for (var i = 0; i < navSearch.length; i++) {
    //                 navSearch[i].classList.add("black");
    //             }
    //             header.classList.add("bg-white"),
    //             header.style.top = 0,
    //             document.querySelector('.header__logo--white').setAttribute('src','img/Logo-black.png')
    //         }else if(this.scrollY == 0){
    //             console.log('top')

    //             for (var i = 0; i < navItem.length; i++) {
    //                 navItem[i].classList.remove("black");
    //             }
    //             for (var i = 0; i < navSpan.length; i++) {
    //                 navSpan[i].classList.remove("black");
    //             }
    //             for (var i = 0; i < navCart.length; i++) {
    //                 navCart[i].classList.remove("black");
    //             }
    //             for (var i = 0; i < navLang.length; i++) {
    //                 navLang[i].classList.remove("black");
    //             }
    //             for (var i = 0; i < burgerSpan.length; i++) {
    //                 burgerSpan[i].style.backgroundColor = "black";
    //             }
    //             for (var i = 0; i < navSearch.length; i++) {
    //                 navSearch[i].classList.remove("black");
    //             }
    //             header.classList.remove("bg-white"),
    //             header.style.top = 0,
    //             document.querySelector('.header__logo--white').setAttribute('src','img/Logo.png')
    //         }else if(~window.location.href.indexOf("product")){
    //             for (var i = 0; i < burgerSpan.length; i++) {
    //                 burgerSpan[i].style.backgroundColor = "black";
    //             }
    //         }
    //         else{
 

    //             header.style.top = `-${header.offsetHeight+'px'}`;

    //         }
    //         this.oldScroll = this.scrollY;
    //     }

    let header = document.getElementById('new-header'),
        navItem = document.querySelectorAll('.header>div>div'),
        navSpan = document.querySelectorAll('.header__navigation__item-nav'),
        navCart = document.querySelectorAll('.header__block-search-cart-lang>a span'),
        navSearch = document.querySelectorAll('.header__block-search-cart-lang__search i'),
        navLang = document.querySelectorAll('.header__block-search-cart-lang__lang>a');
        burgerSpan = document.querySelectorAll('.header__block-burger>span');

    window.onscroll = function(e) {
        if(this.oldScroll <= scrollY){
            // console.log('down');
            for (var i = 0; i < navItem.length; i++) {
                navItem[i].classList.add("black");
            }
            for (var i = 0; i < navSpan.length; i++) {
                navSpan[i].classList.add("black");
            }
            for (var i = 0; i < navCart.length; i++) {
                navCart[i].classList.add("black");
            }
            for (var i = 0; i < navLang.length; i++) {
                navLang[i].classList.add("black");
            }
            for (var i = 0; i < burgerSpan.length; i++) {
                burgerSpan[i].style.backgroundColor = "black";
            }
            for (var i = 0; i < navSearch.length; i++) {
                navSearch[i].classList.add("black");
            }
            header.style.top = 0,
            header.classList.add("bg-white"),

            // document.querySelector('.header__logo--white').setAttribute('src','/wp-content/themes/barberry/newimg/img/Logo-black.png')
            document.querySelector('.header__logo--white').setAttribute('src','/img/Logo-black.png')
        }else if(this.scrollY == 0){
            // console.log('top')

            for (var i = 0; i < navItem.length; i++) {
                navItem[i].classList.remove("black");
            }
            for (var i = 0; i < navSpan.length; i++) {
                navSpan[i].classList.remove("black");
            }
            for (var i = 0; i < navCart.length; i++) {
                navCart[i].classList.remove("black");
            }
            for (var i = 0; i < navLang.length; i++) {
                navLang[i].classList.remove("black");
            }
            for (var i = 0; i < burgerSpan.length; i++) {
                burgerSpan[i].style.backgroundColor = "black";
            }
            for (var i = 0; i < navSearch.length; i++) {
                navSearch[i].classList.remove("black");
            }
            header.classList.remove("bg-white"),
            header.style.top = 0,
            // document.querySelector('.header__logo--white').setAttribute('src','/wp-content/themes/barberry/newimg/img/Logo.png')
            document.querySelector('.header__logo--white').setAttribute('src','/img/Logo.png')
        }else if(~window.location.href.indexOf("product")){
            for (var i = 0; i < burgerSpan.length; i++) {
                burgerSpan[i].style.backgroundColor = "black";
            }
        }
        else{              
            header.style.top = `-${header.offsetHeight+'px'}`;
        }
        this.oldScroll = this.scrollY;
    }

function is_fully_shown(e){
    var a=jQuery(window).scrollTop(),
    r=jQuery(window).height(),
    s=jQuery(e).height(),
    l=jQuery(e).offset().top,
    i=jQuery(document).height();
    return a+r>=l||r+a==i||s+l<r
}
function parallaxScroll(){
    var e=jQuery(window).scrollTop();
    jQuery(".block-with-img__img img").css("transform",`translateY(${0+e/270}%)`)
}
jQuery(".container-of-ingredients__wrapper__item").addClass("_anim-img"),
jQuery(".how-to-use__item").addClass("_anim-img"),
jQuery(".wrapper-why-should-use__item").addClass("_anim-img"),
jQuery(".wrapper-kombucha-products__item").addClass("_anim-img"),

jQuery(document).ready((function(){
    jQuery(".slick-slide").css("height",""+jQuery(window).height()),
    jQuery(".block-main-slider").removeClass("block-main-slider--animate"),
    jQuery(".slick-arrow").append("<span></span>"),
    jQuery(".slick-arrow").append("<span></span>");

    //   Header   //

    jQuery(".header__navigation__item-nav"),
    jQuery(".header__navigation__item-nav__menu").delay(1e3);
    a=jQuery(".burger-menu__nav__item-nav__menu"),
    jQuery(".burger-menu__nav__item-nav").click((function(){
        jQuery(this).find(a).toggleClass("open-burger-menu");
    }))

    jQuery(".header__block-burger").click((function(){
        jQuery(this).hasClass("header__block-burger__cross")
        ?(jQuery(".burger-menu").css("left","-100%"),
        jQuery(".header__block-burger").removeClass("header__block-burger__cross"),
        jQuery("body").css("overflow","scroll")):(jQuery(".burger-menu").css("left","0"),
        jQuery(".header").children().children().addClass("black"),
        jQuery(".header").children().children().children().addClass("black"),
        jQuery(".header").children().children().children().children().addClass("black"),
        jQuery(".header__logo--white").addClass("header__logo--hide"),
        jQuery(".header__logo--black").removeClass("header__logo--hide"),
        jQuery(".header__block-burger span").css("background","black"),
        jQuery(".header__block-burger").addClass("header__block-burger__cross"),
        jQuery("body").css("overflow","hidden"),
        jQuery(".burger-menu__nav").css("overflow","scroll"),
        jQuery(".burger-menu__nav").css("height",""+(jQuery(window).height()-50+"px")))
    }))
})),

jQuery(window).scroll(function(){
    jQuery("._anim-img").each((function(){
        is_fully_shown(jQuery(this))&&jQuery(this).removeClass("_anim-img")
    })),
    jQuery(".wrapper-kombucha-products__item").each((function(){
        is_fully_shown(jQuery(this))&& jQuery(this).removeClass("_anim-img")
    })),
    jQuery(".block-with-img").each((function(){
        is_fully_shown(jQuery(this))&&jQuery(this).removeClass("_anim-img")
    })),
    jQuery(".main-caption").each((function(){
        is_fully_shown(jQuery(this))&&jQuery(this).removeClass("_anim-caption")
    })),
    jQuery(".text-description p").each((function(){
        is_fully_shown(jQuery(this))&&jQuery(this).removeClass("_anim-text")
    })
)}),

jQuery(window).scroll(function(){
    jQuery(window).width()>768&&parallaxScroll()
});

let accItem = document.getElementsByClassName('faq-table__item'),
    accHD = document.getElementsByClassName('faq-table__item__header');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'faq-table__item close';
        accItem[i].children[0].children[0].className = 'fas fa-chevron-down faq-arrow--close';
    }
    if (itemClass == 'faq-table__item close') {
        this.parentNode.className = 'faq-table__item open';
        this.children[0].className = 'fas fa-chevron-down faq-arrow--open'
    }
}

jQuery('.button-readmore').each(function(){
    jQuery(this).click(function(){
        let arrowOfBtnReadMore = jQuery(this).children(),
            hideText = jQuery(this).parent('.wrapper-why-should-use__item__text').children('.hide-text'),
            parentHideText = jQuery('.wrapper-why-should-use__item__text'),
            dots = jQuery(this).parent('.wrapper-why-should-use__item__text').children('.dots');
            hideText.css('width',`${parentHideText.width()+'px'}`)
            hideText.slideToggle({
                duration:300,
            })       
             if(hideText.hasClass('.hide-text--open')){
            arrowOfBtnReadMore.css('transform','rotate(180deg)')
            dots.css('display','inline-block');
            hideText.removeClass('.hide-text--open');
        }else{
            arrowOfBtnReadMore.css('transform','rotate(0deg)')
            dots.css('display','none');
            hideText.addClass('.hide-text--open');
            parentHideText.css('position','relative');
        }
    })
})