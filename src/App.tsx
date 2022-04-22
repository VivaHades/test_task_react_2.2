import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FC } from "react"

import "./App.scss"

import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import Results from "./pages/Results/Results"
import ContactUs from "./pages/ContactUs/ContactUs"
import About from "./pages/About/About"

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result" element={<Results />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
