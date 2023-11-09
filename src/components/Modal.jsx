import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <motion.div
        className="backdrop"
        onClick={onClose}
        variants={{
          hidden: { opacity: 0, visibility: 'hidden' },
          visible: { opacity: 1, visibility: 'visible' },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      />
      <motion.dialog
        open
        className="modal"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  )
}
