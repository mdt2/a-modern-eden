import smoothScroll from './smoothScroll';
import myRellax from './rellax';
import { observer } from './intersectionObserver';
// import { productObserver } from './productObserver';

const jumpLinks = document.querySelectorAll('.js-smooth-jump-link');

[...jumpLinks].forEach((el) => {
  el.addEventListener('click', (e) => {
    const pageFragmentToScrollTo = e.target.getAttribute('href');
    const elementToScrollTo = document.querySelector(pageFragmentToScrollTo);

    smoothScroll(
      elementToScrollTo,
      700,
      'easeOutQuint',
    );
  });
});

myRellax();
observer();
// productObserver();