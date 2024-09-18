import React from "react";
import Hero from "./component/Hero";
import "./index.css";
import Product from "./component/Product/Product";
import Buy from "./component/Buy/Buy";
import Banner from "./component/Banner/Banner";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero></Hero>
      <Product />
      <Buy></Buy>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}

export default App;
