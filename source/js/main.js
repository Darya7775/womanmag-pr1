// import {iosVhFix} from './utils/ios-vh-fix';
// import {initSandwichMenu} from './modules/init-sandwich-menu';
// import {ScrollLock} from './utils/scroll-lock';
// import {initDynamicAdaptive} from './modules/init-dynamic-adaptive';
import {initAccordions} from './modules/init-accordion';
// import {initUpButton} from './modules/init-up-button';
// import {initMoveTo} from './modules/init-move-to';
// import {initNavbarMenu} from './modules/init-navbar-menu';
// import {initHeaderObserver} from './modules/init-header-observer';
import {initTabs} from './modules/init-tabs';
// import {initNavigationChanger} from './modules/init-navigation-changer';
// import {initArticleMenu} from './modules/init-article-menu';
// import {initChangeNumber} from './modules/init-change-number';
// import {initFixedNavbar} from './modules/init-fixed-navbar';
// import {initYearCorrection} from './modules/init-year-correction';
import {initModals} from './modules/init-modals';
import {Form} from './utils/form/form';
import Swiper, {Pagination, Navigation, Autoplay, A11y, Keyboard} from 'swiper';
// import {initSearch} from './modules/init-search.js';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  // initDynamicAdaptive();
  // window.scrollLock = new ScrollLock();
  const form = new Form();
  window.form = form;
  // iosVhFix();
  // initHeaderObserver();
  // initYearCorrection();

  // Modules
  // ---------------------------------
  // header
  const breakpoint = window.matchMedia('(min-width:767px)');

  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  const headerButton = header.querySelector('.header__accordion');
  const headerButtonText = header.querySelector('.header__accordion-text');
  const headerNav = header.querySelector('.header__nav');
  const overley = header.querySelector('.header__overlay');

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      headerNav.style.display = 'flex';
    } else {
      headerNav.style.display = 'none';
    }
  };

  breakpoint.addEventListener('change', breakpointChecker);
  breakpointChecker();

  headerButton.addEventListener('click', () => {
    if (headerButton.getAttribute('data-state') === 'active') {
      headerButton.setAttribute('data-state', '');
      headerNav.style.display = 'none';
      headerButtonText.textContent = '?????????????? ????????';
      body.classList.remove('menu-opened');
    } else {
      headerButton.setAttribute('data-state', 'active');
      headerNav.style.display = 'flex';
      headerButtonText.textContent = '?????????????? ????????';
      body.classList.add('menu-opened');
    }
  });

  overley.addEventListener('click', () => {
    headerButton.setAttribute('data-state', '');
    headerNav.style.display = 'none';
    headerButtonText.textContent = '?????????????? ????????';
    body.classList.remove('menu-opened');
  });
  // main
  void new Swiper('.main__wrap', {
    modules: [Pagination, Autoplay, A11y, Keyboard],
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.main__pagination',
      clickable: true,
    },
    autoplay: {
      stopOnLastSlide: true,
      disableOnInteraction: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    a11y: {
      enebled: true,
      prevSlideMessage: '???????????????????? ??????????',
      nextSlideMessage: '?????????????????? ??????????',
      firstSlideMessage: '???????????? ??????????',
      lastSlideMessage: '?????????????????? ??????????',
      notificationClass: 'swiper-notification',
    },
    allowTouchMove: true,
  });

  const linkMain = document.querySelectorAll('.main__button_scroll');
  linkMain.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });

  // command
  void new Swiper('.command__swiper', {
    modules: [Pagination, Navigation, Autoplay, A11y, Keyboard],
    grabCursor: true,
    loop: true,
    pagination: {
      el: '.command__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.command__navigation-next',
      prevEl: '.command__navigation-prev',
    },
    autoplay: {
      disableOnInteraction: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    a11y: {
      enebled: true,
      prevSlideMessage: '???????????????????? ??????????',
      nextSlideMessage: '?????????????????? ??????????',
      firstSlideMessage: '???????????? ??????????',
      lastSlideMessage: '?????????????????? ??????????',
      notificationClass: 'swiper-notification',
    },
  });
  // shop
  const shopTabs = document.querySelectorAll('.shop__button');

  shopTabs.forEach((link) => {
    link.addEventListener('click', () => {
      for (let i = 0; i < shopTabs.length; i++) {
        shopTabs[i].classList.remove('shop__button--active');
      }
      link.classList.add('shop__button--active');
    });
  });

  // ?????? ?????????????? ???????????? ???????? ?? ?????????????????????? 'DOMContentLoaded', ???? ???? ?????? ?? 'load'
  // ?? load ?????????????? ???????????????? ??????????????, ???? ?????????????????????? ?? ???????????? ?????????????? ????????????
  window.addEventListener('load', () => {
    // initSandwichMenu();
    initAccordions();
    // initUpButton();
    // initMoveTo();
    // initNavbarMenu();
    initTabs();
    // initNavigationChanger();
    // initArticleMenu();
    // initChangeNumber();
    // initFixedNavbar();
    initModals();
    form.init();
    // initSearch();
  });
});

// ---------------------------------

// ????????? ?????????????????????? ???????????????????? ?????????????? eslint, stylelint, editorconfig ?? ???????????????? ????????.

// ???????????????????????? js ???? ???? ????????????, ?? ???? ???????? ???????????????? (data-validate)

// ???????????? ?????????????????????????? .block--active ???????????????????? ?????????????????????? ????????????
// .is-active || .is-open || .is-invalid ?? ???????????? (???????????????????? ?????????????? ?? ?????? ??????????)
// .select.select--opened ??? ---> [data-select].is-open ??????

// ?????????????? ?????? ?? ???????? ????????????????
// url ???? ???????????? ?????????? ??????????, ?????????????????? ?????????????????????????? ????????????????, url ?? json ?? ??.??.

// ?????? ?????????????????????? JS ?????????????????????????? matchMedia ?? addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// ?????????????????????? .closest(el)
