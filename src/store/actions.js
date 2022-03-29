export const fetchInit = () => {
  return {
    type: "FETCH_INIT",
  };
};

export const fetchSuccess = (data) => {
  return {
    type: "FETCH_SUCCESS",
    payload: data,
  };
};

export const fetchFailure = () => {
  return {
    type: "FETCH_FAILURE",
  };
};

export const fetchPagination = (page) => {
  return {
    type: "FETCH_PAGINATION",
    payload: { page: page },
  };
};

export const fetchCategory = (category) => {
  return {
    type: "FETCH_CATEGORY",
    payload: { category: category },
  };
};

export const fetchType = (type) => {
  return {
    type: "FETCH_TYPE",
    payload: { type: type },
  };
};

export const fetchBrand = (brand) => {
  return {
    type: "FETCH_BRAND",
    payload: { brand: brand },
  };
};

export const fetchRating = (rating) => {
  return {
    type: "FETCH_RATING",
    payload: { rating: rating },
  };
};

export const fetchPrice = (minPrice, maxPrice) => {
  return {
    type: "FETCH_PRICE",
    payload: { minPrice: minPrice, maxPrice: maxPrice },
  };
};

export const searchProducts = (search) => {
  return {
    type: "SEARCH_PRODUCTS",
    payload: { search: search },
  };
};

export const sortProducts = (sort, order) => {
  return {
    type: "SORT_PRODUCTS",
    payload: { sort: sort, order: order },
  };
};

export const clearAllFilters = (clear) => {
  return {
    type: "CLEAR_ALL_FILTERS",
    payload: { filterApplied: clear },
  };
};
