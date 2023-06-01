const toggleBtn = document.getElementsByClassName('toggleBtn')[0]
const navLinks = document.getElementsByClassName('navbarLinks')[0]

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})