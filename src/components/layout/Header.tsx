
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import classes from './Header.module.css';

const getMenuItemClass = (isActive:boolean) => {
  let result = classes['menu--item'];

  if (isActive) {
    result = `${result} ${classes['menu--item--active']}`;
  }

  return result;
};

const Header:React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleAuthLink = () => {
    if (!auth.user) {
      navigate('login');
      return;
    }

    auth.logout(() => {navigate('/')});
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.menu}>
          <li>
            <NavLink className={({ isActive }) => getMenuItemClass(isActive)} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => getMenuItemClass(isActive)} to='/transactions'>Transactions</NavLink>
          </li>
          <li>
            <div className={getMenuItemClass(false)} onClick={handleAuthLink}>{auth.user ? 'Logout' : 'Login'}</div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Header);
