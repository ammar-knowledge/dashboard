// YourParentComponent.js

import React from 'react';
import CircuitLabEmbed from './EmbedCircuitLab';

const YourParentComponent = () => {
  const desmosURL = 'https://www.circuitlab.com/editor/#?id=7pq5wm&from=homepage'; 

  return (
    <div>
        <CircuitLabEmbed url={desmosURL} />
    </div>
  );
};

export default YourParentComponent;
