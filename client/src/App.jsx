import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./MainLayout"
import Home from "./Pages/Home"
import './App.scss'
import Shop from "./Pages/Shop"
import Details from "./Components/Details"
import Error from "./Pages/Error/404"
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/*" element={<Error/>} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
