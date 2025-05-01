import { LayoutDashboard, HardDrive, ShieldCheck, Globe } from "lucide-react";

export const menuItems = [
  { icon: <LayoutDashboard />, label: "Dashboard", path: "/" },
  { icon: <HardDrive />, label: "Devices", path: "/devices" },
  { icon: <ShieldCheck />, label: "Services", path: "/services" },
  { icon: <Globe />, label: "DNS", path: "/dns" },
];


export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // delay between tiles
    },
  },
};

export const tileVariants = {
  hidden: { opacity: 0, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 2 } },
};
