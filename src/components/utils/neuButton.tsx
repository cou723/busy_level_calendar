'use client';
import type { FunctionComponent } from 'react';
import { useState } from 'react';

import { css } from '@emotion/react';

import { generateNeuStyle } from '@/libs/generateNeuStyle';

export type NeuButtonProps = {
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  concave?: boolean;
  radius?: number;
  className?: string;
};

const NeuButton: FunctionComponent<NeuButtonProps> = ({
  label,
  onClick,
  disabled = false,
  concave = false,
  children,
  radius = 2,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseUp = () => {
    setIsActive(false);
    setIsHovered(false);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setIsHovered(false);
  };

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={handleMouseUp}
      onClick={onClick}
      css={css({
        fontSize: '14px',
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        paddingRight: '1rem',
        paddingLeft: '1rem',
        display: 'flex',
        justifyContent: 'center',
        ...generateNeuStyle({
          radius,
          intensity: 1,
          inset: isActive,
          concave,
          size: isHovered ? 'small' : 'medium',
        }),
      })}
      className={className}
    >
      {/* <Neu
        css={buttonStyles()}
        {...rest}
        intensity={1}
        inset={isActive}
        concave={concave}
        size={isHovered ? 'small' : 'medium'}
      > */}
      <p>{label}</p>
      {children}
      {/* </Neu> */}
    </button>
  );
};

export default NeuButton;
