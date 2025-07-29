import { createLazyFileRoute } from "@tanstack/react-router";
import { USERS_EDITOR_PATH } from "@/routes/__navigation.tsx";
import { DBSection } from "@db-ux/react-core-components";

export const Route = createLazyFileRoute(USERS_EDITOR_PATH)({
  component: () => (
    <DBSection>
      <h1>Editor</h1>
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
            <td>Alice Brown</td>
            <td>alice.brown@example.com</td>
            <td>Editor</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Charlie Davis</td>
            <td>charlie.davis@example.com</td>
            <td>Editor</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Emily Evans</td>
            <td>emily.evans@example.com</td>
            <td>Editor</td>
          </tr>
        </tbody>
      </table>
    </DBSection>
  ),
});
