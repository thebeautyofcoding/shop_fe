import { gql } from "@apollo/client"

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      name
      id
      price
      description
      image
      rating
      numReviews
    }
  }
`

export const CREATE_PROUCT = gql`
  mutation CreateProduct(
    $name: String!
    $description: String!
    $price: Int!
    $image: String!
    $brand: String!
  ) {
    createProduct(
      input: {
        name: $name
        description: $description
        price: $price
        image: $image
        brand: $brand
      }
      file: { image: $image }
    ) {
      id
      name
      image
      description
      price
      brand
    }
  }
`
