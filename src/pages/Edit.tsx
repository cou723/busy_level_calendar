import EditScheduleForm from "@/components/EditScheduleForm";
import Neu from "@/components/utils/Neu";
import { useSchedule } from "@/hooks/useSchedule";
import { useNavigate, useParams } from "react-router-dom";

export const Edit = () => {
  const { scheduleId } = useParams<{ scheduleId: string }>();
  const navigation = useNavigate();
  if (!scheduleId) navigation("/");
  const { data: schedule, isError } = useSchedule(scheduleId!);

  return (
    <Neu padding={32} radius={4}>
      <h1>予定作成</h1>
      {schedule ? (
        <EditScheduleForm schedule={schedule} />
      ) : isError ? (
        <p>loading...</p>
      ) : (
        <p>error</p>
      )}
    </Neu>
  );
};
