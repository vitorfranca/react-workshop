import React from 'react'
import ReactDOM from 'react-dom'
import 'YesterTech/StarRatings.scss'
import 'YesterTech/styles/center-lesson.scss'
import Product from './Product'

const products = [
  { id: 1, name: 'Mario Kart', rating: 5, brand: 'Nintendo', condition: 'new' },
  { id: 2, name: 'Donkey Kong', rating: 3.5, brand: 'Nintendo', condition: 'good' },
  { id: 3, name: 'Nintendo NES', rating: 4, brand: 'Nintendo', condition: 'fair' },
]

function BrowseProducts() {
  return <div>
    {products.map(({ id, ...product }) =>
      <Product key={id} {...product} />
    )}
  </div>
}

ReactDOM.render(<BrowseProducts />, document.getElementById('root'))
