import { createLazyFileRoute } from "@tanstack/react-router";
import { API_PLUGINS_CONTENT_PATH } from "@/routes/__navigation.tsx";
import { DBSection } from "@db-ux/react-core-components";

export const Route = createLazyFileRoute(API_PLUGINS_CONTENT_PATH)({
  component: () => (
    <DBSection width="medium">
      <h1>Content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </DBSection>
  ),
});
