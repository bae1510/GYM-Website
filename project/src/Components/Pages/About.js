

import React from 'react'
import styles from "./About.module.css";

function About() {
  return (
    <div id="about">
    <div className={styles.container}>
      <h2 className={styles.heading}>About Us</h2>
        <em className={styles.about}>
        Through our 7-day programme we offer you some useful life questions
          to think about. We also offer you some answers on these questions
           but we encourage you to learn more about it yourself. You can read
          it all at once but we advise you to read and think about your life
          for the next 7 days. It may become the most valuable week of your
          life! It can be very valuable in your life. So take some time and
           invest one week in your life and future!
         </em>
         <button className={styles.btn}>Learn more</button>
         </div>
        <div className={styles.video}>
         <iframe
          width="450"
          height="470"
          src={"https://www.youtube.com/embed/-Ov9JTw-59s"}
        />

        
        </div>
      
    </div>
  )
}

export default About