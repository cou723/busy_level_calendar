import { FunctionComponent } from "react";
import { css } from "@emotion/react";
import { transparentize } from "color2k";

type Size = "small" | "medium" | "large";

export interface NeuProps {
  children: React.ReactNode;
  margin?: number;
  padding?: 4 | 8 | 16 | 32 | 64;
  radius?: 0 | 1 | 2 | 3 | 4;
  intensity?: 0 | 1 | 2 | 3 | 4;
  inset?: boolean;
  concave?: boolean;
  height?: string;
  size?: Size;
  [key: string]: unknown;
}

const actualRadius = [0, 5, 10, 15, 30];
const actualIntensity = [0.2, 0.4, 0.6, 0.8, 1];

const shadowSize = {
  small: { offset: 2, blur: 4 },
  medium: { offset: 3, blur: 5 },
  large: { offset: 10, blur: 16 },
};

const generateBackground = (concave: boolean) => {
  return concave
    ? `linear-gradient(145deg,rgba(255, 255, 255, 0.007),rgba(6, 6, 7, 0.1) )`
    : undefined;
};

const generateBoxShadow = (
  inset: boolean,
  shadow: string,
  highlight: string,
  size: Size
) => {
  const { offset, blur } = shadowSize[size];

  return `${
    inset ? "inset" : ""
  } ${offset}px ${offset}px ${blur}px ${shadow}, ${
    inset ? "inset" : ""
  } -${offset}px -${offset}px ${blur}px ${highlight}`;
};

const Neu: FunctionComponent<NeuProps> = ({
  children = null,
  margin = 0,
  padding = 8,
  radius = 2,
  intensity = 1,
  inset = false,
  concave = false,
  height = "auto",
  size = "medium",
  ...props
}) => {
  const shadow = transparentize("black", 1.2 - actualIntensity[intensity]);
  const highlight = transparentize("white", 0.5 - actualIntensity[intensity]);
  const neuStyleObject = {
    background: generateBackground(concave),
    borderRadius: actualRadius[radius],
    boxShadow: generateBoxShadow(inset, shadow, highlight, size),
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
