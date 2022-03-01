import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from "./transaction-slice";

const store = configureStore({
  reducer: { transaction: transactionSlice.reducer }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
