const navItems = document.querySelectorAll(".nav ul li");
navItems.forEach((nav) => {
    nav.onclick = () => {
        navItems.forEach((nav) => {
            nav.classList.remove("active");
        });
        nav.classList.add("active");
    };
});
