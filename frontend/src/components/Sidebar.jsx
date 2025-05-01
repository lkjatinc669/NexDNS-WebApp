import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { menuItems } from '../constants'

const Sidebar = () => {
  return (
    <motion.div
      className="normal-color h-full md:w-64 w-16 p-2 border-r-2 overflow-y-auto shadow-lg"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: 'linear', stiffness: 50 }}
    >
      <ul className="space-y-2">
        {menuItems.map((item, i) => (
          <li key={i}>
            <NavLink
              to={item.path}
              title={item.label}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 md:justify-start justify-center rounded-lg transition-all text-white group ${isActive ? 'bg-gray-700 font-semibold' : 'hover:bg-gray-800'
                }`
              }
            >
              <div className="text-xl">{item.icon}</div>
              <span className="text-sm hidden md:inline-block transition-opacity duration-300 ease-in-out">
                {item.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Sidebar
