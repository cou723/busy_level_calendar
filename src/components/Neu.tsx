import { FunctionComponent } from "react";
import { css } from "@emotion/react";

interface NeuProps {
  children: React.ReactNode;
  radius?: 0 | 1 | 2 | 3 | 4;
  intensity?: 1 | 2 | 3 | 4 | 5;
  inset?: boolean;
  concave?: boolean;
}

const actualRadius = [0, 2, 5, 10, 15];

const Neu: FunctionComponent<NeuProps> = ({
  children,
  radius = 2,
  intensity = 1,
  inset = false,
  concave = false,
}) => {
  return (
    <div
      css={css({
        radius: actualRadius[radius],
        boxShadow:
          "11.71px 11.71px 26px #C2C4C7, -11.71px -11.71px 26px #FFFFFF",
      })}
    >
      {children}
    </div>
  );
};

export default Neu;
