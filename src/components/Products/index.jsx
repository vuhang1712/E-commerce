import "./style.scss";
import React, { useState, useEffect } from 'react';
import { PRODUCT_API_URL } from '../../const/const.js';
import axios from 'axios';
import Rating from '../Rating/index';
import FormatMoney from "../../utils/formatMoney";
import Pagination from "../Pagination/index";

function Product(){
    const [product, setProduct] = useState([]);
    const [rating, setRating] = useState();


    const [page, setPage] = useState(1);
    const countPerPage = 16;
    const pageCount = Math.ceil(10000 / countPerPage);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(PRODUCT_API_URL,{
                params: {
                  _limit: countPerPage,
                  _page: page,
                  rating: rating
                }
            });
            setProduct(result.data);
        };
        fetchData();
      }, [page]);

    const productItem = product.map(item => (
        <div className="product-item">
            <img src={item.image} alt="product" className="product__image"/>
            <h2 className="product__name">{item.name}</h2>
            <span className="product__price">{FormatMoney(item.price)}</span>
            {Rating(item.rating)}
        </div>
    ));


    return(
        <main className="content">
            <div className="product-list">
                {productItem}
            </div>
            {<Pagination
                pageCount={pageCount} page={page} setPage={setPage} 
            />}   
        </main>
    );
}

export default Product;
