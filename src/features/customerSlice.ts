import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CustomerState = {
  value: Customer[];
};

type Customer = {
  id: string;
  name: string;
  food: string[];
};

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
});

export const {} = customerSlice.actions;

export default customerSlice.reducer;
