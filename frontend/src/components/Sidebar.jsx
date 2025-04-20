
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { menuItems } from '../constants'

const Sidebar = () => {
  const navigate = useNavigate()

  const onSelectPage = (path) => {
    navigate(path)
  }

  return (
    <motion.div
      className="bg-gray-900 h-full w-64 p-3 border-r-2 overflow-y-auto shadow-lg"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <ul className="space-y-4">
        {menuItems.map((item, i) => (
          <li
            key={i}
            onClick={() => onSelectPage(item.path)}
            className="flex items-center gap-4 px-3 py-2 hover:bg-gray-800 rounded-lg cursor-pointer transition-all text-white"
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Sidebar
