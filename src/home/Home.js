import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";

function Home({ products }) {
  return (
    <>
      <div> Product List</div>
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
