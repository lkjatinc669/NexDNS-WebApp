import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onFinish, 500) // Delay before transition out
          return 100
        }
        return prev + Math.random() * 120
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ ease: 'linear', duration: 1 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl font-extrabold tracking-widest"
      >
        <p className="text-6xl font-extrabold text-blue-500"><span className='text-white'>Nex</span>DNS</p>
      </motion.h1>

      <motion.div
        className="mt-10 w-64 h-2 bg-gray-700 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: "16rem" }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="h-full bg-blue-500"
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        />
      </motion.div>

      <div className="mt-4 text-sm tracking-wide text-gray-300">
        Initializing Dashboard
      </div>
    </motion.div>
  )
}
