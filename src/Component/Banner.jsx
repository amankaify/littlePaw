import React, { useState } from "react";
import "./Banner.css";
import "./Category.css";
import { ReactComponent as RoyalCaninLogo } from "../assets/royalcaninlogo.svg";
import { ReactComponent as DogHeadLogo } from "../assets/doghead.svg";
import { ReactComponent as DogSittingLogo } from "../assets/dogsitting.svg";
import { ReactComponent as ArrowUpperLogo } from "../assets/arrowupper.svg";
import { ReactComponent as RoyalCaninPacket } from "../assets/royalcaninpacket.svg";
import BedsCollection from "./Todo/BedsCollection";
import { groomings } from "./ItemsList/Grooming";
import { beds } from "./ItemsList/Beds";
import { Categories } from "./ItemsList/Categories";
import { foods } from "./ItemsList/Foods";
import { posterProduct } from "./ItemsList/PosterProduct";
import { harnesses } from "./ItemsList/Harness";
import { toys } from "./ItemsList/Toys";
import "./Todo/BedsCollections.css";
import "./Todo/Food.css";
import FoodIcon from "./Todo/FoodIcon";
import MedicalCare from "./Todo/MedicalCare";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Banner() {
  return (
    <>
      <BannerFirst />
      <BannerSecond />
      <BannerThird />
      <MedicalCare />
    </>
  );
}

function BannerFirst() {
  const navigate = useNavigate();

  const [cartItemData, setCartItemsData] = useState([]);

  const handlePoster = () => {
    setCartItemsData([posterProduct]);
  };
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItemData));
    if(cartItemData?.length !== 0) navigate('/cart')
  }, [cartItemData]);
  

  return (
    <>
      <div className="bannerProducts">
        <Link
          to={{ pathname: `/item/${posterProduct.name}` }}
          state={posterProduct}
          className="posterLink"
        >
          <RoyalCaninPacket className="royalcaninPacket" />
          <div className="productDetails">
            <p>{posterProduct?.name}</p>
            <p>MRP: Rs.{posterProduct?.price}</p>
            <p>{posterProduct?.qty}Kg</p>
          </div>
        </Link>
        <div className="quote1">Give your dog best quality product.</div>
        <RoyalCaninLogo className="royalcaninLogo" />
        <DogHeadLogo className="dogHead" />
        <button className="buyNow" onClick={() => {handlePoster();}}>
          Buy Now
        </button>
      </div>
    </>
  );
}

function BannerSecond() {
  const [bedsView, setbedsView] = useState(false);
  const showBedsView = () => setbedsView(!bedsView);
  return (
    <>
      <div className={bedsView ? "categoriesPets active" : "categoriesPets"}>
        <div className="quote2">
          <button className="dropButton" onClick={showBedsView}>
            <button></button>
          </button>
          <p1>Give your pet the best comfort.</p1>
          <p2>Check out the beds collection</p2>
        </div>
        <DogSittingLogo className="sittingDog" />
        <ArrowUpperLogo className="arrowUpper" />
      </div>
      <div
        className={
          bedsView ? "bedsCollection_Div1 active" : "bedsCollection_Div1"
        }
      >
        <div className="beds_Quote">
          Checkout the latest Beds Collection of every size:
        </div>
        <div className="beds_Bar">
          {beds.map((bed) => {
            return <BedsCollection data={bed} />;
          })}
        </div>
        <button className="upButton" onClick={showBedsView}>
          <button></button>
        </button>
      </div>
    </>
  );
}

function BannerThird() {
  const [activeCategory, setActiveCategory] = useState("foods");

  const visibleCategory = (value) => {
    switch (value) {
      case "foods":
        return (
          <div>
            {foods.map((food) => {
              return <FoodIcon data={food} />;
            })}
          </div>
        );

      case "groomings":
        return (
          <div>
            {groomings.map((grooming) => {
              return <FoodIcon data={grooming} />;
            })}
          </div>
        );

      case "harnesses":
        return (
          <div>
            {harnesses.map((harness) => {
              return <FoodIcon data={harness} />;
            })}
          </div>
        );

      case "toys":
        return (
          <div>
            {toys.map((toy) => {
              return <FoodIcon data={toy} />;
            })}
          </div>
        );
      default:
        return (
          <div>
            {foods.map((food) => {
              return <FoodIcon data={food} />;
            })}
          </div>
        );
    }
  };

  return (
    <>
      <div className="food_Section">
        <div className="food_Viewer">{visibleCategory(activeCategory)}</div>
        <div className="food_row_container">
          {Categories.map((item) => {
            return (
              <button
                className={`category_block ${
                  activeCategory === item?.id && "active_category_block"
                }`}
                onClick={() => setActiveCategory(item?.id)}
              >
                <img className="category_img" src={item?.img} />
                <label>{item?.label}</label>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
