const createObserve = (profileBox, title,list, isHeightUp) => {
  const resizeObserver = new ResizeObserver(target => {
    target.forEach( element => isHeightUp(element, title, list));
  });
  resizeObserver.observe(profileBox);
}

const isHeightUp = (element, title, list) => {
  if (element.contentRect.height >= 500) {
    title.forEach(title => title.classList.add('opacity--1'));
    list.forEach(list => list.classList.add('opacity--1'));
  }
}


const resizeHandler = (createObserve, isHeightUp) => {
  const profileBox = document.querySelector('.profile--career');
  const title = document.querySelectorAll('.profile--education--title');
  const list = document.querySelectorAll('.profile--education--list');

  createObserve(profileBox, title,list,isHeightUp);
}

resizeHandler(
  createObserve,
  isHeightUp
);