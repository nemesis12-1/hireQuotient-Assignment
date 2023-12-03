import React from 'react';
import style from './Testimonial.module.css'
import Marquee from "react-fast-marquee";


const Testimonial = () => {

    return (
        <>
            <div className={style.testimonialSection}>
                <div className={style.testimonialMain}>

                    <div className={style.message}>
                        🧡 TESTIMONIALS
                    </div>
                    <h1>
                        Hear from our <span>Satisfied</span> clients
                    </h1>
                    <p>
                        Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.
                    </p>

                </div>



                    <Marquee direction='right'>
                <div className={style.testimonialContainer}>


                        <div className={style.testimonialCard}>
                            <p>"I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.</p>
                            <div className={style.testimonialCardProfile}>
                                <div>
                                    <img src="https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg" alt="" />
                                </div>
                                <div>
                                    <h3>Emily</h3>
                                    <p>Art Director</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.testimonialCard}>
                            <p>"I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.</p>
                            <div className={style.testimonialCardProfile}>
                                <div>
                                    <img src="https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg" alt="" />
                                </div>
                                <div>
                                    <h3>Emily</h3>
                                    <p>Art Director</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.testimonialCard}>
                            <p>"I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.</p>
                            <div className={style.testimonialCardProfile}>
                                <div>
                                    <img src="https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg" alt="" />
                                </div>
                                <div>
                                    <h3>Emily</h3>
                                    <p>Art Director</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.testimonialCard}>
                            <p>"I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.</p>
                            <div className={style.testimonialCardProfile}>
                                <div>
                                    <img src="https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg" alt="" />
                                </div>
                                <div>
                                    <h3>Emily</h3>
                                    <p>Art Director</p>
                                </div>
                            </div>
                        </div>

                </div>
                    </Marquee>



            </div>
        </>
    )
}

export default Testimonial