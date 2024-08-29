import TeamSliderMobile from "../TeamSliderMobile/TeamSliderMobile"; 
import { useState, useMemo } from "react";
import { teamArray } from "../TeamSlider/teamArray.data";
import s from "./styles.module.scss";
import TextWindow from "../ui/TextWindow/TextWindow";

function OurTeamMobile() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slide = useMemo(() => teamArray[currentSlide], [currentSlide]);

    return (
        <div id="team" className={s.container}>
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
