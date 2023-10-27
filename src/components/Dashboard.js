import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navi=useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if(token){
      axios.get(`https://handson-4-node.onrender.com/api/dashboard`, {
        headers: { "Authorization":`Bearer ${token }`}
      })
      .then((res) => {
        console.log(res.data);
      
      })
      .catch((err) => {
        console.log(err);
      });}
      else{
        navi("/login")
      }
  },[token,navi]);
  
  const handleClick=()=>{
    localStorage.removeItem('token');
    navi('/login')
  }
  return (
    <div>
      <h1 style={dashboardStyle}>Hey !!!this is your dashboard</h1>
      <div style={btn}><button  onClick={handleClick}>LogOut</button></div>
      <div style={gifContainerStyle}>
      <img
          src="https://cdn.svgator.com/images/2022/11/Chart-run-cycle.gif"
          alt="Running Chart"
          style={gifStyle}
        />
      </div>
    </div>
  );
}
const dashboardStyle = {
 
  color:"black",
  textAlign: "center",
  padding: "20px",
};
const btn={
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
};
const gifContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const gifStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
};
export default Dashboard;




