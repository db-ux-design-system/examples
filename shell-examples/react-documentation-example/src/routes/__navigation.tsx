export type NavigationItem = {
  label: string;
  path: string;
  subItems?: NavigationItem[];
  mainNavigationItem?: boolean;
};

export const HOME_PATH = "/";
export const DOCS_PATH = "/docs";
export const API_PATH = "/api";
export const BLOG_PATH = "/blog";

export const DesktopMainNavigationItems: NavigationItem[] = [
  { label: "Docs", path: DOCS_PATH, mainNavigationItem: true },
  { label: "API", path: API_PATH, mainNavigationItem: true },
  { label: "Blog", path: BLOG_PATH, mainNavigationItem: true },
];

export const DOCS_GETTING_STARTED_PATH = `${DOCS_PATH}/getting-started`;
export const DOCS_GETTING_STARTED_ANGULAR_PATH = `${DOCS_GETTING_STARTED_PATH}/angular`;
export const DOCS_GETTING_STARTED_REACT_PATH = `${DOCS_GETTING_STARTED_PATH}/react`;
export const DOCS_GETTING_STARTED_VUE_PATH = `${DOCS_GETTING_STARTED_PATH}/vue`;
export const DocsSubNavigation: NavigationItem[] = [
  { label: "Introduction", path: DOCS_PATH },
  {
    label: "Getting Started",
    path: API_PATH,
    subItems: [
      { label: "Angular", path: DOCS_GETTING_STARTED_ANGULAR_PATH },
      { label: "React", path: DOCS_GETTING_STARTED_REACT_PATH },
      { label: "Vue", path: DOCS_GETTING_STARTED_VUE_PATH },
    ],
  },
];

export const API_CLIENT_API_PATH = `${API_PATH}/client-api`;
export const API_PLUGINS_PATH = `${API_PATH}/plugins`;
export const API_PLUGINS_CONTENT_PATH = `${API_PLUGINS_PATH}/content`;
export const API_PLUGINS_LINKS_PATH = `${API_PLUGINS_PATH}/links`;
export const ApiSubNavigation: NavigationItem[] = [
  { label: "CLI", path: API_PATH },
  { label: "Client API", path: API_CLIENT_API_PATH },
  {
    label: "Plugins",
    path: API_PLUGINS_PATH,
    subItems: [
      { label: "Content", path: API_PLUGINS_CONTENT_PATH },
      { label: "Links", path: API_PLUGINS_LINKS_PATH },
    ],
  },
];

export const MobileMainNavigationItems: NavigationItem[] = [
  { label: "Docs", path: DOCS_PATH, subItems: DocsSubNavigation },
  { label: "API", path: API_PATH, subItems: ApiSubNavigation },
  { label: "Blog", path: BLOG_PATH },
];
