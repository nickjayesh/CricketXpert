
//Font Popup Panel
function fontToggle() {
    var fontaction = document.querySelector('.fontaction');
    fontaction.classList.toggle('active')
}

//Go to top
mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}




//Add to cart
let carts = document.querySelectorAll('.add-to-cart');

let products = [
    {
        name: 'Kookabura bats',
        tag: 'product1',
        price: 50,
        inCart: 0
    },
    {
        name: 'Greynicholls Bats',
        tag: 'product2',
        price: 60,
        inCart: 0
    },
    {
        name: 'Adidas Bats',
        tag: 'product3',
        price: 70,
        inCart: 0
    },
    {
        name: 'New Balance Bats',
        tag: 'product4',
        price: 80,
        inCart: 0
    },
    {
        name: 'Sri Lankan Jersey',
        tag: 'product5',
        price: 45,
        inCart: 0
    },
    {
        name: 'South African',
        tag: 'product6',
        price: 50,
        inCart: 0
    },
    {
        name: 'Indian Jersey',
        tag: 'product7',
        price: 45,
        inCart: 0
    },
    {
        name: 'Australian Jersey',
        tag: 'product8',
        price: 55,
        inCart: 0
    },
    {
        name: 'Dukes leather ball',
        tag: 'product9',
        price: 100,
        inCart: 0
    },
    {
        name: 'SG  leather ball',
        tag: 'product10',
        price: 90,
        inCart: 0
    },
    {
        name: 'Kookabura  leather ball',
        tag: 'product11',
        price: 85,
        inCart: 0
    },
    {
        name: 'White  leather ball',
        tag: 'product12',
        price: 100,
        inCart: 0
    },
    {
        name: 'Dunlop Tennis balls-Entire tin',
        tag: 'product13',
        price: 80,
        inCart: 0
    },
    {
        name: 'Kookabura Kit Bag',
        tag: 'product14',
        price: 200,
        inCart: 0
    },
    
    {
        name: 'New Balance Kit Bag',
        tag: 'product15',
        price: 225,
        inCart: 0
    },
    {
        name: 'Kookabura Gloves',
        tag: 'product16',
        price: 50,
        inCart: 0
    },
    {
        name: 'Greynicholls Gloves',
        tag: 'product17',
        price: 55,
        inCart: 0
    },
    {
        name: 'Adidas Gloves',
        tag: 'product18',
        price: 50,
        inCart: 0
    },
    {
        name: 'New Balance Gloves',
        tag: 'product19',
        price: 55,
        inCart: 0
    },
    {
        name: 'Kookabura WK Gloves',
        tag: 'product20',
        price: 55,
        inCart: 0
    },
    {
        name: 'Greynicholls WK Gloves',
        tag: 'product21',
        price: 60,
        inCart: 0
    },
    {
        name: 'Adidas WK Gloves',
        tag: 'product22',
        price: 50,
        inCart: 0
    },
    {
        name: 'New Balance WK Gloves',
        tag: 'product23',
        price: 50,
        inCart: 0
    },
    {
        name: 'Kookabura pads',
        tag: 'product24',
        price: 40,
        inCart: 0
    },
    {
        name: 'Greynicholls pads',
        tag: 'product25',
        price: 45,
        inCart: 0
    },
    {
        name: 'Adidas pads',
        tag: 'product26',
        price: 50,
        inCart: 0
    },
    {
        name: 'New Balance pads',
        tag: 'product27',
        price: 55,
        inCart: 0
    },
    {
        name: 'Helmets',
        tag: 'product28',
        price: 50,
        inCart: 0
    },
    {
        name: 'Kookabura chest guard',
        tag: 'product29',
        price: 50,
        inCart: 0
    },
    {
        name: 'Greynicholls chest guard',
        tag: 'product30',
        price: 55,
        inCart: 0
    },
    {
        name: 'Adidas chest guard',
        tag: 'product31',
        price: 50,
        inCart: 0
    },
    {
        name: 'SS chest guard',
        tag: 'product32',
        price: 60,
        inCart: 0
    },
    {
        name: 'Womens breast guard',
        tag: 'product33',
        price: 60,
        inCart: 0
    },
    {
        name: 'Kookabura Thigh guard',
        tag: 'product34',
        price: 55,
        inCart: 0
    },
    {
        name: 'Greynicholls Thigh guard',
        tag: 'product35',
        price: 55,
        inCart: 0
    },
    {
        name: 'Adidas Thigh guard',
        tag: 'product36',
        price: 60,
        inCart: 0
    },
    {
        name: 'New Balance Thigh guard',
        tag: 'product37',
        price: 55,
        inCart: 0
    },
    {
        name: 'Ball guard',
        tag: 'product38',
        price: 75,
        inCart: 0
    },
    {
        name: 'Abdominal guard',
        tag: 'product39',
        price: 75,
        inCart: 0
    },
    {
        name: 'Kookabura Full Kit',
        tag: 'product40',
        price: 300,
        inCart: 0
    },
    {
        name: 'Sparton Full Kit',
        tag: 'product41',
        price: 310,
        inCart: 0
    },
    {
        name: 'SS Full Kit',
        tag: 'product42',
        price: 280,
        inCart: 0
    },
    {
        name: 'New Balance Full Kit',
        tag: 'product43',
        price: 320,
        inCart: 0
    },
   
    {
        name: 'Bowling two wheel machine',
        tag: 'product44',
        price: 220,
        inCart: 0
    },
    {
        name: 'Catching practice bats',
        tag: 'product45',
        price: 125,
        inCart: 0
    },
    {
        name: 'Fielding practice equipment',
        tag: 'product46',
        price: 150,
        inCart: 0
    },
    {
        name: 'Stumps',
        tag: 'product47',
        price: 50,
        inCart: 0
    }   
    
]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNum(products[i]);
        totalCost(products[i]);
    }) 
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if (productNumbers){
        document.querySelector('.shopping-cart span').textContent = productNumbers;
    }
}

