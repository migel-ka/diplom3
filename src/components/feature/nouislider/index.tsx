import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const SliderPrise = () => (
  <Nouislider range={{ min: 1850, max: 25768 }} start={[1850, 25768]} connect />
);

export default SliderPrise;