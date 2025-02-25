import React from "react";
import { AllInterse } from "../App.js";

export default function Index({ data, setData ,err}) {
  const handleData = (e) => {
    if (e.target.checked) {
      setData((prevData) => {
        return {
          ...prevData,
          interest: [...prevData.interest, e.target.value],
        };
      });
    } else {
      setData((prevData) => {
        return {
          ...prevData,
          interest: prevData.interest.filter((i) => i != e.target.value),
        };
      });
    }
  };
  return (
    <div>
      <h1>Welcome to the interest Page</h1>
      {AllInterse.map((interest) => {
        return (
          <div>
            <input type="checkbox" value={interest} checked={data.interest.includes(interest)} onChange={handleData} />
            <label>{interest}</label> <br />
          </div>
        );
      })}
      {err.interest && <div>{err.interest} </div>}
    </div>
  );
}
