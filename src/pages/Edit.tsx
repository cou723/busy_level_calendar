import ScheduleForm from "@/components/ScheduleForm";
import Neu from "@/components/utils/Neu";
import { useSchedule } from "@/hooks/useSchedule";
import { Navigate, useParams } from "react-router-dom";

export const Edit = () => {
  const { id } = useParams<{ id: string }>();
  const { data: schedule, isError } = useSchedule(id!);

  if (!id) return <Navigate replace to="/" />;

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
