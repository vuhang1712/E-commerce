import "./style.scss";
import Context from "../../../store/Context";
import React, { useContext } from "react";

function ClearAllFilters() {
  const [state, dispatch] = useContext(Context);

  function clearAllFilters() {
    dispatch({
      type: "CLEAR_ALL_FILTERS",
      payload: { filterApplied: { type: [], brand: []} },
    });
  }

  return (
    <button className="btn btn-primary" onClick={clearAllFilters}>
      Clear All Filters
    </button>
  );
}

export default ClearAllFilters;
