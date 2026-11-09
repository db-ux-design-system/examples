import { createLazyFileRoute } from "@tanstack/react-router";
import { DBSection } from "@db-ux/react-core-components";

export const Route = createLazyFileRoute("/timetable/q4")({
  component: () => (
    <DBSection width="medium">
      <h1>Q4 {new Date().getFullYear()}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </DBSection>
  ),
});
