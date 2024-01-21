import { useState } from 'react';

import { css } from '@emotion/react';

import FlexBox from '@/components/utils/flexBox';
import NeuButton from '@/components/utils/neuButton';

type SubmitButtonProps = {
  mode: 'edit' | 'create';
  onSubmit: () => void;
};
export const SubmitButton: React.FC<SubmitButtonProps> = ({ mode, onSubmit }) => {
  const [disabled, setDisabled] = useState(false);
  const label = { edit: '編集', create: '作成' };
  return (
    <FlexBox justifyContent="end" alignItems="row">
      <NeuButton
        css={css({ width: '8rem', marginTop: '1rem' })}
        label={label[mode]}
        disabled={disabled}
        onClick={async () => {
          setDisabled(true);
          onSubmit();
          setDisabled(false);
        }}
        radius={4}
      />
    </FlexBox>
  );
};
