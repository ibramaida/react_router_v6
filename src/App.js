import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [isCartEmpty] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />

          <Route path="/products/:id/*" element={<ProductDetails />} />

          <Route path="/products" element={<Products />} />

          <Route
            path="/test"
            element={
              <div>
                <h1>Test</h1>
                <p>This is test</p>
              </div>
            }
          />

          <Route path="/reload" element={<Navigate to="/about" />} />

          <Route
            path="/checkout"
            element={
              isCartEmpty ? <Navigate to="/products" /> : <p>Checkout Page</p>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
