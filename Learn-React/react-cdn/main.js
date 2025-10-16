// const image = React.createElement(
//   "img",
//   {
//     src: "https://picsum.photos/250/250?random=1",
//     width: 250,
//     height: 250,
//     alt: "Physics Book",
//   },
//   null
// );

// const h_4 = React.createElement("h4", null, "Title: Physics");

// const h_3 = React.createElement("h3", null, "Price: 390");

// const btn = React.createElement(
//   "button",
//   {
//     className: "card-btn",
//   },
//   null,
//   "Add to Cart"
// );

// const card = React.createElement(
//   "div",
//   {
//     className: "card",
//   },
//   image,
//   h_4,
//   h_3,
//   btn
// );

// // ReactDOM.render(what, where)
// const parent = document.getElementById("root");
// ReactDOM.render(card, parent);

// ========================================================================================
// ========================================================================================
// ========================================================================================
// ========================================================================================

const bookData = [
  {
    title: "Physics",
    price: 390,
    image: "https://picsum.photos/250/250?random=1",
  },
  {
    title: "Chemistry",
    price: 420,
    image: "https://picsum.photos/250/250?random=2",
  },
  {
    title: "Mathematics",
    price: 350,
    image: "https://picsum.photos/250/250?random=3",
  },
];

const createCard = (title, price, imageurl, key) => {
  const image = React.createElement(
    "img",
    {
      src: "https://picsum.photos/250/250?random=1",
      width: 250,
      height: 250,
      alt: "Physics Book",
    },
    null
  );

  const h_4 = React.createElement("h4", null, `Title: ${title}`);

  const h_3 = React.createElement("h3", null, `Price: ₹${price}`);

  const btn = React.createElement(
    "button",
    {
      className: "card-btn",
    },
    null,
    "Add to Cart"
  );

  // const card = React.createElement(

  return React.createElement(
    "div",
    {
      className: "card",
      key,
    },
    image,
    h_4,
    h_3,
    btn
  );
};

// 3 Books
// const card1 = createCard(
//   "Physics",
//   390,
//   "https://picsum.photos/250/250?random=1"
// );
// const card2 = createCard(
//   "Chemistry",
//   420,
//   "https://picsum.photos/250/250?random=2"
// );
// const card3 = createCard(
//   "Mathematics",
//   350,
//   "https://picsum.photos/250/250?random=3"
// );

// const container = React.createElement(
//   "div",
//   { className: "card-container" },
//   card1,
//   card2,
//   card3
// );

const booksCard = bookData.map((book, i) => {
  return createCard(book.title, book.price, book.image, i);
});
const container = React.createElement(
  "div",
  { className: "card-container" },
  ...booksCard
);

// Render
// old style
// const parent = document.getElementById("root");
// ReactDOM.render(container, parent);

// Render
// latest react version
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(container);

// ========================================================================================
// ========================================================================================
// ========================================================================================
// ========================================================================================