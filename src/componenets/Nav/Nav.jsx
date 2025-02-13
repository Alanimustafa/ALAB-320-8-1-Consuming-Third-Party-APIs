import { Link } from "react-router-dom"
import "./Nav.css"


export default function Nav (props) {
    return (
        <>
        <nav>
            <Link className="links" to="/">Home Page</Link>
        </nav>
        </>
    )
}