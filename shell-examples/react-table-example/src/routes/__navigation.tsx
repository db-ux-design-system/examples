export type NavigationItem = {
  label: string;
  path: string;
  subItems?: NavigationItem[];
};

export const HOME_PATH = "/";
export const USERS_PATH = "/users";
export const USERS_ADMIN_PATH = `${USERS_PATH}/admin`;
export const USERS_EDITOR_PATH = `${USERS_PATH}/editor`;
export const USERS_VIEWER_PATH = `${USERS_PATH}/viewer`;
export const DATA_PATH = "/data";
export const DATA_INCOME_PATH = `${DATA_PATH}/income`;
export const DATA_BUDGET_PATH = `${DATA_PATH}/budget`;
export const HELP_PATH = "/help";

export const MainNavigationItems: NavigationItem[] = [
  {
    label: "Users",
    path: USERS_PATH,
    subItems: [
      { label: "Admin", path: USERS_ADMIN_PATH },
      { label: "Editor", path: USERS_EDITOR_PATH },
      { label: "Viewer", path: USERS_VIEWER_PATH },
    ],
  },
  {
    label: "Data",
    path: DATA_PATH,
    subItems: [
      { label: "Income", path: DATA_INCOME_PATH },
      { label: "Budget", path: DATA_BUDGET_PATH },
    ],
  },
  { label: "Help", path: HELP_PATH },
];
