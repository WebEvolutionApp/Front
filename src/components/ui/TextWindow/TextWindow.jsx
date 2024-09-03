import React from 'react';
import s from './styles.module.scss';
import classNames from 'classnames';

const TextWindow = ({ onHover, children, customClassName, width }) => {
  return (
    <div
      className={classNames(s.custom__textWindow, customClassName, {
        [s.fullWidth]: width === '100%',
        [s.smallWidth]: width === '18.5vw',
      })}
      onMouseOver={onHover}
      style={{ width: width !== '100%' && width !== '18.5vw' ? width : 'auto' }}
    >
      {children}
    </div>
  );
};

export default TextWindow;
