let products =[
    {name:"cream", price:0.5},
    {name:"dates", price:0.25},
    {name:"white", price:0.75},
]

let cart =[];
function clrarCart(){
    cart = []
}

function addtoCart(index) {

let product = products[index];
let Q = document.getElementById(index).value;
product.Q=Q;
// console.log(product)
cart.push(product)
console.log(cart)
document.getElementById("lest").innerHTML="";
let total =0;
for (let index = 0; index < cart.length; index++) {
    let element = cart[index];
    let price =element.price * element.Q;
    total = total + price;
    let list = document.getElementById("lest");
    list.innerHTML +=`<li>${element.Q}   ${element.name}  FOR EVREY 1PIECE ${element.price} KD<li>`
    
}
document.getElementById("total").innerText= `${total} KD`;
}