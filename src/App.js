import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './Components/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';
import Info from './Components/Pages/Info';
import Account from './Components/Pages/Account';
import Calculator from './Components/Pages/Calculator';
import Swap from './Components/Pages/Swap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './Components/Pages/info.css'

const App = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  
  return (
    <div className="App">
      <Sidebar 
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <main style={{height: "100vh", overflowY: "scroll", width: "100%"}} className='pt-4 px-3'>
        <Dashboard 
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Routes>
          <Route exact path='/' element={<Info />} />
          <Route exact path='/account' element={<Account />} />
          <Route exact path='/calculator' element={<Calculator />} />
          <Route exact path='/swap' element={<Swap />} />
          <Route exact path='/wrap' element={<Swap />} />
          <Route exact path='/shop' element={<Swap />} />
          <Route exact path='/miner' element={<Swap />} />
          <Route exact path='/dance' element={<Swap />} />
          <Route exact path='/staking' element={<Swap />} />
          <Route exact path='/mint' element={<Swap />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
