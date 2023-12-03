import { useForm } from "react-hook-form";
import { scheduleFormSchema, ScheduleForm } from "@/types/scheduleForm";
import { zodResolver } from "@hookform/resolvers/zod";

export const useScheduleForm = () => {
  const { register, handleSubmit, formState } = useForm<ScheduleForm>({
    resolver: zodResolver(scheduleFormSchema),
  });

  const onSubmit = (data: ScheduleForm) => {
    console.log(data);
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
  };
};
