import React from 'react';

function Typography({ variant, text, ...rest }) {
  switch (variant) {
    case 'h1':
      return <h1 {...rest}>{text}</h1>;
    case 'p':
      return <p {...rest}>{text}</p>;

    default:
      return <div {...rest}>{text}</div>;
  }
}

export default Typography;
