import { NavLink } from "react-router-dom"
import "../css/footer.css"

const Footer = () => {
    return (

        <footer className="footer">
            <div className="footerTitle">Lets Hang</div>
            <NavLink className="footerItem" to="/login" id="login-link">Login</NavLink>
            <NavLink className="footerItem" to="/signup" id="signup-link">Sign-up</NavLink>
        </footer>
    );

}

export default Footer