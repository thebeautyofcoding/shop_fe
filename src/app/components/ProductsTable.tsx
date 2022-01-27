import React, { useEffect, useState } from "react"
import "./productstable.css"
import { useQuery } from "@apollo/client"
import { GetProducts } from "../graphql/products/__generated__/GetProducts"
import { GET_PRODUCTS } from "./../graphql/products/queries"
import { useAppDispatch, useAppSelector } from "../hooks"
import { openModal } from "../redux/modal"
import Modal from "./Modal"
import Button from "./Button"
function ProductsTable() {
  const { loading, data, error } = useQuery<GetProducts>(GET_PRODUCTS)
  const [showModal, setShowModal] = useState(false)

  const dispatch = useAppDispatch()
  const onCreate = (): void => {
    setShowModal(!showModal)
    dispatch(openModal(true))
  }
  const onCancel = (): void => {
    setShowModal(!showModal)
    dispatch(openModal(false))
  }
  const onEdit = () => {}

  const onDelete = () => {}
  return (
    <div className="flex flex-col">
      <Modal />
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Select
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Photo
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Description
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Price
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Rating
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Number of Reviews
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.products.map((prod) => {
                  return (
                    <tr
                      className="border-b hover:bg-blue-100 cursor-pointer"
                      key={prod.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <input type="checkbox" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {prod.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {prod.image}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {prod.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {prod.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {prod.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {prod.rating}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {prod.numReviews}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <Button color="blue" onClick={onEdit}>
                          Edit
                        </Button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <Button color="red" onClick={onDelete}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className="flex justify-center mt-3">
              <Button color="green" onClick={(e) => onCreate()}>
                Create
              </Button>
              <div>
                <Button
                  color="red"
                  additionalClass="ml-1"
                  onClick={(e) => onCancel()}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsTable
