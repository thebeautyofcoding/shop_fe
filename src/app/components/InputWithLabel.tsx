import React from "react"
import { FC } from "react"

interface IInputProps {
  lableName: string
  placeholder: string
  type: string
}
const InputWithLabel: FC<IInputProps> = (props) => {
  const labelFor = props.lableName.toLowerCase()
  return (
    <>
      <label htmlFor={labelFor}>{props.lableName}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={labelFor}
        className="bg-gray-200 rounded p-1 outline-none"
      />
    </>
  )
}

export default InputWithLabel
