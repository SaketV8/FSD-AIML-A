import './Header.css'

const Header = () => {

  const handleCartBtn = () => {
    alert("book added to cart successfully")
  }
  return (
    <>
      <div className="header-container">
        <h1 align="center">Book Store</h1>
        <div className="seperator"></div>
        <button className="cart-btn" onClick={handleCartBtn}>Cart</button>
      </div>
    </>
  )
}

export default Header