import React from "react"

import Navbar from "./app/components/Navbar"
import Home from "./app/pages/Home"
import HamburgerIcon from "./app/components/HamburgerIcon"
import Dashboard from "./app/pages/Dashboard"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
