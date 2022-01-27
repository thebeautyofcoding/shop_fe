import React from "react"
import { Product } from "./ProductList"
import Rating from "./Rating"

function ProductItem({ product }: { product: Product }) {
  return (
    <div className="productItem">
      <div className="imageContainer">
        <img
          src="https://via.placeholder.com/150"
          className="cardImage"
          alt={product.name}
        />
      </div>
      <div className="font-bold">{product.name}</div>
      <div>{product.rating}</div>
      <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      <div>{product.price}</div>
    </div>
  )
}

export default ProductItem
