import React from "react";

export default function Index({ data, setData }) {
  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      theme: e.target.value,
    }));
  };
  return (
    <div>
      <h1>Welcome to the Settings Page</h1>
      <div>
        <label>Dark</label>
        <input type="radio" value="dark" checked={data?.theme === "dark"} onChange={handleChange} />
        <label>Light</label>
        <input type="radio" value="light" checked={data?.theme === "light"} onChange={handleChange} />
      </div>
    </div>
  );
}
