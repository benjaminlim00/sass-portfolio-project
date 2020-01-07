import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaTwitter, FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';

export default function Home() {
  const [showMenu, toggleMenu] = useState(false);
  const navItems = document.querySelectorAll('.menu-nav__item');
  const hamburger = document.querySelector('.menu-btn__burger');
  const nav = document.querySelector('.nav');
  const menuNav = document.querySelector('.menu-nav');

  const handleClick = () => {
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
            <li className='menu-nav__item active '>
              <Link to='/home' className='menu-nav__link link'>
                Home
              </Link>
            </li>
            <li className='menu-nav__item'>
              <Link to='/about' className='menu-nav__link link'>
                About Me
              </Link>
            </li>
            <li className='menu-nav__item'>
              <Link to='/projects' className='menu-nav__link link'>
                My Projects
              </Link>
            </li>
            <li className='menu-nav__item'>
              <Link to='/contact' className='menu-nav__link link'>
                Contact Me
              </Link>
            </li>
          </div>
        </nav>
      </header>

      <main>
        <section className='home'>
          <h2>Hi! My name is </h2>
          <h1 className='home__name'>
            Benjamin
            <span className='home__name--last'> Lim</span>
          </h1>
          <h2>Web Developer,Designer & Programmer</h2>

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
