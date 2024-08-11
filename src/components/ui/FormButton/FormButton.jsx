import React from "react";
import s from "./styles.module.scss";
import classNames from 'classnames'; 


const FormButton = ({ onClick, children, customClassName}) => {
    return(
        <button className={classNames(s.custom__formButton, customClassName)} onClick={onClick}>{children}</button>
    )
}

export default FormButton;