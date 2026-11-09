import { createLazyFileRoute } from "@tanstack/react-router";
import { DBSection } from "@db-ux/react-core-components";

export const Route = createLazyFileRoute("/api/client-api")({
  component: () => (
    <DBSection width="medium">
      <h1>ClientApi</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </DBSection>
  ),
});
