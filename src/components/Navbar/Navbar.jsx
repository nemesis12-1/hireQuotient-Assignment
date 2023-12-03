import React from 'react';
import style from './Navbar.module.css';
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <>
      <nav className={style.nav}>

        <div className={style.logo}>
          <img className={style.navLogo} src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512" alt="managewise logo" />
        </div>

        <div className={style.navLinks}>

          <div className={style.links}>
            <a href="http://">Features</a>
            <div className={style.navBox}></div>
            <a href="http://">FAQ</a>
            <div className={style.navBox}></div>
            <a href="http://">Pricing</a>
            <div className={style.navBox}></div>
            <a href="http://">Testimonials</a>
          </div>

          <div className={style.navButton}>
            <Button>Buy Template</Button>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar