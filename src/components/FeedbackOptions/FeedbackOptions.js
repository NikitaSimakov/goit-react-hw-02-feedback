import React from 'react';
import css from './FeedbackOptions.module.css';

// const stateType = ['good', 'neutral', 'bad'];

export const Buttons = ({ onLeaveFeedback, options }) => {
  const [typeGood, typeNeutral, typeBad] = options;

  return (
    <div className={css.feedback_thumb_button}>
      <button
        className={css.feedback_button}
        onClick={() => onLeaveFeedback(typeGood)}
        type="button"
      >
        Good
      </button>
      <button
        className={css.feedback_button}
        onClick={() => onLeaveFeedback(typeNeutral)}
        type="button"
      >
        Neutral
      </button>
      <button
        className={css.feedback_button}
        onClick={() => onLeaveFeedback(typeBad)}
        type="button"
      >
        Bad
      </button>
    </div>
  );
};

export default Buttons;
