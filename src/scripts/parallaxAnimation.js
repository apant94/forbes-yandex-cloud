let fastElements = document.querySelectorAll('.parallax-fast');
for (let i = 0; i < fastElements.length; i++) {
  window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    fastElements[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
  });
}