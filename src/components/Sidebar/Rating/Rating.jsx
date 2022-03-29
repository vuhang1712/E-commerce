import "./style.scss";
import Rating from "../../Rating/index";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchRating } from "../../../store/productSlice";

function FilterByRating() {
  const dispatch = useDispatch();

  const ratingItem = [...Array(5)].map((_, index) => (
    <li key={index}>
      <button
        className="btn"
        onClick={() => dispatch(fetchRating(5 - index))}
      >
        {Rating(5 - index)}
      </button>
    </li>
  ));

  return (
    <div className="rating">
      <h1 className="rating__title">Ratings</h1>
      <ul className="list">{ratingItem}</ul>
    </div>
  );
}

export default FilterByRating;
