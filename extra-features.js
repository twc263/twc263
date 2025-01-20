let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    console.log(`scrollTop: ${scrollTop}, lastScrollTop: ${lastScrollTop}`);

    if (scrollTop > lastScrollTop) {
        // User is scrolling down, hide the navbar
        navbar.style.top = '-160px'; // Adjust -60px based on your navbar height
    } else {
        // User is scrolling up, show the navbar
        navbar.style.top = '0';
    }

    lastScrollTop = scrollTop;
});
var swiper = new Swiper('.swiper-container', {
slidesPerView: 3.3,
spaceBetween: 5,
freeMode: true,
loop: false,
});

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
const scrolled = window.scrollY;
const documentHeight = document.documentElement.scrollHeight;
const windowHeight = window.innerHeight;

// Check if the user is in the first or second half of the page
if (scrolled > (documentHeight - windowHeight) / 2) {
// In the second half, set the button to scroll to top
scrollButton.classList.add('up');
} else {
// In the first half, set the button to scroll to bottom
scrollButton.classList.remove('up');
}
});

// Add click event listener to the button
scrollButton.addEventListener('click', () => {
if (scrollButton.classList.contains('up')) {
// Scroll to the top
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
} else {
// Scroll to the bottom
window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
});
}
});
