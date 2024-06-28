//
// const returnMoveElement = () => {
//   const aboutMe = document.querySelector('.about--me--wrap');
//   const skill = document.querySelector('.skill--wrap');
//   const project = document.querySelector('.project--container');
//   const targetArr = [aboutMe, skill, project];
//
//   return targetArr.map(target => {
//     const rect = target.getBoundingClientRect();
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return {
//       top: rect.top + scrollTop
//     };
//   });
// }
//
//
// const targetMoveHandler = () => {
//   const findAll = document.querySelectorAll('.project--header span');
//   const move = returnMoveElement();
//
//   findAll.forEach((target, index) => {
//     target.addEventListener('click', () => {
//       const targetPosition = move[index].top;
//       window.scrollTo({
//         top: targetPosition,
//         left: 0,
//         behavior: "smooth"
//       });
//     });
//   });
// }
//
//
// targetMoveHandler();