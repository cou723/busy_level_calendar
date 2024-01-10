import { SubTitle } from '@/app/import/clientPage/SubTitle';
import CalendarCheckBoxes from '@/app/import/clientPage/calendarSelector/calendarCheckBoxes';
import FlexBox from '@/components/utils/FlexBox';
import { calendar_v3 } from 'googleapis';
import { BsCalendar } from 'react-icons/bs';

type Props = {
  calendars: calendar_v3.Schema$CalendarListEntry[];
  onChange: (calendars: calendar_v3.Schema$CalendarListEntry['id'][]) => void;
};
export function CalendarSelector({ calendars, onChange }: Props) {
  return (
    <FlexBox flexDirection="column" gap={1}>
      <SubTitle icon={<BsCalendar />}>インポートするカレンダー</SubTitle>
      <CalendarCheckBoxes calendars={calendars} onChange={(calendar) => onChange(calendar)} />
    </FlexBox>
  );
}
