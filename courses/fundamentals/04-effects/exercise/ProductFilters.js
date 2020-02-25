import React, { useState, useEffect } from 'react'
import ProductFilterList from 'YesterTech/ProductFilterList'
import { getCategories } from './utils'

function ProductFilters() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    let isCurrent = true

    getCategories().then(c => {
      if (isCurrent) setCategories(c)
    })

    return () => (isCurrent = false)
  }, [])

  if (!categories || !categories.length)
    return <div>Loading Filters...</div>

  return (
    <div className="spacing">
      <ProductFilterList list={categories} urlKey="categories" label="Categories" />
    </div>
  )
}

export default ProductFilters
