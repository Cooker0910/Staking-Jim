import React, { Components } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const User = () => <div>User</div>

const App = () => {
  return (
    <div className="container-fluid">
      <div className='row'>
        <Sidebar />
        <main className='col pt-4'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/user' element={<User />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
