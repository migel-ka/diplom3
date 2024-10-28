import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface ISneakers {
  color: string;
  compound: string;
  country: string;
  description: string;
  gender: string;
  id: number;
  imgUrl: string;
  inStock: number;
  oldPrice: number;
  price: number;
  sizes: number[];
  stars: number;
  title: string;
  vendorСode: string;
}

interface IParams {
  priceFrom: number;
  priceTo: number;
  gender: string;
  sizes: number[];
}

const BASE_URL: string = "https://57ebb7d934c23933.mokky.dev";

export const fetchSneakers = createAsyncThunk<ISneakers[], IParams>(
  "sneakers/fetchSneakers",
  async (params, { rejectWithValue }) => {
    try {
      const queryParams = new URLSearchParams({
        'price[from]': params.priceFrom.toString(),
        'price[to]': params.priceTo.toString(),
        ...(params.gender && { gender: params.gender }),
      });

      if (params.sizes.length > 0) {
        params.sizes.forEach(size => queryParams.append('sizes[]', size.toString()));
      }

      const { data } = await axios.get<ISneakers[]>(`${BASE_URL}/sneakers?${queryParams.toString()}`);

      localStorage.setItem("sneakers", JSON.stringify(data));

      return data;
    } catch (error) {
      console.error("Failed to fetch:", error);
      return rejectWithValue("Failed to fetch sneakers");
    }
  }
);

interface IState {
  data: ISneakers[];
}

const initialState: IState = {
  data: JSON.parse(localStorage.getItem("sneakers") || "[]"),
};

export const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default sneakersSlice.reducer;
