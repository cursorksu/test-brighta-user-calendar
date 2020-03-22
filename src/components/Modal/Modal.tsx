import React, { FC } from 'react';
import './Modal.scss';

export const Modal: FC = ({ children }) => {
  return (
    <div className="modal__backdrop">
      <div className="modal__wrapper">
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};
