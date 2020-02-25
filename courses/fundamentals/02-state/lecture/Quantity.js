import React from 'react'
import ReactDOM from 'react-dom'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import 'YesterTech/Quantity.scss'

export default function Quantity() {
  const [quantity, setQuantity] = useState(0)
  const [error, setError] = useState(null)

  const increateQuantity = () => setQuantity(quantity + 1)
  const decreateQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1)
    else setError('😠You must not have a negative amount in your cart! 😠')
  }

  return (
    <div className="quantity-picker">
      <span>
        <button type="button" className="icon-button" onClick={decreateQuantity}>
          <FaMinusCircle />
        </button>
      </span>
      <span className="input-container">{quantity}</span>
      <span>
        <button type="button" className="icon-button" onClick={increateQuantity}>
          <FaPlusCircle />
        </button>
      </span>
      {error && (
        <marquee scrollamount={15}>
          <font size={5} color="red">{error}</font>
        </marquee>
      )}
    </div>
  )
}

/**
 * How hooks works in the background
 */
const states = []
let callCount = -1

function useState(initialValue) {
  const id = ++callCount
  if (id < states.length) return states[id]

  function setValue(value) {
    states[id][0] = value
    rerender()
  }

  const tuple = [initialValue, setValue]
  states.push(tuple)

  return tuple
}

function rerender() {
  callCount = -1
  ReactDOM.render(<Quantity />, document.getElementById('root'))
}
rerender()