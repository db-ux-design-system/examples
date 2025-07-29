import {
  createRootRoute,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import {
  DBControlPanelDesktop,
  DBControlPanelFlatIconNavigation,
  DBControlPanelMobile,
  DBShell,
} from "@db-ux/react-core-components";
import Brand from "@/control-panel/brand.tsx";
import MainNavigation from "@/control-panel/main-navigation.tsx";
import SubNavigation from "@/control-panel/sub-navigation.tsx";
import { useEffect, useState } from "react";
import {
  type NavigationItem,
  TIMETABLE_PATH,
  TimetableSubNavigation,
} from "@/routes/__navigation.tsx";

export const Route = createRootRoute({
  component: () => {
    const [subNavigationItems, setSubNavigationItems] = useState<
      NavigationItem[] | undefined
    >(undefined);
    const { matches } = useRouterState();

    useEffect(() => {
      if (matches.length > 1) {
        if (matches[1].id.startsWith(TIMETABLE_PATH)) {
          setSubNavigationItems(TimetableSubNavigation);
        } else {
          setSubNavigationItems(undefined);
        }
      } else {
        setSubNavigationItems(undefined);
      }
    }, [matches]);

    return (
      <DBShell
        data-pride="true"
        fadeIn
        subNavigation={
          subNavigationItems ? (
            <SubNavigation navigationItems={subNavigationItems} />
          ) : null
        }
        subNavigationMobilePosition="top"
        controlPanelMobilePosition="bottom"
        controlPanelDesktop={
          <DBControlPanelDesktop brand={<Brand />}>
            <MainNavigation />
          </DBControlPanelDesktop>
        }
        controlPanelMobile={
          <DBControlPanelMobile
            variant="flat-icon"
            brand={<Brand />}
            flatIconNavigation={
              <DBControlPanelFlatIconNavigation>
                <MainNavigation />
              </DBControlPanelFlatIconNavigation>
            }
          ></DBControlPanelMobile>
        }
      >
        <Outlet />
      </DBShell>
    );
  },
});
