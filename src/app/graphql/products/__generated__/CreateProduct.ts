/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateProduct
// ====================================================

export interface CreateProduct_createProduct {
  __typename: "Product";
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  brand: string;
}

export interface CreateProduct {
  createProduct: CreateProduct_createProduct;
}

export interface CreateProductVariables {
  name: string;
  description: string;
  price: number;
  image: string;
  brand: string;
}
