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
function App() {


  return (
    <>
      <div className="app-container ">
        <ScrollIndicator />
        <Header />
        <br />
        <br />
        <br />
        <br />
        <BackToTop />{" "}
        <Routes>
          <Route path="/React-Apple" element={<HomeApple />} exact />
          <Route path="/user" element={<Login />} exact />
          <Route path="/4" element={<LoginQR />} exact />
          <Route path="/5" element={<LoginwithEmail exact />} />
          <Route path="/10" element={<LoginwithEmail1 exact />} />
          <Route path="/SignUp" element={<SignUp />} exact />
          <Route path="/SignUpWithSDT" element={<SignUpWithSDT />} exact />
          <Route path="/SignUpWithEmail" element={<SignUpWithEmail exact />} />
          <Route path="/About" element={<Xiaomi />} exact />
        </Routes>
      </div>
    </>
  );
}

export default App;
