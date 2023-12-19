"use client";

import Calendar from "@/components/Calendar";
import Notifications from "@/components/Notifications";
import { useCalendar } from "@/hooks/useCalendar";
import { defaultState, useYearMonth } from "@/hooks/useYearMonth";
import { fromCalendar } from "@/types";
import { css } from "@emotion/react";
import { useSessionCheck } from "@/hooks/useSessionCheck";
import { useRouter } from "next/navigation";

const Home = () => {
  useSessionCheck();
  const router = useRouter();
  const { data, error, isLoading, isError } = useCalendar();
  const { state: yearMonth, next, previous } = useYearMonth(defaultState);

  if (isLoading) {
    return (
      <div css={css({ display: "flex" })}>
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    if (error.message === "unauthorized") return router.push("/login");
    return <div>error {JSON.stringify(error)}</div>;
  }

  return (
    <div>
      <div
        css={css({
          display: "flex",
          gap: "2rem",
        })}
      >
        <Calendar
          css={css({
            flex: 5,
          })}
          yearMonth={yearMonth}
          calendar={data!}
          onPre={previous}
          onNext={next}
        />
        <Notifications
          css={css({
            flex: 1,
          })}
          notifications={!isError && data != undefined ? fromCalendar(data.schedules) : []}
        />
      </div>
    </div>
  );
};

export default Home;
