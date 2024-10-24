import { FormEventHandler } from "react";
import style from "./style.module.css";

const Review = () => {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const data = Object.fromEntries(form);
        console.log(data);
    }

    return (
        <form className={style.container} onSubmit={handleSubmit}>
            <input className={style.containerInput} type="text" name="name" placeholder="Ваше имя" required />
            <input className={style.containerInput} type="email" name="email" placeholder="E-mail" required />
            <input className={style.containerBtn} type="submit" />
        </form>
    );
};

export default Review;
