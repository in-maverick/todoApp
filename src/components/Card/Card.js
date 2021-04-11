import { Typography } from 'components';
import React from 'react';

function Card({ cardItem, hashTagClickHandler, className, ...rest }) {
  return (
    <div className={`card btn mt-1`} {...rest}>
      <div className="card-body p-0 m-0">
        <Typography text={cardItem} />
      </div>
    </div>
  );
}

export default Card;
