import IntersectionObserver from 'intersection-observer-polyfill';

const browserCutsTheMustard = () => {
  return true
  return !!window.IntersectionObserver
};

function observeProducts() {
  const observees = document.querySelectorAll('.c-product__img');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        console.log(entry.intersectionRatio);
        entry.target.classList.add('rellax');
      }
    });
  });

  observees.forEach(observee => {
    observer.observe(observee);
  });
}

export function productObserver() {
  if (browserCutsTheMustard()) {
    observeProducts();
  }
}