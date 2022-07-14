import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter, Route, Link ,Routes } from "react-router-dom";
import {Home} from "./page/home";
import {My} from "./page/my";
import {About} from "./page/about";
import {NotFound} from "./page/notFound";

import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              <div className='LinkContainer'>
                <Link to="/">홈</Link>
                <Link to="/my">내 정보</Link>
                <Link to="/about/1">자세히</Link>
              </div>
          </header>
          <main>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/my" element={<My/>}/>
              <Route path="/about/:id" element={<About/>}/>
              <Route path="/*" element={<NotFound/>}/>
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
