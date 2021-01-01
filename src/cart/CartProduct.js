import React from "react";

export default function CartProduct({ product }) {
  return (
    <>
      <div>{product.title}</div>
      <img src={product.image} height="100" alt={product.title} />
      <div>{product.price}</div>
      <div>You order {product.qty} units</div>
    </>
  );
}
