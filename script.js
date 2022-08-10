const navBarButton = document.getElementById('nav-button')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

navBarButton.addEventListener('click', toggleButton)