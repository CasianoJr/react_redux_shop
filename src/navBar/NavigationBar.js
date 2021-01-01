import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function NavigationBar({ cart }) {
  const [shopCount, setShopCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((element) => {
      count += element.qty;
    });
    setShopCount(count);
  }, [cart]);

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <div>
        <Link to="/">Ecommerce</Link>
      </div>

      <Link to="/cart">
        Cart <span>{shopCount}</span>
      </Link>
    </div>
  );
}
const mapToStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapToStateToProps)(NavigationBar);
