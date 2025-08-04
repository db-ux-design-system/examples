import { createLazyFileRoute, Navigate } from "@tanstack/react-router";
import { TIMETABLE_PATH, TIMETABLE_Q1_PATH } from "@/routes/__navigation.tsx";

export const Route = createLazyFileRoute(TIMETABLE_PATH)({
  component: () => <Navigate to={TIMETABLE_Q1_PATH} />,
});
