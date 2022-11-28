import PropTypes from 'prop-types';
import s from './FedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.feedback__box}>
      {options.map(name => (
        <button
          className={s.feedback__button}
          type="button"
          onClick={onLeaveFeedback}
          data-name={name}
          key={name}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
