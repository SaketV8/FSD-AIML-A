import Book from "./Book";

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
