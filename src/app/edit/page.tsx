"use client";
import Loading from "@/components/Loading";
import NormalContainer from "@/components/NormalContainer";
import ScheduleForm from "@/components/ScheduleForm";
import SmallContainer from "@/components/SmallContainer";
import { useSchedule } from "@/hooks/useSchedule";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

export const EditPage = () => {
  const param = useParams<{ id: string }>();

  if (!param) notFound();
  const { data: schedule, isError } = useSchedule(param.id);

  return (
    <NormalContainer>
      <h1>編集</h1>
      {schedule ? (
        <ScheduleForm defaultValue={schedule} />
      ) : isError ? (
        <SmallContainer>
          <Loading />
        </SmallContainer>
      ) : (
        <p>error</p>
      )}
    </NormalContainer>
  );
};

export default EditPage;
