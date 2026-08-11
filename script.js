const products=[
 {id:1,name:"JR Classic Runner",cat:"shoes",price:89,label:"REPLICA / UNAUTHORIZED"},
 {id:2,name:"JR Heavyweight Hoodie",cat:"clothing",price:55,label:"STREETWEAR"},
 {id:3,name:"JR Street Sneaker",cat:"shoes",price:74,label:"REPLICA / UNAUTHORIZED"},
 {id:4,name:"JR Crossbody Bag",cat:"accessories",price:39,label:"ACCESSORY"}
];
let cart=[];

function render(items=products){
 const el=document.getElementById("products");
 el.innerHTML=items.map(p=>`<article class="product">
   <div class="product-img">${p.cat==="shoes"?"JR":p.cat==="clothing"?"HOOD":"JR"}</div>
   <div class="product-info"><div class="tag">${p.label}</div><h3>${p.name}</h3><div class="price">$${p.price.toFixed(2)}</div>
   <button class="add" onclick="addToCart(${p.id})">Add to cart</button></div>
 </article>`).join("");
 document.getElementById("resultText").textContent=`${items.length} product${items.length===1?"":"s"}`;
}
function filterProducts(cat){render(cat==="all"?products:products.filter(p=>p.cat===cat))}
function addToCart(id){cart.push(products.find(p=>p.id===id));updateCart();document.getElementById("cart").classList.add("open");document.getElementById("overlay").classList.add("show")}
function removeFromCart(i){cart.splice(i,1);updateCart()}
function updateCart(){
 document.getElementById("cartCount").textContent=cart.length;
 const el=document.getElementById("cartItems");
 if(!cart.length){el.innerHTML='<p style="color:#777">Your cart is empty.</p>'}
 else el.innerHTML=cart.map((p,i)=>`<div class="cart-item"><div><b>${p.name}</b><br><small>$${p.price.toFixed(2)}</small></div><button class="remove" onclick="removeFromCart(${i})">Remove</button></div>`).join("");
 document.getElementById("total").textContent="$"+cart.reduce((a,p)=>a+p.price,0).toFixed(2);
}
function toggleCart(){document.getElementById("cart").classList.toggle("open");document.getElementById("overlay").classList.toggle("show")}
function checkout(){alert("Checkout isn't connected yet. Add your preferred payment/checkout provider before accepting orders.")}
render();updateCart();
