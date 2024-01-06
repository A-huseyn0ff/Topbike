import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./MainLayout"
import Home from "./Pages/Home"
import './App.scss'
import Shop from "./Pages/Shop"
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
