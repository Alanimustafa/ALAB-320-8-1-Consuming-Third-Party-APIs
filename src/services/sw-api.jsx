import axios from "axios";
import { useEffect, useState } from "react";
import HomePage from "../pages/HomePage/HomaPage";
import ShipPage from "../pages/StarsShipCard/ShipPage";
import "./sw-api.css"

export default function SWAPI (props) {
    const [allShips, setAllShips] = useState([])
    

    useEffect(() => {
        async function getAllShipsData () {
        try {
            const api_url = "https://swapi.dev/api/starships/"
            const allShipsData = await axios.get(api_url)
            console.log(allShipsData.data.results)
            setAllShips(allShipsData.data.results)
        } catch (error) {
          console.error(error);
        }
    }
        getAllShipsData();
    }
    ,[])

    return (
        <>
            <div className="allShipsDataContainer">
                {allShips.map((ships, name) => (
                    <HomePage key={name} ships={ships} />
                ))}

            </div>

        </>
    )
}