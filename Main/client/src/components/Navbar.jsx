import { NavLink } from "react-router-dom"
import "../css/navstyles.css"

const Navbar = () => {
    return (

        <header className="navbar">
            <div className="navTitle">     <img src='https://i.etsystatic.com/27832863/r/il/235ba8/4020975763/il_fullxfull.4020975763_8slx.jpg' height={50} width={50}></img> <NavLink to='/'>Lets Hang</NavLink></div>
            <NavLink className="navItem" to="/login" id="login-link">Login</NavLink>
            <NavLink className="navItem" to="/signup" id="signup-link">Sign-up</NavLink>

            <NavLink className="navItem" to="/feed" id="feed-link">Activities</NavLink>
        </header>
    );
}

export default Navbar