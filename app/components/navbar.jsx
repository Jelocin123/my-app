"use client"
import React from 'react';
import styles from '../styles/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Logo from "../images/logo_transparent.png"

const navbar = () => {

  useEffect(() => {
    AOS.init();
}, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth'});
    }
  };

  return (
    <header id={styles.header} data-aos="fade-right">
      <div className='d-flex flex-column' >
        <div className={styles.profile}>
        <Link href="/">
     
        <Image className='img-fluid col-1 mx-auto ' src={Logo} alt="logo" />

          
        </Link>
          <h1 className='text-light'>
          </h1>
          <div className={`${styles.social_links} text-center `}>
            <Link className='twitter me-2' href="#">
              <i className=" bi bi-twitter"></i>
            </Link>
            <Link className='facebook me1' href="#">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link className='instagram ms-1' href="#">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link className='instagram ms-2' href="#">
            <i className="bi bi-bag"></i>
            </Link>
          </div>
        </div>
        <nav id="navbar" className={`${styles.nav_menu} navbar`}>
          <ul>
            <li>
              <a className='nav-link scrollto active' href="#" onClick={() => scrollToSection('hero')}>
                <i className="bi bi-chevron-right"></i>
                <span>New Games</span>
              </a>
            </li>
            <hr/>
            <li>
              <a className='nav-link scrollto' href="#ps5_games" onClick={() => scrollToSection('about')}>
                <i className="bi bi-playstation"></i>
                <span>PS5 Games </span>
              </a>
            </li>
            <hr />
            <li>
              <a className='nav-link scrollto' href="#ps4_games" onClick={() => scrollToSection('about')}>
                <i className="bi bi-playstation"></i>
                <span>PS4 Games </span>
              </a>
            </li>

            <hr />
            <li>
              <a className='nav-link scrollto' href="#ps3_games" onClick={() => scrollToSection('about')}>
                <i className="bi bi-playstation"></i>
                <span>PS3 Games </span>
              </a>
            </li>
            
            <hr />
            <li>
              <a className='nav-link scrollto' href="#deals_games" onClick={() => scrollToSection('about')}>
                <i className="bi bi-tag fs-4 text-danger"></i>
                <span className='text-danger'>DEALS</span>
              </a>
            </li>
            <hr />
            <li>
              <a className='nav-link scrollto' href="/aboutUs" onClick={() => scrollToSection('about')}>
                <i className="bi bi-info-circle"></i>
                <span>ABOUT US</span>
              </a>
            </li>
            <hr />
          </ul>
        </nav>
        
      </div>
    </header>
  )
}

export default navbar;
