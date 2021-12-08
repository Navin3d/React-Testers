import React, { useState, useEffect } from "react";
import axios from "axios";

import DotLoader from "react-spinners/DotLoader";
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
      const response = await axios.get("http://3.17.135.71:8080/api/plan/get_all_plans/");
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
      {loading && <DotLoader color="red" loading={loading} size={50} />}
      {plans.map(plan => (<div key={plan.id}>{`${plan.description}`}</div>))}

      {error !== "" && `${error}`}
    </div>
  );
}

export default App;
