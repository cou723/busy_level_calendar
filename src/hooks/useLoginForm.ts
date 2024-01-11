'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

import type { LoginForm } from '@/types/loginForm';

import { LoginFormSchema } from '@/types/loginForm';

export const useLoginForm = () => {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<LoginForm>({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      await signIn('credentials', {
        redirect: false,
        user: data.name,
        password: data.password,
      }).then((res) => {
        if (res?.error) {
          alert(res.error);
        } else {
          router.push('/');
        }
      });
    } catch (err) {
      alert(err);
    }
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
  };
};
