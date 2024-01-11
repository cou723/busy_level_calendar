import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';

import Neu from '../utils/neu';

import ScheduleAlertView from './scheduleAlert';

import { type ScheduleAlert } from '@/types';

interface Props {
  alerts: ScheduleAlert[];
  [key: string]: unknown;
}

const ScheduleAlerts: FunctionComponent<Props> = ({ alerts, ...props }) => {
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
      {alerts.map((alert: ScheduleAlert, i) => (
        <ScheduleAlertView
          key={i}
          title={alert.title}
          message={alert.message}
          priorityLevel={alert.level}
          toUrl={'/edit/' + alert.target}
        />
      ))}
    </Neu>
  );
};

export default ScheduleAlerts;
