"use client";
import NeuButton from "@/components/utils/NeuButton";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { css } from "@emotion/react";

type Props = {
  callbackUrl: string;
};

function GoogleLoginBtn({ callbackUrl }: Props) {
  return (
    <NeuButton onClick={() => signIn("google", { callbackUrl })}>
      <div
        css={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "0.5rem",
        })}
      >
        <FcGoogle /> Googleでログイン
      </div>
    </NeuButton>
  );
}

export default GoogleLoginBtn;
