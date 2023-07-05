import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
<nav>
    <div>
        <div>
            <Link to="/" className="link">Home</Link>
        </div>
        <div>
            <Link to="/about" className="link">About</Link>
        </div>
        <div>
            <Link to="/products" className="link">Products</Link>
        </div>
    </div>
</nav>

  );
};

export default NavBar;
