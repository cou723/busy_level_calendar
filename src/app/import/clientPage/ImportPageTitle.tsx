import React from 'react';

import { css } from '@emotion/react';
import { FaGoogle, FaLongArrowAltRight, FaCalendarAlt } from 'react-icons/fa';

import { fontColor } from '@/global';

const ImportPageTitle: React.FC = () => {
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
