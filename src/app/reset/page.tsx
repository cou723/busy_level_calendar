'use client';
import React from 'react';

import toast from 'react-hot-toast';

import { apiAdapter } from '@/global';

const Page: React.FC = () => {
  return (
    <button
      onClick={async () => {
        const result = await apiAdapter.clear();
        if (result.err) toast.error('リセットに失敗しました:' + result.val.message);
        else toast.success('リセットしました');
      }}
    >
      reset
    </button>
  );
};

export default Page;
