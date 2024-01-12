import React from 'react';

import { css } from '@emotion/react';

const ServiceLogo = () => {
  return (
    <a
      href="/"
      css={css({
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'black',
        textDecoration: 'none',
      })}
    >
      H Harmony
    </a>
  );
};

export default ServiceLogo;
