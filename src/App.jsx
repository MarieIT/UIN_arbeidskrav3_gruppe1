import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';

function App() {
  const [groupmembers, setGroupmembers] = useState([])

  return (
    <Layout groupmembers={groupmembers}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:member' element={<ProfilePage/>} />
      </Routes>
    </Layout>
  );
};

export default App
