import { LayoutDashboard, HardDrive, ShieldCheck, Globe } from "lucide-react";

export const menuItems = [
  { icon: <LayoutDashboard />, label: "Dashboard", path: "/" },
  { icon: <HardDrive />, label: "Devices", path: "/devices" },
  { icon: <ShieldCheck />, label: "Services", path: "/services" },
  { icon: <Globe />, label: "DNS", path: "/dns" },
];
