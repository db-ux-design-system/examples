import { createLazyFileRoute } from "@tanstack/react-router";
import { TIMETABLE_Q2_PATH } from "@/routes/__navigation.tsx";
import { DBSection } from "@db-ux/react-core-components";

export const Route = createLazyFileRoute(TIMETABLE_Q2_PATH)({
  component: () => (
    <DBSection width="medium">
      <h1>Q2 {new Date().getFullYear()}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </DBSection>
  ),
});
