import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register.jsx"
import LogIn from "./pages/LogIn.jsx"
import LogOut from "./pages/LogOut.jsx"
import Desc from "./pages/Desc.jsx"
import Home from "./pages/Home.jsx"

export default function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/log-out" element={<LogOut />} />
      <Route path="/desc" element={<Desc />} />

    </Routes>
  </BrowserRouter>
}
