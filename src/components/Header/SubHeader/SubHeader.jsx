import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SubHeader.scss";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";

const SubHeader = () => {
  const { cart } = useContext(ProductContext);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div className="SubHeader">
      <img className="logo" src="../src/assets/icon.png" alt="" />
      <nav>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About Us
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
        <Link className="link" to="/cart">
          <Badge count={cart.length} size="small">
            <ShoppingCartOutlined />
          </Badge>
        </Link>
      </nav>
    </div>
  );
};

export default SubHeader;
