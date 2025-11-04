import Cart from "../components/Cart"
import Header from "../components/Header"
import Footer from "../components/Footer"
import React from "react";

function App() {
  // const items = [
  //   {
  //     title: "Wireless Headphones",
  //     image: "https://via.placeholder.com/150",
  //     price: 59.99
  //   },
  //   {
  //     title: "Wireless Headphones",
  //     image: "https://via.placeholder.com/150",
  //     price: 59.99
  //   },
  //   {
  //     title: "Wireless Headphones",
  //     image: "https://via.placeholder.com/150",
  //     price: 59.99
  //   },
  //   {
  //     title: "Wireless Headphones",
  //     image: "https://via.placeholder.com/150",
  //     price: 59.99
  //   }
  // ]

  const [items, setItems] = React.useState([{}]);

  React.useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchItems()
  }, [])
  console.log(items)

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {items.map((item) => {
              return (
                <Cart image={item.image} title={item.title} price={item.price} />
              )
            })}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
