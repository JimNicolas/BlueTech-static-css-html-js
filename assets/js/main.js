// FUNCTION ANIMATION TOGGLE SHOW LIST
const toggle = document.querySelector('.toggle');
let navList = document.querySelector('.list-nav');
let showNav = false;
toggle.addEventListener('click', () => {
  if (!showNav) {
    navList.style.animation = 'showNav .2s ease 0s  alternate  both';
    showNav = true;
  } else {
    navList.style.animation = 'closeNav .2s ease 0s  alternate  both';
    showNav = false;
  }
  console.log(navList);
});
