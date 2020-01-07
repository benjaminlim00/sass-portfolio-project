import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaTwitter, FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';

export default function About() {
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
            <li className='menu-nav__item '>
              <Link to='/home' className='menu-nav__link link'>
                Home
              </Link>
            </li>
            <li className='menu-nav__item active'>
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
        <section className='about'>
          <div className='about__bio-image'>
            <div className='about__bio'>
              <h2 className='text-secondary'>BIO</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus fuga incidunt harum quisquam? Repudiandae earum amet
                facilis voluptates deserunt, facere nihil dolore ratione aut,
                minima est sequi id magnam quibusdam.
              </p>
            </div>
          </div>

          <div className='jobs'>
            <div className='jobs__job'>
              <div className='text-secondary'>2017 - Current</div>
              <h3>Google</h3>
              <h6>Full Stack Developer</h6>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              pariatur architecto alias nostrum nobis laboriosam cupiditate,
              debitis atque impedit fugiat.
            </div>
            <div className='jobs__job'>
              <div className='text-secondary'>2015 -2017</div>
              <h3>Microsoft</h3>
              <h6>Front End Developer</h6>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              pariatur architecto alias nostrum nobis laboriosam cupiditate,
              debitis atque impedit fugiat.
            </div>
            <div className='jobs__job'>
              <div className='text-secondary'>2012 - 2015</div>
              <h3>Web Design Co.</h3>
              <h6>Graphic Designer</h6>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              pariatur architecto alias nostrum nobis laboriosam cupiditate,
              debitis atque impedit fugiat.
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
