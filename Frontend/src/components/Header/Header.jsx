import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h1>Order Your favourite food here</h1>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satify your cravings and elevate your dining experience,
          one deliciousmeal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
