import React, { Component } from 'react'
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <h1>Login & Register with React.js</h1>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />}>
  </Route>
        </Routes>
     </Router>
    </div>
  );
}
  
export default App;