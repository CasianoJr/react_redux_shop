import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

export default function CartList() {
  const { cart } = useSelector((state) => state.shop);
  return (
    <>
      {cart.map((product) => (
        <CartProduct product={product} key={product.id} />
      ))}
    </>
  );
}
