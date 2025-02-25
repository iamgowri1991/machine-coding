import React from "react";
import "../App.css";

export default function Index({ data , setData ,err }) {
  const { name, age } = data;

  const handleChange = (e) => {
        let  {  name, value } = e.target;
        setData((prevData)=>({...prevData,[name]:value}))
  }
  return (

    <div classname="profile">
      <div style={{margin:'20px'}}>
        <label>Name</label>
        <input name="name" value={name} type="text" onChange={handleChange}/>
        {err.name && <div>{err.name}</div>}
      </div>
      <div style={{margin:'20px'}}>
        <label>Age</label>
        <input name="age" value={age} type="text" onChange={handleChange}/>
        {err.age && <div>{err.age}</div>}
      </div>
    </div>
  );
}
