import { useForm } from "react-hook-form";
import { scheduleFormSchema, ScheduleForm } from "@/types/scheduleForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { calendarAdapter } from "@/global";
import { Schedule, generate } from "@/types/schedule";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export const useScheduleForm = (editTargetSchedule?: Schedule) => {
  const queryClient = useQueryClient();
  const navigation = useNavigate();

  const { register, handleSubmit, formState } = useForm<ScheduleForm>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: editTargetSchedule,
  });

  const onSubmit = (data: ScheduleForm) => {
    const result = calendarAdapter.schedule.add(
      generate(data, editTargetSchedule?.id)
    );
    if (result.err) {
      console.log("error", result.val);
      return;
    }
    queryClient.invalidateQueries({ queryKey: ["calendar"] });
    navigation("/");
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
  };
};
