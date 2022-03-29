import "./style.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { clearAllFilters } from "../../../store/actions";

function ClearAllFilters() {
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-primary"
      onClick={() => dispatch(clearAllFilters({ type: [], brand: [] }))}
    >
      Clear All Filters
    </button>
  );
}

export default ClearAllFilters;
