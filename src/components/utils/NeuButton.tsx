'use client';
import FlexBox from '@/components/utils/FlexBox';
import Neu from '@/components/utils/Neu';
import { css } from '@emotion/react';
import { FunctionComponent, useState } from 'react';

export interface NeuButtonProps {
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  concave?: boolean;
  [key: string]: unknown;
}

const buttonStyles = () => {
  return css`
    background-color: transparent;
    border: none;
    text-align: center;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
  `;
};

const NeuButton: FunctionComponent<NeuButtonProps> = ({
  label,
  onClick,
  disabled = false,
  concave = false,
  children,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
    setIsHovered(false);
  };
  return (
    <Neu
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      css={buttonStyles()}
      onClick={onClick}
      disabled={disabled}
      {...rest}
      intensity={isHovered ? 2 : 1}
      inset={isActive}
      concave={concave}
    >
      <p>{label}</p>
      {children}
    </Neu>
  );
};

export default NeuButton;
