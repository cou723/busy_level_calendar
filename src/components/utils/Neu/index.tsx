import { FunctionComponent } from "react";
import { transparentize } from "color2k";
import { css } from "@emotion/react";

export type NeuSize = "small" | "medium" | "large";

export interface NeuProps {
  children: React.ReactNode;
  radius?: 0 | 1 | 2 | 3 | 4;
  intensity?: 0 | 1 | 2 | 3 | 4;
  inset?: boolean;
  concave?: boolean;
  size?: NeuSize;
  [key: string]: unknown;
}

const actualRadius = [0, 5, 10, 15, 30];
const actualIntensity = [0.2, 0.4, 0.6, 0.8, 1];

const generateBackground = (concave: boolean) => {
  return concave ? `linear-gradient(145deg,rgba(255, 255, 255, 0.007),rgba(6, 6, 7, 0.1) )` : undefined;
};

const generateBoxShadow = (inset: boolean, shadow: string, highlight: string, size: NeuSize) => {
  const shadowSize = {
    small: { offset: 2, blur: 4 },
    medium: { offset: 3, blur: 5 },
    large: { offset: 10, blur: 16 },
  };
  const { offset, blur } = shadowSize[size];

  return `${inset ? "inset" : ""} ${offset}px ${offset}px ${blur}px ${shadow}, ${
    inset ? "inset" : ""
  } -${offset}px -${offset}px ${blur}px ${highlight}`;
};

const Neu: FunctionComponent<NeuProps> = ({
  children = null,
  radius = 2,
  intensity = 1,
  inset = false,
  concave = false,
  size = "medium",
  ...props
}) => {
  const shadow = transparentize("black", 1.2 - actualIntensity[intensity]);
  const highlight = transparentize("white", 0.5 - actualIntensity[intensity]);
  const neuStyleObject = {
    background: generateBackground(concave),
    borderRadius: actualRadius[radius],
    boxShadow: generateBoxShadow(inset, shadow, highlight, size),
    padding: "1rem",
  };

  const neuStyle = {
    ...neuStyleObject,
  };

  return (
    <div css={css(neuStyle)} {...props}>
      {children}
    </div>
  ); // css propを適用
};

export default Neu;
