document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.toggle('hidden');
    navbarNav.classList.toggle('flex');
    navbarNav.classList.toggle('flex-col');
    navbarNav.classList.toggle('absolute');
    navbarNav.classList.toggle('top-16');
    navbarNav.classList.toggle('left-0');
    navbarNav.classList.toggle('right-0');
    navbarNav.classList.toggle('bg-black');
    navbarNav.classList.toggle('p-4');
    navbarNav.classList.toggle('shadow-lg');
    navbarNav.classList.toggle('space-y-4');
});