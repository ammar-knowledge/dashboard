// TinkercadEmbed.js

import React from 'react';

const TinkercadEmbed = ({ url }) => {
  return (
    <div>
      <iframe
        title="Tinkercad Codeblocks"
        src={url}
        width="100%"
        height="500px" // Set the desired height
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TinkercadEmbed;
