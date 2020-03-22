import React, { FC } from 'react';

import './ShowOption.scss';

interface Props {
  getShowAmount: (value: number) => void;
}

export const ShowOption: FC<Props> = ({ getShowAmount }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;

    getShowAmount(Number(value));
  };

  return (
    <form action="#" className="show-option">
      <select className="show-option__select" name="showOption" defaultValue="Отобразить 15" id="showOption" onChange={handleChange}>
        <option value="5">Отобразить 5</option>
        <option value="10">Отобразить 10</option>
        <option value="15">Отобразить 15</option>
        <option value="20">Отобразить 20</option>
      </select>
    </form>
  );
};
