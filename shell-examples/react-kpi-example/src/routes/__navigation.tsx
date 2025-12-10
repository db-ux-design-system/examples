export type NavigationItem = {
  label: string;
  path: string;
  icon?: string;
  subItems?: NavigationItem[];
  mainNavigationItem?: boolean;
};

export const HOME_PATH = "/";
export const TIMETABLE_PATH = "/timetable";
export const CALENDAR_PATH = "/calendar";

export const MainNavigationItems: NavigationItem[] = [
  { label: "Start", path: HOME_PATH, mainNavigationItem: true, icon: "house" },
  {
    label: "Timetable",
    path: TIMETABLE_PATH,
    mainNavigationItem: true,
    icon: "clock",
  },
  {
    label: "Calendar",
    path: CALENDAR_PATH,
    mainNavigationItem: true,
    icon: "calendar",
  },
];

export const TIMETABLE_Q1_PATH = `${TIMETABLE_PATH}/q1`;
export const TIMETABLE_Q2_PATH = `${TIMETABLE_PATH}/q2`;
export const TIMETABLE_Q3_PATH = `${TIMETABLE_PATH}/q3`;
export const TIMETABLE_Q4_PATH = `${TIMETABLE_PATH}/q4`;

const year = new Date().getFullYear();

export const TimetableSubNavigation: NavigationItem[] = [
  { label: `Q1/${year}`, path: TIMETABLE_Q1_PATH },
  { label: `Q2/${year}`, path: TIMETABLE_Q2_PATH },
  { label: `Q3/${year}`, path: TIMETABLE_Q3_PATH },
  { label: `Q4/${year}`, path: TIMETABLE_Q4_PATH },
];
