type transaction = {
  id: string,
  ticker: string,
  type: 'BUY' | 'SELL',
  amount: number,
  value: number
};

export default transaction;