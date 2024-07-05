import "../css/loginstyles.css"

const Login = () => {







    
    return (
        <div className="container">
            <div className="card">
                <h2 className="loginFormHeading">Login</h2>
                <form className="loginFormClass">
                    <input className="loginInput" type="text" id="username" name="username" placeholder="Username" required />
                    <input className="loginInput" type="password" id="password" name="password" placeholder="Password" required />
                    <button className="loginButton" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login