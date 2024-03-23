const menuBtn = document.getElementById('menu-btn');
const navMobile = document.getElementById('menu-img');
const overlay = document.getElementById('overlay');
const showNav = document.getElementById('nav');

let isCloseImg = false;

const openMenu = () => {
  if (isCloseImg) {
    navMobile.src = './assets/images/icon-menu.svg';
    overlay.style.display = 'none';
    showNav.classList.toggle('show-nav');
  } else {
    navMobile.src = './assets/images/icon-menu-close.svg';
    overlay.style.display = 'block';
    showNav.classList.toggle('show-nav');
  }
  isCloseImg = !isCloseImg;
};

menuBtn.addEventListener('click', openMenu);
