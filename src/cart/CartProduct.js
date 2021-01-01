import React from "react";
import { useDispatch } from "react-redux";
import {
  adjustQuantity,
  removeFromCart,
} from "../redux/shopping/shoppingActions";

export default function CartProduct({ product }) {
  const dispatch = useDispatch();
  return (
    <>
      <div>{product.title}</div>
      <img src={product.image} height="100" alt={product.title} />
      <div>{product.price}</div>
      <div>You order {product.qty} units</div>
      <div>SubTotal: {(product.qty * product.price).toFixed(2)}</div>
      <input
        type="number"
        min="1"
        defaultValue={product.qty}
        onClick={(e) =>
          dispatch(
            adjustQuantity(parseInt(product.id), parseInt(e.target.value))
          )
        }
      />
      <button onClick={() => dispatch(removeFromCart(product.id))}>
        Delete
      </button>
      <hr />
    </>
  );
}
