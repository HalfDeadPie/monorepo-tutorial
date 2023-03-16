import React from "react";
import logo from "./logo.svg";
import "./App.css";
import _ from "lodash";
import { QueryPayload } from "@my-namespace/simple-shared-data";
import DarkMode from './react-dark-mode/src/DarkMode';
import HomePage from "./home/HomePage";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import EventsPage from "./events/EventsPage";
import EventPage from "./events/EventPage";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="sticky">
          
          <span className="logo">
            <img src="/logo512.png" alt="logo" width="50" height="50" />
          </span>
          
          <NavLink to="/"  className="button rounded">
            <span className="icon-home"></span>
            Home
          </NavLink>
        

          <NavLink to="/events" className="button rounded">
            Events
          </NavLink>

          <div className="button rounded">
            <DarkMode />
          </div>


        </header>
        
        <div className="container">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/event/:id" element={<EventPage />} />

          </Routes>
        </div>
      
      </div>
    </Router>
  );
}

export default App;
