'use client';
import { BsCalendar2RangeFill } from 'react-icons/bs';
import { calendar_v3 } from 'googleapis';
import React from 'react';
import NormalContainer from '@/components/NormalContainer';
import { useGoogleImportOptions } from '@/hooks/useGoogleImportOptions';
import NeuCheckBox from '@/components/utils/NeuCheckBox';
import FlexBox from '@/components/utils/FlexBox';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import RangeSelector from '@/app/import/clientPage/calendarSelector/calendarCheckBoxes/rangeSelector';
import { useImportCalendar } from '@/hooks/useImportCalendar';
import { SubTitle } from './SubTitle';
import ImportButton from '@/app/import/clientPage/importButton';
import ImportPageTitle from './ImportPageTitle';
import { CalendarSelector } from '@/app/import/clientPage/calendarSelector';
export type Calendar = calendar_v3.Calendar;

type Props = {
  calendars: calendar_v3.Schema$CalendarListEntry[];
};

export const ClientPage = ({ calendars }: Props) => {
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
  const { importCalendar, error } = useImportCalendar(
    optionState,
    () => navigate.push('/'),
    (error) => alert(error)
  );

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
