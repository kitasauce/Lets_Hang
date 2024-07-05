import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import "../css/signupstyles.css"
import { CREATE_SIGNUP } from "../utils/mutations"

const Signup = () => {
    const [first, setFirst] = useState()
    const [last, setLast] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('mongodb://127.0.0.1:27017/letshang', {first, last, username, password}) 
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    
  return (
    <div className="container">
        <div className="card">
            <h2 className="loginFormHeading">Signup</h2>
            <form className="loginFormClass" onSubmit={handleSubmit}>
                <input className="loginInput" type="text" id="username" name="username" placeholder="First Name" required 
                onChange={(e) => setFirst(e.target.value)} />

                <input className="loginInput" type="text" id="username" name="username" placeholder="Last Name" required 
                onChange={(e) => setLast(e.target.value)}/>

                <input className="loginInput" type="text" id="username" name="username" placeholder="Username" required 
                onChange={(e) => setUsername(e.target.value)}/>

                <input className="loginInput" type="password" id="password" name="password" placeholder="Password" required 
                onChange={(e) => setPassword(e.target.value)}/>
                <button className="loginButton" type="submit">Signup</button>
            </form>
        </div>
    </div>
)
}
export default Signup