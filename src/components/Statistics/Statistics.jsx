import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul className={s.statistics__list}>
      <li className={s.list__item}>Good: {good}</li>
      <li className={s.list__item}>Neutral: {neutral}</li>
      <li className={s.list__item}>Bad: {bad}</li>
      <li className={s.list__item}>Total: {total}</li>
      <li className={s.list__item}>Positive feedback: {positiveFeedback}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
