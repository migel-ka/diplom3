import { useSwiper } from "swiper/react";
import ButtonThree from "../../button/buttonThree/index";
import { useEffect, useState } from "react";

export default function SlideNextButton() {
  const swiper = useSwiper();
  const [isLastSlide, setIsLastSlide] = useState(false);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsLastSlide(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  const handleClick = () => {
    swiper.slideNext();
  };

  if (isLastSlide) return null;

  return <ButtonThree text="Следующий шаг" onClick={handleClick} />;
}
