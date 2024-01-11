import React from 'react';

import { css } from '@emotion/react';

import NeuButton from '@/components/utils/neuButton';

type Props = {
  handleSubmit: () => void;
};

const importButton: React.FC<Props> = ({ handleSubmit }) => {
  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'right',
      })}
    >
      <NeuButton
        onClick={handleSubmit}
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
