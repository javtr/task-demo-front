import React, { Component } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/home';
import Login from './components/forms/login';
import Signup from './components/forms/signup';



class App extends Component {
  render() {
    return (
      <div>
      <Routes>
				// 1. ruta raiz -----------------------------
        <Route path="/" element={<Home>Home</Home>} />

				// 2. ruta normal -----------------------------
        <Route path="/login" element={<Login>Login</Login>} />
        <Route path="/signup" element={<Signup>Sign up</Signup>} />

				// 3. ruta not found -----------------------------
        <Route path="*" element={<h2>404 - not found</h2>} />
      </Routes>
    </div>
    );
  }
}

export default App;
