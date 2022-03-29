import "./style.scss";
import React, { useState } from "react";
import { fetchBrand } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
// import { countProduct } from "../../Products/index";

const dataBrands = [
  "Insignia™",
  "Samsung",
  "Metra",
  "HP",
  "Apple",
  "360fly",
  "3DR",
  "3M",
  "Acer",
  "Acoustic Research",
  "Action Sport Drives",
  "adidas",
  "ADOPTED",
  "AirPort",
  "Amazon",
  "AMC Theatres",
  "American Tourister",
  "Americana by Elite",
  "Amped Wireless",
  "Andis",
  "Anki",
  "Anna Sui",
  "Antec",
  "Antennas Direct",
  "Antennaworks",
  "AOC",
  "APC",
  "Applica",
  "Apricorn",
  "Archer",
  "Arkon",
  "Arm & Hammer",
  "Armpocket",
  "Aroma",
  "Ashlin",
  "Ubisoft",
  "Astro Gaming",
  "Asus",
  "AT&T",
  "AT&T GoPhone",
  "Atlantic",
  "Atrend",
  "Audio-Technica",
  "AudioQuest",
  "Audiovox",
  "August",
  "Avanti",
  "Axxess",
  "AXXESS",
  "AZIO",
  "BACtrack",
  "Ballistic",
  "Barska",
  "Basis",
  "EA",
  "BDI",
  "Beats by Dr. Dre",
  "Behringer",
  "Belkin",
  "Bell'O",
  "Bella",
  "Beltronics",
  "bem wireless",
  "BenQ",
  "Best Buy",
  "Best Buy Exclusive",
  "Best Buy GC",
  "Better Chef",
  "BIC America",
  "Big Hero 6",
  "Bionaire",
  "BISSELL",
  "Black & Decker",
  "Black Series",
  "BlackBerry",
  "BlackRapid",
  "Blast Motion",
  "Blendtec",
  "Blizzard",
  "Blossom",
  "Blu",
  "Blue Crane Digital",
  "Blue Hat Toy Company",
  "Blue Microphones",
  "Blueair",
  "BlueParrott",
];

function FilterByBrand() {
  const getBrand = useSelector((state) => state.productReducer.filterApplied.brand);
  const dispatch = useDispatch();
  const [brands, setBrands] = useState([...dataBrands]);

  const listItem = brands.map(
    (brand, index) =>
      index < 5 && (
        <div key={index} className="form-check">
          <label>
            <input
              className="form-check-input"
              type="checkbox"
              value={brand}
              onChange={(e) => {
                e.target.checked
                  ? dispatch(fetchBrand([...getBrand, brand]))
                  : dispatch(
                      fetchBrand(getBrand.filter((item) => item !== brand))
                    );
              }}
            />
            {brand}
            {/* <span>{countProduct('brand', brand)}</span>  */}
          </label>
        </div>
      )
  );

  function handleChange(value) {
    setBrands(
      dataBrands.filter((brand) =>
        brand.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  return (
    <div className="sidebar__item">
      <h1 className="sidebar__title">Brand</h1>
      <form className="searchbox" onSubmit={(event) => event.preventDefault()}>
        <button type="submit" className="searchbox__btn">
          <i className="far fa-search"></i>
        </button>
        <input
          type="text"
          className="searchbox__input"
          placeholder="Search for other..."
          onChange={(event) => handleChange(event.target.value.trim())}
        />
        <div className="list">{listItem}</div>
      </form>
    </div>
  );
}
export default FilterByBrand;
