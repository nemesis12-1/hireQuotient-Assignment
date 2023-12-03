import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import style from './HomePage.module.css'
import Button from '../../components/Button/Button';
import playImage from '../../assets/play-button-svgrepo-com.svg'
import DashboardImage from '../../components/Dashboard/DashboardImage';
import { motion } from "framer-motion";




const HomePage = () => {
    return (
        <>
            <div className={style.header}>
                <Navbar />

                <motion.div className={style.main}
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                        y: {
                            type: "spring",
                            bounce: 0.5,
                            duration: 2,
                        }
                    }}
                >
                    <motion.div className={style.message}
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 3,
                            ease: [0, 0.71, 0.2, 1.01],
                            y: {
                                type: "spring",
                                bounce: 0.5,
                                duration: 2,
                            },
                            delay: 0.4
                        }}
                    >
                        👋 WELCOME TO MANAGE WISE!
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 3,
                            ease: [0, 0.71, 0.2, 1.01],
                            y: {
                                type: "spring",
                                damping: 10,
                                stiffness: 100,
                                restDelta: 0.001
                            },
                            delay: 0.1
                        }}
                    >
                        Empower your business with <span>Strategic</span> insights
                    </motion.h1>
                    <p>
                        Powerful management platform designed to streamline your business operations, boost productivity, and drive success
                    </p>

                    <div className={style.buttonAll}>
                        <button className={style.button1}>
                            <span>Get Started</span>
                        </button>

                        <button className={style.button2}>
                            <span>Watch Video</span>
                            <img src={playImage} alt="" />
                        </button>
                    </div>
                </motion.div>
                <DashboardImage />
            </div>
        </>
    )
}

export default HomePage