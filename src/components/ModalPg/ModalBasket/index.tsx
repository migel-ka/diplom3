import { FC } from "react";
import style from "./style.module.css";
import ButtonOne from "../../button/button";
import Modal from "../../feature/Modal";
import FormBasket from "../../Review/formBasket";
import { useDispatch, useSelector } from "react-redux";
import { ISneakers } from "../../slices/basketSlice";
import { AppDispatch, RootState } from "../../../store";
import { delBasket } from "../../slices/basketSlice";

type Props = {
    closeModalBasket: () => void;
    isModalOpenBasket: boolean;
}

const ModalBasket: FC<Props> = ({ closeModalBasket, isModalOpenBasket }) => {

    const sneaker = useSelector<RootState, ISneakers[]>(
        (state) => state.basket.data
      );

    const handleClick = () => {
        console.log ('Заказ оформлен!')
    };

    const dispatch = useDispatch<AppDispatch>();

    const totalPrice = sneaker.reduce((acc, sneake) => acc + sneake.price, 0);

    return (
        <Modal isOpen={isModalOpenBasket} onClose={closeModalBasket}>
            <div className={style.container}>
                <h2>Оформление заказа</h2>
                <div className={style.containerBord}>
                    {sneaker.length > 0 ? (
                        <>
                            <p>Товаров в заказе: <b>{sneaker.length} шт.</b></p>
                            <p>Общая сумма: <b>{totalPrice} ₽</b></p>
                            <p>Состав заказа</p>
                            <div className={style.sneakerItems}>
                            {sneaker.map(sneake => (
                                <div key={sneake.id} className={style.sneakerItem}>
                                <img className={style.sneakerItemImg} src={sneake.imgUrl} alt={sneake.title} />
                                <div className={style.sneakerTitle}>
                                    <p>{sneake.title}</p>
                                    <span>{sneake.price} ₽</span>
                                </div>
                                <button className={style.sneakerItemBtn} onClick={() => dispatch(delBasket(sneake.id))}>
                                    Удалить
                                </button>
                            </div>
                            ))}
                            </div>
                        </>
                    ) : (
                        <p>Корзина пуста</p> 
                    )}
                </div>
                {sneaker.length > 0 && <FormBasket />} 
                <ButtonOne onClick={handleClick} text="Оформить заказ" />
            </div>
        </Modal>
    );
}

export default ModalBasket;
