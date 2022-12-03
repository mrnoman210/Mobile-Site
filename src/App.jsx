import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Screens/Home/Home";
import Aboutus from "./Screens/Aboutus/Aboutus";

function App() {

  return (
    // <h1>jsds</h1>
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/aboutus"} element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
