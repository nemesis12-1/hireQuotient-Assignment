import React from "react";
import style from "./Faq.module.css";
import Accordians from "../../components/Accordians/Accordians";



const Faq = () => {

    return (
        <>
            <div className={style.faqSection}>
                <div className={style.faqMain}>
                    <div className={style.faqMainLeft}>
                        <div className={style.message}>🙋‍♀️ FAQ</div>
                        <h1>Need <span>Answers?</span></h1>
                        <p>Check out our most commonly asked questions below to find the information you need.</p>
                    </div>

                    <div className={style.faqMainRight}>
                        <div className={style.faqMainRightAccordians}>

                            <Accordians />

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Faq;
