import { Link } from "@tanstack/react-router";
import {
  DBNavigationItem,
  DBNavigationItemGroup,
} from "@db-ux/react-core-components";
import type { NavigationItem } from "@/routes/__navigation.tsx";

const NavItem = ({
  path,
  label,
  subItems,
  mainNavigationItem,
}: NavigationItem) => {
  if (subItems) {
    return (
      <DBNavigationItemGroup text={label} key={`router-path-${path}`}>
        {subItems.map((subItem) => (
          <NavItem key={`router-sub-path-${subItem.path}`} {...subItem} />
        ))}
      </DBNavigationItemGroup>
    );
  }

  return (
    <DBNavigationItem key={`router-path-${path}`}>
      <Link
        key={`router-path-${path}`}
        to={path}
        activeOptions={{ exact: !mainNavigationItem }}
        preload="intent"
      >
        {label}
      </Link>
    </DBNavigationItem>
  );
};

export default NavItem;
