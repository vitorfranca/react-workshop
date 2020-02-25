import React from 'react'
import Heading from 'YesterTech/Heading'
import StarRatings from './StarRatings'

export default function Product({ id, name, rating, ...props }) {
  return (
    <div>
      <Heading>{name}</Heading>
      <StarRatings rating={rating} />
      <div className="text-small">
        {Object.keys(props).map(propKey => (
          <div key={propKey}>
            {propKey}: {props[propKey]}
          </div>
        ))}
      </div>
    </div>
  )
}