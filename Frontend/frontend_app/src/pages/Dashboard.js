import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { ACCESS_TOKEN } from "../constants";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/userdetails")
      .then((res) => setData(res.data));
  }, []);

  console.log(data);

  const mapped = data.map((i) => (
    <tr key={i.id}>
      <td>{i.name}</td>
      <td>{i.username}</td>
      <td>{i.email}</td>
    </tr>
  ));

  return (
    <div>
      <Header />
      <h2>Admin Dashboard</h2>
      <table align="center" border="2px">
        <thead>
          <tr>
            <th>name</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{mapped}</tbody>
      </table>
    </div>
  );
};

export default Dashboard;
