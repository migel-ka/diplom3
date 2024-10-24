import { FC, useEffect, useState } from 'react';
import ComandosCard from '../ComandosCard';
import { Comandos } from '../../type/comandos';
import style from "./style.module.css";

type Props = {
  filterValue: string;
}

const ComandosCards: FC<Props> = ({ filterValue }) => {
  const [teams, setTeams] = useState<Comandos[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch('https://63493ca281c1e5e9.mokky.dev/comandos');
      const data = await response.json();
      setTeams(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredTeams = filterValue
    ? teams.filter(item => item.name.includes(filterValue))
    : teams;

  return (
    <div className={style.containerGrid}>
      {isLoading && <p>...loading</p>}
      {isError && <p>Server is dead</p>}
      {filteredTeams.map(team => (
        <ComandosCard data={team} key={team.id}/>
      ))}
    </div>
  );
}

export default ComandosCards;
