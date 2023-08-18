function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('main-animation__fadedown');
    }
  });
}

function onSliderEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('main-animation__faderight');
    }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let sliderObserver = new IntersectionObserver(onSliderEntry, options);
let elements = document.querySelectorAll('.main-animation');
let sliders = document.querySelectorAll('.carousel__container');

for (let elm of elements) {
  observer.observe(elm);
}

for (let elm of sliders) {
  sliderObserver.observe(elm);
}
