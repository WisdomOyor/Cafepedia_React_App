import React from 'react';
import logo from '../../../Pictures/logo.png';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function NavBar() {
  return (
      <nav className="App-header">
        <img src={logo} className="App-logo left" alt="logo" />
        <hr></hr>
        <ul>
          <li className="App-link right">
            <Link to="/">HOME</Link>
          </li>
          <li className="App-link right">
          <Link to="/our-story">OUR STORY</Link>
          </li>
          <li className="App-link right">
          <Link to="/menu">MENU</Link>
          </li>
          <li className="App-link right last-a-tag">
            <HashLink smooth to='/#footer' >CONTACT</HashLink>
          </li>
        </ul>
        <hr></hr>
      </nav>
  );
}






