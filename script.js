let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hide');  // Add class to hide the navbar
      } else {
        // Scrolling up
        navbar.classList.remove('hide');  // Remove class to show the navbar
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
      ticking = false;
    });
    ticking = true;
  }
});
var swiper = new Swiper('.swiper-container', {
slidesPerView: 3.3,
spaceBetween: 5,
freeMode: true,
loop: false,
});
// Get the button element
const scrollButton = document.getElementById('scrollButton');

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


