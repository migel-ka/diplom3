import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideNextButton from "../SlideNextButton";
import style from "./style.module.css";
import SNAKEIMG from "..//..//images/snakePhoto.jpg";
import Rectangle45 from "..//..//images/Rectangle45.png";
import Checkbox from "../../button/Checkbox";
import Review from "../../Review/formSelection";

function SelectionSectionSwiper() {
  const handleCheckboxClick = (label: string) => {
    console.log(`${label} выбрано`);
  };

  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <h2>Мы подберем идеальную пару для вас</h2>
          <p className={style.mySwiperP}>
            Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для
            вас моделями
          </p>
          <h3 className={style.mySwiperH3}>
            Какой тип кроссовок рассматриваете?
          </h3>
          <div className={style.mySwiperSectionImages}>
            <div className={style.mySwiperSectionImage}>
              <img src={SNAKEIMG} alt="SNAKEIMG" />
              <Checkbox
                text="Кеды"
                onClick={() => handleCheckboxClick("Кеды")}
              />
            </div>
            <div className={style.mySwiperSectionImage}>
              <img src={SNAKEIMG} alt="SNAKEIMG" />
              <Checkbox
                text="Бархатные тяги"
                onClick={() => handleCheckboxClick("Бархатные тяги")}
              />
            </div>
            <div className={style.mySwiperSectionImage}>
              <img src={SNAKEIMG} alt="SNAKEIMG" />
              <Checkbox
                text="Подкрадули"
                onClick={() => handleCheckboxClick("Подкрадули")}
              />
            </div>
            <div className={style.mySwiperSectionImage}>
              <img src={SNAKEIMG} alt="SNAKEIMG" />
              <Checkbox
                text="Кони"
                onClick={() => handleCheckboxClick("Кони")}
              />
            </div>
            <div className={style.mySwiperSectionImage}>
              <img src={SNAKEIMG} alt="SNAKEIMG" />
              <Checkbox
                text="Кросы"
                onClick={() => handleCheckboxClick("Кросы")}
              />
            </div>
            <div className={style.mySwiperSectionImage}>
              <img src={SNAKEIMG} alt="SNAKEIMG" />
              <Checkbox
                text="Лапти"
                onClick={() => handleCheckboxClick("Лапти")}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h2>Мы подберем идеальную пару для вас</h2>
          <p className={style.mySwiperP}>
            Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для
            вас моделями
          </p>
          <h3 className={style.mySwiperH3}>Какой размер вам подойдет?</h3>
          <div>
            <div className={style.mySwiperChekbox}>
              <Checkbox
                text="менее 36"
                onClick={() => handleCheckboxClick("менее 36")}
              />
              <Checkbox
                text="36 - 38"
                onClick={() => handleCheckboxClick("36 - 38")}
              />
              <Checkbox
                text="39 - 41"
                onClick={() => handleCheckboxClick("39 - 41")}
              />
              <Checkbox
                text="42 - 44"
                onClick={() => handleCheckboxClick("42 - 44")}
              />
              <Checkbox
                text="45 и больше"
                onClick={() => handleCheckboxClick("45 и больше")}
              />
            </div>
            <div>
              <img
                className={style.mySwiperChekboxImage}
                src={Rectangle45}
                alt="Rectangle45"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h2>Мы подберем идеальную пару для вас</h2>
          <p className={style.mySwiperP}>
            Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для
            вас моделями
          </p>
          <h3 className={style.mySwiperH3}>Уточните какие-либо моменты</h3>
          <input
            className={style.mySwiperInputText}
            type="text"
            name=""
            id=""
            placeholder="Введите сообщение"
          />
        </SwiperSlide>

        <SwiperSlide>
          <h2>Ваша подборка готова!</h2>
          <p className={style.mySwiperP}>
            Оставьте свои контактные данные, чтобы бы мы могли отправить
            подготовленный для вас каталог
          </p>
          <div className={style.containerForm}>
            <h3>Получить предложение</h3>
            <p>Получите подборку подходящих для вас моделей на почту</p>
            <Review />
          </div>
        </SwiperSlide>
        <SlideNextButton />
      </Swiper>
    </>
  );
}

export default SelectionSectionSwiper;
