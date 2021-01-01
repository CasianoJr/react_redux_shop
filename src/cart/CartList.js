import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

export default function CartList() {
  const { cart } = useSelector((state) => state.shop);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let qty = 0;
    let price = 0;
    cart.forEach((element) => {
      qty += element.qty;
      price += qty * element.price;
    });
    setTotalQty(qty);
    setTotalPrice(price);
  }, [cart]);
  return (
    <>
      <h2>Cart</h2>
      {cart.map((product) => (
        <CartProduct product={product} key={product.id} />
      ))}
      <div>Total Number of Items: {totalQty}</div>
      <div>Total Price: {totalPrice}</div>
    </>
  );
}
