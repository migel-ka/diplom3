import style from "./style.module.css";
import "swiper/css";
import SelectionSectionSwiper from "../../Swiper/SwiperSlider";

function SelectionSection() {
  
    return (
      <section className={style.container}>
        <div className={style.containerBlock}>
          <SelectionSectionSwiper />
        </div>
      </section>
    )
  }
  
  export default SelectionSection;
  