
const products = [
    {
        id: 1,
        img: "images/berry.png",
        name: "Product - 1",
        price: 10,
    },
    {
        id: 2,
        img: "images/cabbage.png",
        name: "Product - 2",
        price: 20,
    },
    {
        id: 3,
        img: "images/green cabbage.png",
        name: "Product - 3",
        price: 30,
    },
    {
        id: 4,
        img: "images/berry.png",
        name: "Product - 1",
        price: 10,
    },
    {
        id: 5,
        img: "images/cabbage.png",
        name: "Product - 2",
        price: 20,
    },
    {
        id: 6,
        img: "images/green cabbage.png",
        name: "Product - 3",
        price: 30,
    },
    {
        id: 7,
        img: "images/cabbage.png",
        name: "Product - 2",
        price: 20,
    },
    {
        id: 8,
        img: "images/green cabbage.png",
        name: "Product - 3",
        price: 30,
    }
]


const productQuantity = document.querySelector(".product-quantity")
const cartBtn = document.querySelector(".cart-btn")
const cartBox = document.querySelector(".cart-box")
const totalPriceElement = document.querySelector(".totalPrice")

cartBtn.addEventListener("click", () => {
    cartBox.classList.toggle("visibleCartBox")
})

let shoppingCart = []

function displayProducts() {
    const productListElement = document.getElementById("product-list")
    productListElement.innerHTML = ''

    products.forEach((product) => {
        productListElement.innerHTML += `
        <div class='product-item'>
            <img src="${product.img}" alt="${product.name}">
            <p>${product.name}</p>
            <p>$${product.price}</p>
            <button onclick='addToCart(${product.id}, ${product.price})'>Add to Cart</button>
        </div>`
    })
}


let prices = []
function additionOfPrices(){
    let totalPrice = 0
    for(let i = 0; i < prices.length; i++){
        totalPrice += prices[i]
    }
    totalPriceElement.textContent = totalPrice
}


let num = 1
function addToCart(productID, productPrice) {
    const product = products.find((isProduct) => isProduct.id === productID)
    shoppingCart.push(product)
    prices.push(productPrice)
    productQuantity.textContent = num++
    displayCart()
    additionOfPrices()
}

function displayCart() {
    const cartElement = document.querySelector(".cart-list")
    cartElement.innerHTML = ''

    shoppingCart.forEach((cart, index) => {
        cartElement.innerHTML += `
        <div class='cart-item'>
            <img src="${cart.img}" alt="${cart.name}">
            <div>
                <p>${cart.name}</p>
                <h5>$${cart.price}</h5>
                <button onclick='deleteCart(${index})'>Delete</button>
            </div>
        </div>`
    })
}

function deleteCart(cartID) {
    productQuantity.textContent = (num--) - 2
    shoppingCart.splice(cartID, 1)
    displayCart()
}

function checkout() {
    shoppingCart = []
    displayCart()
    setTimeout(() => {
        alert("Order placed successfully!")
        location.reload()
    }, 500)
}


displayProducts()
displayCart()

