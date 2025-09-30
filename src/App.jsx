import './App.css'
// wrap entire app in routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <h1>Hello</h1>
        <Routes>
          <Route path="/database" element={<Database />} />
          <Route path="FAQ" element={<FAQ/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
