import React, { useState, useEffect } from "react";
import axios from "axios";
import Cart from "./Pages/Cart/cart";
import "./FetchData.css";
import { getCartData, setCartData } from "./cartData";

function FetchData() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setcart] = useState([]);
  const addToCart = (product) => {
    setcart([...cart, product]);
    console.log(`Item "${product.title}" added to the cart!`);
  };
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error!", err));
  }, []);

  //Handling category change
  const handlecategoryChange = (category) => {
    setSelectedCategory(category);
  };

  //Filter products based on category
  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((product) => product.category === selectedCategory);

  //Add items to Cart
  const handleAddToCart = (productId) => {
    const productToAdd = data.find((product) => product.id === productId);
    if (productToAdd) {
      const updatedCart = [...getCartData(), productToAdd];
      setCartData(updatedCart);
      console.log(`Item "${productToAdd.title}" added to the cart!`);
    }
  };
  return (
    <div className="container">
      <div className="mt-3">
        {/* Category Filter */}
        <select
          className="category-filter"
          onChange={(e) => handlecategoryChange(e.target.value)}
        >
          <option value="All">All Categories</option>
          {Array.from(new Set(data.map((product) => product.category))).map(
            (category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            )
          )}
        </select>
        {/* Product List */}
        <table>
          <tbody>
            {filteredData.map((product, index) => (
              <tr key={index}>
                <td className="product">
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "contain",
                      marginRight: "10px",
                    }}
                  />
                  <div className="product-details">
                    <h3 className="product-title">{product.title}</h3>
                    <p>£{product.price}</p>
                    <p>{product.category}</p>
                    <br />
                    {/* Buy button */}
                    <button
                      className="cartButton"
                      onClick={() => handleAddToCart(product.id)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default FetchData;
