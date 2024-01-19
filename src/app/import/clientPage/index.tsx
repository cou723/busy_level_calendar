'use client';
import React from 'react';

import ImportPageTitle from './ImportPageTitle';

import type { calendar_v3 } from 'googleapis';

import ImportEventOptionsForm from '@/app/import/clientPage/importEventOptionsForm';
import SmallContainer from '@/components/smallContainer';
import { apiAdapter } from '@/global';

export type Calendar = calendar_v3.Calendar;

type Props = {
  calendars: calendar_v3.Schema$CalendarListEntry[];
};

export const ClientPage: React.FC<Props> = ({ calendars }) => {
  return (
    <SmallContainer top={5}>
      <div>
        <ImportPageTitle />
        <ImportEventOptionsForm
          onSubmit={async (data) => {
            console.log(data);
            await apiAdapter.importCalendar(data);
          }}
          calendars={calendars}
        />
      </div>
    </SmallContainer>
  );
};

export default ClientPage;
