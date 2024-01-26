import { useState } from 'react';

import { css } from '@emotion/react';

import FlexBox from '@/components/utils/flexBox';
import NeuButton from '@/components/utils/neuButton';

type SubmitButtonProps = {
  mode: 'edit' | 'create';
  onSubmit: () => Promise<void>;
  disabled: boolean;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SubmitButton: React.FC<SubmitButtonProps> = ({ mode, onSubmit, disabled, setDisabled }) => {
  const label = { edit: '編集', create: '作成' };
  return (
    <FlexBox justifyContent="end" alignItems="row">
      <NeuButton
        css={css({ width: '8rem', marginTop: '1rem' })}
        label={label[mode]}
        disabled={disabled}
        onClick={async () => {
          console.log('submit');
          setDisabled(true);
          await onSubmit();
          setDisabled(false);
        }}
        radius={4}
      />
    </FlexBox>
  );
};
