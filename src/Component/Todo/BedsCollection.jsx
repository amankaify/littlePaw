import React from "react";
import { Link } from "react-router-dom";
import "./BedsCollections.css";

export default function BedsCollection({ data }) {
  const { name, price, image } = data;
  return (
    <>
      <Link to={{pathname: `/item/${name}`}} state={data} className="beds_Container">
        <div className="beds_Icon">
          <img className="beds_Img" src={image} />
        </div>
        <div className="beds_details">
          <p>{name}</p>
          <text>Price: {price}<text> INR</text></text>
        </div>
      </Link>
    </>
  );
}


