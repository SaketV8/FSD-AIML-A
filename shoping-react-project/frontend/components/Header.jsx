const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold">MyShop</h1>

        {/* Navigation */}
        <nav className="space-x-6">
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#" className="hover:text-gray-200">Products</a>
          <a href="#" className="hover:text-gray-200">Cart</a>
          <a href="#" className="hover:text-gray-200">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
