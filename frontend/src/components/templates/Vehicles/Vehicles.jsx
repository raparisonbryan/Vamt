import React from 'react';

export default function Vehicles({ cars }) {

  if (!cars) return <h1>Loading...</h1>;

  return (
    <div>
      {cars.map(car => (
        <div key={car._id}>
          <h2>{car.name}</h2>
          <p>{car.description}</p>
        </div>
      ))}
    </div>
  );
}
