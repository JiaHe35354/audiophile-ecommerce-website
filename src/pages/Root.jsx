import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import DataContextProvider from "../context/DataContext";
import ScrollToTop from "../components/shared/ScrollToTop";

function RootLayout() {
  return (
    <>
      <DataContextProvider>
        <ScrollToTop />

        <Navbar />

        <main>
          <Outlet />
        </main>
        <Footer />
      </DataContextProvider>
    </>
  );
}

export default RootLayout;
