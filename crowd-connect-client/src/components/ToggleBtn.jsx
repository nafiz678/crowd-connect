import React, { useContext, useState } from 'react';
import "./toggle.css"
import { authContext } from '../provider/AuthProvider';

const ToggleBtn = () => {
    const { setDark, dark } = useContext(authContext)


    const handleTheme = () => {
        setDark(!dark)

    }


    return (

        <input onClick={handleTheme} className="theme-checkbox" type="checkbox" />


    );
};

export default ToggleBtn;