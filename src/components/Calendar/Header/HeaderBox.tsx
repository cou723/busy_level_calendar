import FlexBox from '@/components/utils/FlexBox';
import { FunctionComponent } from 'react';

interface HeaderStyleProps {
  children: React.ReactNode;
}
export const HeaderBox: FunctionComponent<HeaderStyleProps> = ({ children }) => {
  return (
    <FlexBox alignItems="center" justifyContent="space-between">
      {children}
    </FlexBox>
  );
};
