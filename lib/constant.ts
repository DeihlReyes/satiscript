import { LayoutDashboard, Presentation, Settings } from "lucide-react";

export const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Call Logs",
    icon: Presentation,
    href: "/call-logs",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default routes;