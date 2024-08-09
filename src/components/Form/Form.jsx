import React from "react";
import s from "./styles.module.scss";
import Input from "../ui/Input/Input";

export function Form() {
    return(
        <div className={s.form__container}> 
        <div className={s.form__content}>
        <div className={s.form__title}>Обратная связь</div>
        <div className={s.form__formWindow}>
            <div className={s.form__formTitle}>Оставить заявку на консультацию по созданию сайта</div>
            <div className={s.form__inputsSection}>
                <div className={s.form__userInfo}>
                    <Input placeholder = 'Имя*' customClassName={s.input} width="25vw" height={"6vw"} />
                    <Input placeholder = 'E-mail*' customClassName={s.input} width="25vw" height={"6vw"} />
                </div>
                <Input placeholder = 'Опишите вашу идею' customClassName={s.input} width="38vw" height={"14.5vw"} />
            </div>
            <div className={s.form__requiredFields}>* поля обязательные для заполнения</div>
            <div className={s.form__checkboxSection}>
            <label className={s.checkboxLabel}>
              <input
                type="checkbox"
                className={s.checkbox}
              />
             Согласие на обработку персональных данных
            </label>
          </div>
        </div>
        </div>
        </div>
    )
}

export default Form;