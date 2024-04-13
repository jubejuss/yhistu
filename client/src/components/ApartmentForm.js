import React, { useState } from 'react';

const ApartmentForm = ({ apartmentCount }) => {
  const [apartments, setApartments] = useState([]);

  const addApartment = () => {
    const newApartment = {
      apartmentNumber: apartments.length + 1,
      squareMeters: '',
      tenantName: ''
    };
    setApartments([...apartments, newApartment]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newApartments = [...apartments];
    newApartments[index][name] = value;
    setApartments(newApartments);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(apartments);
  };

  return (
    <div>
      <h2>Add Apartments</h2>
      <button onClick={addApartment}>Add New Apartment</button>
      <form onSubmit={handleSubmit}>
        {apartments.map((apartment, index) => (
          <div key={index}>
            <h3>Apartment {apartment.apartmentNumber}</h3>
            <label>
              Square Meters:
              <input
                type="number"
                name="squareMeters"
                value={apartment.squareMeters}
                onChange={(event) => handleInputChange(index, event)}
              />
            </label>
            <label>
              Tenant Name:
              <input
                type="text"
                name="tenantName"
                value={apartment.tenantName}
                onChange={(event) => handleInputChange(index, event)}
              />
            </label>
          </div>
        ))}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ApartmentForm;
