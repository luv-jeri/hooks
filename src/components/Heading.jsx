import React from 'react';

function Heading() {
  console.log('heading**');
  return <h1>I am Heading</h1>;
}

export default React.memo(Heading);
