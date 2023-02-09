import React from 'react';
import icon from './death-star.png'

import './error-indicator.css'

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <img src={icon} alt="error icon"/>
      <span className='boom'> BOOM! </span>
      <span>
        Что то пошло не так!
      </span>
      <span>Дроиды уже отправлеены, чтобы исправить это</span>
    </div>
  );
};

export default ErrorIndicator;