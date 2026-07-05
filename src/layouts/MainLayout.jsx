import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Background from "../components/Background";

function MainLayout() {
  return (
    <>
      <Background />

      <div className="relative min-h-screen flex flex-col text-lime-950 dark:text-white">

        <Navbar />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />

      </div>
    </>
  );
}

export default MainLayout;
