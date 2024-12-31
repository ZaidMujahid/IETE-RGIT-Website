import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import VisionMission from './components/VisionMission';
import Team from './components/Team';
import Contact from './components/Contact';
import Events from './components/Events';
import Members from './components/Members';
import Magazine from './components/Magazine';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add Bootstrap

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Header />
        <Team />
        <Events/>
        <Members/>
        <Magazine/>
        <Routes>
          <Route path="/" element={<VisionMission />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="/magazine" element={<Magazine />} />
      </Routes>
      </div>
    </Router>
    // <div className="App">
    //   hii there
    // </div>
  );
}

export default App;
