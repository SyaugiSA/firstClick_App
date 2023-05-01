import React from "react";
import "./App.css";
import Sidebar from "./Components/SideBar Section/Sidebar";
import Body from "./Components/Body Section/Body";

import Top from "./Components/Body Section/Top Section/Top";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Body />
    </div>
  );
};

export default App;
