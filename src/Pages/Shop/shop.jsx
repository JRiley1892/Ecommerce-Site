import React, { useState, useEffect } from "react";
import FetchData from "../../FetchData";
import "./shop.css";

export const Shop = ({ addToCart, cart }) => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>E-Merchants</h1>
      </div>
      <div className="products">
        <FetchData addToCart={addToCart} />
      </div>
    </div>
  );
};
