const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
/* Esto evita la necesidad de crear la función por aparte funcion flecha
menuEmail.addEventListener('click', () =>{
    desktopMenu.classList.toggle('inactive');
});
*/
