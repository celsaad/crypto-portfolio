
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const getMenuItemClass = (isActive:boolean) => {
  let result = classes['menu--item'];

  if (isActive) {
    result = `${result} ${classes['menu--item--active']}`;
  }

  return result;
};

const Header = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Header);
