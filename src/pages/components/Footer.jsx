import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <section id="footer">
      <div className="footer">
        <div className="footer-nav-links">
          <Link to="/">HOME</Link>
          <Link to="/our-story">OUR STORY</Link>
          <Link to="/menu">MENU</Link>
        </div>

        <div className="socials-div">
          <a href="https://www.facebook.com/cafepedia.ng" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className="socials"></FontAwesomeIcon>
          </a>
          <a href="https://instagram.com/cafepedia.ng?igshid=NDc0ODY0MjQ=" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="socials"></FontAwesomeIcon>
          </a>
          <a target="_blank" href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FK6NUOPQV7HDYJ1&e=ATPTV7jo0TvTEFbQJDuWSz7_PpSF13qL43YdFrvoHme9dp4QkXRbRxga9AwA984-nY9wTd8IPzvAaIt4yBVjQOE&s=1">
            <FontAwesomeIcon icon={faWhatsapp} className="socials"></FontAwesomeIcon>
          </a>
        </div>
        <p>
          <FontAwesomeIcon icon={faPhone} className="socials phone"></FontAwesomeIcon>
          +2349020172215. <span>8.00 am - 10.00 pm</span>
        </p>
        <p className="copyright">Copyright © {year} Cafépedia. All Rights Reserved.</p>
      </div>
    </section>
  );
}
