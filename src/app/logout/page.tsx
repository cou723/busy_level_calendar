'use client';
import { useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

const LoginPage = () => {
  const navigate = useRouter();

  useEffect(() => {
    signOut()
      .catch(() => 'hoge')
      .finally(() => {
        navigate.push('/auth/signin');
      });
  }, [navigate]);
  return <>ログアウト処理中...</>;
};

export default LoginPage;
