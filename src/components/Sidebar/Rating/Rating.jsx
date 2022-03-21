import "./style.scss";
import Rating from "../../Rating/index";
import Context from "../../../store/Context";
import { useContext } from "react";

function FilterByRating() {
  const [state, dispatch] = useContext(Context);

  const ratingItem = [...Array(5)].map((_, index) => (
    <li key={index}>
      <button
        className="btn"
        onClick={() =>
          dispatch({ type: "RATING", payload: { rating: 5 - index } })
        }
      >
        {Rating(5 - index)}
      </button>
    </li>
  ));

  return (
    <div className="rating">
      <h1 className="rating__title">Ratings</h1>
      <ul className="list">{ratingItem}</ul>
    </div>
  );
}

export default FilterByRating;
