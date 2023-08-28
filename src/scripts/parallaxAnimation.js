if (window.innerWidth > 640) {
  let fastElements = document.querySelectorAll('.parallax-fast');
  let midElements = document.querySelectorAll('.parallax-mid');
  let slowElements = document.querySelectorAll('.parallax-slow');
  for (let i = 0; i < fastElements.length; i++) {
    window.addEventListener('mousemove', function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      fastElements[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });
  }
  for (let i = 0; i < midElements.length; i++) {
    window.addEventListener('mousemove', function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      midElements[i].style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    });
  }
  for (let i = 0; i < slowElements.length; i++) {
    window.addEventListener('mousemove', function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      slowElements[i].style.transform = 'translate(-' + x * 7 + 'px, -' + y * 7 + 'px)';
    });
  }
}