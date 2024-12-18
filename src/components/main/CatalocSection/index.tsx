import { FC, useState } from "react";
import SneakersCards from "../../Catalog/SneakersCards";
import style from "./style.module.css";
import FilterCalalog from "../../filter/FilterCalalog";

interface Props {
  filterValue: string;
}

const CatalocSection: FC<Props> = ({ filterValue }) => {
  const [gender, setGender] = useState<string>("");
  console.log(gender);

  return (
    <section id="CatalocSection" className={style.container}>
      <h2>Каталог</h2>
      <div className={style.containerFilterCatalog}>
        <div>
          <FilterCalalog setGender={setGender} />
        </div>
        <div>
          <SneakersCards filterValue={filterValue} gender={gender} />
        </div>
      </div>
    </section>
  );
};

export default CatalocSection;
