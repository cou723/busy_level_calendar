import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';

import { Link } from './link';
import { Message } from './message';
import { ScheduleAlertIcon } from './scheduleAlertIcon';
import { Title } from './title';

import type { ScheduleAlert } from '@/types';

import FlexBox from '@/components/utils/flexBox';
import Neu from '@/components/utils/neu';

export interface Props {
  alert: ScheduleAlert;
  to: string;
}

const ScheduleAlertView: FunctionComponent<Props> = ({ alert: { title, message, level }, to }) => {
  return (
    <Neu
      // inset
      intensity={0.8}
      size={1.5}
      css={css({
        padding: '0.8rem',
      })}
    >
      <FlexBox flexDirection="row" gap="6px">
        <ScheduleAlertIcon level={level} css={css({ width: '90px' })} />
        <div css={css({ flexGrow: 1 })}>
          <Title> {title} </Title>
          <Message> {message} </Message>
          <Link to={to}> 詳細を見る </Link>
        </div>
      </FlexBox>
    </Neu>
  );
};

export default ScheduleAlertView;
