import { useState } from "react";
import style from "./style.module.css";

const FormQuestion = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "" });
  };

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <h3>Есть вопросы?</h3>
      <p>Заполните форму и наш менеджер свяжется с вами</p>
      <input
        className={style.containerInput}
        type="text"
        name="name"
        placeholder="Ваше имя"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        className={style.containerInput}
        type="tel"
        name="email"
        placeholder="Номер телефона"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button className={style.containerBtn} type="submit">
        Отправить
      </button>
    </form>
  );
};

export default FormQuestion;
