import React, { FC } from 'react';
import './ExpertsSelect.scss';

export const ExpertsSelect: FC = () => {
  return (
    <form action="#" className="experts">
      <select className="experts__select" defaultValue="Эксперт" name="experts" id="experts">
        <option value="Эксперт" disabled>Эксперт</option>
        <option value="Эксперт 2">Эксперт 2</option>
        <option value="Эксперт 3">Эксперт 3</option>
        <option value="Эксперт 4">Эксперт 4</option>
      </select>
    </form>
  );
};
