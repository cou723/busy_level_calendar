import React from 'react';

import { Checkbox, FormControlLabel } from '@mui/material';

import type { FormControlLabelProps } from '@mui/material';
type Props = Omit<Omit<FormControlLabelProps, 'control'>, 'onClick'> & {
  onClick: (checked: boolean) => void;
};

const NeuCheckbox = ({ ...props }: Props) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setChecked(checked);
    console.log(`Checkbox is now ${event.target.checked ? 'checked' : 'unchecked'}`);
    props.onClick(checked);
  };

  return (
    <FormControlLabel {...props} onClick={undefined} control={<Checkbox checked={checked} onChange={handleChange} />} />
  );
};

export default NeuCheckbox;
