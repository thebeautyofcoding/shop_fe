import React, { FC, ReactNode } from "react"
import { useState } from "react"

// interface FuncProps {
//   onClickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
//   children?: ReactNode
// }
const HamburgerIcon: FC = () => {
  const [isOpen, setOpen] = useState(false)
  function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setOpen(!isOpen)
  }
  const genericHamburgerLine = `flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center`
  return (
    <button className="" onClick={onClick}>
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  )
}
export default HamburgerIcon
