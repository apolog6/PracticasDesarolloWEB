const toggle = document.querySelector('.toggle')
const navmenu = document.querySelector('.nav-menu')

toggle.addEventListener('click', () => {

    toggle.classList.toggle('rotate')
    navmenu.classList.toggle('active')
})

