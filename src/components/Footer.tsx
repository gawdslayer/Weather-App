import React from 'react';
import styles from '../Modules/Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <img 
            src="/weatherapplogo.png" 
            alt="Nimbus Weather" 
            className={styles.footerLogo}
          />
          <p className={styles.appName}>Nimbus</p>
        </div>
        
        <div className={styles.footerSection}>
          <p className={styles.copyright}>
            © {currentYear} Nimbus Weather. All rights reserved. GavyKullar.
          </p>
        </div>
        
        <div className={styles.footerSection}>
          <p className={styles.poweredBy}>
            Powered by WeatherAPI.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
