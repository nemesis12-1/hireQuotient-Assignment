import React from 'react'
import style from './DashboardImage.module.css'
import { motion, useTransform, useScroll } from "framer-motion";

const DashboardImage = () => {

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);


  return (
    <>
      <div style={{ scale }}>
        <img className={style.image} src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048" alt="dashboard" />
      </div>
    </>
  )
}

export default DashboardImage