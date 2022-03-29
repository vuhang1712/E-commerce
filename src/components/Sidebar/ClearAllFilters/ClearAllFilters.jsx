import "./style.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { clearAllFilters } from "../../../store/productSlice";

function ClearAllFilters() {
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-primary"
      onClick={() => dispatch(clearAllFilters())}
    >
      Clear All Filters
    </button>
  );
}

export default ClearAllFilters;
