import React, { useState } from 'react';
import s from './styles.module.scss';
import classNames from 'classnames';

const TextArea = ({ 
  placeholder = 'Введите текст', 
  customClassName, 
  width, 
  height,
  maxLength 
}) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <textarea
      className={classNames(
        s.custom__textarea, 
        customClassName, 
        { [s.filled]: value } 
      )}
      style={{ width, height }}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      maxLength={maxLength}  
    />
  );
};

export default TextArea;
