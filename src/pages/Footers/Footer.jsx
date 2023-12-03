import React from 'react';
import style from './Footer.module.css';
import insta from '../../assets/insta.svg';
import linkedin from '../../assets/linkedin.svg';


const Footer = () => {
    return (
        <>
            <div className={style.footerSection}>
                <div className={style.footerMain}>
                    <div className={style.UpperSection}>
                        <div className={style.UpperSectionLeft}>
                            <div className={style.message}>
                                👋 DON'T MISS OUT
                            </div>
                            <h1>
                                Unleash your <span>Potential</span> with us
                            </h1>
                            <p>
                                Join our community of ambitious individuals and organizations eager to make a difference.
                            </p>
                            <div>
                                <button>Try Out Now</button>
                            </div>
                        </div>
                        <div className={style.UpperSectionRight}>
                            <div className={style.UpperSectionRightText}>
                                <span>200+</span>Happy users
                            </div>
                            <div>
                                <img className={style.img2} src="https://framerusercontent.com/images/S4kVG1FFzSqxr8zOqpvJRfsBad0.png?scale-down-to=1024" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className={style.bottomSection}>
                        <div className={style.bottomSectionLeft}>
                            <img src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512" alt="" />
                            <div className={style.links}>
                                <a href="http://">Features</a>                         
                                <a href="http://">FAQ</a>
                                <a href="http://">Pricing</a>
                                <a href="http://">Testimonials</a>
                            </div>
                        </div>
                        <div className={style.bottomSectionRight}>
                            <h3>© 2022 ManageWise, Inc.</h3>
                            <div className={style.bottomSectionRightIcons}>
                                <img src={insta} alt="" />
                                <img src={linkedin} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer