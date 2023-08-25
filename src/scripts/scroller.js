const slider = document.querySelector('.slider');
const sliderList = slider.querySelector('.slider__list');
const sliderTrack = slider.querySelector('.article-framer_flex_row');
const slides = slider.querySelectorAll('.article-frame_flex_row');

sliderList.addEventListener('wheel', function (e) {
  if (e.deltaY !== 0) {
    // замена вертикальной прокрутки горизонтальной
    this.scrollLeft += e.deltaY;
    e.preventDefault();
  }
});