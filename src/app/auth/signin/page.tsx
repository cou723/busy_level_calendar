'use client';
import GoogleLoginBtn from '@/components/googleLoginBtn';
import SmallContainer from '@/components/smallContainer';

function SigninPage() {
  return (
    <SmallContainer>
      <GoogleLoginBtn callbackUrl="/" />
    </SmallContainer>
  );
}

export default SigninPage;
