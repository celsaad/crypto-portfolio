import classes from './Box.module.css';

const Box:React.FC<{className?: string}> = (props) => {
  return <div className={`${classes.box} ${props.className}`}>{props.children}</div>;
};

export default Box;
