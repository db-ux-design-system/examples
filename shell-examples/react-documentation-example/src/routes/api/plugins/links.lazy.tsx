import { createLazyFileRoute } from "@tanstack/react-router";
import { API_PLUGINS_LINKS_PATH } from "@/routes/__navigation.tsx";
import { DBSection } from "@db-ux/react-core-components";

export const Route = createLazyFileRoute(API_PLUGINS_LINKS_PATH)({
  component: () => (
    <DBSection width="medium">
      <h1>Links</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </DBSection>
  ),
});
