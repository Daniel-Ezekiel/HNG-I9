const menuBtn = document.querySelector('.nav-btn');
const menuBar = document.querySelector('.hamburger');
const menuList = document.querySelector('.nav-menu');

menuBar.addEventListener('click', showMenu);

export function showMenu(){
    menuBtn.classList.toggle('is-active');
    menuBar.classList.toggle('is-active');
    menuList.classList.toggle('is-active');
}