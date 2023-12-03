import React from 'react'
import style from './Feature.module.css'

const Feature = () => {
  return (
    <>
      <section className={style.featureMain}>

        <div className={style.main}>
          <div className={style.message}>
            🔥PREMIUM FEATURES
          </div>
          <h1>
            Discover our product's <span>Capabilities</span>
          </h1>
          <p>
            Don't settle for mediocrity - embrace the future of management with Manage Wise.
          </p>
        </div>

        <div className={style.featureContainer}>
          <div className={style.card}>
            <div className={style.cardIcon}>
              ⭐️
            </div>
            <div className={style.cardTextLeft}>
              <h3>Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.</h3>
            </div>
          </div>

          <div className={style.card2}>
            <div className={style.card2Image}>
              <img src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024" alt="" />
            </div>
            <div className={style.card2Text}>
              <h1>Smart Task Management</h1>
              <p>Say goodbye to chaos with our smart task management system</p>
            </div>
          </div>
        </div>

        <div className={style.featureContainerCards}>

          <div className={style.singleCard}>
            <div className={style.singleCardImage}>
              <img src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512" alt="" />
            </div>
            <div className={style.singleCardText}>
              <h3>Flexible Scheduling</h3>
              <p>Stay productive with our flexible scheduling system</p>
            </div>
          </div>

          <div className={style.singleCard}>
            <div className={style.singleCardImage}>
              <img src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512" alt="" />
            </div>
            <div className={style.singleCardText}>
              <h3>Easy Communication</h3>
              <p>Collaborate seamlessly with your team in real-time</p>
            </div>
          </div>

          <div className={style.singleCard}>
            <div className={style.singleCardImage}>
              <img src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512" alt="" />
            </div>
            <div className={style.singleCardText}>
              <h3>Analytics</h3>
              <p>Gain valuable insights with our advanced analytics feature</p>
            </div>
          </div>


        </div>


      </section>
    </>
  )
}

export default Feature