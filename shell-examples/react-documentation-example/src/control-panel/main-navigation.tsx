import {
  type NavigationItem,
  DesktopMainNavigationItems,
  MobileMainNavigationItems,
} from "@/routes/__navigation.tsx";
import { DBNavigation } from "@db-ux/react-core-components";
import NavItem from "@/control-panel/nav-item.tsx";

const MainNavigation = ({ mobile }: { mobile?: boolean }) => (
  <DBNavigation
    variant={mobile ? "tree" : "popover"}
    aria-label="main navigation"
  >
    {(mobile ? MobileMainNavigationItems : DesktopMainNavigationItems).map(
      (navigationItem: NavigationItem) => (
        <NavItem {...navigationItem} />
      ),
    )}
  </DBNavigation>
);

export default MainNavigation;
