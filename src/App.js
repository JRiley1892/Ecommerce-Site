// import React, { useState } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navbar } from "./components/navbar";
// import { Shop } from "./Pages/Shop/shop";
// import { Cart } from "./Pages/Cart/cart";

// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//     console.log(`Item "${product.title}" added to the cart!`);
//   };

//   console.log("Current Cart:", cart);

//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route
//             path="/"
//             element={<Shop addToCart={addToCart} cart={cart} />}
//           />
//           <Route path="/cart" element={<Cart cart={cart} />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./Pages/Shop/shop";
import { Cart } from "./Pages/Cart/cart";
import loadingSpinner from "./loading2-3891057818.gif"; // Import your loading spinner image

function App() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(`Item "${product.title}" added to the cart!`);
  };

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data, initializing the app)
    setTimeout(() => {
      setLoading(false); // Set loading to false after the operation is complete
    }, 2000); // Adjust the duration as needed
  }, []);

  console.log("Current Cart:", cart);

  return (
    <div className="App">
      <Router>
        <Navbar />
        {loading ? ( // Display loading spinner while the app is initializing
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <img src={loadingSpinner} alt="Loading" />
            <p>Loading...</p>
          </div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Shop addToCart={addToCart} cart={cart} />}
            />
            <Route path="/cart" element={<Cart cart={cart} />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
