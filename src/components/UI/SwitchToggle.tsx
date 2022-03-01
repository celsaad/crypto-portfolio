import React from 'react';
import classes from './SwitchToggle.module.css';

const SwitchToggle: React.FC<{
  id: string;
  onSwitch: () => void;
  reference: React.MutableRefObject<null | HTMLInputElement>;
}> = (props) => {

  

  return (
    <label id={props.id} className={classes.switch} >
      <input onChange={props.onSwitch} type='checkbox' ref={props.reference}></input>
      <span className={classes.slider}></span>
    </label>
  );
};

export default SwitchToggle;
