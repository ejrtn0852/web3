
// carousel과 의존성 문제 이슈
const containerObserve = () => {
  const target = document.querySelector('.project--container');

  if (target) {
    const targetObserve = new IntersectionObserver(
      items => {
        items.forEach(item => {
          if (item.isIntersecting) {
            item.target.classList.add('overflow--vi');
          }
        });
      },
      {threshold: 0.5}
    );
    targetObserve.observe(target);
  }
}

containerObserve();