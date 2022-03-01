import classes from './MainContent.module.css';

const MainContent:React.FC = (props) => {
  return <main className={classes.content}>{props.children}</main>
};

export default MainContent;