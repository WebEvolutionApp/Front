import React, { useState } from 'react';
import s from './styles.module.scss';
import classNames from 'classnames';

const Input = ({ 
  placeholder = 'Введите текст', 
  customClassName, 
  width, 
  height 
}) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      className={classNames(
        s.custom__input, 
        customClassName, 
        { [s.filled]: value } 
      )}
      style={{ width, height }}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;


