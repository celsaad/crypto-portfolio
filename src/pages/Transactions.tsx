import TransactionList from '../components/transactions/TransactionList';
import { useAppSelector } from '../store';

const Transactions = () => {
  const transactions = useAppSelector((state) => state.transaction.transactions);
  return (
    <>
      <h1>Transactions</h1>
      <TransactionList transactions={transactions} />
    </>
  );
};

export default Transactions;
