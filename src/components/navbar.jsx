import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="Links">
        <Link to="/">
          <b> Shop </b>
        </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
