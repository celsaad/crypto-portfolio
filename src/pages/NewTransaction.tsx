import RequireAuth from '../components/login/RequireAuth';
import TransactionForm from '../components/transactions/TransactionForm';

const NewTransaction = () => {
  return (
    <RequireAuth>
      <section>
        <TransactionForm />
      </section>
    </RequireAuth>
  );
};

export default NewTransaction;
