import "./style.scss";
import Context from "../../../store/Context";
import { useContext } from "react";

function FilterByType() {
  const [state, dispatch] = useContext(Context);
  const types = [
    "Trend cases",
    "Ult protection cases",
    "Ink cartridges",
    "Business cases",
    "Connectivity",
  ];

  const listItem = types.map((type, index) => (
    <div key={index} class="form-check">
      <input
        class="form-check-input"
        id={type}
        type="checkbox"
        value={type}
        onChange={(e) => {
          e.target.checked
            ? dispatch({
                type: "TYPE",
                payload: { type: [...state.filterApplied.type, type] },
              })
            : dispatch({
                type: "TYPE",
                payload: {
                  type: state.filterApplied.type.filter(
                    (item) => item !== type
                  ),
                },
              });
        }}
      />
      <label htmlFor={type}>{type}</label>
    </div>
  ));

  return (
    <div className="sidebar__item">
      <h1 className="sidebar__title">Type</h1>
      <div className="list">{listItem}</div>
    </div>
  );
}

export default FilterByType;
