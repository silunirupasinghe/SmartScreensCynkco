import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Support from "./pages/Solutions/Solutions";
import Partner from "./pages/Partner/Partner";
import SubProducts from "./pages/Products/SubProducts/SubProducts";

import Products from "./pages/Products/ProductsCynko/Products";
import StandsPage from "./pages/Products/Stands/Stands";
import ScreensPage from "./pages/Products/Screens/Screens";
import AccessoriesPage from "./pages/Products/Accessory/Accessories";
import ContactUsPage from "./pages/Contact/ContactUsPage";
import Solutions from "./pages/Solutions/Solutions";

// products
import CTSC65WCPage from "./pages/Products/Screens/CT_SC65WC";
import CTSC65APage from "./pages/Products/Screens/CT_SC65A";
import CTSC75APage from "./pages/Products/Screens/CT_SC75A";
import CTSC75WCPage from "./pages/Products/Screens/CT_SC75WC";
import CTSC86WCPage from "./pages/Products/Screens/CT-SC86WC";
import CTSC85APage from "./pages/Products/Screens/CT-SC85A";

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

        {/* products */}
        <Route
          path="/products/smart-screens/ct-sc65wc"
          element={<CTSC65WCPage />}
        />
        <Route
          path="/products/smart-screens/ct-sc65a"
          element={<CTSC65APage />}
        />
        <Route
          path="/products/smart-screens/ct-sc75a"
          element={<CTSC75APage />}
        />
        <Route
          path="/products/smart-screens/ct-sc86wc"
          element={<CTSC86WCPage />}
        />
        <Route
          path="/products/smart-screens/ct-sc85a"
          element={<CTSC85APage />}
        />
        <Route
          path="/products/smart-screens/ct-sc75wc"
          element={<CTSC75WCPage />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
