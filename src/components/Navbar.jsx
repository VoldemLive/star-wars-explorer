import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex font-bold text-black bg-yellow-400 rounded m-4 p-3">
      <NavLink to="/">
        <div className="p-2 border rounded border-white/0 hover:border hover:border-black">
          Home
        </div>
      </NavLink>
      <NavLink to="/">
        <div className="p-2 border rounded border-white/0 hover:border hover:border-black">
          About
        </div>
      </NavLink>
    </nav>
  )
}

export default Navbar
