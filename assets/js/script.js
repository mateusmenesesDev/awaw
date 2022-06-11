const btnMobile = document.getElementById('btn-nav')

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active-nav')
}
btnMobile.addEventListener('click', toggleMenu)