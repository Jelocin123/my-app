import React from 'react';
import styles from "../styles/footer.module.scss"

const Footer = () => {
  return (
    <footer className="bg-black mt-5 m-0 row justify-content-center gx-0 text-light  py-3" id={styles.footer}>
      <div className="container">
        <p className='text-center'>&copy; {new Date().getFullYear()} AD EVOLUTION</p>
      </div>
    </footer>
  );
};

export default Footer;
