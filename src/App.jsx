import './App.css'
// wrap entire app in routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import components
import Home from "./components/Home"
import Database from "./components/Database"
import FAQ from "./components/FAQ"
import Add from "./components/AddDahlia"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adddahlia" element={<Add />} />
          <Route path="/database" element={<Database />} />
          <Route path="FAQ" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
