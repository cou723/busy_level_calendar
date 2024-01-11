'use client';
// import NeuButton from "@/components/utils/NeuButton";
// import TextBox from "@/components/utils/TextBox";
// import { useLoginForm } from "../../hooks/useLoginForm";
// import { css } from "@emotion/react";
// import { GetServerSideProps } from "next";
import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const navigate = useRouter();

  useEffect(() => {
    navigate.push('/auth/signin');
  }, [navigate]);

  return null;
  // const { register, onSubmit, formState } = useLoginForm();

  // return (
  //   <div>
  //     <form onSubmit={onSubmit}>
  //       <div
  //         css={css({
  //           margin: "10rem auto",
  //           width: "20rem",
  //           display: "flex",
  //           alignItems: "left",
  //           flexDirection: "column",
  //         })}
  //       >
  //         <h1>ログイン</h1>
  //         <TextBox
  //           css={css({
  //             width: "100%",
  //           })}
  //           register={register("name")}
  //           type="text"
  //           label="ユーザー名"
  //           id="name"
  //           errorMessage={formState.errors.name?.message}
  //         />
  //         <TextBox
  //           css={css({
  //             width: "100%",
  //           })}
  //           register={register("password")}
  //           type="password"
  //           label="パスワード"
  //           id="password"
  //           errorMessage={formState.errors.name?.message}
  //         />
  //         <NeuButton onClick={() => onSubmit()}>ログイン</NeuButton>
  //       </div>
  //     </form>
  //   </div>
  // );
};

export default LoginPage;
