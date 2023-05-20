//Dependencies
import React from 'react';

export const Pet = ({ animal }) => {
  return (
    <div>
      <h1>Nombre de Mascota: {animal.name}</h1>
      <h2>Tipo: {animal.type}</h2>
      <h2>Comida: {animal.breed}</h2>
      &nbsp;
    </div>
  );
};
