import { createLazyFileRoute } from "@tanstack/react-router";
import { USERS_VIEWER_PATH } from "@/routes/__navigation.tsx";
import { DBSection } from "@db-ux/react-core-components";

export const Route = createLazyFileRoute(USERS_VIEWER_PATH)({
  component: () => (
    <DBSection>
      <h1>Viewers</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Michael Scott</td>
            <td>michael.scott@example.com</td>
            <td>Viewer</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Pam Beesly</td>
            <td>pam.beesly@example.com</td>
            <td>Viewer</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jim Halpert</td>
            <td>jim.halpert@example.com</td>
            <td>Viewer</td>
          </tr>
        </tbody>
      </table>
    </DBSection>
  ),
});
