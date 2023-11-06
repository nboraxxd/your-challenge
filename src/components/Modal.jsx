import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <motion.div
        className="backdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.dialog
        open
        className="modal"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  )
}
