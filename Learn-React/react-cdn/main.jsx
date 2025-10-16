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

const Book = ({ book }) => {
  return (
    <>
      <div className="card">
        <img
          src={book.image || "https://picsum.photos/250/250?random=1"}
          width={250}
          height={250}
          alt="Physics Book"
        />
        <h4>Title: {book.title}</h4>
        <h3>Price: ₹{book.price}</h3>
        <button className="card-btn">Add to Cart</button>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div className="card-container">
      {bookData.map((book, i) => {
        return <Book book={book} key={i} />;
      })}
    </div>
  );
};

// Render
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<App />);
