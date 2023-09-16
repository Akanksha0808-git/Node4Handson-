import axios from "axios";
import React, { useEffect } from "react";

function Dashboard() {
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios.get(`https://akanksharma-node4handson.onrender.com/api/dashboard`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <h5>this is dashboard</h5>
    </div>
  );
}

export default Dashboard;
