import './Book.css'
const Book = ({ book }) => {
  return (
    <div>
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
    </div>
  )
}

export default Book 