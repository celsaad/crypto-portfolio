import { useSelector } from 'react-redux';
import TransactionList from '../components/transactions/TransactionList';
import { RootState } from '../store';
import transaction from '../types/transaction';

const Transactions = () => {
  const transactions = useSelector<RootState, transaction[]>((state) => state.transaction.transactions);
  return (
    <>
      <h1>Transactions</h1>
      <TransactionList transactions={transactions} />
    </>
  );
};

export default Transactions;
