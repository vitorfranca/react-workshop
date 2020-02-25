import React from 'react'
import ReactDOM from 'react-dom'
import { FaRegStar, FaStar } from 'react-icons/fa'
import './styles.scss'

// let's go
// const reactElement = <div>Hello James</div>
const Button = ({ children }) => (
  <button className="render_button">
    <FaStar/>
    {children}
    <FaStar/>
  </button>
)
const reactElement = React.createElement(
  'button',
  { 
    className: 'render_button',
    style: {
      color: 'aliceblue',
      backgroundColor: 'cornflowerblue',
      border: '5px solid currentColor',
      boxShadow: '-2px 3px 6px skyblue'
    }
  },
  'Hello',
)
const domElement = document.getElementById('root')

ReactDOM.render(
  <div>
    {reactElement} 
    <Button>React</Button>
  </div>,
  domElement,
)
