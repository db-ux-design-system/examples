import { createLazyFileRoute } from "@tanstack/react-router";
import { USERS_ADMIN_PATH } from "@/routes/__navigation.tsx";
import { DBSection } from "@db-ux/react-core-components";

export const Route = createLazyFileRoute(USERS_ADMIN_PATH)({
  component: () => (
    <DBSection>
      <h1>Admin</h1>
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
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>jane.smith@example.com</td>
            <td>Editor</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Bob Johnson</td>
            <td>bob.johnson@example.com</td>
            <td>Viewer</td>
          </tr>
        </tbody>
      </table>
    </DBSection>
  ),
});
