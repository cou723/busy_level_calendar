import RhfTextBox from "@/components/utils";
import NeuButton from "@/components/utils/NeuButton";
import { useScheduleForm } from "@/hooks/useScheduleForm";
import { css } from "@emotion/react";
import { FunctionComponent } from "react";

interface CreateScheduleFormProps {}

const CreateScheduleForm: FunctionComponent<CreateScheduleFormProps> = () => {
  const { register, onSubmit, formState } = useScheduleForm();
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
        <RhfTextBox
          id="title"
          label="タスクタイトル"
          type="text"
          errorMessage={formState.errors.title?.message}
          register={register("title")}
        />
        <RhfTextBox
          id="description"
          label="詳細(任意)"
          type="text"
          errorMessage={formState.errors.description?.message}
          register={register("description", { required: false })}
        />
        <RhfTextBox
          id="requiredDays"
          label="必要日数"
          type="number"
          errorMessage={formState.errors.requiredDays?.message}
          register={register("requiredDays", { valueAsNumber: true })}
        />
        <RhfTextBox
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

export default CreateScheduleForm;
