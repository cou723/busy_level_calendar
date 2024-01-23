'use client';
import React from 'react';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import ImportPageTitle from './ImportPageTitle';

import type { calendar_v3 } from 'googleapis';

import ImportEventOptionsForm from '@/app/import/clientPage/importEventOptionsForm';
import SmallContainer from '@/components/smallContainer';
import { apiAdapter } from '@/global';

type Calendar = calendar_v3.Calendar;

type Props = {
  calendars: calendar_v3.Schema$CalendarListEntry[];
};

export const ClientPage: React.FC<Props> = ({ calendars }) => {
  const navigate = useRouter();
  const [disabled, setDisabled] = React.useState(false);
  return (
    <SmallContainer top={5}>
      <div>
        <ImportPageTitle />
        <ImportEventOptionsForm
          onSubmit={async (data) => {
            setDisabled(true);
            const result = await apiAdapter.importCalendar(data);
            console.log('result', result.val);
            if (result.ok) {
              navigate.push('/');
              toast.success('インポートに成功しました');
              return;
            }

            toast.error('インポートに失敗しました');
            if (result.val.message == 'unauthorized') navigate.push('/login');
            else {
              setDisabled(false);
              toast.error('申し訳ございません。内部的なエラーによりインポートに失敗しました');
            }
          }}
          calendars={calendars}
          disabled={disabled}
        />
      </div>
    </SmallContainer>
  );
};

export default ClientPage;
