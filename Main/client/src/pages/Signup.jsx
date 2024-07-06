import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import "../css/signupstyles.css"
import { CREATE_SIGNUP } from "../utils/mutations"

const Signup = () => {

  
  const [formState, setFormState] = useState({
    
    first: '',
    last: '',
    username: '',
    password: '',
  });

  const [createSignup, { error, data }] = useMutation(CREATE_SIGNUP);

  const handleChange = (event) => {

    // console.log("This is event.target.name = ", event.target.name)
    // console.log("This is event.target.value = ", event.target.value)
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });

    
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await createSignup({
        variables: { ...formState },
      });

      Auth.login(data.createSignup.token);
    } catch (e) {
      console.error(e);
    }
  };
    return (
        <div className="container">
            <div className="card">
                <h2 className="loginFormHeading">Signup</h2>
                <form className="loginFormClass" onSubmit={handleFormSubmit}>
                    <input className="loginInput" type="text"  name="first" placeholder="First Name" onChange={handleChange}required />
                    <input className="loginInput" type="text"  name="last" placeholder="Last Name" onChange={handleChange}required />
                    <input className="loginInput" type="text"  name="username" placeholder="Username" onChange={handleChange}required />
                    <input className="loginInput" type="password" id="password" name="password" onChange={handleChange} placeholder="Password" required />
                    <button className="loginButton" type="submit">Signup</button>
                </form>
            </div>

        </div>
   
)
}
export default Signup