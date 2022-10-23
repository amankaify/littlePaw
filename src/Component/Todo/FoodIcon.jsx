import React from "react";
import { Link } from "react-router-dom";
import "./Food.css";

export default function FoodIcon({ data }) {
  const { name, price, image } = data;
  return (
    <>
      <Link
        to={{ pathname: `/item/${name}` }}
        state={data}
        className="viewer_Icon"
      >
        <div className="Food_Icon">
          <img className="Food_Img" src={image} />
          <text className="food_Price">Price: {price} INR</text>
        </div>
        <p>{name}</p>
      </Link>
    </>
  );
}
