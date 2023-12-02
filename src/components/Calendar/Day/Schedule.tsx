import Neu from "@/components/Neu";
import { Schedule } from "@/types/schedule";
import { FunctionComponent } from "react";

interface ScheduleProps {
  schedule: Schedule;
}

const ScheduleView: FunctionComponent<ScheduleProps> = ({ schedule }) => {
  return <Neu>{schedule.title}</Neu>;
};

export default ScheduleView;
