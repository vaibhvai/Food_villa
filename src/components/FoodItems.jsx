import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";

const FoodItems = () => {
  const foodItemsStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "25px",
    justifyContent: "center",
  };

  return (
    <div style={foodItemsStyle}>
      {FoodData.map((food) => (
        <FoodCard
          key={food.id}
          name={food.name}
          id={food.id}
          price={food.price}
          desc={food.desc}
          rating={food.rating}
          img={food.img}
        />
      ))}
    </div>
  );
};

export default FoodItems;
