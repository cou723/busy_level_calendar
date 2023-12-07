import { useForm } from "react-hook-form";
import { scheduleFormSchema, ScheduleForm } from "@/types/scheduleForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { calendarAdapter } from "@/global";
import { generate } from "@/types/schedule";
import { useNavigate } from "react-router-dom";

export const useScheduleForm = (init?: ScheduleForm) => {
  const navigation = useNavigate();
  const { register, handleSubmit, formState } = useForm<ScheduleForm>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: init,
  });

  const onSubmit = (data: ScheduleForm) => {
    calendarAdapter.add(generate(data));
    navigation("/");
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
  };
};
