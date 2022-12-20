const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const vacio = document.getElementById('vacio');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
// vacio.addEventListener('click', noMostrarDesktopMenu);

function toggleDesktopMenu(){
    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
    const asideMenuOpen = shoppingCartContainer.classList.contains('inactive');
    desktopMenu.classList.toggle('inactive');
    if (!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    }
    if (!asideMenuOpen){
        shoppingCartContainer.classList.toggle('inactive');
    }
}

function toggleMobileMenu(){
    const asideMenuOpen = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
//    mobileMenu.classList.toggle('inactive');
    mobileMenu.classList.toggle('activo');
    if (!asideMenuOpen){
        shoppingCartContainer.classList.toggle('inactive');
    }
    if (!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    }
}

function toggleCarritoAside(){ 
    const mobileMenuOpen = mobileMenu.classList.contains('inactive');
    const asideMenuOpen = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
    if (!mobileMenuOpen){
        noMostrarDesktopMenu();
    }
    shoppingCartContainer.classList.toggle('inactive');
    if (!asideMenuOpen){
        shoppingCartContainer.classList.toggle('inactive');
    }
    if (!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    }
}

function noMostrarDesktopMenu(){
    const asideMenuOpen = shoppingCartContainer.classList.contains('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.remove('activo');
    if (!asideMenuOpen){
        shoppingCartContainer.classList.toggle('inactive');
    }
}
/* Esto evita la necesidad de crear la función por aparte funcion flecha
menuEmail.addEventListener('click', () =>{
    desktopMenu.classList.toggle('inactive');
});
*/

function openProductDetailAside(){
    const asideMenuOpen = shoppingCartContainer.classList.contains('inactive');
    noMostrarDesktopMenu();
    productDetailContainer.classList.remove('inactive');
    if (!asideMenuOpen){
        shoppingCartContainer.classList.toggle('inactive');
    }
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Portatil',
    price: 230,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Portatil',
    price: 230,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProducts(arr){
for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
    productImg.addEventListener('click',openProductDetailAside);
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
}

}
renderProducts(productList);