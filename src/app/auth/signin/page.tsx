"use client";
import GoogleLoginBtn from "@/components/GoogleLoginBtn";
import SmallContainer from "@/components/SmallContainer";

function SigninPage() {
  return (
    <SmallContainer>
      <GoogleLoginBtn callbackUrl="/" />
    </SmallContainer>
  );
}

export default SigninPage;
