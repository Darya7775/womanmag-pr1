import {initAccordions} from './modules/init-accordion';
import {initTabs} from './modules/init-tabs';
import {initModals} from './modules/init-modals';
import {Form} from './utils/form/form';
import Swiper, {Pagination, Navigation, Autoplay, A11y, Keyboard} from 'swiper';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  const form = new Form();
  window.form = form;

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

  const openMenu = () => {
    headerButton.setAttribute('data-state', 'active');
    headerNav.style.display = 'flex';
    headerButtonText.textContent = 'Закрыть меню';
    body.classList.add('menu-opened');
  };

  const closeMenu = () => {
    headerButton.setAttribute('data-state', '');
    headerNav.style.display = 'none';
    headerButtonText.textContent = 'Открыть меню';
    body.classList.remove('menu-opened');
  };

  headerButton.addEventListener('click', () => {
    if (headerButton.getAttribute('data-state') === 'active') {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overley.addEventListener('click', () => {
    closeMenu();
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
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Послдений слайд',
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
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Послдений слайд',
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

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initAccordions();
    initTabs();
    initModals();
    form.init();
  });
});
