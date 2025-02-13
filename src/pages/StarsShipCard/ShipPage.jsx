import SWAPI from "../../services/sw-api"
import { useState } from "react"
import { Link } from "react-router-dom"
import HomePage from "../HomePage/HomaPage"


export default function ShipPage ({ship}) {
    const [currentShip, setCurrentShip] = useState(ship)

    // console.log(currentShip);
    return (
        <>
        <div className="shippageContainer">
            <h1 className="shippageHeader">Space War Ship Page</h1>
            <h3>Name :</h3>
            <h4>Model :</h4>
            <h4>Manufacturer :</h4>
            <h4>Class : </h4>
        </div>
        </>
    )
}