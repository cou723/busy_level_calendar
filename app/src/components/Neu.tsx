import { FunctionComponent } from "react";
import { css } from "@emotion/react";

interface NeuProps {
  children: React.ReactNode;
  size?: number;
  radius: 0 | 1 | 2 | 3 | 4;
  intensity?: 1 | 2 | 3 | 4 | 5;
  inset?: boolean;
  concave?: boolean;
}

const radiusClassName = [
  "rounded-none",
  "rounded-sm",
  "rounded",
  "rounded-md",
  "rounded-lg",
];

const Neu: FunctionComponent<NeuProps> = ({
  children,
  size = 1,
  radius = 5,
  intensity = 1,
  inset = false,
  concave = false,
}) => {
  return (
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
      `}
    >
      {children}
    </div>
  );
};

export default Neu;
