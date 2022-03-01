import PositionGrid from '../components/portfolio/PositionGrid';
import position from '../types/position';

const POSITIONS: position[] = [
  {
    id: '1',
    name: 'bitcoin',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
    amount: 0.001,
    value: 32,
  },
  {
    id: '2',
    name: 'bitcoin',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
    amount: 0.001,
    value: 32,
  },
  {
    id: '3',
    name: 'bitcoin',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
    amount: 0.001,
    value: 32,
  },
];

const Overview = () => {
  return (
    <>
      <h1>Portfolio Overview</h1>
      <PositionGrid positions={POSITIONS} />
    </>
  );
};

export default Overview;
