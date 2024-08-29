import TeamSlider from "../TeamSlider/TeamSlider";

import { useState, useMemo } from "react";

import { teamArray } from "../../components/TeamSlider/teamArray.data";

import s from "./styles.module.scss";
import lineOne from "../../assets/images/LineOne.png";
import lineTwo from "../../assets/images/LineSeven.png";
import lineSix from "../../assets/images/LineSix.png";

function OurTeam() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = useMemo(() => teamArray[currentSlide], [currentSlide]);

  return (
    <div id="team" className={s["container"]}>
      <div className={s["content"]}>
        <img className={s["bg-line-one"]} src={lineOne} alt="" />
        <img className={s["bg-line-two"]} src={lineTwo} alt="" />
        <img className={s["bg-line-three"]} src={lineTwo} alt="" />
        <img className={s["bg-line-four"]} src={lineSix} alt="" />
        <div className={s["title"]}>
          Наша <br />
          команда
        </div>
        <div className={s["team-info"]}>
          <TeamSlider onSlideChange={setCurrentSlide} />
          <div key={slide.id} className={s["info-team"]}>
            <div className={s["img-block"]}>
              <img
                src={slide.image}
                alt={slide.name}
                className={s["image-profile"]}
                style={{ height: "30vw" }}
              />
            </div>
            <div className={s["info-block"]}>
              <h2 className={s["info-team__name"]}>{slide.name}</h2>
              <p className={s["info-team__text"]}>{slide.info}</p>
            </div>
            <div className={s["vertical-text"]}>{slide.verticalText}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
