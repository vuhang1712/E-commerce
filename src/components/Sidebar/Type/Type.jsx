import "./style.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchType } from "../../../store/actions";

function FilterByType() {
  const getType = useSelector((state) => state.productReducer.filterApplied.type);
  const dispatch = useDispatch();

  const types = [
    "Trend cases",
    "Ult protection cases",
    "Ink cartridges",
    "Business cases",
    "Connectivity",
  ];

  const listItem = types.map((type, index) => (
    <div key={index} className="form-check">
      <input
        className="form-check-input"
        id={type}
        type="checkbox"
        value={type}
        onChange={(e) => {
          e.target.checked
            ? dispatch(fetchType([...getType, type]))
            : dispatch(fetchType(getType.filter((item) => item !== type)));
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
