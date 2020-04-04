import React from 'react';
import 'tachyons';

const Card = props => {
  return (
    <div className="tc bg-light-green br3 pa3 ma2 grow bw2 shadow-5">
      <img src={'https://robohash.org/${props.id}?200*200'} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <p>{props.phone}</p>
      </div>
    </div>
  );
};
export default Card;
