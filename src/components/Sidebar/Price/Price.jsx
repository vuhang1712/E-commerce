import "./style.scss";
import Context from "../../../store/Context";
import { useContext, useState } from "react";

const priceRange = {
  "$0 - 50": {
    min: 0,
    max: 50,
  },
  "$50 - 100": {
    min: 50,
    max: 100,
  },
  "$100 - 200": {
    min: 100,
    max: 200,
  },
  "$200 - 500": {
    min: 200,
    max: 500,
  },
  "$500 - 1000": {
    min: 500,
    max: 1000,
  },
  "$1000 - 2000": {
    min: 1000,
    max: 2000,
  },
  "$2000 - 3000": {
    min: 2000,
    max: 3000,
  },
  "$3000 - 4000": {
    min: 3000,
    max: 4000,
  },
  "> $4000": {
    min: 4000,
  },
};

const initPriceRange = [
  "$0 - 50",
  "$50 - 100",
  "$100 - 200",
  "$200 - 500",
  "$500 - 1000",
  "$1000 - 2000",
  "$2000 - 3000",
  "$3000 - 4000",
  "> $4000",
];

function FilterByPrice() {
  const [{ filterApplied }, dispatch] = useContext(Context);
  const [range, setRange] = useState([...initPriceRange]);
  const [inputMin, setInputMin] = useState(0);
  const [inputMax, setInputMax] = useState(0);

  function handleShowPriceRange(min, max) {
    if (min && max) {
      return setRange(["$" + min + "-" + max]);
    }

    if (min && !max) {
      return setRange(["> $" + min]);
    }

    if (!min && max) {
      return setRange(["< $" + max]);
    }

    if (!min && !max) {
      return setRange(initPriceRange);
    }
  }

  function handleChangeMinPrice(value) {
    filterApplied.minPrice = value;
    setInputMin(value);
  }

  function handleChangeMaxPrice(value) {
    filterApplied.maxPrice = value;
    setInputMax(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleShowPriceRange(filterApplied.minPrice, filterApplied.maxPrice);
    dispatch({
      type: "PRICE",
      payload: {
        minPrice: filterApplied.minPrice,
        maxPrice: filterApplied.maxPrice,
      },
    });
  }

  function handleClickPriceRange(value) {
    filterApplied.minPrice = priceRange[value].min;
    filterApplied.maxPrice = priceRange[value].max;

    setInputMin(filterApplied.minPrice);
    setInputMax(filterApplied.maxPrice);
    setRange([value]);
    
    dispatch({
      type: "PRICE",
      payload: {
        minPrice: filterApplied.minPrice,
        maxPrice: filterApplied.maxPrice,
      },
    });
  }

  const itemPriceRange = range.map((item, index) => (
    <div key={index} className="link-price">
      <a
        href="#"
        onClick={(event) => handleClickPriceRange(event.target.innerText)}
      >
        {item}
      </a>
    </div>
  ));

  return (
    <div className="sidebar__item">
      <h1 className="sidebar__title">Prices</h1>
      {itemPriceRange}
      <form className="form-price" onSubmit={(event) => handleSubmit(event)}>
        <span>$</span>
        <input
          name="min-price"
          className="input-price"
          type="number"
          min="0"
          value={inputMin || ""}
          onChange={(event) => handleChangeMinPrice(event.target.value)}
        />
        <span>to</span>
        <span>$</span>
        <input
          name="max-price"
          className="input-price"
          type="number"
          min="0"
          value={inputMax || ""}
          onChange={(event) => handleChangeMaxPrice(event.target.value)}
        />
        <button className="btn-price" type="submit">
          Go
        </button>
      </form>
    </div>
  );
}

export default FilterByPrice;
