import React, { FormEvent, useState } from 'react';
import Button from '../UI/Button';

import classes from './LoginForm.module.css';

const LoginForm: React.FC<{
  onSubmit: (username: string) => void;
}> = (props) => {
  const [username, setUsername] = useState<string>('');

  const userChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const usernameInputValue = event.target.value;
    setUsername(usernameInputValue);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    props.onSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          name='username'
          type='text'
          id='username'
          value={username}
          onChange={userChangeHandler}
          required
        />
      </div>
      <div className='line'>
        <Button type='submit'>Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
