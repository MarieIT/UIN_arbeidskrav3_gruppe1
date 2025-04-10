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
import { fetchWorkLoadByMember } from '../backend/sanity/services/workLoad';
import { fetchWorkLoadByDate } from '../backend/sanity/services/workLoadByDate';

function App() {
  const [groupmembers, setGroupmembers] = useState([])
  const [workLoadByMember, setWorkLoadByMember] = useState([]);
  const [workLoadByDate, setWorkLoadByDate] = useState([]);

  useEffect(() => {
    getProfileCardInfo()
  },[])

  useEffect(() => {
    getWorkLoadByMember();
  }, []);

  useEffect(() => {
    getWorkLoadByDate();
  }, []);

  const getProfileCardInfo = async () => {
    const data = await fetchProfileCardInfo()
    setGroupmembers(data)
  } 

  const getWorkLoadByMember = async () => {
    const data = await fetchWorkLoadByMember()
    setWorkLoadByMember(data);
  }

  const getWorkLoadByDate = async () => {
    const data = await fetchWorkLoadByDate()
    setWorkLoadByDate(data);
  }

  console.log("Jobblogg etter når de ble lagt inn", workLoadByDate);

  console.log("Jobblogg etter medlemmer", workLoadByMember);

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
