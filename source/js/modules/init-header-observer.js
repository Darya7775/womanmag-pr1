const initHeaderObserver = () => {
  const main = document.querySelector('main');
  const header = document.querySelector('.header');
  const headerObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const cr = entry.contentRect;
    }
    main.style.paddingTop = `${header.clientHeight}px`;
  });
  headerObserver.observe(header);
};

export {initHeaderObserver};
