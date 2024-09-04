import { useForm } from "react-hook-form";
import s from "./styles.module.scss";
import TextArea from "../ui/TextArea/TextArea";
import FormButton from "../ui/FormButton/FormButton";
import ellipseOne from "../../assets/images/Ellipse3.png";
import ellipseTwo from "../../assets/images/Ellipse2.png";
import verticalLine from "../../assets/images/LineThree.png";
import lineOne from "../../assets/images/LineFour.png";
import lineTwo from "../../assets/images/LineEight.png";
import lineThree from "../../assets/images/LineSeven.png";
import lineFour from "../../assets/images/LineTwo.png";
import axios from 'axios';

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    try {
   
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('description', data.description || ''); 


      const response = await axios.post('http://localhost:8001/clients/add_client', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Success:', response.data);
      reset();  

    } catch (error) {
      console.error('There was an error sending the data!', error);

      if (error.response) {
        console.error('Server responded with:', error.response.data);

        if (error.response.data && error.response.data.detail) {
          const validationErrors = error.response.data.detail;
          validationErrors.forEach(err => {
            console.error(`Validation Error - Location: ${err.loc}, Message: ${err.msg}, Type: ${err.type}`);
          });
        }
      } else {
        console.error('Error message:', error.message);
      }
    }
  };

  return (
    <div id="form" className={s.form__container}>
      <img className={s.form__container__BgLineOne} src={verticalLine} alt="" />
      <img className={s.form__container__BgLineTwo} src={verticalLine} alt="" />
      <img className={s.form__container__BgLineThree} src={lineOne} alt="" />
      <img className={s.form__container__BgLineFour} src={lineTwo} alt="" />
      <img className={s.form__container__BgLineFive} src={lineTwo} alt="" />
      <img className={s.form__container__BgLineSix} src={lineThree} alt="" />
      <img className={s.form__container__BgLineSeven} src={lineFour} alt="" />
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.form__inputsSection}>
              <div className={s.form__userInfo}>
                <TextArea
                  placeholder="Имя*"
                  customClassName={s.input}
                  name="name"
                  error={!!errors.name}
                  {...register("name", {
                    required: "Введите ваше имя",
                    pattern: {
                      value: /^[a-zA-Zа-яА-ЯёЁ]+(?: [a-zA-Zа-яА-ЯёЁ]+)*$/,
                      message: "Введите корректное имя",
                    },
                    
                    maxLength: {
                      value: 30,
                      message: "Слишком длинное имя",
                    },
                    minLength: {
                      value: 2,
                      message: "Слишком короткое имя",
                    },
                  })}
                />

                <TextArea
                  placeholder="E-mail*"
                  customClassName={s.input}
                  name="email"
                  error={!!errors.email}
                  {...register("email", {
                    required: "Введите ваш email",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Введите корректный email",
                    },
                  })}
                />
              </div>
              <TextArea
                placeholder="Опишите вашу идею"
                customClassName={`${s.inputText} ${
                  errors.description ? s.error : ""
                }`}
                name="description"
                {...register("description", {
                  required: false,
                  maxLength: {
                    value: 1000,
                    message:
                      "Слишком длинное описание, максимальное количество символов - 1000",
                  },
                })}
              />
            </div>
            <div className={s.form__requiredFields}>
              * поля обязательные для заполнения
            </div>
            <div className={s.form__checkboxSection}>
              <label className={s.checkboxLabel}>
                <input
                  type="checkbox"
                  className={s.checkbox}
                  {...register("agree", {
                    required: "Необходимо согласие на обработку персональных данных",
                  })}
                />
                <span className={s.customCheckbox}></span>
                Согласие на обработку персональных данных
              </label>
            </div>
            <FormButton customClassName={s.formBtn} type="submit">
              Отправить
            </FormButton>
          </form>
        </div>
        <div className={s.form__requiredFieldsError}>
          {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
        </div>
        <div className={s.form__requiredFieldsError}>
          {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
        </div>
        <div className={s.form__requiredFieldsError}>
          {errors?.agree && <p>{errors?.agree?.message || "Error!"}</p>}
        </div>
      </div>
    </div>
  );
}

export default Form;
