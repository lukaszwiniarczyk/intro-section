const navHamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');
const navCloseBtn = document.querySelector('.nav__links-close');
const body = document.querySelector('body');
const html = document.querySelector('html');


const navMobileLinks = document.querySelectorAll('.nav__links-ul-li-a')
const navDesktopLinks = document.querySelectorAll('.nav-desktop__links-ul-li-a');

const sublinksMobileContainers = document.querySelectorAll('.nav__links-ul-li-sublinks');
const sublinksDesktopContainers = document.querySelectorAll('.nav-desktop__links-ul-li-sublinks');


const handleNav = () => {
	navLinks.classList.add('nav__links--active');
	body.style.backgroundColor = 'rgb(199, 197, 197)';
	html.style.overflow = 'hidden';
	body.style.overflow = 'hidden';
};
const handleNavClose = () => {
	navLinks.classList.remove('nav__links--active');
	body.style.backgroundColor = '#fff';
	html.style.overflow = 'auto';
	body.style.overflow = 'auto';
};

    navMobileLinks.forEach(link => {
        link.addEventListener('click', () => {

            sublinksMobileContainers.forEach(container => {
                if (container !== link.nextElementSibling) {
                    container.classList.remove('nav__links-ul-li-sublinks-active');
                }
            });

            link.nextElementSibling.classList.toggle('nav__links-ul-li-sublinks-active');
        });
    });


navDesktopLinks.forEach((link) => {
	link.addEventListener('click', () => {
		sublinksDesktopContainers.forEach(container => {
			if(container !== link.nextElementSibling){
				container.classList.remove('nav-desktop__links-ul-li-sublinks-active')
			}
		})
		link.lastElementChild.classList.toggle('activeArrow');
		link.nextElementSibling.classList.toggle('nav-desktop__links-ul-li-sublinks-active');
       
	});
	
});


navHamburger.addEventListener('click', handleNav);
navCloseBtn.addEventListener('click', handleNavClose);
