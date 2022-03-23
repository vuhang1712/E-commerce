import "./style.scss";
import Context from "../../store/Context";
import React, { useContext } from "react";

function Pagination() {
  const [state, dispatch] = useContext(Context);

  const pageCount = Math.ceil(state.totalCount/state.limit);
  const page = state.page;
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
              onClick={() => dispatch({ type: "PAGINATE", payload: {page: page - 1} })}
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
                onClick={() => dispatch({ type: "PAGINATE", payload: {page: item} })}
              >
                {item}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              className="btn btn-link"
              onClick={() => dispatch({ type: "PAGINATE", payload: {page: page + 1} })}
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
