import "./style.scss";
import Rating from "../../Rating/index";
import FormatMoney from "../../../utils/utils";
import React from "react";

function ProductItem(props) {
  return (
    <div className="product-item">
      <img src={props.image} alt="product" className="product__image" />
      <h2 className="product__name">{props.name}</h2>
      <span className="product__price">{FormatMoney(props.price)}</span>
      <span className="product__rating">{Rating(props.rating)}</span>
    </div>
  );
}

export default ProductItem;
