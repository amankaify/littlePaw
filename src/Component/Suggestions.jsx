import React from "react";
import { Link } from "react-router-dom";
import "../Component/Todo/ItemView.css";

export default function Suggestions({ data }) {
  const { name, image } = data;
  // const refreshPage = () => {
  //   window.location.reload();
  // };
  return (
    <>
      <Link 
        to={{ pathname: `/item/${name}` }}
        target="_blank"
        state={data}
        className="suggestionItem"
      >
        <img className="suggestion_ImgBlock" src={image} />
        <p>{name}</p>
      </Link>
    </>
  );
}
