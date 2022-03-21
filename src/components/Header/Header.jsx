import "./style.scss";
import logo from "../../assets/images/logo.png";
import Context from "../../store/Context";
import { useContext } from "react";
import { useDebouncedCallback } from "use-debounce";

function Header() {
  const [state, dispatch] = useContext(Context);
  const debounced = useDebouncedCallback((value) => {
    dispatch({
      type: "SEARCH",
      payload: {
        search: value.trim(),
      },
    });
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
          class="form-control"
          placeholder="Search a product"
          onChange={(event) => debounced(event.target.value)}
        />
        <span class="input-group-btn">
          <button type="submit" className="btn btn-default">
            <i className="fa fa-search"></i>
          </button>
        </span>
      </form>
    </header>
  );
}

export default Header;
