import React, { FC } from 'react';
import { ru } from '../../constants/data';
import './FilterParams.scss';

interface Props {
  dates: Date[];
  onClose: () => void;
  resetFilter: () => void;
}

export const FilterParams: FC<Props> = ({ dates, onClose, resetFilter }) => {
  const handleClose = () => {
    resetFilter();
    onClose();
  };

  const isOneDay = dates[0].getDate() === dates[1].getDate()
    && dates[0].getMonth() === dates[1].getMonth()
    && dates[0].getFullYear() === dates[1].getFullYear();

  const date = {
    startDay: dates[0].getDate(),
    startMonth: ru.monthNamesShort[dates[0].getMonth()],
    startYear: (dates[0].getFullYear() !== dates[1].getFullYear() || isOneDay) ? dates[0].getFullYear() : '',
    endDay: dates[1].getDate(),
    endMonth: ru.monthNamesShort[dates[1].getMonth()],
    endYear: dates[1].getFullYear(),
  };

  const twoDays = `${date.startDay} ${date.startMonth} ${date.startYear && `${date.startYear}г.`} - ${date.endDay} ${date.endMonth} ${date.endYear}г.`;
  const oneDay = `${date.startDay} ${date.startMonth} ${date.startYear}г.`;


  return (
    <div className="params-wrapper">
      <div className="params">
        {isOneDay
          ? oneDay
          : twoDays}
        <button type="button" className="params__close" onClick={handleClose}>close</button>
      </div>
    </div>
  );
};
