import React from "react";
import style from "./Integration.module.css";
import slackimg from "../../assets/slack.svg";
import github from "../../assets/github.svg";
import gitlab from "../../assets/gitlab.svg";
import dropbox from "../../assets/dropbox.svg";
import figma from "../../assets/figma.svg";
import gmail from "../../assets/gmail.svg";
import notion from "../../assets/notion.svg";
import zoom from "../../assets/zoom1.svg";
import vimeo from "../../assets/vimeo.svg";
import framer from "../../assets/framer.svg";

const Integration = () => {
    return (
        <>
            <div className={style.integrationSection}>
                <div className={style.integrationMain}>
                    <div className={style.mainLeft}>
                        <img src={slackimg} alt="" />
                        <img src={figma} alt="" />
                        <img src={dropbox} alt="" />
                        <img src={notion} alt="" />
                        <img src={gmail} alt="" />
                    </div>
                    <div className={style.mainMid}>
                        <div className={style.mainMidContent}>

                            <div className={style.message}>🛠 INTEGRATION</div>
                            <h1>Enable <span>integration</span> with other popular tools and platforms</h1>
                            <p>
                                Seamlessly connect and amplify your workflow by enabling
                                integration with a diverse array of widely-used tools and
                                platforms.
                            </p>
                            <div className={style.mainMidImage}>
                                <img src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={style.mainRight}>
                        <img src={framer} alt="" />
                        <img src={vimeo} alt="" />
                        <img src={zoom} alt="" />
                        <img src={gitlab} alt="" />
                        <img src={github} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Integration;
