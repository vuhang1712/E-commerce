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

  const listItem = types.map((item) => (
    <div class="form-check">
      <input
        class="form-check-input"
        id={item}
        type="checkbox"
        value={item}
        onChange={(e) => {
          e.target.checked
            ? dispatch({
                type: "TYPE",
                payload: { type: [...state.filterApplied.type, item] },
              })
            : dispatch({
                type: "TYPE",
                payload: {
                  type: state.filterApplied.type.filter(
                    (type) => type !== item
                  )
                }
              });
        }}
      />
      <label for={item}>{item}</label>
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
