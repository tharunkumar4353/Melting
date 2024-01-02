import React from 'react';
import './App.css';

function App() {
  // Sample data
  const data = [
    { sno: 1},
    { sno: 2},
    { sno: 3},
    { sno: 4},
    { sno: 5},
    { sno: 6},
    { sno: 7},
    { sno: 8},
  ];

  return (
    <div className="page">
    <div className="container">
      <div className="f1">
        <h2>Furnace 1</h2>
        <p> Capacity: 1 Tonne</p>
        <p> Heat No:</p>
        <p> Tapping Temperature:</p>
        <p> Pouring Temperature:</p>
      </div>
      <div className="f1">
        <h2>Furnace 2</h2>
        <p> Capacity: 1 Tonne</p>
        <p> Heat No:</p>
        <p> Tapping Temperature:</p>
        <p> Pouring Temperature:</p>
      </div>
      <div className="f1">
        <h2>Furnace 3</h2>
        <p> Capacity: 1 Tonne</p>
        <p> Heat No:</p>
        <p> Tapping Temperature:</p>
        <p> Pouring Temperature:</p>
      </div>
    </div>
  
      <div className="fulltable">
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Date</th>
              <th>Furnace</th>
              <th>Heat Number</th>
              <th>Charging Temperature</th>
              <th>Tapping Temperature</th>
              <th>Energy Consumption</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.sno}>
                <td>{item.sno}</td>
                <td>{item.date}</td>
                <td>{item.furnace}</td>
                <td>{item.heatNumber}</td>
                <td>{item.chargingTemperature}</td>
                <td>{item.tappingTemperature}</td>
                <td>{item.energyConsumption}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    
  );
}

export default App;
