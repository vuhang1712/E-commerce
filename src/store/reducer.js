const initState = {
  products: [],
  brands: [],
  limit: 16,
  page: 1,
  filterApplied: {
    type: [],
    brand: [],
    search: "",
  },
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        products: action.payload.data,
        totalCount: action.payload.headers["x-total-count"],
      };

    case "PAGINATE":
      return {
        ...state,
        page: action.payload.page,
      };

    case "TYPE":
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          type: action.payload.type,
        },
      };

    case "BRAND":
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          brand: action.payload.brand,
        },
      };

    case "SEARCH":
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          search: action.payload.search,
        },
      };

    case "SORT":
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          sort: action.payload.sort,
          order: action.payload.order,
        },
      };

    case "RATING":
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          rating: action.payload.rating,
        },
      };

    case "PRICE":
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          minPrice: action.payload.minPrice,
          maxPrice: action.payload.maxPrice,
        },
      };

    default:
      throw new Error();
  }
}

export { initState };
export default reducer;
