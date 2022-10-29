import React, { useState } from "react";
import { groomings } from "../ItemsList/Grooming";
import { foods } from "../ItemsList/Foods";
import { harnesses } from "../ItemsList/Harness";
import { toys } from "../ItemsList/Toys";
import FoodIcon from "../Todo/FoodIcon";
import { Categories } from "../ItemsList/Categories";

export default function ItemViewSecondBanner() {

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
  )
}

