const hamburger = document.querySelector('.material-symbols-outlined');
const navlist = document.querySelector('.menu-container');

hamburger.addEventListener('click', () => {
    navlist.classList.toggle('show');
}); 

document.querySelectorAll('a[href^="#').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});