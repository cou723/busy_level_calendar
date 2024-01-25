'use client';
import { css } from '@emotion/react';
import { notFound, useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdEditSquare } from 'react-icons/md';

import LoadingPage from '@/components/loadingPage';
import NormalContainer from '@/components/normalContainer';
import PageTitle from '@/components/pageTitle';
import ScheduleFormView from '@/components/scheduleFormView';
import FlexBox from '@/components/utils/flexBox';
import NeuButton from '@/components/utils/neuButton';
import { apiAdapter } from '@/global';
import { useDeleteSchedule } from '@/hooks/useDeleteSchedule';
import { useSchedule } from '@/hooks/useSchedule';

type Props = {
  handleDelete: () => void;
};
const DeleteButton: React.FC<Props> = ({ handleDelete }) => {
  return (
    <NeuButton
      css={css({
        height: '2rem',
        gap: '0.5rem',
        backgroundColor: '#ff000047',
      })}
      onClick={handleDelete}
    >
      <FaRegTrashAlt css={[css({ color: '#ffffff' })]} />
      削除
    </NeuButton>
  );
};

/**
 * スケジュールを編集するための EditPage コンポーネントです。
 * @returns JSX.Element
 */
export const EditPage: React.FC = () => {
  // URL から id パラメーターを取得
  const param = useParams<{ id: string }>();
  if (!param) notFound();

  const { data: schedule, isLoading, isError } = useSchedule(param.id);
  const { handleDelete } = useDeleteSchedule();
  if (isLoading) return <LoadingPage />;
  if (isError) return notFound();

  return (
    <NormalContainer>
      <FlexBox justifyContent="space-between" alignItems="center">
        <PageTitle>
          編集
          <MdEditSquare />
        </PageTitle>
        <DeleteButton handleDelete={() => handleDelete(param.id)} />
      </FlexBox>
      {isError ? <p>エラー</p> : <ScheduleFormView defaultValue={schedule} />}
    </NormalContainer>
  );
};

export default EditPage;
