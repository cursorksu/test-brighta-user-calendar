/* eslint-disable */
import React, { FC } from 'react';
import { ru } from '../../constants/data';

import './UserItem.scss';

interface Props {
  user: User;
  getUserId: (id: number) => void;
}

export const UserItem: FC<Props> = ({ user, getUserId }) => {
  const {
    name,
    lastActivity,
    signInDate,
    lastAction,
    product,
    email,
  } = user;

  const handleDelete = (id: number) => {
    getUserId(id);
  };

  return (
    <tr className="users__item">
      <td className="users__checkbox-wrapper">
        <form action="#">
          <input className="users__checkbox" id={name} type="checkbox" />
          <label htmlFor={name} className="users__label" />
        </form>
      </td>
      <td className="users__cel">
        <span className="users__name">
          {user.block && <span className="users__block" />}
          {name}
        </span>
        <span className="users__email">{email}</span>
      </td>
      <td className="users__cel">
        <span>
          {`${ru.monthNames[new Date(signInDate).getMonth()]} ${new Date(signInDate).getDate()}, ${new Date(signInDate).getFullYear()}`}
        </span>
      </td>
      <td className="users__cel">
        <span>
          {`${ru.monthNames[new Date(lastActivity).getMonth()]} ${new Date(lastActivity).getDate()}, ${new Date(lastActivity).getFullYear()}`}
        </span>
      </td>
      <td className="users__cel">
        <span>{lastAction}</span>
      </td>
      <td className="users__cel">
        <span>{product}</span>
      </td>
      <td className="users__btn-wrapper">
        <button type="button" className="users__btn">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 22.2C0.7 22.2 0.500003 22.1 0.300003 21.9C0.100003 21.7 0 21.4 0 21.1L0.300003 16C0.300003 15.8 0.399991 15.5 0.599991 15.4L15.7 0.299988C15.9 0.0999878 16.1 0 16.4 0C16.7 0 16.9 0.0999878 17.1 0.299988L21.9 5.10004C22.1 5.30004 22.2 5.49999 22.2 5.79999C22.2 6.09999 22.1 6.3 21.9 6.5L6.8 21.6C6.6 21.8 6.4 21.9 6.2 21.9L1 22.2ZM2.2 16.5L2 20.1L5.59999 19.9L19.8 5.70001L16.4 2.29999L2.2 16.5Z" fill="black" />
            <path d="M18.5 8.90004C18.2 8.90004 18 8.80005 17.8 8.60005L13.5 4.3C13.1 3.9 13.1 3.30004 13.5 2.90004C13.9 2.50004 14.4999 2.50004 14.8999 2.90004L19.1999 7.20002C19.5999 7.60002 19.5999 8.20005 19.1999 8.60005C18.9999 8.80005 18.7 8.90004 18.5 8.90004Z" fill="black" />
            <path d="M1.5 18.7C1.4 18.7 1.4 18.7 1.3 18.7C1.2 18.7 1.19999 18.7 1.09999 18.7L1 21.2L3.39999 21.1C3.39999 21 3.4 20.9 3.5 20.8C3.5 19.6 2.7 18.7 1.5 18.7Z" fill="black" />
          </svg>
        </button>
      </td>
      <td className="users__btn-wrapper">
        <button
          type="button"
          className="users__btn"
          onClick={() => handleDelete(user.userId)}
        >
          <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.8 4.70001H1C0.4 4.70001 0 4.30001 0 3.70001C0 3.10001 0.4 2.70001 1 2.70001H21.8C22.4 2.70001 22.8 3.10001 22.8 3.70001C22.8 4.30001 22.3 4.70001 21.8 4.70001Z" fill="black" />
            <path d="M14.0001 4.09998C13.8001 2.89998 12.7 2 11.4 2C10.2 2 9.10005 2.89998 8.80005 4.09998L6.80005 3.70001C7.20005 1.60001 9.10005 0 11.3 0C13.5 0 15.4 1.60001 15.8 3.70001L14.0001 4.09998Z" fill="black" />
            <path d="M4.6001 24C3.6001 24 2.7001 23.1 2.6001 22.1L1.6001 4.79998C1.6001 4.19998 2.00012 3.80001 2.50012 3.70001C3.10012 3.70001 3.5001 4.09997 3.6001 4.59997L4.6001 21.9L18.1001 22L19.1001 4.59997C19.1001 3.99997 19.6001 3.60001 20.2001 3.70001C20.8001 3.70001 21.2001 4.19998 21.1001 4.79998L20.1001 22.1C20.0001 23.2 19.2001 24 18.1001 24H4.6001Z" fill="black" />
            <path d="M7.59991 23.9155C7.09991 23.9155 6.59991 23.5155 6.59991 23.0155L5.8999 11.1155C5.8999 10.5155 6.29993 10.1155 6.79993 10.0155C7.29993 10.0155 7.7999 10.4155 7.8999 10.9155L8.59991 22.8156C8.59991 23.4156 8.19991 23.9155 7.59991 23.9155Z" fill="black" />
            <path d="M15.2 23.9152C15.2 23.9152 15.1 23.9152 15.2 23.9152C14.6 23.9152 14.2 23.4152 14.2 22.8152L14.9 10.9152C14.9 10.3152 15.4 9.91519 16 10.0152C16.6 10.0152 17 10.5152 16.9 11.1152L16.2 23.0152C16.1 23.5152 15.7 23.9152 15.2 23.9152Z" fill="black" />
            <path d="M11.3999 20.3C10.7999 20.3 10.3999 19.9 10.3999 19.3V7.39996C10.3999 6.79996 10.7999 6.39996 11.3999 6.39996C11.9999 6.39996 12.3999 6.79996 12.3999 7.39996V19.3C12.3999 19.9 11.8999 20.3 11.3999 20.3Z" fill="black" />
          </svg>
        </button>
      </td>
    </tr>
  );
};
