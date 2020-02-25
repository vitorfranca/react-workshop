import React, { useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import 'YesterTech/Quantity.scss'

function Quantity() {
  const [quantity, setQuantity] = useState(1)
  const increaseQuantity = () => setQuantity(quantity+1)
  const decreaseQuantity = () => setQuantity(quantity-1)

  return (
    <div className="quantity-picker">
      <div>
        <div>
          <button type="button" className="icon-button" onClick={decreaseQuantity}>
            <FaMinusCircle />
          </button>
        </div>
        <div className="input-container">
          <input type="text" 
            aria-label="quantity" 
            value={quantity}
            defaultValue={quantity} 
            onChange={e=> setQuantity(parseInt(e.target.value))}
          />
        </div>
        <div>
          <button type="button" className="icon-button" onClick={increaseQuantity}>
            <FaPlusCircle />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Quantity
