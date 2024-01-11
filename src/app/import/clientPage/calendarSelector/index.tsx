import { BsCalendar } from 'react-icons/bs';

import type { calendar_v3 } from 'googleapis';

import CalendarCheckBoxes from '@/app/import/clientPage/calendarSelector/calendarCheckBoxes';
import { SubTitle } from '@/app/import/clientPage/subTitle';
import FlexBox from '@/components/utils/flexBox';

type Props = {
  calendars: calendar_v3.Schema$CalendarListEntry[];
  onChange: (calendars: calendar_v3.Schema$CalendarListEntry['id'][]) => void;
};

export const CalendarSelector: React.FC<Props> = ({ calendars, onChange }) => (
  <FlexBox flexDirection="column" gap={1}>
    <SubTitle icon={<BsCalendar />}>インポートするカレンダー</SubTitle>
    <CalendarCheckBoxes calendars={calendars} onChange={(calendar) => onChange(calendar)} />
  </FlexBox>
);
