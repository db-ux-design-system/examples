import {
  MainNavigationItems,
  type NavigationItem,
} from "@/routes/__navigation.tsx";
import { DBNavigation } from "@db-ux/react-core-components";
import NavItem from "@/control-panel/nav-item.tsx";

const MainNavigation = () => (
  <DBNavigation aria-label="main navigation">
    {MainNavigationItems.map((navigationItem: NavigationItem) => (
      <NavItem {...navigationItem} />
    ))}
  </DBNavigation>
);

export default MainNavigation;
