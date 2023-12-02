import { Month } from "@/types/month";
import { FunctionComponent } from "react";

interface HeaderProps {
  month: Month;
  onNext: () => void;
  onPre: () => void;
}

export const Header: FunctionComponent<HeaderProps> = ({
  month,
  onNext,
  onPre,
}) => {
  return (
    <h1>
      <button children="<" onClick={onPre} />
      {month}月
      <button children=">" onClick={onNext} />
    </h1>
  );
};

export default Header;
