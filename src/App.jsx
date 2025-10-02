import './App.css'
// wrap entire app in routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import components
import Home from "./components/Home"
import Database from "./components/DatabasePage"
import FAQ from "./components/FAQ"
import AddDahlia from "./components/AddDahlia"
import About from "./components/About"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adddahlia" element={<AddDahlia />} />
          <Route path="/database" element={<Database />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
