'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { LoginForm, LoginFormSchema } from '@/types/loginForm';
import { signIn } from 'next-auth/react';

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
          console.log(res.error);
        } else {
          router.push('/');
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
  };
};
