import "./style.scss";
import React, { useState, useEffect } from "react";
import { PRODUCT_API_URL } from "../../const/const.js";
import axios from "axios";
import Pagination from "../Pagination/index";
import ProductItem from "./ProductItem/ProductItem";

var totalCount;
function Product() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rating, setRating] = useState();

  const [page, setPage] = useState(1);
  const countPerPage = 16;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(PRODUCT_API_URL, {
          params: {
            _limit: countPerPage,
            _page: page,
            rating: rating,
          },
        });
        totalCount = result.headers["x-total-count"];
        setProduct(result.data);
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const pageCount = Math.ceil(totalCount / countPerPage);

  const productItem = product.map((item) => (
    <ProductItem
      name={item.name}
      image={item.image}
      rating={item.rating}
      price={item.price}
    />
  ));

  return (
    <main className="content">
      <div className="product-list">
        {isLoading ? <div>Loading...</div> : productItem}
      </div>
      {<Pagination pageCount={pageCount} page={page} setPage={setPage} />}
    </main>
  );
}

export default Product;
