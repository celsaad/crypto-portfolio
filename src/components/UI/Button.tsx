import classes from './Button.module.css';

const Button: React.FC<{
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}> = (props) => {
  return (
    <button onClick={props.onClick} className={classes.btn} type={props.type}>
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
