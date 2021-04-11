import React from 'react';

function BadgePills({ variant, text, ...rest }) {
  return (
    <span className={`btn badge badge-pill badge-${variant} card`} {...rest}>
      {text}
    </span>
  );
}

export default BadgePills;
