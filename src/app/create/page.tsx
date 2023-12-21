"use client";
import NormalContainer from "@/components/NormalContainer";
import ScheduleForm from "@/components/ScheduleForm";

export const CreatePage = () => {
  return (
    <NormalContainer>
      <h1>予定作成</h1>
      <ScheduleForm />
    </NormalContainer>
  );
};

export default CreatePage;
