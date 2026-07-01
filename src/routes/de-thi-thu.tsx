import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/de-thi-thu")({
  component: () => <Outlet />,
});
