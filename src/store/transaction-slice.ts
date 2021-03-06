import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import transaction from '../types/transaction';

const TRANSACTIONS: transaction[] = [
  {
    id: '1',
    ticker: 'BTC',
    amount: 0.001,
    value: 32,
    type: 'BUY',
  },
  {
    id: '2',
    ticker: 'BTC',
    amount: 0.001,
    value: 32,
    type: 'BUY',
  },
  {
    id: '3',
    ticker: 'BTC',
    amount: 0.001,
    value: 32,
    type: 'BUY',
  },
];

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    transactions: TRANSACTIONS,
  },
  reducers: {
    addTransaction(state, action: PayloadAction<transaction>) {
      state.transactions.push(action.payload);
    },
  },
});

export const transactionActions = transactionSlice.actions;

export default transactionSlice;
