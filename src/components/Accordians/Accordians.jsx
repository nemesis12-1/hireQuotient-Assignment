import React, { useState } from 'react';
import style from './Accordians.module.css';
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';
import { motion, AnimatePresence } from 'framer-motion'



const AccordianData = [
    {
        title: "What is Manage Wise and what does it offer?",
        content:
            "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
    },
    {
        title: "Is Manage Wise suitable for small businesses and larger enterprises alike?",
        content:
            "Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.",
    },
    {
        title: "Can I access Manage Wise from different devices and platforms?",
        content:
            "Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.",
    },
    {
        title: "What kind of support options do you offer to users?",
        content:
            "We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.",
    },
    {
        title: "How secure is the data stored within Manage Wise?",
        content:
            "Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.",
    },

];


const Accordians = () => {

    const [selected, setSelected] = useState(false);

    const accordianToggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    }
    return (
        <>
            <div className={style.accordianWrapper}>
                <div className={style.accordian}>

                    {AccordianData.map((item, i) => (
                        <div className={style.accordianItems}>

                            {selected !== i ? (
                                <div className={style.accordianTitle} onClick={() => accordianToggle(i)}>
                                    {item.title}
                                    {selected !== i ? <img src={plus} alt="" /> : <img src={minus} alt="" />}
                                </div>
                            ) : (
                                <div className={style.showTitle} onClick={() => accordianToggle(i)}>
                                    {item.title}
                                    {selected !== i ? <img src={plus} alt="" /> : <img src={minus} alt="" />}
                                </div>
                            )}
                            <AnimatePresence>

                                {selected === i && (
                                    <motion.div className={style.accordianContent && style.show}
                                        initial={{ opacity: 0.3, width: "90%" }}
                                        animate={{ opacity: 1, height: "100px", fontSize: "16px", color: "#767675" }}
                                        exit={{ opacity: 0, height: 0 }}
                                    >
                                        {item.content}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}

                </div>

            </div>
        </>
    )
}

export default Accordians