import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";

function Home({ products }) {
  return (
    <>
      <h2> Product List</h2>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};
export default connect(mapStateToProps)(Home);
