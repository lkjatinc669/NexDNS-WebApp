// src/components/Sidebar.jsx
import { Home, Server, Settings, Info } from "lucide-react";
export const menuItems = [
  { icon: <Home />, label: "Dashboard", path: "/dashboard" },
  { icon: <Server />, label: "Servers", path: "/dashboard/servers" },
  { icon: <Settings />, label: "Settings", path: "/dashboard/settings" },
  { icon: <Info />, label: "About", path: "/dashboard/about" },
  // ...repeat as needed
];
