function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
}


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navMenu")
            .classList.remove("active");

    });

});