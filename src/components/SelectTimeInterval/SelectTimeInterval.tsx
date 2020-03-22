import React, { FC, useState, useEffect } from 'react';
import classNames from 'classnames';
import './SelectTimeInterval.scss';

interface Props {
  getOption: (str: string) => void;
  options: Option[];
  lastOption: string;
}

export const SelectTimeInterval: FC<Props> = ({
  lastOption,
  getOption,
  options,
}) => {
  const [activeOption, setActiveOption] = useState(lastOption);

  const handleClick = (label: string) => {
    setActiveOption(label);
    getOption(label);
  };

  useEffect(() => {
    setActiveOption(lastOption);
  }, [lastOption]);

  return (
    <div className="select">
      {options.map(({ value, label }) => (
        <button
          key={label}
          type="button"
          onClick={() => handleClick(label)}
          className={classNames({
            select__btn: 'select__btn',
            'select__btn--active': activeOption === label,
          })}
        >
          {value}
        </button>
      ))}
    </div>
  );
};
