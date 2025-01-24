import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componets/Login';
import Register from './componets/Register';
import Dashboard from './componets/Dashbord';
import AddItem from './componets/AddItem';
import Navbar from './componets/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-item" element={<AddItem />} />
      </Routes>
    </Router>
  );
};

export default App;
