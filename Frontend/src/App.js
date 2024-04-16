import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../src/Pages/Home/home"
import { GlobalStyle } from "./App_style"

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
