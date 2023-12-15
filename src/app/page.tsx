"use client";

import Calendar from "@/components/Calendar";
import Notifications from "@/components/Notifications";
import { useCalendar } from "@/hooks/useCalendar";
import { defaultState, useYearMonth } from "@/hooks/useYearMonth";
import { fromCalendar } from "@/types";
import { Box } from "@mui/material";
import { css } from "@emotion/react";

const Home = () => {
  const { data, isLoading, isError } = useCalendar();
  const { state: yearMonth, next, previous } = useYearMonth(defaultState);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <p>Loading...</p>
      </Box>
    );
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
          }}
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
            notifications={
              !isError && data != undefined ? fromCalendar(data.schedules) : []
            }
          />
        </Box>
      )}
    </div>
  );
};

export default Home;
