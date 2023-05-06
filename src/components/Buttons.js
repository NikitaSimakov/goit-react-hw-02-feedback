import React from 'react';

export const Buttons = ({
  handleUpdateGood,
  handleUpdateNeutral,
  handleUpdateBad,
}) => (
  <div>
    <button onClick={handleUpdateGood} type="button">
      Good
    </button>
    <button onClick={handleUpdateNeutral} type="button">
      Neutral
    </button>
    <button onClick={handleUpdateBad} type="button">
      Bad
    </button>
  </div>
);

export default Buttons;
