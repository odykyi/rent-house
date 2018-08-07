import React from 'react';
import { Select } from 'rebass'

const RentalTypes = props => {

  return (
    <Select>
      <option>Новостройки</option>
      <option>Вся недвижимость</option>
      <option>Продажа квартир</option>
      <option>Продажа домов</option>
      <option>Аренда домов</option>
      <option>Аренда квартир</option>
      <option>Посуточная аренда</option>
      <option>Коттеджные городки</option>
    </Select>
  );
};

export default RentalTypes
