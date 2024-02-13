import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChartDataItem, ChartDataResponse } from '../api/charts';

export interface ChartData {
  data: ChartDataItem[];
  isLoading: boolean;
  error: null | any;
}

export const initialState: ChartData = {
  data: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    getDataSuccess: (state, action: PayloadAction<ChartDataResponse>) => {
      console.log("getDataSuccess 실행");
      state.isLoading = false; 
      state.data = action.payload.data; 
    },
    getDataFailure: (state, { payload: error }) => {
      console.log("getDataFailure 실행");

      state.isLoading = false;
      state.error = error;
    },
    getData: (state) => {
      console.log("getData 실행");

      state.isLoading = true;
      state.error = null; 
    },
  },
});

export const chart = slice.name;
export const chartReducer = slice.reducer;
export const chartActions = slice.actions;
