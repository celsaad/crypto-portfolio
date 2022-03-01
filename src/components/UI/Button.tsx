import classes from './Button.module.css';

const Button: React.FC<{ onClick?: () => void }> = (props) => {
  return (
    <button onClick={props.onClick} className={classes.btn}>
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
