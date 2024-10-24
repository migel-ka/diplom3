import { FC } from "react";
import { Sneaker } from "../../type/sneaker";
import style from "./style.module.css";
import ButtonOne from "../../button/button";
import DECARD from "..//..//images/modal/Vector.svg";
import Modal from "../../feature/Modal";

type Props = {
    data: Sneaker;
    closeModal: () => void;
    isModalOpen: boolean;
}

const ModalSnake: FC<Props> = ({ data, closeModal, isModalOpen }) => {

  const handleClickAdd = (data: any) => {
    addSneaker(data); 
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className={style.container}>
              <div className={style.modalBlock}>
                  <div>
                      <img className={style.imgSneak} src={data.imgUrl} alt={data.title} />
                  </div>
                  <div className={style.modalBlockDescriptions}>
                      <div className={style.modalBlockDescription}>
                          <p>Артикул: {data.vendorСode}</p>
                          <p>В наличии: {data.inStock} шт.</p>
                      </div>
                      <h2>{data.title}</h2>
                      <p>Выберите размер</p>
                      <p>{data.sizes}</p>
                      <div className={style.modalBlockDescriptionsPrice}>
                          <span>{data.price}</span>
                          <p>{data.oldPrice}</p>
                      </div>
                      <ButtonOne onClick={handleClickAdd} text="Заказать"/>
                      <div>
                          <p><img src={DECARD} alt="none" /> Бесплатная доставка до двери</p>
                          <p><img src={DECARD} alt="none" /> Оплата заказа при получении</p>
                          <p><img src={DECARD} alt="none" /> Обмен в течении двух недель</p>
                      </div>
                  </div>
              </div>
              <div className={style.modalBlock}>
                  <div>
                      <h3>Описание</h3>
                      <p>{data.description}</p>
                  </div>
                  <div>
                      <h3>Характеристики</h3>
                      <p>Пол: {data.gender}</p>
                      <p>Цвета: {data.color}</p>
                      <p>Состав: {data.compound}</p>
                      <p>Страна: {data.country}</p>
                  </div>
              </div>
          </div>
      </Modal>
    </>
  );
}

export default ModalSnake;
