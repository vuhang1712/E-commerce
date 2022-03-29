import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCT_API_URL } from "../const/const";

const initialState = {
  isLoading: false,
  products: [],
  totalCount: 0,
  filterApplied: {
    type_like: [],
    brand_like: [],
    _page: 1,
    _limit: 16,
    _sort: "",
    _order: "",
    categories_like: "",
    name_like: "",
    rating_like: "",
    price_gte: 0,
    price_lte: Infinity,
  },
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (filter) => {
    const querystring = require("query-string");
    const params = querystring.stringify(filter);
    const response = await axios(`${PRODUCT_API_URL}?${params}`);
    const data = response.data;
    const totalCount = response.headers["x-total-count"];
    return { data, totalCount };
  }
);

const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchPagination: (state, action) => {
      state.filterApplied._page = action.payload;
    },

    fetchCategory: (state, action) => {
      state.filterApplied.categories_like = action.payload;
    },

    fetchType: (state, action) => {
      state.filterApplied.type_like.push(action.payload);
    },

    deleteType: (state, action) => {
      state.filterApplied.type_like = state.filterApplied.type_like.filter(
        (item) => item !== action.payload
      );
    },

    fetchBrand: (state, action) => {
      state.filterApplied.brand_like.push(action.payload);
    },

    deleteBrand: (state, action) => {
      state.filterApplied.brand_like = state.filterApplied.brand_like.filter(
        (item) => item !== action.payload
      );
    },

    fetchRating: (state, action) => {
      state.filterApplied.rating_like = action.payload;
    },

    fetchPrice: (state, action) => {
      state.filterApplied.price_gte = action.payload.inputMin;
      state.filterApplied.price_lte = action.payload.inputMax;
    },

    searchProducts: (state, action) => {
      state.filterApplied.name_like = action.payload;
    },

    sortProducts: (state, action) => {
      state.filterApplied._order = action.payload.order;
      state.filterApplied._sort = action.payload.sort;
    },

    clearAllFilters: (state) => {
      state.filterApplied = initialState.filterApplied;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.data;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  fetchInit,
  fetchSuccess,
  fetchFailure,
  fetchPagination,
  fetchCategory,
  fetchType,
  deleteType,
  fetchBrand,
  deleteBrand,
  fetchRating,
  fetchPrice,
  searchProducts,
  sortProducts,
  clearAllFilters,
} = productReducer.actions;

export default productReducer.reducer;
