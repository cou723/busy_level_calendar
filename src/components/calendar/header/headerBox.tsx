import type { FunctionComponent } from 'react';

import FlexBox from '@/components/utils/flexBox';

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
