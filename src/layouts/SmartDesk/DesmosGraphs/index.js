// YourParentComponent.js

import React from 'react';
import DesmosEmbed from './EmbedDesmos'; // Path to your TinkercadEmbed component

const YourParentComponent = () => {
  const desmosURL = 'https://www.desmos.com/calculator'; // Replace with your Tinkercad project URL

  return (
    <div>
        <DesmosEmbed url={desmosURL} />
    </div>
  );
};

export default YourParentComponent;
