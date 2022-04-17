import "./style.scss";
import logo from "../../assets/images/logo.png";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { useDispatch } from "react-redux";
import { searchProducts } from "../../store/productSlice";

function Header() {
  const dispatch = useDispatch();
  const debounced = useDebouncedCallback((value) => {
    dispatch(searchProducts(value.trim()));
  }, 300);

  return (
    <header className="header">
      <a href="#" className="header__logo-image">
        <img src={logo} alt="logo" width="40" />
      </a>
      <a href="#" className="header__logo">
        amazing
      </a>
      <form className="input-group" onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          className="form-control"
          placeholder="Search a product"
          onChange={(event) => debounced(event.target.value)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-default">
            <i className="fa fa-search"></i>
          </button>
        </span>
      </form>
    </header>
  );
}

export default Header;
