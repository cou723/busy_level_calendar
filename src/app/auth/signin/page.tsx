'use client';
import GoogleLoginBtn from '@/components/GoogleLoginBtn';
import SmallContainer from '@/components/utils/SmallContainer';

function SigninPage() {
  return (
    <SmallContainer>
      <GoogleLoginBtn callbackUrl="/" />
    </SmallContainer>
  );
}

export default SigninPage;
