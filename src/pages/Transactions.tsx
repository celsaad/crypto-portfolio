import RequireAuth from '../components/login/RequireAuth';
import TransactionList from '../components/transactions/TransactionList';
import { useAppSelector } from '../store';

const Transactions = () => {
  const transactions = useAppSelector((state) => state.transaction.transactions);
  return (
    <RequireAuth>
      <h1>Transactions</h1>
      <TransactionList transactions={transactions} />
    </RequireAuth>
  );
};

export default Transactions;
