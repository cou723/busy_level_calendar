'use client';
import React from 'react';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { BsCalendar2RangeFill } from 'react-icons/bs';

import ImportPageTitle from './ImportPageTitle';
import { SubTitle } from './subTitle';

import type { calendar_v3 } from 'googleapis';

import { CalendarSelector } from '@/app/import/clientPage/calendarSelector';
import RangeSelector from '@/app/import/clientPage/calendarSelector/calendarCheckBoxes/rangeSelector';
import ImportButton from '@/app/import/clientPage/importButton';
import NormalContainer from '@/components/normalContainer';
import FlexBox from '@/components/utils/flexBox';
import NeuCheckBox from '@/components/utils/neuCheckBox';
import { useGoogleImportOptions } from '@/hooks/useGoogleImportOptions';
import { useImportCalendar } from '@/hooks/useImportCalendar';

export type Calendar = calendar_v3.Calendar;

type Props = {
  calendars: calendar_v3.Schema$CalendarListEntry[];
};

export const ClientPage: React.FC<Props> = ({ calendars }) => {
  const session = useSession();
  const navigate = useRouter();
  const [optionState, dispatch] = useGoogleImportOptions({
    calendars: [],
    range: {
      start: new Date(),
      end: new Date(),
    },
    onlyAllDay: false,
  });
  const { importCalendar, error } = useImportCalendar(optionState);

  const handleSubmit = async () => {
    if (!session.data?.accessToken) return navigate.push('/login');

    return await importCalendar();
  };

  return (
    <NormalContainer>
      <div>
        <ImportPageTitle />
        <FlexBox flexDirection="row" gap={8}>
          <CalendarSelector
            calendars={calendars}
            onChange={(calendars) => dispatch({ type: 'setCalendars', value: calendars as string[] })}
          />
          <FlexBox flexDirection="column" gap={1}>
            <div>
              <SubTitle icon={<BsCalendar2RangeFill />}>インポートする範囲</SubTitle>
              <RangeSelector
                range={optionState.range}
                onChange={(range) => dispatch({ type: 'setRange', value: range })}
              />
            </div>
            <NeuCheckBox
            error={!!error}
              onClick={(checked) => {
                dispatch({ type: 'onlyAllDay', value: checked });
              }}
            >
              終日の予定のみをインポートする
            </NeuCheckBox>
          </FlexBox>
        </FlexBox>
      </div>
      <ImportButton handleSubmit={handleSubmit} />
    </NormalContainer>
  );
};

export default ClientPage;
