import { createLazyFileRoute } from "@tanstack/react-router";
import { HOME_PATH } from "@/routes/__navigation.tsx";
import { DBSection } from "@db-ux/react-core-components";

export const Route = createLazyFileRoute(HOME_PATH)({
  component: () => (
    <>
      <DBSection>
        <h1>Home</h1>
        <p>Hi 👋</p>
      </DBSection>
      <DBSection>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </DBSection>
      <DBSection>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </DBSection>
      <DBSection>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </DBSection>
    </>
  ),
});
