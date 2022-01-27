import React, { FC, useState } from "react"
import { ReactNode } from "react"
import { Link } from "react-router-dom"
import "./navbar.css"
import SearchBar from "./SearchBar"
import HamburgerIcon from "./HamburgerIcon"

const Navbar: FC = () => {
  return (
    <>
      <div className="navbar">
        <SearchBar />

        <div className="linkContainer">
          <Link to="/cart">Cart</Link>
        </div>

        <div className="linkContainer">
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="linkContainer">
          <Link to="/login">Login</Link>
        </div>
        <div className="linkContainer">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
