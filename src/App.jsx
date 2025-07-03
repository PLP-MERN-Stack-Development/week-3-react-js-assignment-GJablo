// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import About from './pages/About';
import Posts from './pages/Posts';
// Import your components here
// import Button from './components/Button';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import TaskManager from '../src/components/TaskManager';

function App() {

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar component will go here */}
      <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/tasks" element={<Layout><Tasks /></Layout>} />
      <Route path="/posts" element={<Layout><Posts /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
    </Routes>
    </div>
  );
}

export default App;
