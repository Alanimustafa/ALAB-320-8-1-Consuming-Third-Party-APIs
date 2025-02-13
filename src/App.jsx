import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomaPage"
import ShipPage from "./pages/StarsShipCard/ShipPage"
import Nav from "./componenets/Nav/Nav"
import SWAPI from "./services/sw-api"
import "./index.css"


function App() {

  return (
    <>
    <div className="appHeaderContainer">
      <h1 className="appMainHeader">STAR WARS STARSHIPS</h1>
    </div>
    <Nav/>
    <Routes>
      <Route path="/" element={<SWAPI/>}></Route>
      <Route path="/ship" element={<ShipPage/>}></Route>
    </Routes>

    </>
  )
}

export default App
