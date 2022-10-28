import React from "react";
import * as MdIcons from "react-icons/md";
import "./NewAddress.css";
import { useState } from "react";
export default function NewAddress({ adrsBtn,setadrsBtn }) {
  console.log("Called:"+adrsBtn);
  return (
    <div className={adrsBtn ? "input_NewAddrs active" : "input_NewAddrs"}>
      <button
        className="adrs_Cancel"
        title="Cancel"
        onClick={() => setadrsBtn(false)}
      >
        <MdIcons.MdCancel />  
      </button>
      <p>Enter Your Details:</p>
      <input
        className="adrs_Input"
        placeholder="Enter Last Name"
        type="text"
      ></input>
      <input
        className="adrs_Input"
        placeholder="Enter First Name"
        type="text"
      ></input>
      <input className="adrs_Input" placeholder="Pincode" type="number"></input>
      <input className="adrs_Input" placeholder="City" type="text"></input>
      <input className="adrs_Input" placeholder="Address" type="text"></input>
      <input className="adrs_Input" placeholder="Phone" type="text"></input>
      <button className="adrs_Location">Current Location</button>
      <button className="adrs_Location">Save Address</button>
    </div>
  );
}
