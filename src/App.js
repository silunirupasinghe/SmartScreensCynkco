import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Support from "./pages/Solutions/Solutions";
import Partner from "./pages/Partner/Partner";
// import Products from "./pages/Products/Catergory/Catergory";
import SubProducts from "./pages/Products/SubProducts/SubProducts";

import Products from "./pages/Products/ProductsCynko/Products"
import StandsPage from "./pages/Products/ProductsCynko/Stands";
import ScreensPage from "./pages/Products/ProductsCynko/Screens";
import AccessoriesPage from "./pages/Products/ProductsCynko/Accessories";
import ContactUsPage from "./pages/Contact/ContactUsPage";
import Solutions from "./pages/Solutions/Solutions";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categorySlug" element={<SubProducts />} />
        <Route path="/products/smartscreen-stands" element={<StandsPage />} />
        <Route path="/products/smart-screens" element={<ScreensPage />} />
        <Route path="/products/accessories" element={<AccessoriesPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
