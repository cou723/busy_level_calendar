import { useForm } from "react-hook-form";
import { scheduleFormSchema, ScheduleForm } from "@/types/scheduleForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { calendarAdapter } from "@/global";
import { Schedule, generate } from "@/types/schedule";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useScheduleForm = (editTargetSchedule?: Schedule) => {
  const queryClient = useQueryClient();
  const router = useRouter();

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
    router.push("/");
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
  };
};
