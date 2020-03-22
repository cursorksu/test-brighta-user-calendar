import React, { FC } from 'react';
import './FilterParams.scss';
import moment from 'moment';

interface Props {
  dates: Date[];
}

export const FilterParams: FC<Props> = ({ dates }) => {
  return (
    <div className="params-wrapper">
      <div className="params">
        {dates[0] === dates[1]
          ? `${moment(dates[0]).format('D MMM YYYY')} г.`
          : `${moment(dates[0]).format('D MMM')} - ${moment(dates[1]).format('D MMM YYYY')} г.`}
        <button type="button" className="params__close">close</button>
      </div>
    </div>
  );
};
