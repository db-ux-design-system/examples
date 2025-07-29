import { createRootRoute, Outlet } from "@tanstack/react-router";
import {
  DBControlPanelDesktop,
  DBControlPanelMobile,
  DBShell,
} from "@db-ux/react-core-components";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Brand from "@/control-panel/brand.tsx";
import MainNavigation from "@/control-panel/main-navigation.tsx";
import MetaNavigation from "@/control-panel/meta-navigation.tsx";
import PrimaryActions from "@/control-panel/primary-actions.tsx";
import SecondaryActions from "@/control-panel/secondary-actions.tsx";

export const Route = createRootRoute({
  component: () => {
    return (
      <DBShell
        data-density="functional"
        fadeIn
        controlPanelDesktopPosition="left"
        controlPanelMobilePosition="bottom"
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
            <MainNavigation />
          </DBControlPanelMobile>
        }
      >
        <Outlet />
        <TanStackRouterDevtools position="top-right" />
      </DBShell>
    );
  },
});
