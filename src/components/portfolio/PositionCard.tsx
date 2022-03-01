import position from '../../types/position';
import Box from '../UI/Box';

import classes from './PositionCard.module.css';

const PositionCard: React.FC<position> = (props) => {
  return (
    <Box className={classes.box}>
      <img src={props.icon} alt={props.name} />
      <p>Amount: {props.amount}</p>
      <p>Value: {props.value}</p>
    </Box>
  );
};

export default PositionCard;
