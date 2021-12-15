import React, { useState, useEffect } from "react";
import axios from "axios";

import ClockLoader from "react-spinners/ClockLoader";
import './App.css';

function App() {
  const [plans, setPlan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      // const response = await axios.get("http://3.17.135.71:8080/api/plan/get_all_plans/");

      const headers = {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5NDQyODA3MjE3IiwiZXhwIjoxNjQwMjc2MTc5LCJpYXQiOjE2Mzk0MTIxNzl9.Y0xjcw3MzbpUDisTPmwmOKW5EjP7XGcLM7cQJuC7sQI"
      }

      // const response = await axios.get("http://localhost:8000/fitness/getexerciselistfor7days?date=2021-09-11&user_id=9442807217", { headers });

      // const response = await axios.get("http://3.17.135.71:8080/getuser", { headers });

      const response = await axios.get("http://3.17.135.71:8000/api/questions/get_questions?sports=1002", { headers });

      await setPlan(response.data);
      console.log("Response: ", JSON.stringify(response.data));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <ClockLoader color="red" loading={loading} size={500} />
      {/* {plans.map(plan => (<div key={plan.id}>{`${plan.description}`}</div>))} */}

      {error !== "" && `${error}`}
    </div>
  );
}

export default App;
