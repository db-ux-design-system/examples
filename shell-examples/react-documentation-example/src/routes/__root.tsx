import {
  createRootRoute,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import {
  DBControlPanelDesktop,
  DBControlPanelMobile,
  DBShell,
} from "@db-ux/react-core-components";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Brand from "@/control-panel/brand.tsx";
import MainNavigation from "@/control-panel/main-navigation.tsx";
import SubNavigation from "@/control-panel/sub-navigation.tsx";
import { useEffect, useState } from "react";
import {
  API_PATH,
  ApiSubNavigation,
  DOCS_PATH,
  DocsSubNavigation,
  type NavigationItem,
} from "@/routes/__navigation.tsx";
import MetaNavigation from "@/control-panel/meta-navigation.tsx";
import PrimaryActions from "@/control-panel/primary-actions.tsx";
import SecondaryActions from "@/control-panel/secondary-actions.tsx";

export const Route = createRootRoute({
  component: () => {
    const [subNavigationItems, setSubNavigationItems] = useState<
      NavigationItem[] | undefined
    >(undefined);
    const { matches } = useRouterState();

    useEffect(() => {
      if (matches.length > 1) {
        if (matches[1].id.startsWith(API_PATH)) {
          setSubNavigationItems(ApiSubNavigation);
        } else if (matches[1].id.startsWith(DOCS_PATH)) {
          setSubNavigationItems(DocsSubNavigation);
        } else {
          setSubNavigationItems(undefined);
        }
      } else {
        setSubNavigationItems(undefined);
      }
    }, [matches]);

    return (
      <DBShell
        fadeIn
        subNavigationDesktopPosition="left"
        subNavigation={
          subNavigationItems ? (
            <SubNavigation navigationItems={subNavigationItems} />
          ) : null
        }
        subNavigationMobilePosition="none"
        controlPanelDesktop={
          <DBControlPanelDesktop
            brand={<Brand />}
            metaNavigation={<MetaNavigation />}
            primaryActions={<PrimaryActions />}
            secondaryActions={<SecondaryActions />}
          >
            <MainNavigation />
          </DBControlPanelDesktop>
        }
        controlPanelMobile={
          <DBControlPanelMobile
            brand={<Brand />}
            metaNavigation={<MetaNavigation />}
            primaryActions={<PrimaryActions />}
            secondaryActions={<SecondaryActions />}
          >
            <MainNavigation mobile />
          </DBControlPanelMobile>
        }
      >
        <Outlet />
        <TanStackRouterDevtools />
      </DBShell>
    );
  },
});
