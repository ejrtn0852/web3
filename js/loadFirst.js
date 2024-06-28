const domLoadStart = () => window.addEventListener('DOMContentLoaded', () => {
  setTimeout( () => {
    const profileWrap = document.querySelector('.profile--text--wrap');
    const imgWrap = document.querySelector('.profile--img--wrap');
    profileWrap.style.transform = 'translateX(-100px)';
    imgWrap.style.transform = 'translateX(0px)';
  },1000)
})

domLoadStart();