import { createLazyFileRoute } from "@tanstack/react-router";
import { DBCard, DBSection, DBStack } from "@db-ux/react-core-components";

export const Route = createLazyFileRoute("/calendar/")({
  component: () => (
    <DBSection width="medium">
      <h1>Calendar</h1>
      <DBStack direction="row">
        {Array.from({ length: 5 }, (_, outer) => {
          return (
            <DBStack>
              {Array.from({ length: 30 }, (_, i) => {
                return <DBCard key={outer}>{`${outer + 1} - ${i + 1}`}</DBCard>;
              })}
            </DBStack>
          );
        })}
      </DBStack>
    </DBSection>
  ),
});
