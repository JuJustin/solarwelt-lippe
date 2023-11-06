import React from 'react';

import config from '../config/index.json';

const WhatsAppPopup = () => {
  const { about } = config;
  const { socialMedia } = about;

  return (
    <div className="whats-float">
      <a href={socialMedia.whatsapp} target="_blank" rel="noreferrer">
        <i className="fa fa-whatsapp"></i>
        <span>
          WhatsApp
          <br />
          <small>+49 1765 7796989</small>
        </span>
      </a>
    </div>
  );
};

export default WhatsAppPopup;
