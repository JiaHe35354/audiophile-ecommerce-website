import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import About from "../components/shared/About";
import Categories from "../components/shared/Categories";
import Footer from "../components/shared/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <About />
    </>
  );
}

export default HomePage;
