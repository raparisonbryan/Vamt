import HomePage from "../src/components/templates/HomePage/HomePage";
import AccueilLayout from "../src/components/UI/layouts/AccueilLayout";
import React, { useEffect, useState } from 'react';


export default function Home({ initialCars }) {
  const [cars, setCars] = useState(initialCars);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch('http://localhost:3000/api/cars/');
      const carsData = await response.json();
      setCars(carsData);
    };

    fetchCars();
  }, []);

  return (
    <>
      <AccueilLayout>
        <HomePage cars={cars} />
      </AccueilLayout>
    </>
  );
}
