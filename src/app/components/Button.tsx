import React, { FC } from "react"

export interface IButtonProps {
  children: string
  color: string
  onClick: (e: any) => void
  additionalClass?: string
}

const Button: FC<IButtonProps> = (props) => {
  "  text-white p-1 rounded mr-2 "
  let classes = props.additionalClass + " text-white p-1 rounded "
  if (props.color === "green") {
    classes += " bg-green-700  hover:bg-green-600"
  }
  if (props.color === "red") {
    classes += "bg-red-600 hover:bg-red-500"
  }
  if (props.color === "blue") {
    classes += "bg-blue-600 hover:bg-blue-500"
  }
  return (
    <button onClick={props.onClick} className={classes}>
      {props.children}
    </button>
  )
}

export default Button
