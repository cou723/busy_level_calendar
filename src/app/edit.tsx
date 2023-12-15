"use client";
import ScheduleForm from "@/components/ScheduleForm";
import Neu from "@/components/utils/Neu";
import { useSchedule } from "@/hooks/useSchedule";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

export const EditPage = () => {
  const param = useParams<{ id: string }>();

  if (!param) notFound();
  const { data: schedule, isError } = useSchedule(param.id);

  return (
    <Neu padding={32} radius={4}>
      <h1>予定作成</h1>
      {schedule ? (
        <ScheduleForm defaultValue={schedule} />
      ) : isError ? (
        <p>loading...</p>
      ) : (
        <p>error</p>
      )}
    </Neu>
  );
};

export default EditPage;
