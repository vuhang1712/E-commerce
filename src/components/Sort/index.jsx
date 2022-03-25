import "./style.scss";
import Context from "../../store/Context";
import React, { useContext } from "react";

function Sort() {
  const [state, dispatch] = useContext(Context);
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
    dispatch({
      type: "SORT",
      payload: { sort: result[value].sort, order: result[value].order },
    });
  }

  return (
    <section>
      <div className="results">{parseInt(state.totalCount).toLocaleString()} results found</div>
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
