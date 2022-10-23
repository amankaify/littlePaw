import React, { useState, useEffect } from "react";
import { ReactComponent as BrandIcon } from "../assets/littlepaw_brown.svg";
import Wishlist from "./Wishlist.jsx";
import { Rating } from "react-simple-star-rating";
import "./Products.css";
import "./Cart.css";
import "./Wishlist.css";
import { Link } from "react-router-dom";

export default function Cart() {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [cartItemData, setCartItemsData] = useState(() => {
    const saved = localStorage.getItem("items");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  
  
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItemData));
  }, [cartItemData]);
  
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);
  
  const [wishlist, setWishlist] = useState(false);

  const [emptyMessage, setemptyMessage] = useState(false);
  const showemptyMessage = () => {
    if (wishlistItems.length === 0) {
      setemptyMessage(!emptyMessage);
    }
  };

  const showWishlist = () => {
    if (wishlistItems.length !== 0) {
      setWishlist(!wishlist);
    }
  };

  const hideWishlist = () => {
    if (wishlistItems.length === 1) {
      setWishlist(!wishlist);
    }
  };

  const addWishToCart = (item) => {
    let arr = [...cartItemData];
    let alreadyInCart = cartItemData.some((i) => i.name === item?.name);
    if (!alreadyInCart) {
      arr.push(item);
    }
    setCartItemsData(arr);
  };

  const removeWishlist = (data) => {
    let arr = [...wishlistItems];
    let modifedArray = arr.filter((i) => i.name !== data.name);
    setWishlistItems(modifedArray);
  };

  return (
    <>
      <div className={wishlist ? "greyBlockDiv active" : "greyBlockDiv"}></div>
      <div className="cartPage">
        <div className="topNavigation">
          <Link to="/" className="brandLogo">
            <BrandIcon className="littleLogo" />
          </Link>
          <div className="topNavButtons">
            <button>My Orders</button>
            <button
              onClick={() => {
                showWishlist();
                showemptyMessage();
              }}
            >
              Wishlisht
              {wishlistItems?.length > 0 && (
                <text>{wishlistItems?.length}</text>
              )}
            </button>
            <button>My Account</button>
          </div>
        </div>
        <div className="cartItemList">
          <div className="productsListCart">
            {cartItemData.map((cartitem) => {
              return (
                <Item
                  data={cartitem}
                  cartItemData={cartItemData}
                  setCartItemsData={setCartItemsData}
                  wishlistItems={wishlistItems}
                  setWishlistItems={setWishlistItems}
                />
              );
            })}
          </div>
          <TotalContainer />
          <span>
            <div className={emptyMessage ? "empty_Msg active" : "empty_Msg"}>
              <p>Sorry! You have no items in your list.</p>
            </div>
          </span>
        </div>
      </div>
      <div className={wishlist ? "wishlish_Div active" : "wishlish_Div"}>
        {wishlistItems.map((wishlistItem) => {
          return (
            <>
              <div className="wishlist_Div2">
                <Wishlist data={wishlistItem} />
                <button
                  onClick={() => {
                    addWishToCart(wishlistItem);
                    hideWishlist();
                    removeWishlist(wishlistItem);
                  }}
                >
                  ADD TO CART
                </button>
                <button
                  onClick={() => {
                    removeWishlist(wishlistItem);
                    hideWishlist();
                  }}
                >
                  DELETE
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

function Item({
  data,
  setWishlistItems,
  wishlistItems,
  cartItemData,
  setCartItemsData,
}) {
  const { name, price, image, rating } = data;
  const itemDetails = {
    itemCount: 1,
  };

  const handleWishlist = (item) => {
    let arr = [...wishlistItems];
    let alreadyInWishlist = wishlistItems.some((i) => i.name === item?.name);
    if (!alreadyInWishlist) {
      arr.push(item);
    }
    setWishlistItems(arr);
  };

  const removeItemCart = () => {
    let arr = [...cartItemData];
    let cartArray = arr.filter((i) => i.name !== data.name);
    setCartItemsData(cartArray);
  };

  const [quantity, setQuantity] = useState(itemDetails);

  if (quantity.itemCount === 0) return;

  return (
    <>
      <div className="itemsList">
        <div className="productIcon">
          <img className="productImageCart" src={image} />
        </div>
        <div className="cartproductDetails">
          <div className="details_Div">
            <text className="orderName">{name}</text>
       
            <text className="orderPrice">
              {price}
              <p>INR</p>
            </text>
          </div>
          <div className="details_Div">
          <Rating
          className="ratingBar"
          iconsCount={5}
          ratingValue={rating}
          size="20px"
          readonly={rating} />
          </div>
          <div className="details_Div">
            <div>
              <button
                className="qntButton"
                disabled={quantity.itemCount <= 0}
                onClick={() =>
                  setQuantity({
                    ...quantity,
                    itemCount: quantity.itemCount - 1,
                  })
                }
              >
                -
              </button>
              <text className="qntNum">{quantity.itemCount}</text>
              <button
                className="qntButton"
                disabled={quantity.itemCount >= 10}
                onClick={() =>
                  setQuantity({
                    ...quantity,
                    itemCount: quantity.itemCount + 1,
                  })
                }
              >
                +
              </button>
            </div>
            <div>
              <button
                className="wishlishButton"
                onClick={() => {
                  handleWishlist(data);
                  removeItemCart(data);
                }}
              >
                WISHLIST
              </button>
              <button
                className="removeButton"
                onClick={() => {
                  removeItemCart(data);
                }}
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TotalContainer() {
  const shippingItemDetails = {
    itemCount: "0",
    shipingAddress: "Address",
    billingDetails: "Billing Details",
    itemsPrice: "0",
    itemDiscount: "0",
    itemsTotalPrice: "0",
    itemDeliveryCharges: "0",
  };

  const [shippingValues] = useState(shippingItemDetails);

  return (
    <>
      <div className="totalContainer">
        <div className="row">
          <h4>No of Items:</h4>
          <p>{shippingValues.itemCount}</p>
        </div>

        <div className="sepratorLine"></div>

        <div className="address">
          <h4>Shipping Address:</h4>
          <p>{shippingValues.shipingAddress}</p>
        </div>

        <div className="address">
          <h4>Billing Details:</h4>
          <p>{shippingValues.billingDetails}</p>
        </div>
        
        <button className="buttonNavChangeAddrs">Change Address</button>

        <div className="row">
          <h4>Price:</h4>
          <p>{shippingValues.itemsPrice}</p>
        </div>

        <div className="row">
          <h4>Discount:</h4>
          <p>{shippingValues.itemDiscount}</p>
        </div>

        <div className="row">
          <h4>Delivery Charges</h4>
          <p>{shippingValues.itemDeliveryCharges}</p>
        </div>

        <div className="sepratorLine"></div>

        <div className="row">
          <h4>Total Price:</h4>
          <p>{shippingValues.itemsTotalPrice}</p>
        </div>

        <button className="buttonNav">Procced To Buy</button>
      </div>
    </>
  );
}
