import React from 'react'
import styles from './HeroSection.module.css'
import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const navigate=useNavigate()

  function handleClick(){
    navigate('/registration')
  }
  return (
    <div className={styles.back} id='home'>
    <div className={styles.container}>
        <p>"Take care of Your <spam className={styles.red}>Body</spam></p>
        <p>It's the only place </p>
        <p>You have to <spam className={styles.red} >live</spam>."</p>
  
  
    </div>
    <div >
        <button className={styles.btn} onClick={handleClick}>Join with Us</button>
    </div>
    </div>
  )
}
