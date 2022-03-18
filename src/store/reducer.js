const initState = {
  products: [],
  limit: 16,
  page: 1,
  filterApplied: {},
};

function reducer(state, action) {
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
    case "RATING":
      return {
        ...state,
        filterApplied: {
          rating: action.payload.rating,
        },
      };

    default:
      throw new Error();
  }
}

export { initState };
export default reducer;
