import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Members from './components/Members';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='members/:member' element={<Members />} />
      </Routes>
    </Layout>
  );
};

export default App
