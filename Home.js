import React, { useState, useEffect } from 'react';
import CarList from '../components/CarList';
import axios from 'axios';

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    
    axios.get('https://api.example.com/cars')
      .then(response => setCars(response.data))
      .catch(error => console.error('Error fetching cars:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">Available Cars</h1>
      <CarList cars={cars} />
    </div>
  );
}

export default Home;
