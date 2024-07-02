import "../css/signupstyles.css"

const Signup = () => {
    return (
        <div className="container">
            <div className="card">
                <h2 className="loginFormHeading">Signup</h2>
                <form className="loginFormClass">
                    <input className="loginInput" type="text" id="username" name="username" placeholder="First Name" required />
                    <input className="loginInput" type="text" id="username" name="username" placeholder="Last Name" required />
                    <input className="loginInput" type="text" id="username" name="username" placeholder="Username" required />
                    <input className="loginInput" type="password" id="password" name="password" placeholder="Password" required />
                    <button className="loginButton" type="submit">Signup</button>
                </form>
            </div>
        </div>
    )
}
export default Signup