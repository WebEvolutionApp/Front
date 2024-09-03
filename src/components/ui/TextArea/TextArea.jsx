import React, { forwardRef } from 'react';
import s from './styles.module.scss';
import classNames from 'classnames';

const TextArea = forwardRef(({
  placeholder = 'Введите текст',
  customClassName,
  width,
  height,
  maxLength,
  value, 
  onChange, 
  error, 
  ...props
}, ref) => {
  return (
    <textarea
      ref={ref}
      className={classNames(
        s.custom__textarea,
        customClassName,
        { [s.filled]: value },
        { [s.error]: error } 
      )}
      style={{ width, height }}
      placeholder={placeholder}
      value={value} 
      onChange={onChange} 
      maxLength={maxLength}
      {...props}
    />
  );
});

export default TextArea;
