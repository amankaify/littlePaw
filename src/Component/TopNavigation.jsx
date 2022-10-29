import React from 'react';
import { useNavigate } from "react-router-dom";
import { ReactComponent as BrandIcon } from "../assets/littlepaw_brown.svg";
import { ReactComponent as Location } from "../assets/location.svg";
import { ReactComponent as BowlCart } from "../assets/bowlcart.svg";
import { ReactComponent as UserProfile } from "../assets/userprofile.svg";

export default function TopNavigation() {
    const navigate = useNavigate();
    return (
      <>
        <div className="topNavigation">
          <div className="brandLogo">
            <BrandIcon className="littleLogo" onClick={()=>navigate("/")} />
          </div>
          <input
            className="searchBar"
            placeholder="Search your product"
            maxLength={50}
          ></input>
          <div className="locationDiv">
            <Location className="locationIcon" />
            <div className="userlocationDetails">
              <text>City Pincode</text>
            </div>
          </div>
          <div className="buttonsBar">
            <BowlCart className="topButton" onClick={() => navigate("/cart")} />
            <UserProfile
              className="topButton"
              onClick={() => navigate("/createaccount")}
            />
          </div>
        </div>
      </>
    );
}
