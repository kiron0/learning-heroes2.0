import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Faq from './Components/Faq/Faq';
import Header from './Components/Header/Header';
import Heroes from './Components/Heroes/Heroes';
import Home from './Components/Home/Home';
import Instructors from './Components/Instructors/Instructors';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/instructors' element={<Instructors></Instructors>}></Route>
        <Route path='/courses' element={<Heroes></Heroes>}></Route>
        <Route path='/faq' element={<Faq></Faq>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
