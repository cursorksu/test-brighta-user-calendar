import React, { FC, useState } from 'react';
import classNames from 'classnames';
import './SelectTimeInterval.scss';

interface Props {
  getOption: (str: string) => void;
  options: string[];
  lastOption: string;
}

export const SelectTimeInterval: FC<Props> = ({ lastOption, getOption, options }) => {
  const [activeOption, setActiveOption] = useState(lastOption);


  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const opt: string = e.currentTarget.innerText;

    setActiveOption(opt);
    getOption(opt);
  };

  return (
    <div className="select">
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          onClick={handleClick}
          className={classNames({
            select__btn: 'select__btn',
            'select__btn--active': activeOption === opt,
          })}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};
