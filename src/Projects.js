import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaEye,
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
            <li className='menu-nav__item active'>
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
        <section className='projects'>
          <div className='projects__bio-image'>
            <h1 className='text-secondary'>My Projects</h1>
          </div>
          <div className='projects__items'>
            <div className='projects__item'>
              <img src={require('./img/project-1.jpg')} alt='project-1' />
              <div className='projects__btns'>
                <Link to='#!' className='projects__btn'>
                  <FaEye size='1.5rem' className='projects__link' />
                  <span> Preview</span>
                </Link>
                <Link to='#!' className='projects__btn'>
                  <FaGithub size='1.5rem' className='projects__link' />
                  <span> Preview</span>
                </Link>
              </div>
            </div>
            <div className='projects__item'>
              <img src={require('./img/project-2.jpg')} alt='project-2' />
              <div className='projects__btns'>
                <Link to='#!' className='projects__btn'>
                  <FaEye size='1.5rem' className='projects__link' />
                  <span> Preview</span>
                </Link>
                <Link to='#!' className='projects__btn'>
                  <FaGithub size='1.5rem' className='projects__link' />
                  <span> Preview</span>
                </Link>
              </div>
            </div>
            <div className='projects__item'>
              <img src={require('./img/project-3.jpg')} alt='project-3' />
              <div className='projects__btns'>
                <Link to='#!' className='projects__btn'>
                  <FaEye size='1.5rem' className='projects__link' />
                  <span> Preview</span>
                </Link>
                <Link to='#!' className='projects__btn'>
                  <FaGithub size='1.5rem' className='projects__link' />
                  <span> Preview</span>
                </Link>
              </div>
            </div>
            <div className='projects__item'>
              <img src={require('./img/project-4.jpg')} alt='project-4' />
              <div className='projects__btns'>
                <Link to='#!' className='projects__btn'>
                  <FaEye size='1.5rem' className='projects__link' />
                  <span> Preview</span>
                </Link>
                <Link to='#!' className='projects__btn'>
                  <FaGithub size='1.5rem' className='projects__link' />
                  <span> Preview</span>
                </Link>
              </div>
            </div>
            <div className='projects__item'>
              <img src={require('./img/project-5.jpg')} alt='project-5' />
              <div className='projects__btns'>
                <Link to='#!' className='projects__btn'>
                  <FaEye size='1.5rem' className='projects__link' />
                  <span> Preview</span>
                </Link>
                <Link to='#!' className='projects__btn'>
                  <FaGithub size='1.5rem' className='projects__link' />
                  <span> Preview</span>
                </Link>
              </div>
            </div>
            <div className='projects__item'>
              <img src={require('./img/project-6.jpg')} alt='project-6' />
              <div className='projects__btns'>
                <Link to='#!' className='projects__btn'>
                  <FaEye size='1.5rem' className='projects__link' />
                  <span> Preview</span>
                </Link>
                <Link to='#!' className='projects__btn'>
                  <FaGithub size='1.5rem' className='projects__link' />
                  <span> Preview</span>
                </Link>
              </div>
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
