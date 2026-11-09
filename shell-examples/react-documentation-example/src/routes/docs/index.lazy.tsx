import { createLazyFileRoute } from "@tanstack/react-router";
import { DBSection } from "@db-ux/react-core-components";

export const Route = createLazyFileRoute("/docs/")({
  component: () => (
    <DBSection width="medium">
      <h1>Docs</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </DBSection>
  ),
});
