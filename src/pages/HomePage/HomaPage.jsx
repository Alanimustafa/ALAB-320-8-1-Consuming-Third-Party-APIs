import SWAPI from "../../services/sw-api"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./HomePage.css"

export default function HomePage ({ship}) {
    const [allShips,setAllShips] = useState(ship)

    console.log(allShips)
    return (
        <>
            <div className="allShipsDisplayContainer">
                 <Link className="shipdetailsLink" to='/ship'>
                    <div className="shipName"> 
                        {ship.name}
                    </div>    
                 </Link>
            </div>
            
            
        </>
        
    )
}