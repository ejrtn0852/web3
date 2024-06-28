// const observeConfig = () => {
//   return {threshold: 0.3};
// };
//
// const updateClasses = (carousels,state) => {
//   carousels[state.prev].classList.remove('project--position--sticky');
//   carousels[state.next].classList.remove('visibility--hidden');
//   carousels[state.next].classList.add('project--position--sticky');
// }
//
// const handleIntersection = (carousels, items, state) => {
//   items.forEach(item => {
//     if (item.isIntersecting) {
//       updateClasses(carousels,state);
//       state.prev = state.next;
//       state.next = (state.next + 1) % carousels.length;
//       console.log(state.next)
//     }
//   });
// }
//
// const createObserver = (carousels, observeConfig, updateClasses, handleIntersection) => {
//   const state = { next: 0, prev:0};
//
//   const targetObserve = new IntersectionObserver(
//     items => handleIntersection(carousels, items,state),
//     observeConfig()
//   );
//   carousels.forEach(carousel => targetObserve.observe(carousel));
// }
//
// const carouselObserve = (observeConfig, updateClasses, handleIntersection, createObserver) => {
//   const carousels = document.querySelectorAll('.project--wrap');
//   createObserver(carousels, observeConfig, updateClasses, handleIntersection);
// }
//
// carouselObserve(
//   observeConfig,
//   updateClasses,
//   handleIntersection,
//   createObserver);
