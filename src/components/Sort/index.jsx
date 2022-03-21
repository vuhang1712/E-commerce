import "./style.scss";
import Context from "../../store/Context";
import { useContext } from "react";

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
    <form class="form-sort">
      <select
        class="form-select"
        onChange={(e) => handleChange(e.target.value)}
      >
        {selectItem}
      </select>
    </form>
  );
}

export default Sort;
