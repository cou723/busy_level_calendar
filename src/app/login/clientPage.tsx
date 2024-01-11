'use client';

import GoogleLoginBtn from '@/components/googleLoginBtn';
import SmallContainer from '@/components/smallContainer';

const ClientPage: React.FC = () => {
  return (
    <SmallContainer>
      <GoogleLoginBtn callbackUrl="/" />
    </SmallContainer>
  );
};

export default ClientPage;
