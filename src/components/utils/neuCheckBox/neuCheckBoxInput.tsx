'use client';
import React from 'react';

import { css } from '@emotion/react';
import { FaCheck } from 'react-icons/fa';

import Neu from '@/components/utils/neu';
export type Props = {
  onClick?: (value: boolean) => void;
  onTrue?: (value: boolean) => void;
  onFalse?: (value: boolean) => void;
};

const NeuCheckBoxInput = ({ onClick, onTrue, onFalse }: Props) => {
  const [checked, setChecked] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
    setActive(false);
  };

  const handleMouseDown = () => {
    setActive(true);
  };

  const handleMouseUp = () => {
    setActive(false);
  };

  return (
    <Neu
      onClick={() => {
        setChecked(!checked);
        onClick && onClick(!checked);
        if (!checked) {
          onFalse && onFalse(!checked);
        } else {
          onTrue && onTrue(!checked);
        }
      }}
      onFocus={() => setHover(true)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      css={css({
        width: '20px',
        height: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
      radius={1}
      inset
      intensity={active ? 1.2 : hover ? 0.8 : 1}
    >
      <FaCheck
        css={css({
          fontSize: '10px',
          width: '10px',
          height: '10px',
          display: checked ? 'block' : 'none',
        })}
      />
    </Neu>
  );
};

export default NeuCheckBoxInput;
