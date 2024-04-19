import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../src/Pages/Home/home"
import { RegisterEmployee } from "./Pages/Register/registerEmployee"
import { GlobalStyle } from "./App_style"

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
