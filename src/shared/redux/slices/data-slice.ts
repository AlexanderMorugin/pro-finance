import { createSlice } from '@reduxjs/toolkit';

import { Product } from '../../../entities/table/ui/table/table';

type Result = {
  isLoading: boolean;
  result: Product[];
};

const initialState: Result = {
  isLoading: false,
  result: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData(state, { payload }) {
      state.isLoading = true;
      state.result = payload;
    },
    changeData(state, { payload }) {
      state.result = payload;

      console.log(state.result);
    },
    removeData(state) {
      state.isLoading = false;
      state.result = [];
    },
  },
});

export const { addData, changeData, removeData } = dataSlice.actions;

export default dataSlice.reducer;
