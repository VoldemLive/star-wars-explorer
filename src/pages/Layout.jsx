import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-yellow-400">
      <header>
        <Navbar></Navbar>
      </header>
      <section className="p-4 mb-auto items-start">
        <Outlet />
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Layout
