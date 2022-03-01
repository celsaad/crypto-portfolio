import position from '../../types/position';
import PositionCard from './PositionCard';

import classes from './PositionGrid.module.css';

const PositionGrid: React.FC<{ positions: position[] }> = (props) => {
  return (
    <section className={classes.grid}>
      {props.positions.map((p) => (
        <PositionCard key={p.id} {...p} />
      ))}
    </section>
  );
};

export default PositionGrid;
