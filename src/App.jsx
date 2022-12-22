import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Screens/Home/Home";
import Aboutus from "./Screens/Aboutus/Aboutus";
import Advance_Search from "./Screens/Advanve_Search/Advance_Search";
import News from "./Screens/News/News";
import Contactsus from "./Screens/ContactUs/Contactsus";

function App() {
  return (
    // <h1>jsds</h1>
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/aboutus"} element={<Aboutus />} />
          <Route path={"/news"} element={<News />} />
          <Route path={"/contact-us"} element={<Contactsus />} />
          <Route path={"/advanceSearch"} element={<Advance_Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
