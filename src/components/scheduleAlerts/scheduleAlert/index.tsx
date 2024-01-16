import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';

import { Link } from './link';
import { Message } from './message';
import { ScheduleAlertIcon } from './scheduleAlertIcon';
import { Title } from './title';

import type { ScheduleAlertTypes } from '@/types/scheduleAlertType';

import FlexBox from '@/components/utils/flexBox';
import Neu from '@/components/utils/neu';

export interface Props {
  title: string;
  message: string;
  priorityLevel: ScheduleAlertTypes;
  toUrl: string;
}

const ScheduleAlert: FunctionComponent<Props> = ({ title, message, priorityLevel, toUrl: to }) => {
  return (
    <Neu
      inset
      css={css({
        padding: '1rem',
      })}
    >
      <FlexBox flexDirection="row" gap="6px">
        <ScheduleAlertIcon
          level={priorityLevel}
          css={css({
            width: '90px',
          })}
        />
        <div
          css={css({
            flexGrow: 1,
          })}
        >
          <Title> {title} </Title>
          <Message> {message} </Message>
          <Link to={to}> 詳細を見る </Link>
        </div>
      </FlexBox>
    </Neu>
  );
};

export default ScheduleAlert;
