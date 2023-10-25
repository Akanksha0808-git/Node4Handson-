
import React, { useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`https://akanksharma-node4handson.onrender.com/api/dashboard`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <div style={dashboardStyle}>
      <h5>Hey, this is your dashboard</h5>
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
  Backgroundcolor:"yellow",
  textAlign: "center",
  padding: "20px",
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

