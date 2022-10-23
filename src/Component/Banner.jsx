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
import { foods } from "./ItemsList/Foods";
import { harnesses } from "./ItemsList/Harness";
import { toys } from "./ItemsList/Toys";
import "./Todo/BedsCollections.css";
import "./Todo/Food.css";
import FoodIcon from "./Todo/FoodIcon";
import MedicalCare from "./Todo/MedicalCare";

// const CATEGORIES = ["foods", "groomings", "harnesses", "toys"]

const CATEGORIES = [
  {
    id: "foods",
    label: "Foods & Treats",
    img: "https://wholefully.com/wp-content/uploads/2018/09/dog-treats-hero-800x1200.jpg"
  },
  {
    id: "groomings",
    label: "Grooming",
    img: "https://octanecdn.com/forevervetscom/Forever-Vets-Feb-2021-Vaccines-Needed-for-Dog-Grooming-min.jpg",
  },
  {
    id: "toys",
    label: "Toys",
    img: "https://www.thesprucepets.com/thmb/3b5P4ikioFP0Qt6Bl4PtRzoqMZQ=/2048x1464/filters:fill(auto,1)/GettyImages-11495316831-d3a68a67da3d4038b0d3b0d70bd01a84.jpg"
  },
  {
    id: "harnesses",
    label: "Harnesses & Leashes",
    img: "https://www.rover.com/blog/wp-content/uploads/2018/07/reflectivedogharness-1024x969.jpg"
  },
]

export default function Banner() {
  return (
    <>
      <BannerFirst />
      <BannerSecond />
      <BannerThird />
      <MedicalCare/>
    </>
  );
}

function BannerFirst() {
  return (
    <>
      <div className="bannerProducts">
        <div className="quote1">Give your dog best quality product.</div>
        <RoyalCaninLogo className="royalcaninLogo" />
        <DogHeadLogo className="dogHead" />
        <RoyalCaninPacket className="royalcaninPacket" />
        <div className="productDetails">
          <p>Royal Canin Maxi Breed Adult</p>
          <p>MRP: Rs.720</p>
          <p>1Kg</p>
        </div>
        <button className="buyNow">Buy Now</button>
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
  const [activeCategory,setActiveCategory] = useState('foods')

  const visibleCategory = (value) => {
    switch(value) {
      case 'foods':
        return (
          <div>
            {foods.map((food) => {
              return <FoodIcon data={food} />;
            })}
          </div>
        )
      
      case 'groomings':
        return (
          <div>
            {groomings.map((grooming) => {
              return <FoodIcon data={grooming} />;
            })}
          </div>
        )
      
      case 'harnesses':
        return (
          <div>
            {harnesses.map((harness) => {
              return <FoodIcon data={harness} />;
            })}
          </div>
        )
      
      case 'toys':
        return (
          <div>
            {toys.map((toy) => {
              return <FoodIcon data={toy} />;
            })}
          </div>
        )
      default:
        return (
          <div>
            {foods.map((food) => {
              return <FoodIcon data={food} />;
            })}
          </div>
        )
    }
  }

  return (
    <>
      <div className="food_Section">
        <div className="food_Viewer">
          {visibleCategory(activeCategory)}
          </div>
        <div className="food_row_container">
          {
            CATEGORIES.map(item=>{
              return (
                <button className={`category_block ${activeCategory === item?.id && 'active_category_block'}`} onClick={() => setActiveCategory(item?.id)}>
                  <img className="category_img" src={item?.img} />
                  <label>
                    {item?.label}
                  </label>
                </button>
              )
            })
          }
        </div>
      </div>
    </>
  );
}
