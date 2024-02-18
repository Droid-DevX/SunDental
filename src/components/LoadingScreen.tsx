import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9000] flex flex-col items-center justify-center bg-white"
    >
      {/* Spinning tooth loader */}
      <div className="relative w-24 h-24 mb-8">
        {/* Outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full"
          style={{ border: '2px solid transparent', borderTopColor: '#0e9aa7', borderRightColor: '#14b8a6' }}
        />
        {/* Middle ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-3 rounded-full"
          style={{ border: '1px solid rgba(14,154,167,0.2)' }}
        />
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-3xl"
          >
            🦷
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-display text-2xl font-bold gradient-text mb-2"
      >
        Sun Dental
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 text-sm font-body"
      >
        Loading your experience...
      </motion.p>

      {/* Progress bar */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </motion.div>
    </motion.div>
  );
}
