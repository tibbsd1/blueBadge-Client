import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import ModalExample from "./Components/ModalExample";
import Feed from "./Components/Feed";
import {
  BrowserRouter as Router,
  } from 'react-router-dom';
import FeedNavi from "./Components/FeedNavi";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const updateToken = newToken => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const protectedViews = () => {
    return localStorage.getItem("token") === sessionToken ? (
      <Router><FeedNavi clickLogout={clearToken} token={sessionToken} /></Router>
    ) : (
      <div>
        <ModalExample updateToken={updateToken} />
        <div className="App-home">
          <Home updateToken={updateToken} />
        </div>
      </div>
    );
  };

  return <div className="App">{protectedViews()}</div>;
}

export default App;
