let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Leather Bag',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81nwzKeL5JL._UL1500_.jpg',
        price: 120000
    },
    {
        id: 2,
        name: 'Fit Twill Shirt for Woman',
        image: 'https://i.pinimg.com/originals/3e/fb/b4/3efbb436277116190ec712ff2c06a4b4.jpg',
        price: 10000
    },
    {
        id: 3,
        name: 'Grand Atlantic Boots',
        image: 'https://www.colehaan.com/dw/image/v2/AALO_PRD/on/demandware.static/-/Sites-itemmaster_colehaan/default/dw77cc6c27/images/large/C28213_E.jpg?sw=1020',
        price: 22000
    },
    {
        id: 4,
        name: 'Women Trim Shirt',
        image: 'http://img.ltwebstatic.com/images/pi/201711/e5/15099550953176322659.jpg',
        price: 123000
    },
    {
        id: 5,
        name: 'Soft Touch Polo',
        image: 'https://qb-style.s3.amazonaws.com/1326/1326-23673-lg.jpg" alt="Soft Touch Interlock Polo',
        price: 320000
    },
    {
        id: 6,
        name: 'Smart Watch',
        image: 'https://i5.walmartimages.com/asr/7bccdcc8-05df-493a-9713-158268b85dd6.6a754cc989a91276524c6dc08ea82dab.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
        price: 120000
    },
    {
        id: 7,
        name: 'Smart Glass',
        image: 'https://images.indianexpress.com/2020/07/North-focals-main.jpg',
        price: 120000
    },
    {
        id: 8,
        name: 'Cotton Shirts',
        image: 'https://i.pinimg.com/736x/2e/e8/cb/2ee8cbeeb75a71b32f6c1629aa308ebe.jpg',
        price: 10000
    },
    {
        id: 9,
        name: 'Double-breasted Blazer',
        image: 'https://i.pinimg.com/originals/97/fe/1b/97fe1bca345dd769f51a94661068021f.jpg', 
        price: 120000
    },
    {
        id: 9,
        name: 'Cotton Bodysuits',
        image: 'https://i.pinimg.com/originals/8e/3f/86/8e3f862b0755c95107ff462544625aa6.jpg',
        price: 12000
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}