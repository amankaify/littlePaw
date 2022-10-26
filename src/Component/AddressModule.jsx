import React from "react";
import { useState } from "react";
import "./AddressModule.css";

const sAVEDADDRESS = [
  {
    id: 0,
    name: "Aman Srivastav",
    type: "HOME",
    pincode: 208027,
    address: "1A World Bank Barra Sector-D",
    phone: 9044142219,
    city: "Kanpur",
  },
  {
    id: 1,
    name: "Muskan Srivastav",
    type: "HOME",
    pincode: 208027,
    address: "1A World Bank Barra Sector-D",
    phone: 9044142219,
    city: "Kanpur",
  },
  {
    id: 2,
    name: "Kaify Srivastav",
    type: "HOME",
    pincode: 208027,
    address: "1A World Bank Barra Sector-D",
    phone: 9044142219,
    city: "Kanpur",
  },
  {
    id: 3,
    name: "Charu Srivastav",
    type: "HOME",
    pincode: 208027,
    address: "1A World Bank Barra Sector-D",
    phone: 9044142219,
    city: "Kanpur",
  },
  {
    id: 4,
    name: "Aditya Srivastav",
    type: "HOME",
    pincode: 208027,
    address: "1A World Bank Barra Sector-D",
    phone: 9044142219,
    city: "Kanpur",
  },
];

export default function AddressModule({}) {
  return (
    <>
      <div className="adrs_Panel">
        <p>Selected Address:</p>
        <div className="addrsPartitonBar">
        <AddressBlocks data={sAVEDADDRESS} />
        </div>
      </div>
    </>
  );
}

function AddressBlocks({data}) {
  
  
  const [selectedAddress, setSelecteAddress] = useState({});
  
  return (
    <>
      {data.map(item => {
        const { name, pincode, city, type, address, phone } = item;
        return (
          // <AddressBlocks data={data}/>
          <div
            className={`adrs_Block ${selectedAddress?.id === item?.id && "active_address_Selected"}`}
            onClick={() => setSelecteAddress(item)}>
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
          </div>
        );
      })}
    </>
  );
}
