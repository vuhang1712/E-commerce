import "./style.scss";

function Pagination(props) {
  const pageCount = props.pageCount;
  const page = props.page;
  const left = page - 3;
  const right = page + 3;

  const getPages = () => {
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
              onClick={() => props.setPage(page - 1)}
              disabled={page === 1}
            >
              <i className="fa fa-angle-left fa-2x fw-light p-2"></i>
              Previous page
            </button>
          </li>
          {getPages().map((item) => (
            <li className="page-item">
              <button
                className={page === item ? "btn active" : "btn btn-link"}
                onClick={() => props.setPage(item)}
              >
                {item}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              className="btn btn-link"
              onClick={() => props.setPage(page + 1)}
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
