import {
  DBControlPanelMetaNavigation,
  DBLink,
} from "@db-ux/react-core-components";

const MetaNavigation = () => (
  <DBControlPanelMetaNavigation>
    <DBLink
      size="small"
      content="external"
      referrerPolicy="no-referrer"
      target="_blank"
      href="https://github.com/db-ux-design-system/core-web"
    >
      GitHub
    </DBLink>
    <DBLink
      size="small"
      content="external"
      referrerPolicy="no-referrer"
      target="_blank"
      href="https://design-system.deutschebahn.com/core-web/version/latest/"
    >
      Application
    </DBLink>
  </DBControlPanelMetaNavigation>
);

export default MetaNavigation;
