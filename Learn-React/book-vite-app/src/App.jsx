import bookData from './data/book-data';
import Book from './components/Book';
import Footer from './components/Footer';
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className='card-container'>
        {bookData.map((book, i) => {
          return <Book book={book} key={i} />;
        })}
      </div>
      <Footer />
    </>
  )
}

export default App
