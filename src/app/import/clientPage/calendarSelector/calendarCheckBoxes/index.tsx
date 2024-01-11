'use client';
import { useState, useEffect } from 'react';

import { css } from '@emotion/react';

import type { calendar_v3 } from 'googleapis';

import NeuCheckBox from '@/components/utils/neuCheckBox';

type Props = {
  calendars: calendar_v3.Schema$CalendarListEntry[];
  onChange: (calendars: calendar_v3.Schema$CalendarListEntry['id'][]) => void;
};

export const CalendarCheckBoxes: React.FC<Props> = ({ calendars, onChange }) => {
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
        <NeuCheckBox
          onClick={(checked) => {
            const newSelectCalendars = JSON.parse(JSON.stringify(selectCalendars));

            newSelectCalendars[item.id as string] = checked;
            setSelectCalendars(newSelectCalendars);

            onChange(Object.keys(newSelectCalendars).filter((key) => newSelectCalendars[key]));
          }}
          key={item.id}
        >
          {item.summary}
        </NeuCheckBox>
      ))}
    </div>
  );
};

export default CalendarCheckBoxes;
