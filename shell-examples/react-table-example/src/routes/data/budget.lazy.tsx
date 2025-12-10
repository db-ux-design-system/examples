import { createLazyFileRoute } from "@tanstack/react-router";
import { DATA_BUDGET_PATH } from "@/routes/__navigation.tsx";
import { DBSection } from "@db-ux/react-core-components";

export const Route = createLazyFileRoute(DATA_BUDGET_PATH)({
  component: () => (
    <DBSection>
      <h1>Buget</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Rent</td>
            <td>$1,200</td>
            <td>2025-07-01</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Groceries</td>
            <td>$300</td>
            <td>2025-07-10</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Utilities</td>
            <td>$150</td>
            <td>2025-07-15</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Entertainment</td>
            <td>$200</td>
            <td>2025-07-20</td>
          </tr>
        </tbody>
      </table>
    </DBSection>
  ),
});
