import logo from './logo.svg';
import './App.scss';

import Header from './components/Header'
import Container from 'react-bootstrap/Container';
import HomeApple from './components/Apple';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";
import Login from './components/Login';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import LoginQR from './components/LoginwithQR';
import LoginwithEmail from './components/LoginwithEmail';
import LoginwithEmail1 from './components/LoginwithEmail1';
import SignUp from './components/SignUp';
import SignUpWithSDT from './components/SignUpWithSDT';
import SignUpWithEmail from './components/SignUpWithEmail';
import BackToTop from './components/backtotop';
import Xiaomi from './components/Xiaomi';
import ScrollIndicator from './components/ScrollIndicator';
import CompFooter from "./components/CompFooter";
function App() {


  return (
    <>
      <div className="app-container ">
        <ScrollIndicator />
        <Header />
        <div className="mt-5 pt-5"></div>
        <Routes>
          <Route path="/" element={<HomeApple />} />
          <Route path="/user" element={<Login />} />
          <Route path="/4" element={<LoginQR />} />
          <Route path="/5" element={<LoginwithEmail />} />
          <Route path="/10" element={<LoginwithEmail1 />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignUpWithSDT" element={<SignUpWithSDT />} />
          <Route path="/SignUpWithEmail" element={<SignUpWithEmail />} />
          <Route path="/About" element={<Xiaomi />} />
        </Routes>
        <CompFooter />
      </div>
    </>
  );
}

export default App;
