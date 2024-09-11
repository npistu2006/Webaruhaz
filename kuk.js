const products = [
    {
      id: 1,
      name: "Choco Bliss",
      price: 1200,
      picture: "choco_bliss.jpg", // Link to the chocolate image
      description: "A smooth and creamy milk chocolate with a hint of vanilla. Perfect for chocolate lovers!",
    },
    {
      id: 2,
      name: "Candy Delight",
      price: 800,
      picture: "Candy delight.jpg", // Link to the candy image
      description: "Delicious fruity candies that melt in your mouth. Great for kids and adults alike!",
    },
    {
      id: 3,
      name: "Bonbon Royale",
      price: 3000,
      picture: "Bonbon royale.jpg", // Link to the bonbon image
      description: "Premium bonbons filled with exotic flavors. A luxurious treat for special occasions.",
    },
    {
      id: 4,
      name: "Hazel Dream",
      price: 1500,
      picture: "Hazel dream.jpg", // Link to the hazelnut chocolate image
      description: "Rich dark chocolate with crunchy hazelnut pieces. Perfect for those who enjoy a nutty flavor!",
    },
    {
      id: 5,
      name: "Lemon Chew",
      price: 500,
      picture: "Lemon chew.jpg", // Link to the lemon candy image
      description: "Tangy lemon chews that pack a punch of citrusy flavor. Refreshing and sweet!",
    },
    {
      id: 6,
      name: "Caramel Treat",
      price: 2000,
      picture: "Caramel treat.jpg", // Link to the caramel chocolate image
      description: "Smooth caramel covered in milk chocolate. A delightful combination of sweetness and richness.",
    },
    {
      id: 7,
      name: "Berry Blast",
      price: 1000,
      picture: "Berry blast.jpg", // Link to the berry candy image
      description: "Mixed berry-flavored candies that burst with juicy flavors in every bite. Great for snacking!",
    },
    {
      id: 8,
      name: "Truffle Heaven",
      price: 4000,
      picture: "Truffle heaven.jpg", // Link to the truffle image
      description: "Decadent chocolate truffles filled with smooth ganache. Perfect for gifting or indulging.",
    },
    {
      id: 9,
      name: "Minty Fresh",
      price: 700,
      picture: "Minty fresh.jpg", // Link to the mint candy image
      description: "Refreshing mint candies that leave a cool sensation in your mouth. Great after meals!",
    },
    {
      id: 10,
      name: "Crunchy Delight",
      price: 2500,
      picture: "Crunchy delight.jpg", // Link to the crunchy chocolate image
      description: "A delightful chocolate bar with crispy rice pieces for an extra crunch in every bite.",
    },
    {
      id: 11,
      name: "Vanilla Bonbon",
      price: 3500,
      picture: "Vanilla bonbon.jpg", // Link to the vanilla bonbon image
      description: "Soft and creamy vanilla bonbons with a touch of white chocolate. A delicate and delicious treat.",
    },
    {
      id: 12,
      name: "Orange Twist",
      price: 600,
      picture: "Orange twist.jpg", // Link to the orange candy image
      description: "Zesty orange-flavored candies that are sweet, tangy, and perfect for a citrus kick.",
    }
  ];

function datas(){
  const list = [];
  list.push(products)
  return list;
}
const data = datas();

function renderCart(data){
  const kartyaTartalma = data.map(product => {
    const cartProducts = document.querySelectorAll('.products')
    cartProducts.innerHTML +=
    `
    <div class="product-card" id="${product.id}">
          <img src="./img/${product.picture}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>Ár: ${product.price} Ft</p>
          <button class="add-to-cart-btn">Kosárba</button>
      </div>
    `
  })
  return kartyaTartalma;
}




function kartyarendereles() {
  const kartyaContainer = document.querySelector(".products");
  const kartyaTartalma = products.map(product => {
    kartyaContainer.innerHTML += `
      <div class="product-card" id="${product.id}">
          <img src="./img/${product.picture}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>Ár: ${product.price} Ft</p>
          <button class="add-to-cart-btn">Kosárba</button>
      </div>
    `
  });
  return kartyaTartalma;
}

function kartyakSzurese(){
  const minimum = document.getElementById("min-price").value
  const maximum = document.getElementById("max-price").value
  const kartyaContainer = document.querySelector(".products");

  const kartyaFilter = products.filter(product => product.price >= Number(minimum) && product.price <= Number(maximum));
  kartyaContainer.innerHTML = "";
  const kartyaTartalma= kartyaFilter.map(product => {
    kartyaContainer.innerHTML += `
      <div class="product-card" id="${product.id}">
          <img src="./img/${product.picture}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>Ár: ${product.price} Ft</p>
          <button class="add-to-cart-btn">Kosárba</button>
      </div>
    `
  })
  return  kartyaTartalma;
}
const szuresGomb = document.getElementById("filter-btn");

szuresGomb.addEventListener("click", kartyakSzurese);

// Renderelése a többi kártyáknak a megfelelő információkkal (Pisti)
document.addEventListener("DOMContentLoaded", () => {
  kartyarendereles()
})