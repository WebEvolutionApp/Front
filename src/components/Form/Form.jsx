import React from "react";
import s from "./styles.module.scss";
import TextArea from "../ui/TextArea/TextArea";
import FormButton from "../ui/FormButton/FormButton";
import ellipseOne from "../../assets/images/Ellipse3.png";
import ellipseTwo from "../../assets/images/Ellipse2.png";

export function Form() {
  return (
    <div className={s.form__container}>
      <img className={s.form__container__BgOne} src={ellipseOne} alt="" />
      <img className={s.form__container__BgTwo} src={ellipseTwo} alt="" />
      <img className={s.form__container__BgThree} src={ellipseOne} alt="" />
      <img className={s.form__container__BgFour} src={ellipseTwo} alt="" />
      <div className={s.form__content}>
        <div className={s.form__title}>Обратная связь</div>
        <div className={s.form__formWindow}>
          <div className={s.form__formTitle}>
            Оставить заявку на консультацию по созданию сайта
          </div>
          <div className={s.form__inputsSection}>
            <div className={s.form__userInfo}>
              <TextArea
                placeholder="Имя*"
                customClassName={s.input}
                width="25vw"
                height={"6vw"}
              />
              <TextArea
                placeholder="E-mail*"
                customClassName={s.input}
                width="25vw"
                height={"6vw"}
              />
            </div>
            <TextArea
              placeholder="Опишите вашу идею"
              customClassName={s.input}
              width="38vw"
              height={"14.5vw"}
              maxLength={1000}  
            />
          </div>
          <div className={s.form__requiredFields}>
            * поля обязательные для заполнения
          </div>
          <div className={s.form__checkboxSection}>
            <label className={s.checkboxLabel}>
              <input type="checkbox" className={s.checkbox} />
              Согласие на обработку персональных данных
            </label>
          </div>
          <FormButton customClassName={s.formBtn}>Отправить</FormButton>
        </div>
      </div>
    </div>
  );
}

export default Form;
