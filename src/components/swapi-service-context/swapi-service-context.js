import React from 'react';

//Создаю контекст, которым можно будет обернуть все приложение
const {
  Provider : SwapiServiceProvider,
  Consumer: SwapiServiceConsumer
} = React.createContext();

export {SwapiServiceProvider, SwapiServiceConsumer};