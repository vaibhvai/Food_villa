import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const ItemCart = () => {
  return (
    <div>
      <div
        style={{
          padding: "10px",
          display: "flex",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
          style={{ width: "90px" }}
          alt=""
        />
        <div>
          <div>
            {" "}
            <p style={{ fontWeight: "700" }}>
              {" "}
              Onion Pizza{" "}
              <span style={{ backgroundColor: "yellowgreen" }}>₹600</span>
              <span>
                <MdDelete />
              </span>
            </p>
          </div>

          <div>
            <div>
              <AiOutlinePlus style={{ width: "55px" }} />
              <span style={{ backgroundColor: "beige" }}>1</span>
              <AiOutlineMinus style={{ width: "55px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
