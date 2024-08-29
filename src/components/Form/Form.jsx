import React, { useState } from "react";
import s from "./styles.module.scss";
import TextArea from "../ui/TextArea/TextArea";
import FormButton from "../ui/FormButton/FormButton";
import ellipseOne from "../../assets/images/Ellipse3.png";
import ellipseTwo from "../../assets/images/Ellipse2.png";

export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    let errors = {};
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      errors.name = "Имя обязательно";
    }
    if (!formData.email.trim()) {
      errors.email = "E-mail обязателен";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Некорректный e-mail";
    }
    if (formData.description.length > 1000) {
      errors.description = "Описание не должно превышать 1000 символов";
    }
    if (!isChecked) {
      errors.checkbox = "Необходимо согласие на обработку данных";
    }

    console.log("Validation errors: ", errors); 
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Ваша заявка принята, мы скоро свяжемся с вами");
      setIsSubmitted(true);
    } else {
      console.log("Form data on submit: ", formData); 
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    setErrors((prevErrors) => ({
      ...prevErrors,
      checkbox: "",
    }));
  };

  return (
    <div id="form" className={s.form__container}>
      <img className={s.form__container__BgOne} src={ellipseOne} alt="" />
      <img className={s.form__container__BgTwo} src={ellipseTwo} alt="" />
      <img className={s.form__container__BgThree} src={ellipseOne} alt="" />
      <img className={s.form__container__BgFour} src={ellipseTwo} alt="" />
      <div className={s.form__content}>
        <div className={s.form__title}>
          Обратная <br /> связь
        </div>
        <div className={s.form__formWindow}>
          <div className={s.form__formTitle}>
            Оставить заявку на консультацию по созданию сайта
          </div>
          <form onSubmit={handleSubmit}>
            <div className={s.form__inputsSection}>
              <div className={s.form__userInfo}>
                <TextArea
                  placeholder="Имя*"
                  customClassName={`${s.input} ${errors.name ? s.error : ""}`}
                  maxLength={100}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                
                <TextArea
                  placeholder="E-mail*"
                  customClassName={`${s.input} ${errors.email ? s.error : ""}`}
                  maxLength={100}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
               
              </div>
              <TextArea
                placeholder="Опишите вашу идею"
                customClassName={`${s.inputText} ${
                  errors.description ? s.error : ""
                }`}
                maxLength={1000}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              {errors.description && (
                <div className={s.errorMessage}>{errors.description}</div>
              )}
            </div>
            <div className={s.form__requiredFields}>
              * поля обязательные для заполнения
            </div>
            <div className={s.form__checkboxSection}>
              <label className={s.checkboxLabel}>
                <input
                  type="checkbox"
                  className={s.checkbox}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className={s.customCheckbox}></span>
                Согласие на обработку персональных данных
              </label>
              {errors.checkbox && (
                <div className={s.errorMessage}>{errors.checkbox}</div>
              )}
            </div>
            <FormButton
              customClassName={s.formBtn}
              type="submit"
              disabled={!isChecked || isSubmitted}
            >
              Отправить
            </FormButton>
            {errors.name && (
                  <div className={s.errorMessage}>{errors.name}</div>
                )}
                 {errors.email && (
                  <div className={s.errorMessage}>{errors.email}</div>
                )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;

