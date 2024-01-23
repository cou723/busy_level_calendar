import React from 'react';

import { css } from '@emotion/react';

import NeuButton from '@/components/utils/neuButton';

type Props = { disabled: boolean; onClick: () => void };

const ImportButton: React.FC<Props> = ({ disabled, onClick }) => {
  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'right',
      })}
    >
      <NeuButton
        disabled={disabled}
        css={css({
          display: 'block',
          width: '200px',
        })}
        onClick={onClick}
      >
        インポート
      </NeuButton>
    </div>
  );
};

export default ImportButton;
