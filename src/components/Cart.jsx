import React from "react";
import { IoMdClose } from "react-icons/io";
import ItemCart from "./ItemCart";

const Cart = () => {
  return (
    <>
      <div
        style={{
          height: "73vh", // 100% of the viewport height
          width: "30vw", // 20% of the viewport width
          backgroundColor: "darkgrey",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "larger", fontWeight: "700" }}>
            My Order
          </span>
          <IoMdClose
            style={{
              marginLeft: "10px",
              cursor: "pointer",
              border: "1px solid gray",
              borderRadius: "3px",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "lightcoral")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "")}
          />
        </div>
        <ItemCart />
        <ItemCart />
        <ItemCart />
      </div>

      <div style={{ backgroundColor: "yellowgreen" }}>
        <h6 style={{ fontSize: "larger", fontWeight: "700" }}> Items:</h6>
        <h6 style={{ fontSize: "larger", fontWeight: "700" }}>
          {" "}
          Total Amount:-
        </h6>
        <hr />
        <button style={{ backgroundColor: "gray" }}>Checkout</button>
      </div>
    </>
  );
};

export default Cart;
