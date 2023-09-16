import React, { useState } from 'react';
import axios from "axios"
import "./Compo.css"

import { Link } from "react-router-dom";
function Register() {
  const [formData, setFormData] = useState({
    name:"",
    phone: "",
    email: "",
    password: "",
  });
  const [Server,setServer]=useState();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();

    console.log(formData);
    //axios.post("url",inputs) to send the data to the backend server
    axios.post(`https://akanksharma-node4handson.onrender.com/api/register`,formData)
      .then((res) => {
        console.log(res.data);
        setServer(res.data);
      })
      .catch((err) => {
        console.log(err);
  });
  }
  return (
    <div className="auth-container">
        <div className="intro-text">
      <h1>Look Like You're New Here! </h1>
      <h4 >Register Yourself with your Details to get started</h4>
        
        </div>
      <form className="formContainer" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Name" onChange={handleInputChange} required />
        <label htmlFor="contact">Phone No.</label>
        <input type="text" name="phone" placeholder="Phone" onChange={handleInputChange} required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
        <label htmlFor="email">Email</label>
        <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
        
        <button  className="btn-submit" type="submit">Register</button>
        <h4>Already Have an account?</h4>
        <Link to="/Login"> Login Here</Link>
        {Server === undefined ? "" : <div>{Server.msg}</div>}
      </form>
      
    </div>
  );
}

export default Register;

