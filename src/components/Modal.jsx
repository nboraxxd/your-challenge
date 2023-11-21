import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

export default function Modal({ title, children, onClose }) {
  // khi Element là portal, muốn tạo animate cho nó khi exit thì wrap AnimatePresence ở nơi nó xuất hiện
  return createPortal(
    <>
      <motion.div exit={{ opacity: 0 }} className="backdrop" onClick={onClose} />
      <motion.dialog
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  )
}
