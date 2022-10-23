import React from "react";
import "./Cart.css";

export default function Wishlist({ data }) {
  const { name, price, image } = data;

  return (
    <>
      <div className="List_Wishlist">
        <div className="Icon_Wishlist">
          <img className="Img_Wishlist" src={image} />
        </div>
        <text className="wishlist_name">{name}</text>
        <text className="wishlist_price">
          {price}
          <text className="wishlist_price"> INR</text>
        </text>
      </div>
    </>
  );
}
