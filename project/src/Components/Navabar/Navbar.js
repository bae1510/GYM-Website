
import {  useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

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
    navigate('/registration');
  }


  const handleClick =(e)=>{
    e.preventDefault()
    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left:0,
      top: location - 80,
    })
  }


  
  return (
    <header className={styles.header} >
    <div className={styles.container}>
    <div className={styles.navWrapper}  >
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



