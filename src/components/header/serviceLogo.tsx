import React from 'react';

import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

import { iconNeuStyle } from '@/components/utils/iconNeuStyle';

const ServiceLogo = () => {
  const ratio = 45;
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
      <Image src="/logo.png" alt="Mental Harmony" width={7523 / ratio} height={2481 / ratio} css={iconNeuStyle} />
    </Link>
  );
};

export default ServiceLogo;
