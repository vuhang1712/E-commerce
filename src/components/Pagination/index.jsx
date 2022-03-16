import "./style.scss";

function Pagination(props) {
  const pageCount = props.pageCount;
  const page = props.page;

  const getPages = () => {
    if (pageCount <= 7) return [...Array(pageCount + 1).keys()].slice(1);

    const pages = [1, 2, 3, 4, 5, 6, 7];
    for (let i = 8; i <= pageCount; i++) {
      if (isPage(i)) {
        pages.push(i);
        pages.shift();
      }
    }
    return pages;
  };

  function isPage(i) {
    let firstElement = i === page - 3;
    let secondElement = i === page - 2;
    let thirdElement = i === page - 1;
    let fourthElement = i === page;
    let fifthElement = i === page + 1;
    let sixthElement = i === page + 2;
    let seventhElement = i === page + 3;

    if (
      firstElement ||
      secondElement ||
      thirdElement ||
      fourthElement ||
      fifthElement ||
      sixthElement ||
      seventhElement
    )
      return true;
  }

  return (
    <section id="pagination">
      {pageCount ? (
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
      ) : null}
    </section>
  );
}

export default Pagination;
