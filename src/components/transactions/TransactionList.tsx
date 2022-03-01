import { useNavigate } from 'react-router-dom';
import transaction from '../../types/transaction';
import Button from '../UI/Button';

import classes from './TransactionList.module.css';

const TransactionList: React.FC<{ transactions: transaction[] }> = (props) => {
  const navigate = useNavigate();

  const pressNewTransactionHandler = () => {
    navigate('/new-transaction');
  };  

  return (
    <section>
      <Button onClick={pressNewTransactionHandler}>New</Button>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Operation</th>
            <th>Amount</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {props.transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.ticker}</td>
              <td>{t.type}</td>
              <td>{t.amount}</td>
              <td>{t.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TransactionList;
