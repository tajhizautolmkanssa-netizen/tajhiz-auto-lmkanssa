const products=[
  {id:1,title:"فلتر زيت تويوتا أصلي",price:75,img:"img/placeholder.png"},
  {id:2,title:"فرامل أمامية هيونداي",price:290,img:"img/placeholder.png"},
  {id:3,title:"شمعة إسبراتزو تويوتا",price:35,img:"img/placeholder.png"},
  {id:4,title:"مكينة كامري 2015",price:2800,img:"img/placeholder.png"},
  {id:5,title:"زيت موبيل 5W30",price:140,img:"img/placeholder.png"},
  {id:6,title:"فلتر هواء كيا",price:45,img:"img/placeholder.png"}
];
const productGrid=document.getElementById('productGrid');
const cartCount=document.getElementById('cartCount');
let cart=JSON.parse(localStorage.getItem('tajhizCart'))||[];

function renderProducts(){
  productGrid.innerHTML='';
  products.forEach(p=>{
    const card=document.createElement('div');
    card.className='card';
    card.innerHTML=`
      <img src="${p.img}" alt="${p.title}">
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <div class="card-price">${p.price} ر.س</div>
        <button class="btn primary" onclick="addToCart(${p.id})">أضف للسلة</button>
      </div>`;
    productGrid.appendChild(card);
  });
  updateCartCount();
}
function addToCart(id){
  cart.push(id);
  localStorage.setItem('tajhizCart',JSON.stringify(cart));
  updateCartCount();
}
function updateCartCount(){
  cartCount.textContent=cart.length;
}
document.getElementById('hamburger').onclick=()=>{
  alert('قائمة الهاتف قيد التطوير');
};
renderProducts();