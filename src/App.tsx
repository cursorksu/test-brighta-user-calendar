import React, { FC, useState, useEffect } from 'react';
import { getData } from './api/api';
import { Users } from './components/Users';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Filter } from './components/Filter';
import { LoadedMessage } from './components/LoadedMessage';
import { BASE_URL } from './constants/constants';

import './styles/reset.scss';
import './styles/utils/_mixins.scss';
import './styles/utils/_vars.scss';
import './styles/App.scss';


export const App: FC = () => {
  const [usersFromServer, setUsersFromServer] = useState<User[]|[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('users');
  const [visibleUsers, setVisibleUsers] = useState<User[]|[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getData<User[]>(BASE_URL)
      .then(userList => {
        setUsersFromServer(userList);
        if (visibleUsers.length === 0) {
          setVisibleUsers(userList);
        }
      })
      .catch(errorMass => setError(errorMass.toString()))
      .finally(() => setIsLoading(false));
  }, [isFiltered]);

  const handleLoadToBackend = () => {
    setIsDataLoaded(true);
    setTimeout(() => {
      setIsDataLoaded(false);
    }, 3000);
    localStorage.setItem('users', JSON.stringify(visibleUsers));
  };

  const setFilteredUsers = (field = 'signUpDay', start: Date, end: Date) => {
    if (field === 'signUpDay') {
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

  const resetFilter = () => {
    setVisibleUsers(usersFromServer);
    setIsFiltered(false);
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
            resetFilter={resetFilter}
            isFiltered={isFiltered}
            loadToBackend={handleLoadToBackend}
            onFilter={(
              field: string,
              start: Date,
              end: Date,
            ) => setFilteredUsers(field, start, end)}
          >
            { isDataLoaded
              && <LoadedMessage />}
          </Filter>

          {isLoading && <p className="loader"><img src="/icons/loader.svg" alt="preloader" /></p>}

          {!error
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
