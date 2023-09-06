const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener('mousemove', function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
  console.log(e.target);
  if (e.target.classList.contains('change-effect')) {
    circles.forEach(function (circle, index) {
      circle.classList.add('active');
    });
  } else {
    circles.forEach(function (circle, index) {
      circle.classList.remove('active');
    });
  }
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + 'px';
    circle.style.top = y - 12 + 'px';

    circle.style.scale = index / 4;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
