import React from 'react'
import style from './Tools.module.css';
import firesvg from '../../assets/fire.svg'
import mobilesvg from '../../assets/m.svg'
import bellsvg from '../../assets/bell.svg'


const Tools = () => {
    return (
        <>
            <section className={style.toolsSection}>
                <div className={style.toolsmain}>
                    <div className={style.message}>
                        🤩 AND MORE...
                    </div>
                    <h1>
                        Explore an array of features that elevate your <span>Productivity</span> to new heights
                    </h1>
                    <p>
                        Discover the tools that will revolutionize the way you manage and optimize your operations
                    </p>
                </div>

                <div className={style.toolCardContainer}>

                    <div className={style.toolSingleCard}>
                        <div className={style.toolSingleCardImage}>
                            <img src={mobilesvg} alt="" />
                        </div>
                        <div className={style.toolSingleCardText}>
                            <h3>Cross-Platform Compatibility</h3>
                            <p>Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.</p>
                        </div>
                    </div>

                    <div className={style.toolSingleCard}>
                        <div className={style.toolSingleCardImage}>
                            <img src={bellsvg} alt="" />
                        </div>
                        <div className={style.toolSingleCardText}>
                            <h3>Stay Informed with Essential Notifications</h3>
                            <p>Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.</p>
                        </div>
                    </div>

                    <div className={style.toolSingleCard}>
                        <div className={style.toolSingleCardImage}>
                            <img src={firesvg} alt="" />
                        </div>
                        <div className={style.toolSingleCardText}>
                            <h3>Secure Data Encryption at all times</h3>
                            <p>Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Tools