import React from 'react';

import { css } from '@emotion/react';

import NeuButton from '@/components/utils/neuButton';

const importButton: React.FC = () => {
  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'right',
      })}
    >
      <NeuButton
        css={css({
          display: 'block',
          width: '200px',
        })}
      >
        インポート
      </NeuButton>
    </div>
  );
};

export default importButton;
