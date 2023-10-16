let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    
    navbar.classList.toggle('active');

}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

const changeThemeBtn = document.querySelector('#change-theme')

changeThemeBtn.addEventListener('change', function() {
    
    let containerDiv = document.querySelector('.container');
    containerDiv.classList.toggle('dark')

    let categoryDivs = document.querySelectorAll('.categoryCard');
    categoryDivs.forEach(function(categoryDiv) {
        categoryDiv.classList.toggle('darkCategoryCard');
    });

    let titleDivs = document.querySelectorAll('.mainCategoryCardTitle');
    titleDivs.forEach(function(titleDiv) {
        titleDiv.classList.toggle('darkMainCategoryCardTitle')
    })
    
})