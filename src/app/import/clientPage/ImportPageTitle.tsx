import { fontColor } from '@/global';
import { css } from '@emotion/react';
import React from 'react';
import { FaGoogle, FaLongArrowAltRight, FaCalendarAlt } from 'react-icons/fa';

const ImportPageTitle = () => {
  return (
    <h1
      css={css({
        fontSize: '2rem',
        fontWeight: 500,
        marginBottom: '32px',
        color: fontColor,
      })}
    >
      Google Calendarからインポート <FaGoogle /> <FaLongArrowAltRight /> <FaCalendarAlt />
    </h1>
  );
};

export default ImportPageTitle;
