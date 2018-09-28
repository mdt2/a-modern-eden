import IntersectionObserver from 'intersection-observer-polyfill';

const browserCutsTheMustard = () => {
  return true
  return !!window.IntersectionObserver
};

function observe() {
  const observees = document.querySelectorAll('.paws');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        console.log(entry.intersectionRatio);
        entry.target.classList.add('animate');
      }
    });
  });

  observees.forEach(observee => {
    observer.observe(observee);
  });
}

export function observer() {
  if (browserCutsTheMustard()) {
    observe();
  }
}