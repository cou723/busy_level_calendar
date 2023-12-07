import NeuButton from "@/components/utils/NeuButton";
import TextBox from "@/components/utils/TextBox";
import { useScheduleForm } from "@/hooks/useScheduleForm";
import { Schedule } from "@/types/schedule";
import { css } from "@emotion/react";
import { FunctionComponent } from "react";

interface EditScheduleFormProps {
  schedule: Schedule;
}

const EditScheduleForm: FunctionComponent<EditScheduleFormProps> = ({
  schedule,
}) => {
  const { register, onSubmit, formState } = useScheduleForm(schedule);
  console.log("parent:", register("title"));

  return (
    <form onSubmit={onSubmit}>
      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        })}
      >
        <TextBox
          id="title"
          label="タスクタイトル"
          type="text"
          errorMessage={formState.errors.title?.message}
          register={register("title")}
        />
        <TextBox
          id="description"
          label="詳細(任意)"
          type="text"
          errorMessage={formState.errors.description?.message}
          register={register("description", { required: false })}
        />
        <TextBox
          id="requiredDays"
          label="必要日数"
          type="number"
          errorMessage={formState.errors.requiredDays?.message}
          register={register("requiredDays", {
            setValueAs: (v) => (v === "" ? undefined : parseInt(v, 10)),
            required: false,
          })}
        />
        <TextBox
          id="date"
          label="締切日"
          type="date"
          errorMessage={formState.errors.date?.message}
          register={register("date")}
        />
        <NeuButton css={css({ width: "200px" })} label={"作成"} />
      </div>
    </form>
  );
};

export default EditScheduleForm;
