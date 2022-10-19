import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

ColorBox.propTypes = {};

function ColorBox(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount((x) => x + 1)}>Increase</button>
    </div>
  );
}

export default ColorBox;
