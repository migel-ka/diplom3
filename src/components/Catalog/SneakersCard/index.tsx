import { FC, useState } from "react";
import style from "./style.module.css";
import SneakersCardHove from "../SneakersCardHover";
import { ISneakers } from "../../slices/basketSlice";

interface IProps {
  item: ISneakers;
}

const SneakersCard: FC<IProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredHove, setIsHoveredHove] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isHoveredHove) {
      setIsHovered(false);
    }
  };

  return (
    <div
      key={item.id}
      className={style.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className={style.containerImg} src={item.imgUrl} alt={item.title} />
      {isHovered && (
        <div
          onMouseEnter={() => setIsHoveredHove(true)}
          onMouseLeave={() => setIsHoveredHove(false)}
        >
          <SneakersCardHove item={item} key={item.id} />
        </div>
      )}
      <p>{item.title}</p>
      <span>{item.price} ₽</span>
    </div>
  );
};

export default SneakersCard;
