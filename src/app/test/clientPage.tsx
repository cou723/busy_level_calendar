'use client';
import { options } from '@/app/options';
import { getServerSession } from 'next-auth';
import { calendar_v3 } from 'googleapis';
import CalendarCheckBoxes from '@/app/test/calendarCheckBoxes';

type Props = {
  calendarResponse: calendar_v3.Schema$CalendarList;
};

export const ClientPage = ({ calendarResponse }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <CalendarCheckBoxes
        calendars={calendarResponse.items!}
        onChange={(calendar) => console.log(calendar)}
      ></CalendarCheckBoxes>
    </div>
  );
};

export default ClientPage;
