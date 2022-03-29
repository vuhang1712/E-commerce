import { combineReducers } from "redux";

const initState = {
  products: [],
  brands: [],
  limit: 16,
  page: 1,
  totalCount: 0,
  filterApplied: {
    type: [],
    brand: [],
    search: "",
  },
};

function productReducer(state = initState, action) {
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

    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
      };

    case "FETCH_PAGINATION":
      return {
        ...state,
        page: action.payload.page,
      };

    case "FETCH_CATEGORY":
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          category: action.payload.category,
        },
      };

    case "FETCH_TYPE":
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          type: action.payload.type,
        },
      };

    case "FETCH_BRAND":
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          brand: action.payload.brand,
        },
      };

    case "SEARCH_PRODUCTS":
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          search: action.payload.search,
        },
      };

    case "SORT_PRODUCTS":
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          sort: action.payload.sort,
          order: action.payload.order,
        },
      };

    case "FETCH_RATING":
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          rating: action.payload.rating,
        },
      };

    case "FETCH_PRICE":
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          minPrice: action.payload.minPrice,
          maxPrice: action.payload.maxPrice,
        },
      };

    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        filterApplied: action.payload.filterApplied,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  productReducer
});

export default rootReducer;
