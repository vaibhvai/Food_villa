import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FoodCard = ({ id, name, desc, img, rating, price }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={img}
          className="card-img-top transition-all duration-500 ease-in-out"
          alt="..."
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div classNameName="card-body">
          <div>
            <h5 className="card-title" style={{ fontWeight: "bolder" }}>
              {name}
            </h5>
            <span>
              {" "}
              <h6 style={{ color: "crimson" }}>Price :- ₹{price}</h6>
            </span>
          </div>
          <p>{desc.slice(0, 80)}...</p>
          <div style={{ display: "flex", gap: "53px" }}>
            <span>
              <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
              {rating}
            </span>
            <span>
              <button style={{ backgroundColor: "greenyellow" }}>
                Add to cart
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
