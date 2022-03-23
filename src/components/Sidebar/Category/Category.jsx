import "./style.scss";
import Context from "../../../store/Context";
import React, { useContext } from "react";

function Category() {
  const categories = [
    {
      name: "Appliances",
      subCategories: [
        "Dishwashers",
        "Fans",
        "Freezers & Ice Makers",
        "Heaters",
        "Humidifiers",
        "Microwaves",
        "Ranges, Cooktops & Ovens",
        "Refrigerators",
        "Small Kitchen Appliances",
        "Washers & Dryers",
      ],
    },
    {
      name: "Audio",
      subCategories: [
        "Auxiliary Input Cables",
        "Cables & Chargers",
        "Cases & Armbands",
        "FM Transmitters",
        "Headphones",
        "Home Audio",
        "Home Audio Accessories",
      ],
    },
    {
      name: "Cameras & Camcorders",
      subCategories: [],
    },
    {
      name: "Car Electronics & GPS",
      subCategories: [],
    },
    {
      name: "Cell Phones",
      subCategories: [],
    },
    {
      name: "Computers & Tablets",
      subCategories: [],
    },
    {
      name: "Health, Fitness & Beauty",
      subCategories: [],
    },
    {
      name: "Office & School Supplies",
      subCategories: [],
    },
    {
      name: "TV & Home Theater",
      subCategories: [],
    },
    {
      name: "Video Games",
      subCategories: [],
    },
  ];

  const [_, dispatch] = useContext(Context);

  function handleClickCategory(event) {
    event.preventDefault();
    dispatch({
      type: "CATEGORY",
      payload: { category: event.target.innerText },
    });
  }

  const subCategories = (subCategories) => {
    return subCategories.map((subCategory, index) => (
      <li key={index}>
        <a
          href="#"
          className="sub-category"
          onClick={(event) => handleClickCategory(event)}
        >
          <i className="fa fa-angle-right px-1"></i>
          {subCategory}
        </a>
      </li>
    ));
  };

  const categoryItem = categories.map((category, index) => (
    <div key={index} className="category__item">
      <a
        data-bs-toggle="collapse"
        href={"#" + category.name.replace(/[& ]/g, "")}
        onClick={(event) => handleClickCategory(event)}
      >
        <i className="fa fa-angle-right px-1"></i>
        {category.name}
      </a>
      <ul className="collapse" id={category.name.replace(/[& ]/g, "")}>
        {subCategories(category.subCategories)}
      </ul>
    </div>
  ));

  return (
    <section className="category">
      <h1 className="category__title">Show results for</h1>
      <div className="list">{categoryItem}</div>
    </section>
  );
}

export default Category;
