import React, { FC, useState, useEffect } from 'react';
import { getData } from './api/api';
import { Users } from './components/Users';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Filter } from './components/Filter';
import { users } from './constants/data';
import { BASE_URL } from './constants/constants';

import './styles/reset.scss';
import './styles/utils/_mixins.scss';
import './styles/utils/_vars.scss';
import './styles/App.scss';


export const App: FC = () => {
  const [usersFromServer, setUsersFromServer] = useState<User[]>(users);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('users');
  const [visibleUsers, setVisibleUsers] = useState<User[]>(users);
  const [isFiltered, setIsFiltered] = useState(false);


  useEffect(() => {
    getData<User[]>(BASE_URL)
      .then(userList => {
        setUsersFromServer(userList);
      })
      .catch(errorMass => setError(errorMass.toString()))
      .finally(() => setIsLoading(false));
  });

  const setFilteredUsers = (field = 'По дате регистрации', start: Date, end: Date) => {
    if (field === 'По дате регистрации') {
      const userList = usersFromServer
        .filter(user => new Date(user.signInDate) > start
          && new Date(user.signInDate) < end);

      setVisibleUsers(userList);
      setIsFiltered(true);
    } else {
      const userList = usersFromServer
        .filter(user => new Date(user.lastActivity) > start
          && new Date(user.lastActivity) < end);

      setVisibleUsers(userList);
      setIsFiltered(true);
    }
  };

  const deleteItem = (id: number) => {
    setVisibleUsers(visibleUsers
      .filter(user => user.userId !== id));
  };

  const setShowAmount = (value: number) => {
    setVisibleUsers(usersFromServer
      .filter((user, idx) => user && idx < value));
  };

  return (
    <>
      <Header />
      <Navigation />
      <main className="main">
        <div className="container">
          <Filter
            onFilter={
              (field: string,
                start: Date,
                end: Date) => setFilteredUsers(field, start, end)
            }
          />
          {isLoading && <p className="loader">Данные загружаются...</p>}
          {error
            ? (
              <p className="error">
Ops!!!
                {error}
              </p>
            )
            : (
              <Users
                users={visibleUsers}
                getShowAmount={setShowAmount}
                isFiltered={isFiltered}
                getUserId={deleteItem}
              />
            )}
        </div>
      </main>
    </>
  );
};
