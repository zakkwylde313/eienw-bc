// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ParticipantDetailPage from './pages/ParticipantDetailPage';

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/participant/:id" element={<ParticipantDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
