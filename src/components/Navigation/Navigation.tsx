import React, { FC } from 'react';
import { ExpertsSelect } from '../ExpertsSelect';
import { MainNav } from '../MainNav';

import './Navigation.scss';

export const Navigation: FC = () => {
  return (
    <aside className="aside">
      <ExpertsSelect />
      <MainNav />
    </aside>
  );
};
