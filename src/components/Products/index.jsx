import "./style.scss";
import React, { useEffect } from "react";
import Sort from "../Sort/index";
import Pagination from "../Pagination/index";
import ProductItem from "./ProductItem/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";

function Product() {
  const state = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(state.filterApplied));
  }, [state.filterApplied, dispatch]);

  return (
    <main className="content">
      <Sort />
      <div className="product-list">
        {state.isLoading ? (
          <div>Loading...</div>
        ) : (
          state.products.map((product) => (
            <ProductItem key={product.objectID} {...product} />
          ))
        )}
      </div>
      <Pagination />
    </main>
  );
}

export default Product;
