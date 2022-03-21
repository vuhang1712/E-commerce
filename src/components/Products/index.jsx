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
            name_like: state.filterApplied.search,
            type_like: state.filterApplied.type,
            brand_like: state.filterApplied.brand,
            rating: state.filterApplied.rating,
          },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: result });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE" });
      }
    };
    fetchData();
  }, [state.page, state.filterApplied]);

  return (
    <main className="content">
      <div className="product-list">
        {state.isLoading ? (
          <div>Loading...</div>
        ) : (
          state.products.map((product) => (
            <ProductItem
              key={product.id}
              {...product}
            />
          ))
        )}
      </div>
      <Pagination />
    </main>
  );
}

export default Product;
