/* eslint-disable */
import React, {FC,  useState} from 'react';
import { Calendar } from 'primereact/calendar';
import {
  ru,
  allTime,
  now,
  yesterday,
  lastWeek,
  lastMonth,
  lastThirtyDays,
  lastDayLastMonth,
  thisMonth,
} from '../../constants/data';
import { Modal } from '../Modal';
import { FilterParams } from '../FilterParams';
import { SelectTimeInterval } from '../SelectTimeInterval';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Filter.scss';
import './Calendar.scss';


interface Props {
  onFilter: (field: string, start: Date, end: Date) => void;
}

export const Filter: FC<Props> = ({ onFilter }) => {
  const [startDate, setStartDate] = useState(now);
  const [endDate, setEndDate] = useState(now);
  const [filterBy, setFilterBy] = useState('');
  const [openFilter, setOpenFilter] = useState(false);
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState('Сегодня');
  const [isDisabled, setIsDisabled] = useState<boolean | undefined>(true);

  const setFilterOption = (opt: string) => {
    let filterOption = '';

    switch (opt) {
      case 'По дате регистрации':
        filterOption = 'По дате регистрации';
        break;
      case 'По дате последней активности':
        filterOption = 'По дате последней активности';
        break;
      default:
        return;
    }

    setFilterBy(filterOption);
    setOpenFilter(false);
  };

  const dateTemplate = (date: any) => {
    const day = new Date(`${date.month + 1}/${date.day}/${date.year}`);

    if (startDate === endDate) {
      return (
        <div className="none">{date.day}</div>
      );
    }

    if (day > startDate && day < endDate) {
      return (
        <div className="date__interval">{date.day}</div>
      );
    }

    if (
      date.day === startDate.getDate()
      && date.month === startDate.getMonth()
      && date.year === startDate.getFullYear()
    ) {
      return (
        <div className="date__interval date__interval--start">{date.day}</div>
      );
    }

    if (
      day === endDate
    // && (date.month === endDate.getMonth()
    // || date.month === endDate.getMonth())
    ) {
      return (
        <div className="date__interval date__interval--end">{date.day}</div>
      );
    }

    return date.day;
  };

  const setDataInterval = () => {
    switch (option) {
      case 'Весь срок':
        setStartDate(allTime);
        setEndDate(now);
        break;
      case 'Сегодня':
        setStartDate(now);
        setEndDate(now);
        break;
      case 'Вчера':
        setStartDate(new Date(yesterday));
        setEndDate(new Date(yesterday));
        break;
      case 'Последние 7 дней':
        setStartDate(new Date(lastWeek));
        setEndDate(now);
        break;
      case 'Последние 30 дней':
        setStartDate(new Date(lastThirtyDays));
        setEndDate(now);
        break;
      case 'В этом месяце':
        setStartDate(new Date(thisMonth));
        setEndDate(now);
        break;
      case 'Прошлый месяц':
        setStartDate(new Date(lastMonth));
        setEndDate(new Date(lastDayLastMonth));
        break;
      default:
    }
  };

  const setDataOption = (opt: string) => {
    setOption(opt);
    setIsDisabled(undefined);

    setDataInterval();
    onFilter(filterBy, startDate, endDate);
  };

  const handleClickOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseCancel = () => {
    setOpen(false);
  };

  const handleCalendarChange = (event : any) => {
    setEndDate(new Date(event.value));
  };

  const handleClose = () => {
    setOpen(false);
    setIsDisabled(true);
  };

  return (
    <div className="flex-container filter">
      <div className="filter__col">
        <button className="filter-btn btn__select" type="button" onClick={handleClickOpen}>
          <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5001 20H1C0.4 20 0 19.6 0 19V2.70001C0 2.10001 0.4 1.70001 1 1.70001H21.5001C22.1001 1.70001 22.5001 2.10001 22.5001 2.70001V19C22.5001 19.5 22.1001 20 21.5001 20ZM2 18H20.5001V3.70001H2V18Z" fill="black" />
            <path d="M17.7002 5.29999C17.1002 5.29999 16.7002 4.89999 16.7002 4.29999V1C16.7002 0.4 17.1002 0 17.7002 0C18.3002 0 18.7002 0.4 18.7002 1V4.29999C18.7002 4.89999 18.3002 5.29999 17.7002 5.29999Z" fill="black" />
            <path d="M5.00006 5.29999C4.40006 5.29999 4 4.89999 4 4.29999V1C4 0.4 4.40006 0 5.00006 0C5.60006 0 6.00006 0.4 6.00006 1V4.29999C6.00006 4.89999 5.50006 5.29999 5.00006 5.29999Z" fill="black" />
            <path d="M21.5002 8.60004H1.2002C0.900195 8.60004 0.700195 8.40004 0.700195 8.10004C0.700195 7.80004 0.900195 7.60004 1.2002 7.60004H21.5002C21.8002 7.60004 22.0002 7.80004 22.0002 8.10004C22.0002 8.30004 21.8002 8.60004 21.5002 8.60004Z" fill="black" />
            <path d="M5.7002 10.6H3.7002V12.5H5.7002V10.6Z" fill="black" />
            <path d="M9.00012 10.6H7.1001V12.5H9.00012V10.6Z" fill="black" />
            <path d="M12.3999 10.6H10.5V12.5H12.3999V10.6Z" fill="black" />
            <path d="M15.7998 10.6H13.7998V12.5H15.7998V10.6Z" fill="black" />
            <path d="M19.1002 10.6H17.2002V12.5H19.1002V10.6Z" fill="black" />
            <path d="M5.7002 13.7H3.7002V15.7H5.7002V13.7Z" fill="black" />
            <path d="M9.00012 13.7H7.1001V15.7H9.00012V13.7Z" fill="black" />
            <path d="M12.3999 13.7H10.5V15.7H12.3999V13.7Z" fill="black" />
            <path d="M15.7998 13.7H13.7998V15.7H15.7998V13.7Z" fill="black" />
            <path d="M19.1002 13.7H17.2002V15.7H19.1002V13.7Z" fill="black" />
          </svg>
          {option}
        </button>
        <button className="filter-btn btn__filter" type="button" onClick={handleClickOpenFilter}>
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.2998 10.5C2.6998 10.5 2.2998 10.1 2.2998 9.5V1C2.2998 0.4 2.6998 0 3.2998 0C3.8998 0 4.2998 0.4 4.2998 1V9.5C4.2998 10 3.7998 10.5 3.2998 10.5Z" fill="black" />
            <path d="M3.2998 23.5C2.6998 23.5 2.2998 23.1 2.2998 22.5V15.2C2.2998 14.6 2.6998 14.2 3.2998 14.2C3.8998 14.2 4.2998 14.6 4.2998 15.2V22.5C4.2998 23.1 3.7998 23.5 3.2998 23.5Z" fill="black" />
            <path d="M3.29999 15.7999C1.49999 15.7999 0 14.3 0 12.5C0 10.7 1.49999 9.19995 3.29999 9.19995C5.09999 9.19995 6.60004 10.7 6.60004 12.5C6.60004 14.3 5.09999 15.7999 3.29999 15.7999ZM3.29999 11.2999C2.59999 11.2999 2 11.9 2 12.6C2 13.3 2.59999 13.8999 3.29999 13.8999C3.99999 13.8999 4.60004 13.3 4.60004 12.6C4.60004 11.9 3.99999 11.2999 3.29999 11.2999Z" fill="black" />
            <path d="M10.6997 15.2C10.0997 15.2 9.69971 14.8 9.69971 14.2V1C9.69971 0.4 10.0997 0 10.6997 0C11.2997 0 11.6997 0.4 11.6997 1V14.2C11.6997 14.7 11.2997 15.2 10.6997 15.2Z" fill="black" />
            <path d="M10.6997 23.5C10.0997 23.5 9.69971 23.1 9.69971 22.5V19.2C9.69971 18.6 10.0997 18.2 10.6997 18.2C11.2997 18.2 11.6997 18.6 11.6997 19.2V22.5C11.6997 23.1 11.2997 23.5 10.6997 23.5Z" fill="black" />
            <path d="M10.6999 19.7999C8.89989 19.7999 7.3999 18.3 7.3999 16.5C7.3999 14.7 8.89989 13.2 10.6999 13.2C12.4999 13.2 13.9999 14.7 13.9999 16.5C13.9999 18.3 12.4999 19.7999 10.6999 19.7999ZM10.6999 15.2999C9.99989 15.2999 9.3999 15.9 9.3999 16.6C9.3999 17.3 9.99989 17.8999 10.6999 17.8999C11.3999 17.8999 11.9999 17.3 11.9999 16.6C11.9999 15.9 11.3999 15.2999 10.6999 15.2999Z" fill="black" />
            <path d="M18.1997 5.69995C17.5997 5.69995 17.1997 5.29995 17.1997 4.69995V1C17.1997 0.4 17.5997 0 18.1997 0C18.7997 0 19.1997 0.4 19.1997 1V4.69995C19.1997 5.19995 18.7997 5.69995 18.1997 5.69995Z" fill="black" />
            <path d="M18.1997 23.5C17.5997 23.5 17.1997 23.1 17.1997 22.5V9.5C17.1997 8.9 17.5997 8.5 18.1997 8.5C18.7997 8.5 19.1997 8.9 19.1997 9.5V22.5C19.1997 23.1 18.7997 23.5 18.1997 23.5Z" fill="black" />
            <path d="M18.1999 10.2C16.3999 10.2 14.8999 8.6999 14.8999 6.8999C14.8999 5.0999 16.3999 3.59998 18.1999 3.59998C19.9999 3.59998 21.4999 5.0999 21.4999 6.8999C21.4999 8.6999 19.9999 10.2 18.1999 10.2ZM18.1999 5.69995C17.4999 5.69995 16.8999 6.3 16.8999 7C16.8999 7.7 17.4999 8.29993 18.1999 8.29993C18.8999 8.29993 19.4999 7.7 19.4999 7C19.4999 6.3 18.8999 5.69995 18.1999 5.69995Z" fill="black" />
          </svg>
          {filterBy || 'Фильтр'}
        </button>
      </div>
      <div className="filter__col">
        <button className="btn btn--secondary" type="button">Выгрузить</button>
        <button className="btn btn--primary" type="button">Добавить контакт</button>
      </div>

      <FilterParams
        dates={[startDate, endDate]}
      />
      {openFilter && (
        <Modal>
          <SelectTimeInterval
            lastOption={option}
            options={['По дате регистрации', 'По дате последней активности']}
            getOption={(str: string) => setFilterOption(str)}
          />
        </Modal>
      )}
      {open && (
        <Modal>
          <SelectTimeInterval
            options={['Весь срок', 'Сегодня', 'Вчера', 'Последние 7 дней', 'Последние 30 дней', 'В этом месяце', 'Прошлый месяц']}
            getOption={(str: string) => setDataOption(str)}
            lastOption={option}
          />
          <div className="calendar__wrapper">
            <Calendar
              dateTemplate={dateTemplate}
              inline
              locale={ru}
              value={[startDate, endDate]}
              dateFormat="dd/mm/yy"
              selectionMode="multiple"
              onChange={handleCalendarChange}
            />
            <div className="btn-wrapper">
              <button
                type="button"
                className="btn btn--secondary"
                onClick={handleCloseCancel}
              >
                Отмена
              </button>
              <button
                type="button"
                className="btn btn--primary"
                onClick={handleClose}
                disabled={isDisabled}
              >
                Обновить
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
