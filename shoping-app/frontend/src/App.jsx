import Cart from "../components/Cart"
import Header from "../components/Header"
import Footer from "../components/Footer"
import React from "react";

function App() {
  const [items, setItems] = React.useState([{}]);
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error("Error fetching products:", error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
  }, [])
  // console.log(items)

  // if (error) {
  //   return (
  //     <>
  //       <h1>error occured</h1>
  //     </>
  //   )
  // }

  // if (!error && loading) {
  //   return (
  //     <>
  //       <h1>Loading data...</h1>
  //     </>
  //   )
  // }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-red-50">
        <h1 className="text-3xl font-bold text-red-600 mb-2">Error Occurred</h1>
        <p className="text-gray-600">Something went wrong. Please try again later.</p>
      </div>
    );
  }

  if (!error && loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
        <h1 className="text-3xl font-semibold text-blue-600 mb-2 animate-pulse">
          Loading data...
        </h1>
        <p className="text-gray-500">Please wait while we fetch your content.</p>
      </div>
    );
  }


  return (
    <>
      {/* <div className="flex flex-col min-h-screen"> */}
      {/* <Header /> */}
      {/* <main className="grow container mx-auto px-4 py-10"> */}
      {/* {error && (
            <>
              <div className="flex flex-col items-center justify-center h-screen bg-red-50">
                <h1 className="text-3xl font-bold text-red-600 mb-2">Error Occurred</h1>
                <p className="text-gray-600">Something went wrong. Please try again later.</p>
              </div>
            </>
          )} */}

      {/* {!error && loading && (
            <>
              <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
                <h1 className="text-3xl font-semibold text-blue-600 mb-2 animate-pulse">
                  Loading data...
                </h1>
                <p className="text-gray-500">Please wait while we fetch your content.</p>
              </div>
            </>
          )} */}

      <div className="container mx-auto px-4 py-10">
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {!error && !loading && (items.map((item, i) => {
            return (
              <Cart item={item} key={i} />
            )
          }))}
        </div>
      </div>

      {/* </main> */}
      {/* <Footer /> */}
      {/* </div> */}
    </>
  )
}

export default App
