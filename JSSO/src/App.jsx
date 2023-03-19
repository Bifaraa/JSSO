import React from "react"
import { Carga } from "./components/Carga"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "./components/Login"
import { Escritorio } from "./components/Escritorio"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Carga />} />
        <Route path="/login" element={<Login />} />
        <Route path="/escritorio" element={<Escritorio />} />
      </Routes>
    </Router>
  )
}

export default App
