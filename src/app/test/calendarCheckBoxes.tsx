'use client';
import { calendar_v3 } from 'googleapis';
import NeuCheckBox from '@/components/utils/NeuCheckBox';
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';

type Props = {
  calendars: calendar_v3.Schema$CalendarListEntry[];
  onChange: (calendars: calendar_v3.Schema$CalendarListEntry['id'][]) => void;
};

export const CalendarCheckBoxes = ({ calendars, onChange }: Props) => {
  const [selectCalendars, setSelectCalendars] = useState<[calendar_v3.Schema$CalendarListEntry['id'], boolean]>({});

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
            console.log('newSelectCalendars', newSelectCalendars);

            newSelectCalendars[item.id] = checked;
            console.log(newSelectCalendars);
            setSelectCalendars(newSelectCalendars);

            onChange(Object.keys(newSelectCalendars).filter((key) => newSelectCalendars[key]));
          }}
          key={item.id}
        >
          {item.summary}
        </NeuCheckBox>
      ))}

      {/* debug select calendar list */}
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        })}
      >
        {/* {selectCalendars.map((item) => (
          <div key={item.id}>{item.summary}</div>
        ))} */}
      </div>
    </div>
  );
};

export default CalendarCheckBoxes;
