import React from "react";
import { Link } from "react-router-dom";
import "../Component/Todo/ItemView.css";

export default function Suggestions({ data }) {
  const { name, image } = data;

  return (
    <>
      <Link
        to={{ pathname: `/item/${name}` }}
        state={data}
        className="suggestionItem"
      >
        <img className="suggestion_ImgBlock" src={image} />
        <p>{name}</p>
      </Link>
    </>
  );
}
