import { useState } from 'react'
import { motion } from 'framer-motion'
import './Playround.css'

export default function Playground() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [rotate, setRotate] = useState(0)

  return (
    <div id="demo">
      <motion.div animate={{ x, y, rotate }} id="box" />

      <div id="inputs">
        <p>
          <label htmlFor="x">X</label>
          <input type="number" id="x" onChange={(e) => setX(+e.target.value)} />
        </p>

        <p>
          <label htmlFor="y">Y</label>
          <input type="number" id="y" onChange={(e) => setY(+e.target.value)} />
        </p>

        <p>
          <label htmlFor="rotate">Rotate</label>
          <input type="number" id="rotate" onChange={(e) => setRotate(+e.target.value)} />
        </p>
      </div>
    </div>
  )
}
