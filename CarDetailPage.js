import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import axios from 'axios';

function CarDetailPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    
    axios.get(`https://api.example.com/cars/${id}`)
      .then(response => setCar(response.data))
      .catch(error => console.error('Error fetching car details:', error));
  }, [id]);

  if (!car) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={car.image} alt={car.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{car.name}</h2>
          <p>{car.description}</p>
          <p><strong>Price:</strong> ${car.price} per day</p>
          <BookingForm car={car} />
        </div>
      </div>
    </div>
  );
}

export default CarDetailPage;
