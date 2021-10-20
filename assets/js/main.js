/*==================== MENU SHOW Y HIDDEN ====================*/
const navOpen = document.getElementById('nav-open');
const navMenu = document.getElementById('nav-menu');
const navBg = document.getElementById('nav-bg');
const navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navOpen) {
    navOpen.addEventListener('click', ()=> {
        navMenu.classList.add('show_menu');
        navBg.classList.add('show_menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show_menu');
        navBg.classList.remove('show_menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/


/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 