'use client';
import { useState } from 'react';

import type { calendar_v3 } from 'googleapis';

import NeuCheckbox from '@/components/utils/neuCheckBox';

type Props = {
  calendars: calendar_v3.Schema$CalendarListEntry[];
  onChange: (calendars: calendar_v3.Schema$CalendarListEntry['id'][]) => void;
  error?: string;
};

export const CalendarCheckBoxes: React.FC<Props> = ({ calendars, onChange, error: _error }) => {
  const [selectCalendars, setSelectCalendars] = useState<{
    [key: string]: boolean;
  }>({});

  // for print debug
  // useEffect(() => {
  //   console.log(selectCalendars);
  // }, [selectCalendars]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {calendars.map((item) => (
        <NeuCheckbox
          onClick={(checked) => {
            const newSelectCalendars = JSON.parse(JSON.stringify(selectCalendars));

            newSelectCalendars[item.id as string] = checked;
            setSelectCalendars(newSelectCalendars);

            onChange(Object.keys(newSelectCalendars).filter((key) => newSelectCalendars[key]));
          }}
          key={item.id}
          label={item.summary}
        />
      ))}
    </div>
  );
};

export default CalendarCheckBoxes;
