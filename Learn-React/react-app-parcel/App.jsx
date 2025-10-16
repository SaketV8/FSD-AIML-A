import Book from "./Book";
import bookData from "./data/book-data"

const App = () => {
  return (
    <div className="card-container">
      {bookData.map((book, i) => {
        return <Book book={book} key={i} />;
      })}
    </div>
  );
};

export default App;
