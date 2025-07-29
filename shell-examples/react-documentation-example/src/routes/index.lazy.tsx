import { createLazyFileRoute } from "@tanstack/react-router";
import { HOME_PATH } from "@/routes/__navigation.tsx";
import { DBSection } from "@db-ux/react-core-components";

export const Route = createLazyFileRoute(HOME_PATH)({
  component: () => (
    <DBSection width="medium">
      <h1>Home</h1>
    </DBSection>
  ),
});
