import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';

import Neu from '../utils/neu';

import ScheduleAlertView from './scheduleAlert';

import { type ScheduleAlert } from '@/types';

interface Props {
  alerts: ScheduleAlert[];
  [key: string]: unknown;
}

const ScheduleAlerts: FunctionComponent<Props> = ({ alerts: notifications, ...props }) => {
  return (
    <Neu
      {...props}
      css={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '12px',
      })}
    >
      {notifications.map((notification: ScheduleAlert, i) => (
        <ScheduleAlertView
          key={i}
          title={notification.title}
          message={notification.message}
          priorityLevel={notification.level}
          toUrl={'/edit/' + notification.target}
        />
      ))}
    </Neu>
  );
};

export default ScheduleAlerts;
