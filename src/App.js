// App.js
import React, { useState } from 'react';
import {  BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Observation from './Components/Observation';
import Landing from './Components/Landing';
import Tinting from './Components/Tinting-Banco';
import Login from './Components/Login';
import "./App.css"
function App() {
  const [token, setToken] = useState(true);
  const [user,setUser]=useState("");
  return (
    <Router>
        <>
          <Header />
          <Routes>
          
            <Route path="/" element={token ? <Landing /> : <Login setToken={setToken} setUser={setUser} />} />
            <Route path="/observation" element={token ?  <Observation username={user} />:<Login setToken={setToken} setUser={setUser} />} />
            <Route path="/landing" element={token ? <Landing username={user} />:<Login setToken={setToken} setUser={setUser} />} />
            <Route path="/tinting" element={token ?  <Tinting username={user} />:<Login setToken={setToken} setUser={setUser} />} />
          </Routes>
        </>
        </Router>
  );
}

export default App;