import WOW from 'wow.js';

const fadeUp = new WOW(
  {
    boxClass: 'animate',      // animated element css class (default is wow)
    // animateClass: 'animate__animated', // animation css class (default is animated)
    animateClass: 'animation',
    offset: 0,          // distance to the element when triggering the animation (default is 0)
    mobile: true,       // trigger animations on mobile devices (default is true)
    live: true,       // act on asynchronously loaded content (default is true)
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
fadeUp.init();

const fadeRight = new WOW(
  {
    boxClass: 'animate__right',      // animated element css class (default is wow)
    // animateClass: 'animate__animated', // animation css class (default is animated)
    animateClass: 'animation__faderight',
    offset: 0,          // distance to the element when triggering the animation (default is 0)
    mobile: true,       // trigger animations on mobile devices (default is true)
    live: true,       // act on asynchronously loaded content (default is true)
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
fadeRight.init();