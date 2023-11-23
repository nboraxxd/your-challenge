import { motion } from 'framer-motion'

export default function Badge({ caption }) {
  return (
    <motion.span className="badge" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.4, delay: 0.2 }}>
      {caption}
    </motion.span>
  )
}
