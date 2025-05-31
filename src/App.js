import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="newspaper-layout">
      <header className="np-header">
        <h1>N.PAPER</h1>
        <p className="date">{new Date().toLocaleDateString()}</p>
      </header>
      <main className="np-content">
        <section className="np-column">
          <div className="np-tile weather">
            <h2>Weather</h2>
            <p>Sunny 24°C</p>
          </div>
          <div className="np-tile air">
            <h2>Air Quality</h2>
            <p>PM2.5: Good</p>
          </div>
          <div className="np-tile clock">
            <h2>{new Date().toLocaleTimeString()}</h2>
            <p>Current Time</p>
          </div>
        </section>
        <section className="np-column">
          <div className="np-tile news">
            <h2>Latest News</h2>
            <ul>
              <li>AI transforming digital newsrooms</li>
              <li>Global weather patterns shifting</li>
              <li>iPadOS 9 dashboard trends in 2025</li>
            </ul>
          </div>
          <div className="np-tile calendar">
            <h2>Calendar</h2>
            <p>Upcoming Meetings & Events</p>
          </div>
          <div className="np-tile notion">
            <h2>Notion Memo</h2>
            <p>Linked memo content...</p>
          </div>
        </section>
      </main>
      <footer className="np-footer">
        <p>© 2025 N.PAPER. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
