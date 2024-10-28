import style from "./style.module.css";
import ADD from "..//..//images/main/Add.png";
import SEE from "..//..//images/main/See.png";
import { FC, useState } from "react";
import ModalSnake from "../../ModalPg/ModalSnake";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { ISneakers, postBasket } from "../../slices/basketSlice";

type IProps = {
  item: ISneakers;
};

const SneakersCardHove: FC<IProps> = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className={style.container}>
        <div className={style.buttonContainer}>
          <div onClick={openModal} className={style.button}>
            <img src={SEE} alt="SEE" />
          </div>
          <div
            onClick={() => dispatch(postBasket(item))}
            className={style.button}
          >
            <img src={ADD} alt="ADD" />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ModalSnake
          data={item}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />
      )}
    </>
  );
};

export default SneakersCardHove;
