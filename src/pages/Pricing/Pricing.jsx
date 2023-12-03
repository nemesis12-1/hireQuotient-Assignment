import React from 'react';
import style from './Pricing.module.css';
import tickimg from '../../assets/tick.svg';
import Button from '../../components/Button/Button';

const Pricing = () => {
    return (
        <>
            <div className={style.pricingSection}>
                <div className={style.pricingMain}>

                    <div className={style.pricingMainText}>
                        <div className={style.message}>
                            💲PRICING
                        </div>
                        <h1>Select your ideal <span>Pricing </span>Plan</h1>
                        <p>
                            At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.
                        </p>
                    </div>

                    <div className={style.pricingMainCardContainer}>

                        <div className={style.pricingSingleCard}>
                            <h4>Free</h4>
                            <div className={style.pricingSingleCardPrice}>
                                <h1>$0</h1>
                                <span>/month</span>
                            </div>
                            <div className={style.pricingSingleCardPropertiesContainer}>
                                <div className={style.pricingSingleCardProperties}>
                                    <img src={tickimg} alt="" />
                                    <p>Access to all basic features</p>
                                </div>
                                <div className={style.pricingSingleCardProperties}>
                                    <img src={tickimg} alt="" />
                                    <p>Reporting and analytics</p>
                                </div>
                                <div className={style.pricingSingleCardProperties}>
                                    <img src={tickimg} alt="" />
                                    <p>Up to 5 individual users</p>
                                </div>
                                <div className={style.pricingSingleCardProperties}>
                                    <img src={tickimg} alt="" />
                                    <p>Chat and email support</p>
                                </div>
                            </div>
                            <div >
                                <Button >Get Started</Button>
                            </div>
                        </div>

                        <div className={style.pricingSingleCard}>
                            <h4>Standard</h4>
                            <div className={style.pricingSingleCardPrice}>
                                <h1>$25</h1>
                                <span>/month</span>
                            </div>
                            <div className={style.pricingSingleCardPropertiesContainer}>
                                <div className={style.pricingSingleCardProperties}>
                                    <img src={tickimg} alt="" />
                                    <p>Access to all basic features</p>
                                </div>
                                <div className={style.pricingSingleCardProperties}>
                                    <img src={tickimg} alt="" />
                                    <p>Reporting and analytics</p>
                                </div>
                                <div className={style.pricingSingleCardProperties}>
                                    <img src={tickimg} alt="" />
                                    <p>Up to 5 individual users</p>
                                </div>
                                <div className={style.pricingSingleCardProperties}>
                                    <img src={tickimg} alt="" />
                                    <p>Chat and email support</p>
                                </div>
                                <div className={style.pricingSingleCardProperties}>
                                    <img src={tickimg} alt="" />
                                    <p>3+ integrationst</p>
                                </div>
                                <div className={style.pricingSingleCardProperties}>
                                    <img src={tickimg} alt="" />
                                    <p>Account performance reporting</p>
                                </div>
                            </div>
                            <div >
                               <button className={style.pricingButon}>Get Started</button>
                            </div>
                        </div>

                        <div className={style.pricingSingleCard}>
                            <h4>Business</h4>
                            <div className={style.pricingSingleCardPrice}>
                                <h1>$42</h1>
                                <span>/month</span>
                            </div>
                            <div className={style.pricingSingleCardPropertiesContainer}>
                                <div className={style.pricingSingleCardProperties}>
                                    <img src={tickimg} alt="" />
                                    <p>Access to all basic features</p>
                                </div>
                                <div className={style.pricingSingleCardProperties}>
                                    <img src={tickimg} alt="" />
                                    <p>Reporting and analytics</p>
                                </div>
                                <div className={style.pricingSingleCardProperties}>
                                    <img src={tickimg} alt="" />
                                    <p>Up to 5 individual users</p>
                                </div>
                                <div className={style.pricingSingleCardProperties}>
                                    <img src={tickimg} alt="" />
                                    <p>Chat and email support</p>
                                </div>
                                <div className={style.pricingSingleCardProperties}>
                                    <img src={tickimg} alt="" />
                                    <p>3+ integrationst</p>
                                </div>
                            </div>
                            <div >
                                <Button >Get Started</Button>
                            </div>
                        </div>



                    </div>
                </div>

            </div>
        </>
    )
}

export default Pricing