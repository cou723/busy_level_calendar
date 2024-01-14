import React from 'react';

import { DatePicker } from '@mui/x-date-pickers';
import { isBefore } from 'date-fns';

import FlexBox from '@/components/utils/flexBox';

type Props = {
  range: { start: Date; end: Date };
  onChange: (range: { start: Date; end: Date }) => void;
};

const RangeSelector: React.FC<Props> = ({ range, onChange }) => {
  return (
    <FlexBox gap={2} flexWrap="wrap">
      <DatePicker
        label="開始"
        value={range.start}
        onChange={(newDate) => onChange({ start: newDate as Date, end: range.end })}
      />
      <DatePicker
        label="終了"
        value={range.end}
        onChange={(newDate) => onChange({ start: range.start, end: newDate as Date })}
        minDate={range.start}
        slotProps={{
          textField: {
            helperText: !isBefore(range.end, range.start) ? '' : '開始日より後の日付を選択してください',
          },
        }}
      />
    </FlexBox>
  );
};

export default RangeSelector;
