import React from "react";
import { useState, useEffect } from "react";
import "./MedicalCare.css";
import { ears } from "../ItemsList/Medi_Ear";
import { dentals } from "../ItemsList/Medi_Dentals";
import { eyes } from "../ItemsList/Medi_Eyes";
import { skins } from "../ItemsList/Medi_Skins";
import { illnesses } from "../ItemsList/Medi_Illnesses";
import { Link } from "react-router-dom";
import { medical_Buttons } from "../ItemsList/Medical_Sections";

export default function MedicalCare() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems));
  }, [cartItems]);

  const [medicalButton, setmedicalButton] = useState(false);
  const showmedicalButton = () => setmedicalButton(!medicalButton);
  const [disablePanel, setDisablePanel] = useState(false);

  const [active_Medical, setactive_Medical] = useState("illness");

  const VisibleMedical = (value) => {
    switch (value) {
      case "illness":
        return (
         <>
            {illnesses.map((illness) => {
              return (
                <MedicalProducts
                data={illness}
                cartItems={cartItems}
                setCartItems={setCartItems}
                disablePanel={disablePanel}
                setDisablePanel={setDisablePanel}
                />
                );
              })}
        
              </>
        )
      case "dental":
        return (
        <>
            {dentals.map((dental) => {
              return (
                <MedicalProducts
                  data={dental}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  disablePanel={disablePanel}
                  setDisablePanel={setDisablePanel}
                />
              );
            })}
          
            </>
        )
      case "eye":
        return (
        <>
            {eyes.map((eye) => {
              return (
                <MedicalProducts
                data={eye}
                cartItems={cartItems}
                setCartItems={setCartItems}
                disablePanel={disablePanel}
                setDisablePanel={setDisablePanel}
                />
                );
              })}
    
              </>
        )
      case "skin":
        return (
        <>
            {skins.map((skin) => {
              return (
                <MedicalProducts
                  data={skin}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  disablePanel={disablePanel}
                  setDisablePanel={setDisablePanel}
                />
              );
            })}
         
            </>
        )
      case "ear":
        return (
        <>
            {ears.map((ear) => {
              return (
                <MedicalProducts
                  data={ear}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  disablePanel={disablePanel}
                  setDisablePanel={setDisablePanel}
                />
                );
            })}
        
        </>
        )
        default:
          return (
            <>
         {illnesses.map((illness) => {
              return (
                <MedicalProducts
                data={illness}
                cartItems={cartItems}
                setCartItems={setCartItems}
                disablePanel={disablePanel}
                setDisablePanel={setDisablePanel}
                />
                );
              })}
        
                </>
          )
    }
  };

  return (
    <>
      <div className="medicalCare_Div1">
        <div className="medicalCare_Div2">
          <div className="burgerBUtton" onClick={showmedicalButton}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <text>Medical Care For Your Pets</text>
        </div>
        <div className={medicalButton ? "medicalButton active" : "medicalButton"}>
          {medical_Buttons.map(item=> {
            return (
              <button  onClick={() => setactive_Medical(item?.id)}>
              <label>
              {item?.label}
            </label>
            </button>
            )
          })}
        </div>
        <div className="medicalProducts">
          {VisibleMedical(active_Medical)}
          <div
            className={
              disablePanel ? "medicalDisable active" : "medicalDisable"
            }
          ></div>
        </div>
      </div>
    </>
  );
}



function MedicalProducts({
  data,
  cartItems,
  setCartItems,
  setDisablePanel,
  disablePanel,
}) {
  const { description, image, name } = data;

  const [medicalDes, setMedicalDes] = useState(false);
  const showMedicalDes = () => {
    setMedicalDes(!medicalDes);
  };

  const showDisablePanel = () => setDisablePanel(!disablePanel);

  const handleCart = (item) => {
    let arr = [...cartItems];
    let alreadyInCart = cartItems.some((i) => i.name === item?.name);
    if (!alreadyInCart) {
      arr.push(item);
    }
    setCartItems(arr);
  };

  return (
    <><div className="medical_individual">
      <Link to={{ pathname: `/item/${name}` }} state={data} className="medicalItem">
        <img className="medical_Img" src={image} />
        <text className="medicalName">{name}</text>
      </Link>
        <button onClick={() => {handleCart(data);}}>Add To Cart</button>
        <button onClick={() => {showMedicalDes();showDisablePanel();}}>Description</button>
    </div>

      <div
        className={
          medicalDes ? "medicalDescription active" : "medicalDescription"
        }
      >
        <p>{description}</p>
        <button
          className="description_Close"
          onClick={() => {
            showMedicalDes();
            showDisablePanel();
          }}
        >
          CLOSE
        </button>
      </div>
    </>
  );
}
