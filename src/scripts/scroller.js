if (document.title == 'Как ускорить создание ПО для металлургии') {
  const slider = document.querySelector('.slider');
  const sliderList = slider.querySelector('.slider__list');

  sliderList.addEventListener('wheel', function (e) {
    if (e.deltaY !== 0) {
      // замена вертикальной прокрутки горизонтальной
      this.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  });
}