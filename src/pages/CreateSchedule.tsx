import CreateScheduleForm from "@/components/CreateScheduleForm";
import Neu from "@/components/Neu";

export const CreateSchedule = () => {
  return (
    <Neu padding={32} radius={4}>
      <h1>予定作成</h1>
      <CreateScheduleForm />
    </Neu>
  );
};
