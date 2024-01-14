import { css } from '@emotion/react';
import { BsCalendar } from 'react-icons/bs';

import type { calendar_v3 } from 'googleapis';

import CalendarCheckBoxes from '@/app/import/clientPage/calendarSelector/calendarCheckBoxes';
import { SubTitle } from '@/app/import/clientPage/subTitle';
import FlexBox from '@/components/utils/flexBox';
import { backgroundColor } from '@/global';

type Props = {
  calendars: calendar_v3.Schema$CalendarListEntry[];
  onChange: (calendars: calendar_v3.Schema$CalendarListEntry['id'][]) => void;
  error?: string;
};

export const CalendarSelector: React.FC<Props> = ({ calendars, onChange, error }) => (
  <FlexBox
    flexDirection="column"
    gap={1}
    css={css({
      backgroundColor: error ? '#e69f9f' : backgroundColor,
    })}
  >
    <SubTitle icon={<BsCalendar />}>インポートするカレンダー</SubTitle>
    <CalendarCheckBoxes error={error} calendars={calendars} onChange={(calendar) => onChange(calendar)} />
  </FlexBox>
);
