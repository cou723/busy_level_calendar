import React from 'react';

import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceLogo = () => {
  return (
    <Link
      href="/"
      css={css({
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'black',
        textDecoration: 'none',
      })}
    >
      <Image
        src="/logo.png"
        alt="Harmony"
        width={7523 / 50}
        height={2481 / 50}
        css={css({
          filter: 'drop-shadow(1px 1px 0.5px rgba(218, 218, 218, 0.795));',
        })}
      />
    </Link>
  );
};

export default ServiceLogo;
