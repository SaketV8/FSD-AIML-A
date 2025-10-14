const rootContainer = document.getElementById("root");

const image = document.createElement("img");
image.src = "https://picsum.photos/250/250?random=1";
image.width = 250;
image.height = 250;

const h_4 = document.createElement("h4");
h_4.innerText = "Title: Physics";

const h_3 = document.createElement("h3");
h_3.innerText = "Price: 390";

const btn = document.createElement("button");
btn.className = "card-btn"
btn.innerText = "Add to Cart";

const card = document.createElement("div");
card.className = "card"

card.appendChild(image);
card.appendChild(h_4);
card.appendChild(h_3);
card.appendChild(btn);

rootContainer.appendChild(card);
