import { createLazyFileRoute } from "@tanstack/react-router";
import { DATA_INCOME_PATH } from "@/routes/__navigation.tsx";
import { DBSection } from "@db-ux/react-core-components";

export const Route = createLazyFileRoute(DATA_INCOME_PATH)({
  component: () => (
    <DBSection>
      <h1>Income</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Source</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Salary</td>
            <td>$5,000</td>
            <td>2025-07-01</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Freelance</td>
            <td>$1,200</td>
            <td>2025-07-15</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Investments</td>
            <td>$800</td>
            <td>2025-07-20</td>
          </tr>
        </tbody>
      </table>
    </DBSection>
  ),
});
