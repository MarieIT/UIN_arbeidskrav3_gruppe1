import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import { useEffect } from 'react';
import { fetchProfileCardInfo } from '../backend/sanity/services/memberService';
import ProfileCard from './components/ProfileCard';

function App() {
  const [groupmembers, setGroupmembers] = useState([])

  useEffect(() => {
    getProfileCardInfo()
  },[])

  const getProfileCardInfo = async () => {
    const data = await fetchProfileCardInfo()
    setGroupmembers(data)
  } 

  return (
    <Layout groupmembers={groupmembers}>
      <Routes>
        <Route path='/' element={<Home groupmembers={groupmembers} />} />
        <Route path='/:member' element={<ProfilePage/>} />
      </Routes>
    </Layout>
  );
};

export default App
