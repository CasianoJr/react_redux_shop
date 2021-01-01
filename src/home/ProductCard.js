import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/shopping/shoppingActions";

function ProductCard({ product, addToCart }) {
  return (
    <React.Fragment>
      <div>{product.title}</div>
      <div>{product.price}</div>
      <img src={product.image} alt={product.title} height="300" />
      <div>{product.description}</div>
      <button>View</button>
      <button onClick={() => addToCart(product.id)}>Add to Cart</button>
      <hr />
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(null, mapDispatchToProps)(ProductCard);
