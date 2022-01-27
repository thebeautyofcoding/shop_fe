import React from "react"
import ProductItem from "./ProductItem"
import { GetProducts_products } from "./../graphql/products/__generated__/GetProducts"
export interface Product {
  id: number
  name: string
  rating: number
  numReviews: number
  price: number
  image: string
}

function ProductList({
  products,
}: {
  products: GetProducts_products[] | undefined
}) {
  return (
    <ul className="productList">
      {products &&
        products.map((prod) => {
          return (
            <li key={prod.id}>
              <ProductItem product={prod} />
            </li>
          )
        })}
    </ul>
  )
}

export default ProductList
