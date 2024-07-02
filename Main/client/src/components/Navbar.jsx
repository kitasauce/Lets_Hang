import { NavLink } from "react-router-dom"
import "../css/navstyles.css"

const Navbar = () => {
    return (

        <header className="navbar">
            <div className="navTitle">Lets Hang</div>
            <NavLink className="navItem" to="/login" id="login-link">Login</NavLink>
            <NavLink className="navItem" to="/signup" id="signup-link">Sign-up</NavLink>
        </header>
    );

}

export default Navbar