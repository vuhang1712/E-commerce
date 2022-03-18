import "./style.scss";
import React, { useEffect, useContext } from "react";
import { PRODUCT_API_URL } from "../../const/const.js";
import axios from "axios";
import Pagination from "../Pagination/index";
import ProductItem from "./ProductItem/ProductItem";
import Context from "../../store/Context";

function Product() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(PRODUCT_API_URL, {
          params: {
            _limit: state.limit,
            _page: state.page,
            type_like: state.filterApplied.type,
            rating: state.filterApplied.rating,
          },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: result });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE" });
      }
    };
    fetchData();
  }, [state.page, state.filterApplied.type, state.filterApplied.rating]);

  return (
    <main className="content">
      <div className="product-list">
        {state.isLoading ? (
          <div>Loading...</div>
        ) : (
          state.products.map((item) => (
            <ProductItem
              name={item.name}
              image={item.image}
              rating={item.rating}
              price={item.price}
            />
          ))
        )}
      </div>
      <Pagination />
    </main>
  );
}

export default Product;
