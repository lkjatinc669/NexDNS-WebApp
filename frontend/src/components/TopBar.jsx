import { Moon, Server, Sun, UserIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useDarkMode from "../hooks/useDarkMode";

const TopBar = () => {
  const [isUserPanelVisible, setUserPanelVisible] = useState(false);
  const [isDark, setIsDark] = useDarkMode(); // Custom hook manages dark mode

  const userPanelRef = useRef(null);

  const resultData = {
    type: "administrator",
    name: "bunny",
  };

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  const username = `${capitalize(resultData.type)} : ${capitalize(resultData.name)}`;

  // Close user panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userPanelRef.current && !userPanelRef.current.contains(event.target)) {
        setUserPanelVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleDark() {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ stiffness: 100 }}
      className="w-screen flex items-center justify-between bg-white dark:bg-gray-900 text-black dark:text-white h-16 px-2 border-b relative"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer">
        <Server />
        <h1 className="text-3xl font-bold">NexDNS</h1>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2 relative">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="flex items-center gap-1 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
        >
          {isDark ? <Sun /> : <Moon />}
        </button>

        {/* User Button */}
        <button
          onClick={() => setUserPanelVisible(prev => !prev)}
          className={`flex items-center gap-1 px-3 py-2 rounded-lg transition ${isUserPanelVisible ? "bg-gray-100 dark:bg-gray-800" : "bg-gray-200 dark:bg-gray-900"
            } hover:bg-gray-100 dark:hover:bg-gray-800`}
        >
          <UserIcon />
          {username}
        </button>

        {/* User Panel Dropdown */}
        {isUserPanelVisible && (
          <div
            ref={userPanelRef}
            className="absolute top-16 right-0 bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-lg border p-6 w-72 space-y-4 z-50"
          >
            <div className="text-md font-medium pb-2">Username: {resultData.name}</div>
            <div className="text-md font-medium pb-2">Server Status: 🟢 Online</div>
            <button className="bg-red-600 text-white w-full py-2 rounded-lg hover:bg-red-700 transition">
              Logout
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TopBar;




// // src/components/TopBar.jsx
// import { Moon, Sun, LogOut } from 'lucide-react'
// import { useState, useEffect } from 'react'

// export default function TopBar() {
//   const [darkMode, setDarkMode] = useState(false)

//   // Toggle theme
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//   }, [darkMode])

//   return (
//     <div className="fixed top-0 left-0 right-0 h-16 bg-white dark:normal-color shadow-md flex items-center justify-between px-6 z-40">
//       <h2 className="text-3xl font-extrabold text-blue-500"><span className='text-white'>Nex</span>DNS</h2>

//       <div className="flex items-center gap-4">
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
//         >
//           {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//         </button>

//         {/* Logout */}
//         <button className="p-2 px-4 rounded-md bg-red-500 text-white hover:bg-red-600 text-sm font-semibold transition">
//           <LogOut size={16} className="inline mr-1" />
//           Logout
//         </button>
//       </div>
//     </div>
//   )
// }
