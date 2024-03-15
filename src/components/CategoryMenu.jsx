import React from "react";
import Cart from "./Cart";

const CategoryMenu = () => {
  const currDate = new Date();
  return (
    <div style={{ padding: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Cart />
        </div>

        <span> Today's date:-{currDate.toString().slice(0, 16)}</span>
      </div>
      <h3 style={{ color: "Black", fontWeight: "bold", fontSize: "larger" }}>
        Find The Best Food😋!
      </h3>
      <div style={{ padding: "`40px" }}>
        <button
          style={{ marginRight: "10px" }}
          className="btn btn-secondary"
          type="submit"
        >
          All
        </button>
        <button
          style={{ marginRight: "10px" }}
          className="btn btn-secondary"
          type="submit"
        >
          Snacks
        </button>
        <button
          style={{ marginRight: "10px" }}
          className="btn btn-secondary"
          type="submit"
        >
          BreakFast
        </button>
        <button
          style={{ marginRight: "10px" }}
          className="btn btn-secondary"
          type="submit"
        >
          Lunch
        </button>
        <button
          style={{ marginRight: "10px" }}
          className="btn btn-secondary"
          type="submit"
        >
          Dinner
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
