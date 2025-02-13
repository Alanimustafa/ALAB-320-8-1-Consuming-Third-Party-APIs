import SWAPI from "../../services/sw-api"
import { useState } from "react"
import { Link } from "react-router-dom"


export default function ShipPage (props) {

    const [currentShip, setCurrentShip] = useState(null)
    return (
        <>
        <div className="shippageContainer">
            <h1 className="shippageHeader">Space War Ship Page</h1>
        </div>
        </>
    )
}