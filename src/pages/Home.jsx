import Hero from "../components/home/Hero";
import ProductsDisplay from "../components/home/ProductsDisplay";
import About from "../components/shared/About";
import CategoryDisplay from "../components/shared/CategoryDisplay";

function HomePage() {
  return (
    <>
      <Hero />
      <CategoryDisplay />
      <ProductsDisplay />
      <About />
    </>
  );
}

export default HomePage;
