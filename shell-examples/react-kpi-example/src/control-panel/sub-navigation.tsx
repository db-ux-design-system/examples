import { type NavigationItem } from "@/routes/__navigation.tsx";
import {
  DBNavigation,
  DBShellSubNavigation,
} from "@db-ux/react-core-components";
import NavItem from "@/control-panel/nav-item.tsx";

const SubNavigation = ({
  navigationItems,
}: {
  navigationItems: NavigationItem[];
}) => (
  <DBShellSubNavigation>
    <DBNavigation variant="tree" aria-label="sub navigation">
      {navigationItems.map((navigationItem: NavigationItem) => (
        <NavItem {...navigationItem} />
      ))}
    </DBNavigation>
  </DBShellSubNavigation>
);

export default SubNavigation;
