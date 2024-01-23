import FlexBox from '@/components/utils/flexBox';

interface HeaderStyleProps {
  children: React.ReactNode;
}
export const HeaderBox: React.FC<HeaderStyleProps> = ({ children }) => {
  return (
    <FlexBox alignItems="center" justifyContent="space-between">
      {children}
    </FlexBox>
  );
};
