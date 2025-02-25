import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile/index";
import Interest from "./Interest/index";
import Setting from "./settings/index";
import React, { useState } from "react";

export const AllInterse = ["coding", "react", "Javascript", "map", "ts"];

function App() {
  const [data, setData] = useState({
    name: "test",
    age: "29",
    interest: ["coding", "react"],
    theme: "dark",
  });

  const [activeTab, setActivetab] = useState(0);
  const [err, setErr] = useState({});

  const profileValidation = () => {
    if (!data.name) {
      setErr({ name: "Name and Age are required" });

      return false;
    }
    if (!data.age) {
      setErr((preErr) => ({
        ...preErr,
        age: "Name and Age are required",
      }));
      return false;
    }
    return true;
  };

  const Tabs = [
    {
      title: "Profile",
      Component: Profile,
      validate: () => {
        const err = {};
        if (!data.name) {
          err.name = "Name and Age are required";
        }
        if (!data.age) {
          err.age = "Name and Age are required";
        }
        setErr(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      title: "Interest",
      Component: Interest,
      validate: () => {
        const err = {};
        if (data?.interest.length < 1) err.interest = "Please select at least one interests";
        setErr(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      title: "Setting",
      Component: Setting,
      validate: () => {
        return true;
      },
    },
  ];

  const updateTab = (index) => {
    setActivetab(index);
  };

  const validateBefore = () => {
    const validationRes = Tabs[activeTab].validate();
    if (!validationRes) {
      return false;
    } else {
      setActivetab((prevTab) => prevTab + 1);
    }
  };

  const ActiveComponent = Tabs[activeTab].Component;

  return (
    <div className="app">
      <div className="tabs-container">
        {Tabs.map((tab, index) => (
          <div key={index} className="tabs" onClick={() => updateTab(index)}>
            {tab?.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        <ActiveComponent data={data} setData={setData} err={err} />
      </div>
      <div className="navigation-buttons">
        <button disabled={activeTab === 0} onClick={() => updateTab(activeTab - 1)}>
          Prev
        </button>
        <button disabled={activeTab === Tabs.length - 1} onClick={validateBefore}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
