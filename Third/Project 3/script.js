const products = [
  {
    id: "1",
    name: "Bag",
    image:"./img/bag.png",
    price: 100,
    description:
      "Perfect for those who can't remember things! 5/5 Highly recommend."
  },
  {
    id: "2",
    name: "Airpods",
    image:"./img/airpods.png",
    price: 1000,
    description:
      "Housing provided for out-of-state students or those who can't commute"
  },
  {
    id: "3",
    name: "IPhone",
    image:"./img/iphone.png",
    price: 300,
    description: "Don't have a computer? No problem!"
  },
  {
    id: "4",
    name: "Cream",
    image:"./img/cream.png",
    price: 280,
    description: "Wake up!"
  },
  {
    id: "5",
    name: "Shoes",
    image:"./img/shoes.png",
    price: 960,
    description: "Free snacks!"
  },
  {
    id: "6",
    name: "Jacket",
    image:"./img/jacket.png",
    price: 355,
    description: "To help you solve your hardest coding problems."
  },
  {
    id: "7",
    name: "Shampoo",
    image:"./img/shampoo.png",
    price: 2199,
    description: "Because we like to pretend we're in high school."
  },
  {
    id: "8",
    name: "Vitamin",
    image:"./img/vitamin.png",
    price: 1499,
    description: "To prove to other devs you know a lot."
  },
    {
    id: "9",
    name: "Watch",
    image:"./img/watch.png",
    price: 7499,
    description: "Samrt watch To search and make you know time ",
  },
    {
    id: "1",
    name: "Bag",
    image:"./img/bag.png",
    price: 100,
    description:
      "Perfect for those who can't remember things! 5/5 Highly recommend."
  },
  {
    id: "2",
    name: "Airpods",
    image:"./img/airpods.png",
    price: 1000,
    description:
      "Housing provided for out-of-state students or those who can't commute"
  },
  {
    id: "3",
    name: "IPhone",
    image:"./img/iphone.png",
    price: 300,
    description: "Don't have a computer? No problem!"
  },
  {
    id: "4",
    name: "Cream",
    image:"./img/cream.png",
    price: 280,
    description: "Wake up!"
  },
  {
    id: "5",
    name: "Shoes",
    image:"./img/shoes.png",
    price: 960,
    description: "Free snacks!"
  },
  {
    id: "6",
    name: "Jacket",
    image:"./img/jacket.png",
    price: 355,
    description: "To help you solve your hardest coding problems."
  },
  {
    id: "7",
    name: "Shampoo",
    image:"./img/shampoo.png",
    price: 2199,
    description: "Because we like to pretend we're in high school."
  },
  {
    id: "8",
    name: "Vitamin",
    image:"./img/vitamin.png",
    price: 1499,
    description: "To prove to other devs you know a lot."
  },
    {
    id: "9",
    name: "Watch",
    image:"./img/watch.png",
    price: 7499,
    description: "Samrt watch To search and make you know time ",
  }
];


const container = document.getElementById('productContainer');

products.forEach(product => {
  const col = document.createElement('div');
  col.className = 'col-md-4 mb-4';

  col.innerHTML = `
    <div class="card h-100">
      <img src="${product.image}" class="card-img-top" alt="${product.name}">
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <h5 class="card-title">${product.name}</h5>
          </div>         
          <div>
            <i class="bi bi-heart" style="color: gray; cursor: pointer;" onclick="toggleFavorite(this)"></i>
          </div>
        </div>
        <p class="card-text text-muted">Price : ${product.price}</p>
        <p class="card-text text-muted">${product.description}</p>
        <button class="btn btn-primary">Add to Cart</button>
        <button class="btn btn-danger">Delete From Cart</button>
      </div>
    </div>
  `;

  container.appendChild(col);
});

function createCarousel(products) {
  const container = document.getElementById("carouselContainer");
  container.innerHTML = `
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div class="carousel-inner">
        ${products.map((pro, i) => `
          <div class="carousel-item ${i === 0 ? "active" : ""}">
            <img src="${pro.image}" class="d-block w-50 mx-auto" alt="${pro.name}" style="border-radius: 10%;">
            <div class="carousel-caption d-none d-md-block">
              <h5>${pro.name}</h5>
            </div>
          </div>
        `).join('')}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => createCarousel(products));

function toggleFavorite(icon) {
  if (icon.classList.contains('bi-heart')) {
    icon.classList.remove('bi-heart');
    icon.classList.add('bi-heart-fill');
    icon.style.color = 'red';
  } else {
    icon.classList.remove('bi-heart-fill');
    icon.classList.add('bi-heart');
    icon.style.color = 'gray';
  }
}
