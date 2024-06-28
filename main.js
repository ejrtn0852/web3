$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['section1', 'section2', 'section3','section4'],
    sectionSelector: '.sections',
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: false,
    afterLoad: function (anchorLink, index) {
      if (index !== 2) {
        const sectionBox = document.querySelector('.sections:nth-child(2)');
        const menuBar = document.querySelectorAll('input[id="menuicon"] + label span');
        sectionBox.style.backgroundColor = '';
        skillMessage.style.color = 'black';
        menuBar.forEach( menu => {
          menu.style.background = '#000';
        })
      }
      const lastImg = document.querySelector('.last--section--container');
      if (index === 4) {
        lastImg.classList.add('opacity--one');
      } else {
        lastImg.classList.remove('opacity--one');
      }
    }

  });
});