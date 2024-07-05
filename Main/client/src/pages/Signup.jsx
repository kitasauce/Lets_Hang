import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import "../css/signupstyles.css"

import { CREATE_SIGNUP } from "../utils/mutations"




const Signup = () => {
  const [formState, setFormState] = useState({
    
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };









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