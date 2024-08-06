import React from 'react';
import s from './styles.module.scss';
import classNames from 'classnames';

const TextWindow = ({ onHover, windowText, customClassName }) => {
  return (
    <div
      className={classNames(s.custom__textWindow, customClassName)}
      onMouseOver={onHover}
    >
      {windowText}
    </div>
  );
};

export default TextWindow;
