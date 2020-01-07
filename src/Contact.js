import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaEnvelope,
  FaMobileAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Projects() {
  const [showMenu, toggleMenu] = useState(false);
  const navItems = document.querySelectorAll('.menu-nav__item');

  const handleClick = () => {
    const hamburger = document.querySelector('.menu-btn__burger');
    const nav = document.querySelector('.nav');
    const menuNav = document.querySelector('.menu-nav');

    if (!showMenu) {
      toggleMenu(true);
      hamburger.classList.add('open');
      nav.classList.add('open');
      menuNav.classList.add('open');

      navItems.forEach(item => {
        item.classList.add('open');
      });
    } else {
      toggleMenu(false);
      hamburger.classList.remove('open');
      nav.classList.remove('open');
      menuNav.classList.remove('open');

      navItems.forEach(item => {
        item.classList.remove('open');
      });
    }
  };

  return (
    <div>
      <header>
        <button type='button' onClick={handleClick}>
          <div className='menu-btn'>
            <span className='menu-btn__burger' />
          </div>
        </button>

        <nav className='nav'>
          <div className='menu-nav'>
            <li className='menu-nav__item  '>
              <Link to='/home' className='menu-nav__link link'>
                Home
              </Link>
            </li>
            <li className='menu-nav__item'>
              <Link to='/about' className='menu-nav__link link'>
                About Me
              </Link>
            </li>
            <li className='menu-nav__item '>
              <Link to='/projects' className='menu-nav__link link'>
                My Projects
              </Link>
            </li>
            <li className='menu-nav__item active'>
              <Link to='/contact' className='menu-nav__link link'>
                Contact Me
              </Link>
            </li>
          </div>
        </nav>
      </header>

      <main>
        <section className='contact'>
          <h2>Contact me..</h2>
          <div className='contact__list'>
            <div className='contact__email'>
              <Link to='#!' className='link'>
                <FaEnvelope size='1.5rem' className='link' />
                <div className='text-secondary'>email@email.com</div>
              </Link>
            </div>
            <div className='contact__phone'>
              <Link to='#!' className='link'>
                <FaMobileAlt size='1.5rem' className='link' />
                <div className='text-secondary'>+65 12345678</div>
              </Link>
            </div>
            <div className='contact__address'>
              <Link to='#!' className='link'>
                <FaMapMarkerAlt size='1.5rem' className='link' />
                <div className='text-secondary'>123 Hougang</div>
              </Link>
            </div>
          </div>

          <div className='social-icons'>
            <Link to='#!' className='link'>
              <FaTwitter size='2.5rem' className='link' />
            </Link>
            <Link to='#!'>
              <FaFacebook size='2.5rem' className='link' />
            </Link>
            <Link to='#!'>
              <FaInstagram size='2.5rem' className='link' />
            </Link>
            <Link to='#!'>
              <FaGithub size='2.5rem' className='link' />
            </Link>
          </div>

          <footer>&copy; Copyright 2020</footer>
        </section>
      </main>
    </div>
  );
}
