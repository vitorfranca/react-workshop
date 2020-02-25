import React, { useState, useEffect } from 'react'
import ProductFilters from 'YesterTech/ProductFilters'

function ProductsSidebar() {
  const query = `(min-width: 860px)`
  const [isWide, setWide] = useState(window.matchMedia(query).matches)

  // subscribe to media query
  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = (e) => setWide(e.matches)
    media.addListener(listener)
    if (media.matches) setWide(true)
    return () => media.removeListener(listener)
  }, [query])

  return isWide && (
    <aside>
      <ProductFilters />
    </aside>
  )
}

export default ProductsSidebar
