import "./style.scss";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPagination } from "../../store/productSlice";

function Pagination() {
  const state = useSelector(state => state.productReducer.filterApplied);
  const totalCount = useSelector(state => state.productReducer.totalCount);
  const dispatch = useDispatch();

  const pageCount = Math.ceil(totalCount/state._limit);
  const page = state._page;
  const left = page - 3;
  const right = page + 3;

  const getPages = () => {
    if (pageCount <= 7) return [...Array(pageCount + 1).keys()].slice(1);

    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
      if (i >= left && (i <= right || i <= 7)) {
        pages.push(i);
      }
    }
    return pages;
  };

  return (
    <section id="pagination">
      {pageCount && (
        <ul className="pagination">
          <li className="page-item">
            <button
              className="btn btn-link"
              onClick={() => dispatch(fetchPagination(page - 1))}
              disabled={page === 1}
            >
              <i className="fa fa-angle-left fa-2x fw-light p-2"></i>
              Previous page
            </button>
          </li>
          {getPages().map((item, index) => (
            <li key={index} className="page-item">
              <button
                className={page === item ? "btn active" : "btn btn-link"}
                onClick={() => dispatch(fetchPagination(item))}
              >
                {item}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              className="btn btn-link"
              onClick={() => dispatch(fetchPagination(page + 1))}
              disabled={page === pageCount}
            >
              Next page
              <i className="fa fa-angle-right fa-2x fw-light p-2"></i>
            </button>
          </li>
        </ul>
      )}
    </section>
  );
}

export default Pagination;
