import { FunctionComponent } from "react";
import { css } from "@emotion/react";
import { transparentize } from "color2k";

export interface NeuProps {
  children: React.ReactNode;
  margin?: number;
  padding?: 4 | 8 | 16 | 32 | 64;
  radius?: 0 | 1 | 2 | 3 | 4;
  intensity?: 0 | 1 | 2 | 3 | 4;
  inset?: boolean;
  concave?: boolean;
  height?: string;
  [key: string]: unknown;
}

const actualRadius = [0, 5, 10, 15, 30];
const actualIntensity = [0.2, 0.4, 0.6, 0.8, 1];

const Neu: FunctionComponent<NeuProps> = ({
  children = null,
  margin = 0,
  padding = 8,
  radius = 2,
  intensity = 1,
  inset = false,
  concave = false,
  height = "auto",
  ...props
}) => {
  const shadow = transparentize("black", 1.2 - actualIntensity[intensity]);
  const highlight = transparentize("white", 0.5 - actualIntensity[intensity]);
  const neuStyleObject = {
    background: concave
      ? `linear-gradient(145deg,rgba(240, 248, 255, 0.1),rgba(6, 6, 7, 0.1) )`
      : undefined,
    borderRadius: actualRadius[radius],
    boxShadow: `${inset ? "inset" : ""} 5px 5px 8px ${shadow}, ${
      inset ? "inset" : ""
    } -5px -5px 8px ${highlight}`,
  };

  const neuStyle = css({
    ...neuStyleObject,
    margin,
    padding,
    height,
  });

  return (
    <div {...props} css={[neuStyle]}>
      {children}
    </div>
  ); // css propを適用
};

export default Neu;
