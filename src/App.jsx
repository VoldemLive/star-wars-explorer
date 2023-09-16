import { Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Person from "./pages/Person"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="person/:id" element={<Person />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
