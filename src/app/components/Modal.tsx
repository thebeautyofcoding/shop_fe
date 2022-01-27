import React from "react"
import { useAppSelector } from "../hooks"
import { MdClose } from "react-icons/md"
import { useAppDispatch } from "./../hooks"
import { openModal } from "../redux/modal"
import { useRef, useEffect, useCallback } from "react"
import { useSpring, animated } from "react-spring"
import "./modal.scss"
import InputWithLabel from "./InputWithLabel"
import Button from "./Button"
const Modal = () => {
  const dispatch = useAppDispatch()
  const modalOpen = useAppSelector((state) => state.modal.open)
  const modalRef = useRef(null)
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: modalOpen ? 1 : 0,
    transform: modalOpen ? `translateY(0%)` : `translateY(-50%)`,
  })
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      dispatch(openModal(false))
    }
  }
  return (
    <div
      className={modalOpen ? "modalBackground" : ""}
      ref={modalRef}
      onClick={(e) => closeModal(e)}>
      <animated.div style={animation} className="z-10">
        <div className="bg-white px-10 py-5 flex justify-center border-2 border-gray-400   align-middle rounded-md shadow-black shadow-md ">
          {modalOpen && (
            <div className="flex flex-col justify-center align-middle">
              <InputWithLabel
                type="file"
                lableName="Product image"
                placeholder="Product image"
              />
              <InputWithLabel
                type="text"
                lableName="Name"
                placeholder="Name of the product"
              />

              <InputWithLabel
                type="text"
                lableName="Description"
                placeholder="Description"
              />

              <InputWithLabel
                type="text"
                placeholder="Price"
                lableName="Price"
              />

              <div className="flex align-middle justify-center my-2 ">
                <Button
                  color="green"
                  additionalClass="mr-1 "
                  onClick={() => dispatch(openModal(false))}>
                  Create
                </Button>
                <Button onClick={() => dispatch(openModal(false))} color="red">
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </animated.div>
    </div>
  )
}
export default Modal
