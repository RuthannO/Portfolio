window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav ul');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    var skewMe2 = document.querySelector('.skew-me2');
    if (window.scrollY > 200) { // Adjust the value to where you want the element to appear
        skewMe2.classList.add('show-on-scroll'); // Remove the period before 'show-on-scroll'
    } else {
        skewMe2.classList.remove('show-on-scroll'); // Remove the period before 'show-on-scroll'
    }
    console.log("scroll");
});
