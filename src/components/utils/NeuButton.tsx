import Neu from "@/components/utils/Neu";
import { css } from "@emotion/react";
import { FunctionComponent, useState } from "react";

export interface NeuButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  concave?: boolean;
  [key: string]: unknown;
}

const buttonStyles = () => {
  return css`
    background-color: transparent;
    border: none;
  `;
};

const NeuButton: FunctionComponent<NeuButtonProps> = ({
  label,
  onClick,
  disabled = false,
  concave = false,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      css={buttonStyles()}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <Neu
        intensity={isHovered ? 2 : 1}
        padding={4}
        inset={isActive}
        concave={concave}
        css={css({
          padding: "8px 16px",
        })}
      >
        {label}
      </Neu>
    </button>
  );
};

export default NeuButton;
