import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({name, id}) => {

  
  
  return (
    <div>
      <div>product{name} </div>
      <button><Link to={`/codsoft-ecom/product/${id}`}>Detail</Link></button>
    </div>
  )
}

export default ProductItem
