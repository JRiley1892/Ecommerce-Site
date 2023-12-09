// import React, { useState, useEffect } from "react";
// import "./cart.css";
// import { getCartData, setCartData } from "../../cartData";

// export const Cart = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const cartData = getCartData();
//     setCart(cartData);
//   }, []);

//   const addToCart = (product) => {
//     const newCart = [...cart, product];
//     setCart(newCart);
//     setCartData(newCart); // Store the updated cart data
//     console.log(`Item "${product.title}" added to the cart!`);
//   };

//   return (
//     <div>
//       <div className="title">
//         <h1>Cart</h1>
//       </div>
//       <div className="cart-items">
//         {cart.length === 0 ? (
//           <p>Your cart is Empty.</p>
//         ) : (
//           <ul>
//             {cart.map((product, index) => (
//               <li key={index}>
//                 <div className="cart-item">
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     style={{
//                       width: "100px",
//                       height: "100px", // Adjust the size as needed
//                       marginRight: "10px",
//                     }}
//                   />
//                   {product.title}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useState, useEffect } from "react";
import "./cart.css";
import { getCartData, setCartData } from "../../cartData";

export const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = getCartData();
    setCart(cartData);
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    setCartData(newCart); // Store the updated cart data
    console.log(`Item "${product.title}" added to the cart!`);
  };

  return (
    <div>
      <div className="title">
        <h1>Cart</h1>
      </div>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is Empty.</p>
        ) : (
          <table>
            <thead></thead>
            <tbody>
              {cart.map((product, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{
                        width: "100px", // Adjust the size as needed
                        height: "100px", // Adjust the size as needed
                        marginRight: "10px",
                      }}
                    />
                    {product.title}
                  </td>
                  <td>£{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Cart;
