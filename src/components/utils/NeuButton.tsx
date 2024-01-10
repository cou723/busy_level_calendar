'use client';
import Neu from '@/components/utils/Neu';
import { css } from '@emotion/react';
import { FunctionComponent, useState } from 'react';

export interface NeuButtonProps {
  label?: string;
  children?: React.ReactNode;
  handleClick?: () => void;
  disabled?: boolean;
  concave?: boolean;
  [key: string]: unknown;
}

const buttonStyles = () => {
  return css`
    background-color: transparent;
    text-align: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 1rem;
    padding-left: 1rem;
    display: flex;
    justify-content: center;
  `;
};

const NeuButton: FunctionComponent<NeuButtonProps> = ({
  label,
  handleClick,
  disabled = false,
  concave = false,
  children,
  ...rest
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
    <button onClick={handleClick}>
      <Neu
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={handleMouseUp}
        css={buttonStyles()}
        disabled={disabled}
        {...rest}
        intensity={isHovered ? 1.3 : 1}
        inset={isActive}
        concave={concave}
      >
        <p>{label}</p>
        {children}
      </Neu>
    </button>
  );
};

export default NeuButton;
