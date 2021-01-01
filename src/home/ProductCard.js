import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/shopping/shoppingActions";

function ProductCard({ product, addToCart }) {
  return (
    <React.Fragment>
      <div>{product.title}</div>
      <div>{product.price}</div>
      <img src={product.image} alt={product.title} height="200" />
      <div>{product.description}</div>
      <Link to={`${product.id}/detail`}>
        <button>View</button>
      </Link>
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
