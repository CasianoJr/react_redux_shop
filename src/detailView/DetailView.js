import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/shopping/shoppingActions";

function DetailView({ products, addToCart }) {
  const params = useParams();
  const product = products.filter(
    (item) => parseInt(item.id) === parseInt(params.productID)
  )[0];
  return (
    <div>
      <h2>Detail</h2>
      <div>{product.title}</div>
      <img src={product.image} height="200" alt={product.title} />
      <div>{product.description}</div>
      <div>{product.price}</div>
      <button onClick={() => addToCart(product.id)}>Add to Cart</button>
    </div>
  );
}

const mapToStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapToStateToProps, mapDispatchToProps)(DetailView);
