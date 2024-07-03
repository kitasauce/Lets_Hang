import { FaGithub } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import "../css/footer.css"

const Footer = () => {
    return (

        <footer className="footer">
            <div className="footerTitle">Lets_Hang © 2024</div>
            <div className="contactlinks" id="h2">

                {/* <a href="tel:+1 201-776-9254"><FaPhone/>Phone</a>
                <a href="mailto: katvela@gmail.com"><MdEmail/>Email</a> */}
                <a href="https://github.com/kitasauce/Lets_Hang" target= "_blank"><FaGithub/>GitHub </a>

            </div>
        </footer>
    );

}

export default Footer