function cartNum(products) {
    
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        onLoadCartNumbers()
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.shopping-cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.shopping-cart span').textContent = 1;
    }

    setItems(products);   
}

function setItems(products){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null){
        if (cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].inCart += 1;
    } else {
        products.inCart = 1;
        cartItems = {
            [products.tag]: products
        }
    }
    
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(products){
    let cartCost = localStorage.getItem('totalCost');
    
    if (cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + products.price);
    } else {
        localStorage.setItem("totalCost", products.price);
    }
}

function deleteItem(cartItem){
    let cartItems = localStorage.getItem("productsInCart")
    let total = localStorage.getItem("totalCost")
    let cartNumbers = localStorage.getItem("cartNumbers")
    cartItems = JSON.parse(cartItems);

    cartNumbers -= cartItems[cartItem].inCart
    total -= (cartItems[cartItem].price*cartItems[cartItem].inCart)

    delete cartItems[cartItem]

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    localStorage.setItem("cartNumbers", cartNumbers);
    localStorage.setItem("totalCost", total);
    location.reload();
}

function reduceOneItem(cartItem){
    let cartItems = localStorage.getItem("productsInCart")
    let total = parseFloat(localStorage.getItem("totalCost"))
    let cartNumbers = parseInt(localStorage.getItem("cartNumbers"))
    cartItems = JSON.parse(cartItems);

    if(parseInt(cartItems[cartItem].inCart) === 1) {
        delete cartItems[cartItem]
    } else {
        cartItems[cartItem].inCart -= 1
        cartNumbers -= 1
    }
    total -= parseFloat(cartItems[cartItem].price)

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    localStorage.setItem("cartNumbers", cartNumbers.toString());
    localStorage.setItem("totalCost", total.toString());
    location.reload();
}


