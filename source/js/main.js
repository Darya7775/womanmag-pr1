// import {iosVhFix} from './utils/ios-vh-fix';
// import {initSandwichMenu} from './modules/init-sandwich-menu';
// import {ScrollLock} from './utils/scroll-lock';
// import {initDynamicAdaptive} from './modules/init-dynamic-adaptive';
// import {initAccordions} from './modules/init-accordion';
// import {initUpButton} from './modules/init-up-button';
// import {initMoveTo} from './modules/init-move-to';
// import {initNavbarMenu} from './modules/init-navbar-menu';
// import {initHeaderObserver} from './modules/init-header-observer';
// import {initTabs} from './modules/init-tabs';
// import {initNavigationChanger} from './modules/init-navigation-changer';
// import {initArticleMenu} from './modules/init-article-menu';
// import {initChangeNumber} from './modules/init-change-number';
// import {initFixedNavbar} from './modules/init-fixed-navbar';
// import {initYearCorrection} from './modules/init-year-correction';
import {initModals} from './modules/init-modals';
import {Form} from './utils/form/form';
import Swiper, {Pagination} from 'swiper';
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

  void new Swiper('.swiper', {
    modules: [Pagination],
    pagination: {
      el: '.main__pagination',
      clickable: true,
    },
  });

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    // initSandwichMenu();
    // initAccordions();
    // initUpButton();
    // initMoveTo();
    // initNavbarMenu();
    // initTabs();
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

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✔️

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
