let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

const changeThemeBtn = document.querySelector('#change-theme')

changeThemeBtn.addEventListener('change', function() {
    let containerDiv = document.querySelector('.container');
    containerDiv.classList.toggle('dark')
})