function addOneItem(cartItem){
    let cartItems = localStorage.getItem("productsInCart")
    let total = parseFloat(localStorage.getItem("totalCost"))
    let cartNumbers = parseInt(localStorage.getItem("cartNumbers"))
    cartItems = JSON.parse(cartItems);

    cartNumbers += 1
    cartItems[cartItem].inCart += 1
    total += parseFloat(cartItems[cartItem].price)

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    localStorage.setItem("cartNumbers", cartNumbers.toString());
    localStorage.setItem("totalCost", total.toString());
    location.reload();
}

function displayCartMain() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');

    let productContainer = document.querySelector(".cart-products")
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="cart-product-title">
                <div class="product-img">
                <i class="fas fa-trash" onclick="deleteItem('${item.tag}')"></i>
                   
                    
                    <img src ="Img/Image-products/${item.tag}.png">
                </div>
                <span>${item.name}</span>
            </div>
            <div class="cart-product-price">$${item.price}.00</div>
            <div class="cart-quantity">
                <i class="fas fa-plus-circle" onclick="addOneItem('${item.tag}')"></i>
                <span>${item.inCart}</span>
                <i class="fas fa-minus-circle" onclick="reduceOneItem('${item.tag}')"></i>
            </div>
            <div class="cart-total">
                $${item.inCart * item.price}.00
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h3 class="basketTotalTitle">
                Basket Total
                </h3>
                <h3 class="basketTotal">
                    $${cartCost}.00
                </h3>
            </div>
        `;
    }
}

function displayCartModal() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');

    let productContainer = document.querySelector(".modal-cart-products")
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="cart-product-title">
                <div class="product-img">
                <img src ="Img/Image-products/${item.tag}.png">
                </div>
                <span>${item.name}</span>
            </div>
            <div class="cart-product-price">$${item.price}.00</div>
            <div class="cart-quantity">
                <span>${item.inCart}</span>
            </div>
            <div class="cart-total">
                $${item.inCart * item.price}.00
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h2 class="basketTotalTitle">
                Total Cost
                </h2>
                <h2 class="basketTotal">
                    $${cartCost}.00
                </h2>
            </div>
        `;
    }
}

//Inputs empty validation
function formValidation(){

    var f = document.getElementById('fname').value;
    var l = document.getElementById('lname').value;
    var e = document.getElementById('email').value;
    var m = document.getElementById('mnum').value;
    var a = document.getElementById('address').value;
    var c = document.getElementById('city').value;
    var co = document.getElementById('country').value;
    var zip = document.getElementById('zipcode').value;
   


    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers == 0 || productNumbers == null){
        alert('Cart Empty, please add one or more items from shop!');
        return false;
    }

    if (f == '' || f == null || l == '' || l == null || e == '' || e == null || m == '' || m == null || a == '' || a == null || c == '' || c == null || co == '' || co == null || zip == '' || zip == null ){
        alert('Please fill all the fields to continue!');
        return false;
    } else {
        
        let userName = document.getElementById('fname').value;
            
        if (userName){
            document.querySelector('.userName').textContent = userName; 
        };
        
        if (f){
            document.querySelector('.fname-span').textContent = f; 
        };

        if (l){
            document.querySelector('.lname-span').textContent = l; 
        };

        if (m){
            document.querySelector('.mnum-span').textContent = m; 
        };

        if (e){
            document.querySelector('.email-span').textContent = e; 
        };

        if (a){
            document.querySelector('.address-span').textContent = a; 
        };

        if (c){
            document.querySelector('.city-span').textContent = c; 
        };

        if (co){
            document.querySelector('.country-span').textContent = co; 
        };

        if (zip){
            document.querySelector('.zip-span').textContent = zip; 
        };

        
        if (true) {
            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];

            modal.style.display = "block";

            span.onclick = function () {
                modal.style.display = "none";
            }

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
        
        return false;  
    }
}

//Show done screen
function paymentDone (){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    var donemodal = document.getElementById("doneModal");

    donemodal.style.display = "block";

    setTimeout(function(){
        donemodal.style.display = "block";
        window.location.href = 'shopping Dhinuk.html';}, 2000);
    localStorage.clear();
    return false;
}

onLoadCartNumbers();
displayCartMain();
displayCartModal();


