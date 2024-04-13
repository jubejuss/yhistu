import React, { useState } from 'react';

const ExpenseForm = ({ apartments = [], years = [], months = [] }) => {
  const [selectedApartment, setSelectedApartment] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [waterReading, setWaterReading] = useState('');
  const [gasReading, setGasReading] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      apartmentNumber: selectedApartment,
      year: selectedYear,
      month: selectedMonth,
      waterReading,
      gasReading,
    });
    // Add your form submission logic here
  };

  const validateForm = () => {
    return (
      selectedApartment !== '' &&
      selectedYear !== '' &&
      selectedMonth !== '' &&
      waterReading.trim() !== '' &&
      gasReading.trim() !== ''
    );
  };

  return (
    <div>
      <h2>Add Expenses</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Apartment:
          <select
            value={selectedApartment}
            onChange={(e) => setSelectedApartment(e.target.value)}
            required
          >
            <option value="">Select Apartment</option>
            {apartments.map((apartment, index) => (
              <option key={index} value={apartment}>
                {apartment}
              </option>
            ))}
          </select>
        </label>
        <label>
          Year:
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            required
          >
            <option value="">Select Year</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
        <label>
          Month:
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            required
          >
            <option value="">Select Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </label>
        <label>
          Water Reading:
          <input
            type="number"
            value={waterReading}
            onChange={(e) => setWaterReading(e.target.value)}
            required
          />
        </label>
        <label>
          Gas Reading:
          <input
            type="number"
            value={gasReading}
            onChange={(e) => setGasReading(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={!validateForm()}>
          Save
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
