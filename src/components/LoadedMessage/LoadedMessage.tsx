import React, { FC } from 'react';
import './LoadedMessage.scss';

export const LoadedMessage: FC = () => {
  return (
    <div className="params-wrapper">
      <p className="massage">
        Даныне были отправлены на сервер (localStorage)
      </p>
    </div>
  );
};
