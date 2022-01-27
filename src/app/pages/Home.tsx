import { useQuery } from "@apollo/client"
import React from "react"
import { useEffect } from "react"
import ProductList from "../components/ProductList"
import { GET_PRODUCTS } from "../graphql/products/queries"
import { GetProducts } from "../graphql/products/__generated__/GetProducts"
import { setProducts } from "../redux/post"
import { useAppDispatch } from "./../hooks"

function Home() {
  const { loading, data, error } = useQuery<GetProducts>(GET_PRODUCTS)
  console.log(data)
  useEffect(() => {}, [])
  return (
    <div>
      <ProductList products={data && data.products} />
    </div>
  )
}

export default Home
