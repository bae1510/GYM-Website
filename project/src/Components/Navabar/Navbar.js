import React, { useEffect } from 'react';
// import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useRef } from 'react';
const nav=[
  {
    path: "#home",
    display:'Home'
  },
  {
    path: "#about",
    display:'About'
  },
  {
    path: "#program",
    display:'Program'
  },
  {
    path: "#training",
    display:'Training'
  },
  {
    path : '#pricing',
    display:"Pricing"
  }
];

const Navbar = () => {
  const navigate = useNavigate();

  function handleRegistration(){
    navigate('/login');
  }
  const headerRef = useRef(null)
  const headerFunction = () =>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('sticky_header')
    }else{
      headerRef.current.classList.remove('sticky_header')
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', headerFunction);
  },[]);

  const handleClick =(e)=>{
    e.preventDefault()
    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      left:0,
      top: location - 80,
    })
  }
  return (
    <header className={styles.header} >
    <div className={styles.container}>
    <div className={styles.navWrapper} ref={headerRef} >
      <div className={styles.logo}>
      <h2>Gym</h2>

      </div>


      {/* ========navigation======== */}
      <div className={styles.navigation}>
        <ul className={styles.menu}>
          {
            nav.map(item=>(
              <div className={styles.navItem}>
              <a onClick={handleClick} href={item.path}>{item.display}</a>
              </div>
            ))
          }
        </ul>
      </div>
      <div>
        <button className={styles.btn} onClick={handleRegistration}>Join Us</button>
      </div>
      </div>

    </div> 
  
    </header>
  );  
};

export default Navbar;



{/* <div className={styles.content}>
        <Link className={styles.navlink} to=" " smooth={true} duration={500}>
          About
        </Link>
        <Link className={styles.navlink} to="program" smooth={true} duration={500}>
          Program
        </Link>
        <Link className={styles.navlink} to="training" smooth={true} duration={500}>
          Training
        </Link>
        <Link className={styles.navlink} to="pricing" smooth={true} duration={500}>
          Pricing
        </Link>
      </div> */}