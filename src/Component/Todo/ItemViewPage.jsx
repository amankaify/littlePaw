import React from "react";
import TopNavigation from "../TopNavigation";
import "./ItemView.css";
import { Rating } from "react-simple-star-rating";
import { useState, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import {eyes}from "../ItemsList/Medi_Eyes";
import Suggestions from "../Suggestions";

export default function ItemViewPage() {
  const { state } = useLocation();

  return (
    <>
      <TopNavigation />
      <ItemMainView data={state} />
    </>
  );
}

function ItemMainView({ data }) {
  return (
    <>
      <div className="productViewPanel">
        <ImageSection data={data} />
        <DetailSection data={data} />
        <SuggestionPanel data={data}/>
      </div>
    </>
  );
}

function SuggestionPanel() {
return(
  <div className="rightPanel">
        <h3>Suggestions</h3>
        <div className="rightPanel_Suggestions">
          {eyes.map((eye) => {
            return (
              <Suggestions data={eye}/>
            )
          })}
        </div>
      </div>
)
}

function ImageSection({ data }) {
  console.log("data", data);
  const [mainImage, setMainImage] = useState(data?.images_array[0]);
  return (
    <div className="productImagesPanel">
      <img className="mainImage" src={mainImage} />
      <div className="secondaryImagesPanel">
        {data?.images_array.map((i) => (
          <img
            onClick={() => setMainImage(i)}
            className="secondaryImages"
            src={i}
            alt={data?.name}
          />
        ))}
      </div>
    </div>
  );
}

function DetailSection({ data }) {
  const [viewMore, setViewMore] = useState(false);
  const showViewMore = () => setViewMore(!viewMore);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleCart = (item) => {
    let arr = [...cartItems];
    let alreadyInCart = cartItems.some((i) => i.id === item?.id);
    if (!alreadyInCart) {
      arr.push(item);
    }
    setCartItems(arr);
  };

  return (
    <div className="productDetailsPanel">
      <div className="sectionBlockName">
        <h1>{data?.name}</h1>
        <div className="brandName">
          <p>Brand:</p>
          <h4>{data?.brand}</h4>
        </div>
        <h2>MRP : {data?.price}</h2>
        <Rating
          className="ratingBar"
          iconsCount={5}
          ratingValue={data?.rating}
          size="20px"
          readonly={data?.rating}
        />
        <h4>Inclusive of all taxes.</h4>
        <text className="viewMoreButton" onClick={showViewMore}>
          View More &#709;
        </text>
        {viewMore === true && <ViewMore data={data} />}
        <Size data={data} />
      </div>
      <div className="sectionBlockButton">
        <button
          onClick={() => {
            handleCart(data);
          }}
        >
          Add To Cart
        </button>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

function Size({ data }) {
  if (data?.size != null) {
    return (
      <>
        <div className="sectionBlockSize" styk>
          <text className="sectionBlockSizeText">Size:</text>
          <button className="sectionBlockSizeButton">Large</button>
          <button className="sectionBlockSizeButton">Medium</button>
          <button className="sectionBlockSizeButton">Small</button>
        </div>
      </>
    );
  }
}

function ViewMore({ data }) {
  return (
    <div className="viewMore">
      <p>{data?.description}</p>
    </div>
  );
}
