import React from 'react';
import s from './styles.module.scss';
import classNames from 'classnames';

const TextWindow = ({ onHover, children, customClassName, width }) => {
  return (
    <div
      className={classNames(s.custom__textWindow, customClassName)}
      onMouseOver={onHover}
      style={{ width }}
    >
      {children}
    </div>
  );
};

export default TextWindow;

