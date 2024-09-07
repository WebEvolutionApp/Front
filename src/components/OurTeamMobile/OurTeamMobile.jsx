import React, { useState, useMemo } from "react";
import TeamSliderMobile from "../TeamSliderMobile/TeamSliderMobile"; 
import { teamArrayMobile } from "../TeamSliderMobile/teamArrayMobile.data"; 
import s from "./styles.module.scss";
import TextWindow from "../ui/TextWindow/TextWindow";
import ellipse from "../../assets/images/Ellipse3.png";
import ellipsePurple from "../../assets/images/Ellipse2.png";
import orizontalLine from "../../assets/images/LineSix.png";

function OurTeamMobile() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slide = useMemo(() => teamArrayMobile[currentSlide], [currentSlide]);

    return (
        <div id="teamMobile" className={s.container}>
            <img className={s.container__BgLineOne} src={orizontalLine} alt="" />
            <img className={s.container__BgOne} src={ellipse} alt="" />
            <img className={s.container__BgTwo} src={ellipse} alt="" />
            <img className={s.container__BgThree} src={ellipsePurple} alt="" />
            <div className={s.content}>
                <div className={s.title}>
                    Наша <br />
                    команда
                </div>
                <div className={s.slider}>
                    <div className={s.verticalText}>{slide.verticalText}</div>
                    <div className={s.sliderInfo}>
                        <TeamSliderMobile onSlideChange={setCurrentSlide} />
                        <div key={slide.id} className={s.infoTeam}>
                            <div className={s.imgBlock}>
                                <img
                                    src={slide.image}
                                    alt={slide.name}
                                    className={s.imageProfile}
                                    style={{ height: "71vw" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <TextWindow customClassName={s.textWindow}>
                    <p className={s.textWindow__text}>{slide.info}</p>
                </TextWindow>
            </div>
        </div>
    );
}

export default OurTeamMobile;
