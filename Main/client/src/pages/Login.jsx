import { useState } from "react"
import "../css/loginstyles.css"
import { LOGIN_USER } from "../utils/mutations"
import { useMutation } from "@apollo/client"
import Auth from '../utils/auth';


const Login = () => {

    const [formState, setFormData] = useState(
        {
            username: "",
            password: ""
        }
    )


    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData(
            {
                ...formState,
                [name]: value,
            }
        );
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await login({
                variables: { ...formState },
            });
            console.log("This is data ==== ",data);
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
    };




    return (
        <div className="container">
            <div className="card">
                <h2 className="loginFormHeading">Login</h2>
                <form className="loginFormClass" onSubmit={handleFormSubmit}>
                    <input className="loginInput" type="text" id="username" name="username" placeholder="Username" required onChange={handleChange} />
                    <input className="loginInput" type="password" id="password" name="password" placeholder="Password" required onChange={handleChange} />
                    <button className="loginButton" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login