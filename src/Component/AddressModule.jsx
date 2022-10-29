import React from "react";
import { useState } from "react";
import "./AddressModule.css";
import * as MdIcon from "react-icons/md";
import NewAddress from "./NewAddress";
import {SavedAddress} from "./ItemsList/SavedAddress";



export default function AddressModule({ data, changeAddrs,handleShowAddress }) {
  //comment
  const [curentAddrs] = useState(data);
  const [newAdrsValues, setValues] = useState(data);
  
  const[adrsBtn, setadrsBtn] = useState(false);

  const handleNewAddrs=() => {
    setadrsBtn(true)
    console.log(adrsBtn);
  }

  return (
    <>
      <div className="adrs_Panel">
        <div className="adrs_row">
          <p>Current Address:</p>
          <button className="add_Address" onClick={()=>handleNewAddrs()}>New +</button>
        </div>
        <div className="default_Address">
          <div className="addrs_grid">
            <p>name:</p>
            <p>{curentAddrs.name}</p>
            <p>phone:</p>
            <p>{curentAddrs.phone}</p>
            <p>city:</p>
            <p>{curentAddrs.city}</p>
            <p>address:</p>
            <p>{curentAddrs.address}</p>
            <p>type:</p>
            <p>{curentAddrs.type}</p>
            <p>pincode:</p>
            <p>{curentAddrs.pincode}</p>
          </div>
        </div>
        <div className="addrsPartitonBar">
          <AddressBlocks data={SavedAddress} setValues={setValues} />
        </div>
        <button className="done_Button" onClick={()=>{changeAddrs(newAdrsValues); handleShowAddress();}}>Done</button>
          <NewAddress adrsBtn={adrsBtn}
          setadrsBtn={setadrsBtn}/>
      </div>
    </>
  );
}

function AddressBlocks({ data, setValues }) {
  const [selectedAddress, setSelecteAddress] = useState({});

  return (
    <>
      {data.map((item) => {
        const { name, pincode, city, type, address, phone } = item;
        return (
          <div
            className={`adrs_Block ${
              selectedAddress?.id === item?.id && "active_address_Selected"
            }`}
            onClick={() => {
              setSelecteAddress(item);
              setValues(item);
            }}
          >
            <div className="adrs_row">
              <p>{name}</p>
              <p>{phone}</p>
            </div>
            <p>{city}</p>
            <p>{address}</p>
            <div className="adrs_row">
              <p>{type}</p>
              <p>{pincode}</p>
            </div>
            <div className="adrs_row2">
              <button className="addrs_Icons" title="Delete">
                <MdIcon.MdDelete />
              </button>
              <button className="addrs_Icons" title="Edit">
                <MdIcon.MdEdit />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
