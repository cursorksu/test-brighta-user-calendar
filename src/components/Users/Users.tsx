/* eslint-disable */
import React, { FC } from 'react';
import { UserItem } from '../UserItem';
import { ShowOption } from '../ShowOption';

import './Users.scss';

interface Props {
  users: User[];
  getShowAmount: (value: number) => void;
  isFiltered: boolean;
  getUserId: (id: number) => void;
}

export const Users: FC<Props> = ({
  users, getUserId, getShowAmount, isFiltered,
}) => {
  return (
    <table className="users">
      <thead className="users__head">
        <tr className="users__item">
          <th className="users__checkbox-wrapper">
            <form action="#">
              <input className="users__checkbox" id="selectAll" type="checkbox" />
              <label htmlFor="selectAll" className="users__label" />
            </form>
          </th>
          <th className="users__cel">
            <span>Пользователь</span>
          </th>
          <th className="users__cel">
            <span>Дата регистрации</span>
          </th>
          <th className="users__cel">
            <span>Последняя активность</span>
          </th>
          <th className="users__cel">
            <span>Последнее действие</span>
          </th>
          <th className="users__cel">
            <span>Продукт</span>
          </th>
          <th className="users__select">
            { isFiltered
              ? `Найдено  ${users.length}`
              : (
                <ShowOption
                  getShowAmount={getShowAmount}
                />
              )}
          </th>

        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UserItem
            user={user}
            key={user.userId + user.lastActivity}
            getUserId={getUserId}
          />
        ))}
      </tbody>
    </table>
  );
};
