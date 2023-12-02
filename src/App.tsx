import { GlobalEmotion } from "@/components/GlobalEmotion";
import { backgroundColor } from "@/constants";
import { CreateSchedule } from "@/pages/CreateSchedule";
import { Edit } from "@/pages/Edit";
import { Home } from "@/pages/Home";
import { css } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

const apiClient = new QueryClient();

function App() {
  return (
    <div
      css={css({
        padding: "2rem",
        backgroundColor,
      })}
    >
      <QueryClientProvider client={apiClient}>
        <GlobalEmotion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateSchedule />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
