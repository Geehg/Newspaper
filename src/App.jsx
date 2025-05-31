import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="dashboard-grid">
      <div className="tile green">
        <h2>12</h2>
        <p>Hospitals In Cities</p>
      </div>
      <div className="tile white">
        <h2>42</h2>
        <p>Senior Doctors</p>
      </div>
      <div className="tile yellow">
        <h2>43/74</h2>
        <p>Bed Occupancy Rate</p>
        <span>60.4%^</span>
      </div>
      <div className="tile photo">
        <img src="/portrait.jpg" alt="Portrait" />
      </div>
      <div className="tile blue">
        <h1>74.6%</h1>
        <p>Bed Occupancy Rate</p>
        <span>60.4%^ - United States</span>
      </div>
      <div className="tile beige">
        <p>The Premium Healthcare Center</p>
      </div>
      <div className="tile red">
        <h2>^18.2%</h2>
        <p>Patient Growth</p>
      </div>
      <div className="tile chart">
        <h3>Data Analytics</h3>
        <img src="/chart-placeholder.png" alt="Chart" />
      </div>
    </div>
  );
}
