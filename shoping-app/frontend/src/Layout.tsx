import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <main className="grow container mx-auto px-4 py-10"> */}
      <main className="grow">
        {/* child routes will render here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
