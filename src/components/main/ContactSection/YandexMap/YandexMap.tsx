import { Map, YMaps } from '@pbe/react-yandex-maps';

const YandexMap = () => (
  <YMaps>
    <Map 
    defaultState={{ center: [59.83, 30.14], zoom: 9 }}
    style={{ width: "30vw", height: "100%" }}
    />
  </YMaps>
);

export default YandexMap;