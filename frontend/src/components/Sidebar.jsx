import React, { useState } from "react";
import { Menu, Home, User, Settings, BarChart2 } from "lucide-react";
import classNames from "classnames";

const menuItems = [
  { icon: <Home size={20} />, label: "Home" },
  { icon: <User size={20} />, label: "Users" },
  { icon: <BarChart2 size={20} />, label: "Reports" },
  { icon: <Settings size={20} />, label: "Settings" },
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={classNames(
        "h-screen bg-gray-800 text-white transition-all duration-300 shadow-lg",
        isExpanded ? "w-64" : "w-20"
      )}
    >
      <div className="flex items-center justify-between p-4 bg-gray-900">
        <span className="text-lg font-semibold">
          {isExpanded && "My Panel"}
        </span>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Menu />
        </button>
      </div>

      <nav className="mt-4 flex flex-col">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center gap-4 px-4 py-3 hover:bg-gray-700 transition-colors"
          >
            {item.icon}
            {isExpanded && <span>{item.label}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
