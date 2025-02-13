import SWAPI from "../../services/sw-api"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./HomePage.css"
import ShipPage from "../StarsShipCard/ShipPage"

export default function HomePage ({ships}) {
    const [allShips,setAllShips] = useState(ships)

   // console.log(`The ship ${allShips.name}`)
    return (
        <>
            <div className="allShipsDisplayContainer">
                 <Link className="shipdetailsLink" to='/ship' >
                    <div className="shipName"> 
                        {allShips.name}
                    </div>    
                 </Link>
            </div>
            
        </>
        
    )
}