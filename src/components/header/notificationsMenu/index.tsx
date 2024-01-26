import React, { useEffect, useState } from 'react';

import { css } from '@emotion/react';
import { Menu, MenuItem } from '@mui/material';

import NotificationView from '@/components/header/notificationsMenu/notification';
import FlexBox from '@/components/utils/flexBox';
import { useNotification } from '@/hooks/useNotification';

type Props = {
  anchorEl: HTMLElement | null;
  onClose: () => void;
};

const NotificationMenu: React.FC<Props> = ({ anchorEl, onClose }) => {
  const { data, isError, error } = useNotification();
  const menuCommonProps = {
    anchorEl,
    open: !!anchorEl,
    onClose,
    css: css({
      marginTop: '1rem',
    }),
  };
  if (isError)
    return (
      <Menu {...menuCommonProps}>
        <FlexBox
          flexDirection="column"
          css={css({
            padding: '1rem',
          })}
        >
          予定の取得に失敗しました。
          <code
            css={css({
              color: '#dfdfdf',
              fontSize: '0.8rem',
              backgroundColor: '#464646',
              padding: '0.5rem',
              borderRadius: '0.5rem',
            })}
          >
            {error?.message}
          </code>
        </FlexBox>
      </Menu>
    );

  return (
    <Menu {...menuCommonProps}>
      {data?.map((n, i) => {
        return (
          <MenuItem key={i} onClick={() => console.log('click', n.title)}>
            <NotificationView notification={n} />
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default NotificationMenu;
