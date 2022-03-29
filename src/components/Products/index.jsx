import "./style.scss";
import React, { useEffect } from "react";
import { PRODUCT_API_URL } from "../../const/const.js";
import axios from "axios";
import Sort from "../Sort/index";
import Pagination from "../Pagination/index";
import ProductItem from "./ProductItem/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchFailure, fetchInit, fetchSuccess } from "../../store/actions";

function Product() {
  const state = useSelector(state => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchInit());
      try {
        const result = await axios(PRODUCT_API_URL, {
          params: {
            _limit: state.limit,
            _page: state.page,
            _sort: state.filterApplied.sort,
            _order: state.filterApplied.order,
            name_like: state.filterApplied.search,
            categories_like: state.filterApplied.category,
            type_like: state.filterApplied.type,
            brand_like: state.filterApplied.brand,
            rating: state.filterApplied.rating,
            price_gte: state.filterApplied.minPrice || 0,
            price_lte: state.filterApplied.maxPrice || Infinity,
          },
        });
        dispatch(fetchSuccess(result));
      } catch (error) {
        dispatch(fetchFailure);
      }
    };
    fetchData();
  }, [state.page, state.filterApplied]);

  return (
    <main className="content">
      <Sort />
      <div className="product-list">
        {state.isLoading ? (
          <div>Loading...</div>
        ) : (
          state.products.map((product) => (
            <ProductItem
              key={product.objectID}
              {...product}
            />
          ))
        )}
      </div>
      <Pagination />
    </main>
  );
}

const countProduct = async (key, value) => {
  const {data} = await axios.get(PRODUCT_API_URL, {
      params: {
          [key]: value
      },
  })
  return Promise.resolve(data.length);
}

export default Product;
export { countProduct };
