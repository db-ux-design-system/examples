import { createLazyFileRoute } from "@tanstack/react-router";
import { DBSection } from "@db-ux/react-core-components";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <DBSection width="medium">
      <h1>Home</h1>
    </DBSection>
  ),
});
