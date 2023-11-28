const navHamburger = document.querySelector('.nav__hamburger')
const navLinks = document.querySelector(".nav__links")
const navCloseBtn = document.querySelector('.nav__links-close')
const body = document.querySelector('body')


const handleNav = () => {
    navLinks.classList.add('nav__links--active')
    body.style.backgroundColor = 'rgb(199, 197, 197)'
}
const handleNavClose = () => {
    navLinks.classList.remove('nav__links--active')
    body.style.backgroundColor = '#fff'
}
navHamburger.addEventListener('click', handleNav)
navCloseBtn.addEventListener('click', handleNavClose)
