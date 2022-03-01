import { FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { transactionActions } from '../../store/transaction-slice';
import transaction from '../../types/transaction';
import Box from '../UI/Box';
import Button from '../UI/Button';
import SwitchToggle from '../UI/SwitchToggle';
import classes from './TransactionForm.module.css';

const TransactionForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const operationRef = useRef<null | HTMLInputElement>(null);
  const coinRef = useRef<null | HTMLInputElement>(null);
  const quantityRef = useRef<null | HTMLInputElement>(null);
  const priceRef = useRef<null | HTMLInputElement>(null);

  const [operation, setOperation] = useState<string>('Buy');

  const operationSwitchChangeHandler = () => {
    if (operationRef.current?.checked) {
      setOperation('Sell');
      return;
    }

    setOperation('Buy');
  };

  const returnHandler = () => {
    navigate('/transactions');
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    const newTransaction: transaction = {
      id: '' + Math.random(),
      ticker: coinRef.current!.value,
      type: operationRef.current?.checked ? 'SELL' : 'BUY',
      amount: parseFloat(quantityRef.current!.value),
      value: parseFloat(priceRef.current!.value),
    };

    dispatch(transactionActions.addTransaction(newTransaction));

    navigate('/transactions');
  };

  return (
    <Box className={classes.container}>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={classes.line}>
          <label htmlFor='operation'>{operation}</label>
          <SwitchToggle
            id='operation'
            onSwitch={operationSwitchChangeHandler}
            reference={operationRef}
          />
        </div>
        <div className={classes.line}>
          <label htmlFor='coin'>Coin</label>
          <input type='text' id='coin' ref={coinRef} required></input>
        </div>
        <div className={classes.line}>
          <label htmlFor='amount'>Quantity</label>
          <input type='number' id='amount' ref={quantityRef} required></input>
        </div>
        <div className={classes.line}>
          <label htmlFor='value'>Price</label>
          <input type='number' id='value' ref={priceRef} required></input>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            padding: '3px 0',
          }}
        >
          <Button onClick={returnHandler}>Return</Button>
          <Button>Submit</Button>
        </div>
      </form>
    </Box>
  );
};

export default TransactionForm;
