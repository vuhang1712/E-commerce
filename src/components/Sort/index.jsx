import "./style.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortProducts } from "../../store/actions";

function Sort() {
  const totalCount = useSelector(state => state.productReducer.totalCount);
  const dispatch = useDispatch();
  const options = ["Featured", "Price asc", "Price desc"];

  const selectItem = options.map((option, index) => (
    <option value={option} key={index}>
      {option}
    </option>
  ));

  const result = {
    "Featured": { sort: "rating", order: "desc" },
    "Price asc": { sort: "price", order: "asc" },
    "Price desc": { sort: "price", order: "desc" },
  };

  function handleChange(value) {
    dispatch(sortProducts(result[value].sort, result[value].order))
  }

  return (
    <section>
      <div className="results">{parseInt(totalCount).toLocaleString()} results found</div>
      <form className="form-sort">
        <select
          className="form-select"
          onChange={(e) => handleChange(e.target.value)}
        >
          {selectItem}
        </select>
      </form>
    </section>
  );
}

export default Sort;
